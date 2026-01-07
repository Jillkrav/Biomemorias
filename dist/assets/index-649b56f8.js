function vE(t, e) {
  for(var n=0;
  n<e.length;
  n++) {
    const i=e[n];
    if(typeof i!="string"&&!Array.isArray(i)) {
      for(const o in i)if(o!=="default"&&!(o in t)) {
        const r=Object.getOwnPropertyDescriptor(i, o);
        r&&Object.defineProperty(t, o, r.get?r: {
          enumerable:!0, get:()=>i[o]
        })
      }
    }
  }return Object.freeze(Object.defineProperty(t, Symbol.toStringTag,  {
    value:"Module"
  }))
}(function() {
  const e=document.createElement("link").relList;
  if(e&&e.supports&&e.supports("modulepreload"))return;
  for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);
  new MutationObserver(o=> {
    for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)
  }).observe(document,  {
    childList:!0, subtree:!0
  });
  function n(o) {
    const r= {
    };
    return o.integrity&&(r.integrity=o.integrity), o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy), o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin", r
  }function i(o) {
    if(o.ep)return;
    o.ep=!0;
    const r=n(o);
    fetch(o.href, r)
  }
})();
var yE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self: {
};
function Fi(t) {
  return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t, "default")?t.default:t
}var B0= {
  exports: {
  }
}, Nu= {
};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms,  Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E=Symbol.for("react.transitional.element"), bE=Symbol.for("react.fragment");
function k0(t, e, n) {
  var i=null;
  if(n!==void 0&&(i=""+n), e.key!==void 0&&(i=""+e.key), "key"in e) {
    n= {
    };
    for(var o in e)o!=="key"&&(n[o]=e[o])
  }else n=e;
  return e=n.ref,  {
    $$typeof:_E, type:t, key:i, ref:e!==void 0?e:null, props:n
  }
}Nu.Fragment=bE;
Nu.jsx=k0;
Nu.jsxs=k0;
B0.exports=Nu;
var w=B0.exports, V0= {
  exports: {
  }
}, tt= {
};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms,  Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=Symbol.for("react.transitional.element"), xE=Symbol.for("react.portal"), TE=Symbol.for("react.fragment"), SE=Symbol.for("react.strict_mode"), wE=Symbol.for("react.profiler"), EE=Symbol.for("react.consumer"), CE=Symbol.for("react.context"), AE=Symbol.for("react.forward_ref"), ME=Symbol.for("react.suspense"), LE=Symbol.for("react.memo"), U0=Symbol.for("react.lazy"), RE=Symbol.for("react.activity"), Cg=Symbol.iterator;
function OE(t) {
  return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"], typeof t=="function"?t:null)
}var H0= {
  isMounted:function() {
    return!1
  }, enqueueForceUpdate:function() {
  }, enqueueReplaceState:function() {
  }, enqueueSetState:function() {
  }
}, Z0=Object.assign, q0= {
};
function Po(t, e, n) {
  this.props=t, this.context=e, this.refs=q0, this.updater=n||H0
}Po.prototype.isReactComponent= {
};
Po.prototype.setState=function(t, e) {
  if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, e, "setState")
};
Po.prototype.forceUpdate=function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};
function G0() {
}G0.prototype=Po.prototype;
function _h(t, e, n) {
  this.props=t, this.context=e, this.refs=q0, this.updater=n||H0
}var bh=_h.prototype=new G0;
bh.constructor=_h;
Z0(bh, Po.prototype);
bh.isPureReactComponent=!0;
var Ag=Array.isArray;
function Ff() {
}var Ot= {
  H:null, A:null, T:null, S:null
}, I0=Object.prototype.hasOwnProperty;
function xh(t, e, n) {
  var i=n.ref;
  return {
    $$typeof:yh, type:t, key:e, ref:i!==void 0?i:null, props:n
  }
}function NE(t, e) {
  return xh(t.type, e, t.props)
}function Th(t) {
  return typeof t=="object"&&t!==null&&t.$$typeof===yh
}function zE(t) {
  var e= {
    "=":"=0", ":":"=2"
  };
  return"$"+t.replace(/[=:]/g, function(n) {
    return e[n]
  })
}var Mg=/\/+/g;
function qc(t, e) {
  return typeof t=="object"&&t!==null&&t.key!=null?zE(""+t.key):e.toString(36)
}function DE(t) {
  switch(t.status) {
    case"fulfilled":return t.value;
    case"rejected":throw t.reason;
    default:switch(typeof t.status=="string"?t.then(Ff, Ff):(t.status="pending", t.then(function(e) {
      t.status==="pending"&&(t.status="fulfilled", t.value=e)
    }, function(e) {
      t.status==="pending"&&(t.status="rejected", t.reason=e)
    })), t.status) {
      case"fulfilled":return t.value;
      case"rejected":throw t.reason
    }
  }throw t
}function qa(t, e, n, i, o) {
  var r=typeof t;
  (r==="undefined"||r==="boolean")&&(t=null);
  var l=!1;
  if(t===null)l=!0;
  else switch(r) {
    case"bigint":case"string":case"number":l=!0;
    break;
    case"object":switch(t.$$typeof) {
      case yh:case xE:l=!0;
      break;
      case U0:return l=t._init, qa(l(t._payload), e, n, i, o)
    }
  }if(l)return o=o(t), l=i===""?"."+qc(t, 0):i, Ag(o)?(n="", l!=null&&(n=l.replace(Mg, "$&/")+"/"), qa(o, e, n, "", function(d) {
    return d
  })):o!=null&&(Th(o)&&(o=NE(o, n+(o.key==null||t&&t.key===o.key?"":(""+o.key).replace(Mg, "$&/")+"/")+l)), e.push(o)), 1;
  l=0;
  var u=i===""?".":i+":";
  if(Ag(t))for(var f=0;
  f<t.length;
  f++)i=t[f], r=u+qc(i, f), l+=qa(i, e, n, r, o);
  else if(f=OE(t), typeof f=="function")for(t=f.call(t), f=0;
  !(i=t.next()).done;
  )i=i.value, r=u+qc(i, f++), l+=qa(i, e, n, r, o);
  else if(r==="object") {
    if(typeof t.then=="function")return qa(DE(t), e, n, i, o);
    throw e=String(t), Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")
  }return l
}function tl(t, e, n) {
  if(t==null)return t;
  var i=[], o=0;
  return qa(t, i, "", "", function(r) {
    return e.call(n, r, o++)
  }), i
}function PE(t) {
  if(t._status===-1) {
    var e=t._result;
    e=e(), e.then(function(n) {
      (t._status===0||t._status===-1)&&(t._status=1, t._result=n)
    }, function(n) {
      (t._status===0||t._status===-1)&&(t._status=2, t._result=n)
    }), t._status===-1&&(t._status=0, t._result=e)
  }if(t._status===1)return t._result.default;
  throw t._result
}var Lg=typeof reportError=="function"?reportError:function(t) {
  if(typeof window=="object"&&typeof window.ErrorEvent=="function") {
    var e=new window.ErrorEvent("error",  {
      bubbles:!0, cancelable:!0, message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t), error:t
    });
    if(!window.dispatchEvent(e))return
  }else if(typeof process=="object"&&typeof process.emit=="function") {
    process.emit("uncaughtException", t);
    return
  }console.error(t)
}, jE= {
  map:tl, forEach:function(t, e, n) {
    tl(t, function() {
      e.apply(this, arguments)
    }, n)
  }, count:function(t) {
    var e=0;
    return tl(t, function() {
      e++
    }), e
  }, toArray:function(t) {
    return tl(t, function(e) {
      return e
    })||[]
  }, only:function(t) {
    if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");
    return t
  }
};
tt.Activity=RE;
tt.Children=jE;
tt.Component=Po;
tt.Fragment=TE;
tt.Profiler=wE;
tt.PureComponent=_h;
tt.StrictMode=SE;
tt.Suspense=ME;
tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ot;
tt.__COMPILER_RUNTIME= {
  __proto__:null, c:function(t) {
    return Ot.H.useMemoCache(t)
  }
};
tt.cache=function(t) {
  return function() {
    return t.apply(null, arguments)
  }
};
tt.cacheSignal=function() {
  return null
};
tt.cloneElement=function(t, e, n) {
  if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");
  var i=Z0( {
  }, t.props), o=t.key;
  if(e!=null)for(r in e.key!==void 0&&(o=""+e.key), e)!I0.call(e, r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);
  var r=arguments.length-2;
  if(r===1)i.children=n;
  else if(1<r) {
    for(var l=Array(r), u=0;
    u<r;
    u++)l[u]=arguments[u+2];
    i.children=l
  }return xh(t.type, o, i)
};
tt.createContext=function(t) {
  return t= {
    $$typeof:CE, _currentValue:t, _currentValue2:t, _threadCount:0, Provider:null, Consumer:null
  }, t.Provider=t, t.Consumer= {
    $$typeof:EE, _context:t
  }, t
};
tt.createElement=function(t, e, n) {
  var i, o= {
  }, r=null;
  if(e!=null)for(i in e.key!==void 0&&(r=""+e.key), e)I0.call(e, i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(o[i]=e[i]);
  var l=arguments.length-2;
  if(l===1)o.children=n;
  else if(1<l) {
    for(var u=Array(l), f=0;
    f<l;
    f++)u[f]=arguments[f+2];
    o.children=u
  }if(t&&t.defaultProps)for(i in l=t.defaultProps, l)o[i]===void 0&&(o[i]=l[i]);
  return xh(t, r, o)
};
tt.createRef=function() {
  return {
    current:null
  }
};
tt.forwardRef=function(t) {
  return {
    $$typeof:AE, render:t
  }
};
tt.isValidElement=Th;
tt.lazy=function(t) {
  return {
    $$typeof:U0, _payload: {
      _status:-1, _result:t
    }, _init:PE
  }
};
tt.memo=function(t, e) {
  return {
    $$typeof:LE, type:t, compare:e===void 0?null:e
  }
};
tt.startTransition=function(t) {
  var e=Ot.T, n= {
  };
  Ot.T=n;
  try {
    var i=t(), o=Ot.S;
    o!==null&&o(n, i), typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ff, Lg)
  }catch(r) {
    Lg(r)
  }finally {
    e!==null&&n.types!==null&&(e.types=n.types), Ot.T=e
  }
};
tt.unstable_useCacheRefresh=function() {
  return Ot.H.useCacheRefresh()
};
tt.use=function(t) {
  return Ot.H.use(t)
};
tt.useActionState=function(t, e, n) {
  return Ot.H.useActionState(t, e, n)
};
tt.useCallback=function(t, e) {
  return Ot.H.useCallback(t, e)
};
tt.useContext=function(t) {
  return Ot.H.useContext(t)
};
tt.useDebugValue=function() {
};
tt.useDeferredValue=function(t, e) {
  return Ot.H.useDeferredValue(t, e)
};
tt.useEffect=function(t, e) {
  return Ot.H.useEffect(t, e)
};
tt.useEffectEvent=function(t) {
  return Ot.H.useEffectEvent(t)
};
tt.useId=function() {
  return Ot.H.useId()
};
tt.useImperativeHandle=function(t, e, n) {
  return Ot.H.useImperativeHandle(t, e, n)
};
tt.useInsertionEffect=function(t, e) {
  return Ot.H.useInsertionEffect(t, e)
};
tt.useLayoutEffect=function(t, e) {
  return Ot.H.useLayoutEffect(t, e)
};
tt.useMemo=function(t, e) {
  return Ot.H.useMemo(t, e)
};
tt.useOptimistic=function(t, e) {
  return Ot.H.useOptimistic(t, e)
};
tt.useReducer=function(t, e, n) {
  return Ot.H.useReducer(t, e, n)
};
tt.useRef=function(t) {
  return Ot.H.useRef(t)
};
tt.useState=function(t) {
  return Ot.H.useState(t)
};
tt.useSyncExternalStore=function(t, e, n) {
  return Ot.H.useSyncExternalStore(t, e, n)
};
tt.useTransition=function() {
  return Ot.H.useTransition()
};
tt.version="19.2.0";
V0.exports=tt;
var T=V0.exports;
const Bt=Fi(T), Y0=vE( {
  __proto__:null, default:Bt
}, [T]);
var F0= {
  exports: {
  }
}, zu= {
}, X0= {
  exports: {
  }
}, K0= {
};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms,  Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t) {
  function e(V, F) {
    var U=V.length;
    V.push(F);
    t:for(;
    0<U;
    ) {
      var rt=U-1>>>1, G=V[rt];
      if(0<o(G, F))V[rt]=F, V[U]=G, U=rt;
      else break t
    }
  }function n(V) {
    return V.length===0?null:V[0]
  }function i(V) {
    if(V.length===0)return null;
    var F=V[0], U=V.pop();
    if(U!==F) {
      V[0]=U;
      t:for(var rt=0, G=V.length, at=G>>>1;
      rt<at;
      ) {
        var kt=2*(rt+1)-1, Vt=V[kt], vt=kt+1, pt=V[vt];
        if(0>o(Vt, U))vt<G&&0>o(pt, Vt)?(V[rt]=pt, V[vt]=U, rt=vt):(V[rt]=Vt, V[kt]=U, rt=kt);
        else if(vt<G&&0>o(pt, U))V[rt]=pt, V[vt]=U, rt=vt;
        else break t
      }
    }return F
  }function o(V, F) {
    var U=V.sortIndex-F.sortIndex;
    return U!==0?U:V.id-F.id
  }if(t.unstable_now=void 0, typeof performance=="object"&&typeof performance.now=="function") {
    var r=performance;
    t.unstable_now=function() {
      return r.now()
    }
  }else {
    var l=Date, u=l.now();
    t.unstable_now=function() {
      return l.now()-u
    }
  }var f=[], d=[], p=1, m=null, g=3, y=!1, C=!1, E=!1, A=!1, _=typeof setTimeout=="function"?setTimeout:null, b=typeof clearTimeout=="function"?clearTimeout:null, S=typeof setImmediate<"u"?setImmediate:null;
  function M(V) {
    for(var F=n(d);
    F!==null;
    ) {
      if(F.callback===null)i(d);
      else if(F.startTime<=V)i(d), F.sortIndex=F.expirationTime, e(f, F);
      else break;
      F=n(d)
    }
  }function O(V) {
    if(E=!1, M(V), !C)if(n(f)!==null)C=!0, P||(P=!0, q());
    else {
      var F=n(d);
      F!==null&&ft(O, F.startTime-V)
    }
  }var P=!1, D=-1, B=5, Z=-1;
  function I() {
    return A?!0:!(t.unstable_now()-Z<B)
  }function H() {
    if(A=!1, P) {
      var V=t.unstable_now();
      Z=V;
      var F=!0;
      try {
        t: {
          C=!1, E&&(E=!1, b(D), D=-1), y=!0;
          var U=g;
          try {
            e: {
              for(M(V), m=n(f);
              m!==null&&!(m.expirationTime>V&&I());
              ) {
                var rt=m.callback;
                if(typeof rt=="function") {
                  m.callback=null, g=m.priorityLevel;
                  var G=rt(m.expirationTime<=V);
                  if(V=t.unstable_now(), typeof G=="function") {
                    m.callback=G, M(V), F=!0;
                    break e
                  }m===n(f)&&i(f), M(V)
                }else i(f);
                m=n(f)
              }if(m!==null)F=!0;
              else {
                var at=n(d);
                at!==null&&ft(O, at.startTime-V), F=!1
              }
            }break t
          }finally {
            m=null, g=U, y=!1
          }F=void 0
        }
      }finally {
        F?q():P=!1
      }
    }
  }var q;
  if(typeof S=="function")q=function() {
    S(H)
  };
  else if(typeof MessageChannel<"u") {
    var bt=new MessageChannel, X=bt.port2;
    bt.port1.onmessage=H, q=function() {
      X.postMessage(null)
    }
  }else q=function() {
    _(H, 0)
  };
  function ft(V, F) {
    D=_(function() {
      V(t.unstable_now())
    }, F)
  }t.unstable_IdlePriority=5, t.unstable_ImmediatePriority=1, t.unstable_LowPriority=4, t.unstable_NormalPriority=3, t.unstable_Profiling=null, t.unstable_UserBlockingPriority=2, t.unstable_cancelCallback=function(V) {
    V.callback=null
  }, t.unstable_forceFrameRate=function(V) {
    0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5
  }, t.unstable_getCurrentPriorityLevel=function() {
    return g
  }, t.unstable_next=function(V) {
    switch(g) {
      case 1:case 2:case 3:var F=3;
      break;
      default:F=g
    }var U=g;
    g=F;
    try {
      return V()
    }finally {
      g=U
    }
  }, t.unstable_requestPaint=function() {
    A=!0
  }, t.unstable_runWithPriority=function(V, F) {
    switch(V) {
      case 1:case 2:case 3:case 4:case 5:break;
      default:V=3
    }var U=g;
    g=V;
    try {
      return F()
    }finally {
      g=U
    }
  }, t.unstable_scheduleCallback=function(V, F, U) {
    var rt=t.unstable_now();
    switch(typeof U=="object"&&U!==null?(U=U.delay, U=typeof U=="number"&&0<U?rt+U:rt):U=rt, V) {
      case 1:var G=-1;
      break;
      case 2:G=250;
      break;
      case 5:G=1073741823;
      break;
      case 4:G=1e4;
      break;
      default:G=5e3
    }return G=U+G, V= {
      id:p++, callback:F, priorityLevel:V, startTime:U, expirationTime:G, sortIndex:-1
    }, U>rt?(V.sortIndex=U, e(d, V), n(f)===null&&V===n(d)&&(E?(b(D), D=-1):E=!0, ft(O, U-rt))):(V.sortIndex=G, e(f, V), C||y||(C=!0, P||(P=!0, q()))), V
  }, t.unstable_shouldYield=I, t.unstable_wrapCallback=function(V) {
    var F=g;
    return function() {
      var U=g;
      g=F;
      try {
        return V.apply(this, arguments)
      }finally {
        g=U
      }
    }
  }
})(K0);
X0.exports=K0;
var BE=X0.exports, Q0= {
  exports: {
  }
}, Se= {
};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms,  Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=T;
function $0(t) {
  var e="https://react.dev/errors/"+t;
  if(1<arguments.length) {
    e+="?args[]="+encodeURIComponent(arguments[1]);
    for(var n=2;
    n<arguments.length;
    n++)e+="&args[]="+encodeURIComponent(arguments[n])
  }return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}function gi() {
}var Te= {
  d: {
    f:gi, r:function() {
      throw Error($0(522))
    }, D:gi, C:gi, L:gi, m:gi, X:gi, S:gi, M:gi
  }, p:0, findDOMNode:null
}, VE=Symbol.for("react.portal");
function UE(t, e, n) {
  var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
  return {
    $$typeof:VE, key:i==null?null:""+i, children:t, containerInfo:e, implementation:n
  }
}var Lr=kE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Du(t, e) {
  if(t==="font")return"";
  if(typeof e=="string")return e==="use-credentials"?e:""
}Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;
Se.createPortal=function(t, e) {
  var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
  if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error($0(299));
  return UE(t, e, null, n)
};
Se.flushSync=function(t) {
  var e=Lr.T, n=Te.p;
  try {
    if(Lr.T=null, Te.p=2, t)return t()
  }finally {
    Lr.T=e, Te.p=n, Te.d.f()
  }
};
Se.preconnect=function(t, e) {
  typeof t=="string"&&(e?(e=e.crossOrigin, e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null, Te.d.C(t, e))
};
Se.prefetchDNS=function(t) {
  typeof t=="string"&&Te.d.D(t)
};
Se.preinit=function(t, e) {
  if(typeof t=="string"&&e&&typeof e.as=="string") {
    var n=e.as, i=Du(n, e.crossOrigin), o=typeof e.integrity=="string"?e.integrity:void 0, r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;
    n==="style"?Te.d.S(t, typeof e.precedence=="string"?e.precedence:void 0,  {
      crossOrigin:i, integrity:o, fetchPriority:r
    }):n==="script"&&Te.d.X(t,  {
      crossOrigin:i, integrity:o, fetchPriority:r, nonce:typeof e.nonce=="string"?e.nonce:void 0
    })
  }
};
Se.preinitModule=function(t, e) {
  if(typeof t=="string")if(typeof e=="object"&&e!==null) {
    if(e.as==null||e.as==="script") {
      var n=Du(e.as, e.crossOrigin);
      Te.d.M(t,  {
        crossOrigin:n, integrity:typeof e.integrity=="string"?e.integrity:void 0, nonce:typeof e.nonce=="string"?e.nonce:void 0
      })
    }
  }else e==null&&Te.d.M(t)
};
Se.preload=function(t, e) {
  if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string") {
    var n=e.as, i=Du(n, e.crossOrigin);
    Te.d.L(t, n,  {
      crossOrigin:i, integrity:typeof e.integrity=="string"?e.integrity:void 0, nonce:typeof e.nonce=="string"?e.nonce:void 0, type:typeof e.type=="string"?e.type:void 0, fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0, referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0, imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0, imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0, media:typeof e.media=="string"?e.media:void 0
    })
  }
};
Se.preloadModule=function(t, e) {
  if(typeof t=="string")if(e) {
    var n=Du(e.as, e.crossOrigin);
    Te.d.m(t,  {
      as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0, crossOrigin:n, integrity:typeof e.integrity=="string"?e.integrity:void 0
    })
  }else Te.d.m(t)
};
Se.requestFormReset=function(t) {
  Te.d.r(t)
};
Se.unstable_batchedUpdates=function(t, e) {
  return t(e)
};
Se.useFormState=function(t, e, n) {
  return Lr.H.useFormState(t, e, n)
};
Se.useFormStatus=function() {
  return Lr.H.useHostTransitionStatus()
};
Se.version="19.2.0";
function W0() {
  if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)
  }catch(t) {
    console.error(t)
  }
}W0(), Q0.exports=Se;
var Pu=Q0.exports;
const HE=Fi(Pu);
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms,  Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=BE, J0=T, ZE=Pu;
function j(t) {
  var e="https://react.dev/errors/"+t;
  if(1<arguments.length) {
    e+="?args[]="+encodeURIComponent(arguments[1]);
    for(var n=2;
    n<arguments.length;
    n++)e+="&args[]="+encodeURIComponent(arguments[n])
  }return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}function t_(t) {
  return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)
}function ps(t) {
  var e=t, n=t;
  if(t.alternate)for(;
  e.return;
  )e=e.return;
  else {
    t=e;
    do e=t, e.flags&4098&&(n=e.return), t=e.return;
    while(t)
  }return e.tag===3?n:null
}function e_(t) {
  if(t.tag===13) {
    var e=t.memoizedState;
    if(e===null&&(t=t.alternate, t!==null&&(e=t.memoizedState)), e!==null)return e.dehydrated
  }return null
}function n_(t) {
  if(t.tag===31) {
    var e=t.memoizedState;
    if(e===null&&(t=t.alternate, t!==null&&(e=t.memoizedState)), e!==null)return e.dehydrated
  }return null
}function Rg(t) {
  if(ps(t)!==t)throw Error(j(188))
}function qE(t) {
  var e=t.alternate;
  if(!e) {
    if(e=ps(t), e===null)throw Error(j(188));
    return e!==t?null:t
  }for(var n=t, i=e;
  ) {
    var o=n.return;
    if(o===null)break;
    var r=o.alternate;
    if(r===null) {
      if(i=o.return, i!==null) {
        n=i;
        continue
      }break
    }if(o.child===r.child) {
      for(r=o.child;
      r;
      ) {
        if(r===n)return Rg(o), t;
        if(r===i)return Rg(o), e;
        r=r.sibling
      }throw Error(j(188))
    }if(n.return!==i.return)n=o, i=r;
    else {
      for(var l=!1, u=o.child;
      u;
      ) {
        if(u===n) {
          l=!0, n=o, i=r;
          break
        }if(u===i) {
          l=!0, i=o, n=r;
          break
        }u=u.sibling
      }if(!l) {
        for(u=r.child;
        u;
        ) {
          if(u===n) {
            l=!0, n=r, i=o;
            break
          }if(u===i) {
            l=!0, i=r, n=o;
            break
          }u=u.sibling
        }if(!l)throw Error(j(189))
      }
    }if(n.alternate!==i)throw Error(j(190))
  }if(n.tag!==3)throw Error(j(188));
  return n.stateNode.current===n?t:e
}function i_(t) {
  var e=t.tag;
  if(e===5||e===26||e===27||e===6)return t;
  for(t=t.child;
  t!==null;
  ) {
    if(e=i_(t), e!==null)return e;
    t=t.sibling
  }return null
}var zt=Object.assign, GE=Symbol.for("react.element"), el=Symbol.for("react.transitional.element"), xr=Symbol.for("react.portal"), Fa=Symbol.for("react.fragment"), a_=Symbol.for("react.strict_mode"), Xf=Symbol.for("react.profiler"), o_=Symbol.for("react.consumer"), Xn=Symbol.for("react.context"), Sh=Symbol.for("react.forward_ref"), Kf=Symbol.for("react.suspense"), Qf=Symbol.for("react.suspense_list"), wh=Symbol.for("react.memo"), bi=Symbol.for("react.lazy"), $f=Symbol.for("react.activity"), IE=Symbol.for("react.memo_cache_sentinel"), Og=Symbol.iterator;
function lr(t) {
  return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"], typeof t=="function"?t:null)
}var YE=Symbol.for("react.client.reference");
function Wf(t) {
  if(t==null)return null;
  if(typeof t=="function")return t.$$typeof===YE?null:t.displayName||t.name||null;
  if(typeof t=="string")return t;
  switch(t) {
    case Fa:return"Fragment";
    case Xf:return"Profiler";
    case a_:return"StrictMode";
    case Kf:return"Suspense";
    case Qf:return"SuspenseList";
    case $f:return"Activity"
  }if(typeof t=="object")switch(t.$$typeof) {
    case xr:return"Portal";
    case Xn:return t.displayName||"Context";
    case o_:return(t._context.displayName||"Context")+".Consumer";
    case Sh:var e=t.render;
    return t=t.displayName, t||(t=e.displayName||e.name||"", t=t!==""?"ForwardRef("+t+")":"ForwardRef"), t;
    case wh:return e=t.displayName||null, e!==null?e:Wf(t.type)||"Memo";
    case bi:e=t._payload, t=t._init;
    try {
      return Wf(t(e))
    }catch {
    }
  }return null
}var Tr=Array.isArray, W=J0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _t=ZE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fa= {
  pending:!1, data:null, method:null, action:null
}, Jf=[], Xa=-1;
function On(t) {
  return {
    current:t
  }
}function le(t) {
  0>Xa||(t.current=Jf[Xa], Jf[Xa]=null, Xa--)
}function At(t, e) {
  Xa++, Jf[Xa]=t.current, t.current=e
}var An=On(null), Xr=On(null), Oi=On(null), Yl=On(null);
function Fl(t, e) {
  switch(At(Oi, e), At(Xr, t), At(An, null), e.nodeType) {
    case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Bv(t):0;
    break;
    default:if(t=e.tagName, e=e.namespaceURI)e=Bv(e), t=Ex(e, t);
    else switch(t) {
      case"svg":t=1;
      break;
      case"math":t=2;
      break;
      default:t=0
    }
  }le(An), At(An, t)
}function bo() {
  le(An), le(Xr), le(Oi)
}function td(t) {
  t.memoizedState!==null&&At(Yl, t);
  var e=An.current, n=Ex(e, t.type);
  e!==n&&(At(Xr, t), At(An, n))
}function Xl(t) {
  Xr.current===t&&(le(An), le(Xr)), Yl.current===t&&(le(Yl), os._currentValue=fa)
}var Gc, Ng;
function aa(t) {
  if(Gc===void 0)try {
    throw Error()
  }catch(n) {
    var e=n.stack.trim().match(/\n( *(at )?)/);
    Gc=e&&e[1]||"", Ng=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""
  }return`
`+Gc+t+Ng
}var Ic=!1;
function Yc(t, e) {
  if(!t||Ic)return"";
  Ic=!0;
  var n=Error.prepareStackTrace;
  Error.prepareStackTrace=void 0;
  try {
    var i= {
      DetermineComponentFrameRoot:function() {
        try {
          if(e) {
            var m=function() {
              throw Error()
            };
            if(Object.defineProperty(m.prototype, "props",  {
              set:function() {
                throw Error()
              }
            }), typeof Reflect=="object"&&Reflect.construct) {
              try {
                Reflect.construct(m, [])
              }catch(y) {
                var g=y
              }Reflect.construct(t, [], m)
            }else {
              try {
                m.call()
              }catch(y) {
                g=y
              }t.call(m.prototype)
            }
          }else {
            try {
              throw Error()
            }catch(y) {
              g=y
            }(m=t())&&typeof m.catch=="function"&&m.catch(function() {
            })
          }
        }catch(y) {
          if(y&&g&&typeof y.stack=="string")return[y.stack, g.stack]
        }return[null, null]
      }
    };
    i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
    var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
    o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot, "name",  {
      value:"DetermineComponentFrameRoot"
    });
    var r=i.DetermineComponentFrameRoot(), l=r[0], u=r[1];
    if(l&&u) {
      var f=l.split(`
`), d=u.split(`
`);
      for(o=i=0;
      i<f.length&&!f[i].includes("DetermineComponentFrameRoot");
      )i++;
      for(;
      o<d.length&&!d[o].includes("DetermineComponentFrameRoot");
      )o++;
      if(i===f.length||o===d.length)for(i=f.length-1, o=d.length-1;
      1<=i&&0<=o&&f[i]!==d[o];
      )o--;
      for(;
      1<=i&&0<=o;
      i--, o--)if(f[i]!==d[o]) {
        if(i!==1||o!==1)do if(i--, o--, 0>o||f[i]!==d[o]) {
          var p=`
`+f[i].replace(" at new ", " at ");
          return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>", t.displayName)), p
        }while(1<=i&&0<=o);
        break
      }
    }
  }finally {
    Ic=!1, Error.prepareStackTrace=n
  }return(n=t?t.displayName||t.name:"")?aa(n):""
}function FE(t, e) {
  switch(t.tag) {
    case 26:case 27:case 5:return aa(t.type);
    case 16:return aa("Lazy");
    case 13:return t.child!==e&&e!==null?aa("Suspense Fallback"):aa("Suspense");
    case 19:return aa("SuspenseList");
    case 0:case 15:return Yc(t.type, !1);
    case 11:return Yc(t.type.render, !1);
    case 1:return Yc(t.type, !0);
    case 31:return aa("Activity");
    default:return""
  }
}function zg(t) {
  try {
    var e="", n=null;
    do e+=FE(t, n), n=t, t=t.return;
    while(t);
    return e
  }catch(i) {
    return`
Error generating stack: `+i.message+`
`+i.stack
  }
}var ed=Object.prototype.hasOwnProperty, Eh=ae.unstable_scheduleCallback, Fc=ae.unstable_cancelCallback, XE=ae.unstable_shouldYield, KE=ae.unstable_requestPaint, ke=ae.unstable_now, QE=ae.unstable_getCurrentPriorityLevel, r_=ae.unstable_ImmediatePriority, s_=ae.unstable_UserBlockingPriority, Kl=ae.unstable_NormalPriority, $E=ae.unstable_LowPriority, l_=ae.unstable_IdlePriority, WE=ae.log, JE=ae.unstable_setDisableYieldValue, gs=null, Ve=null;
function Ci(t) {
  if(typeof WE=="function"&&JE(t), Ve&&typeof Ve.setStrictMode=="function")try {
    Ve.setStrictMode(gs, t)
  }catch {
  }
}var Ue=Math.clz32?Math.clz32:nC, tC=Math.log, eC=Math.LN2;
function nC(t) {
  return t>>>=0, t===0?32:31-(tC(t)/eC|0)|0
}var nl=256, il=262144, al=4194304;
function oa(t) {
  var e=t&42;
  if(e!==0)return e;
  switch(t&-t) {
    case 1:return 1;
    case 2:return 2;
    case 4:return 4;
    case 8:return 8;
    case 16:return 16;
    case 32:return 32;
    case 64:return 64;
    case 128:return 128;
    case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;
    case 262144:case 524288:case 1048576:case 2097152:return t&3932160;
    case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;
    case 67108864:return 67108864;
    case 134217728:return 134217728;
    case 268435456:return 268435456;
    case 536870912:return 536870912;
    case 1073741824:return 0;
    default:return t
  }
}function ju(t, e, n) {
  var i=t.pendingLanes;
  if(i===0)return 0;
  var o=0, r=t.suspendedLanes, l=t.pingedLanes;
  t=t.warmLanes;
  var u=i&134217727;
  return u!==0?(i=u&~r, i!==0?o=oa(i):(l&=u, l!==0?o=oa(l):n||(n=u&~t, n!==0&&(o=oa(n))))):(u=i&~r, u!==0?o=oa(u):l!==0?o=oa(l):n||(n=i&~t, n!==0&&(o=oa(n)))), o===0?0:e!==0&&e!==o&&!(e&r)&&(r=o&-o, n=e&-e, r>=n||r===32&&(n&4194048)!==0)?e:o
}function vs(t, e) {
  return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0
}function iC(t, e) {
  switch(t) {
    case 1:case 2:case 4:case 8:case 64:return e+250;
    case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;
    case 4194304:case 8388608:case 16777216:case 33554432:return-1;
    case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
    default:return-1
  }
}function u_() {
  var t=al;
  return al<<=1, !(al&62914560)&&(al=4194304), t
}function Xc(t) {
  for(var e=[], n=0;
  31>n;
  n++)e.push(t);
  return e
}function ys(t, e) {
  t.pendingLanes|=e, e!==268435456&&(t.suspendedLanes=0, t.pingedLanes=0, t.warmLanes=0)
}function aC(t, e, n, i, o, r) {
  var l=t.pendingLanes;
  t.pendingLanes=n, t.suspendedLanes=0, t.pingedLanes=0, t.warmLanes=0, t.expiredLanes&=n, t.entangledLanes&=n, t.errorRecoveryDisabledLanes&=n, t.shellSuspendCounter=0;
  var u=t.entanglements, f=t.expirationTimes, d=t.hiddenUpdates;
  for(n=l&~n;
  0<n;
  ) {
    var p=31-Ue(n), m=1<<p;
    u[p]=0, f[p]=-1;
    var g=d[p];
    if(g!==null)for(d[p]=null, p=0;
    p<g.length;
    p++) {
      var y=g[p];
      y!==null&&(y.lane&=-536870913)
    }n&=~m
  }i!==0&&c_(t, i, 0), r!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=r&~(l&~e))
}function c_(t, e, n) {
  t.pendingLanes|=e, t.suspendedLanes&=~e;
  var i=31-Ue(e);
  t.entangledLanes|=e, t.entanglements[i]=t.entanglements[i]|1073741824|n&261930
}function f_(t, e) {
  var n=t.entangledLanes|=e;
  for(t=t.entanglements;
  n;
  ) {
    var i=31-Ue(n), o=1<<i;
    o&e|t[i]&e&&(t[i]|=e), n&=~o
  }
}function d_(t, e) {
  var n=e&-e;
  return n=n&42?1:Ch(n), n&(t.suspendedLanes|e)?0:n
}function Ch(t) {
  switch(t) {
    case 2:t=1;
    break;
    case 8:t=4;
    break;
    case 32:t=16;
    break;
    case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;
    break;
    case 268435456:t=134217728;
    break;
    default:t=0
  }return t
}function Ah(t) {
  return t&=-t, 2<t?8<t?t&134217727?32:268435456:8:2
}function h_() {
  var t=_t.p;
  return t!==0?t:(t=window.event, t===void 0?32:jx(t.type))
}function Dg(t, e) {
  var n=_t.p;
  try {
    return _t.p=t, e()
  }finally {
    _t.p=n
  }
}var Xi=Math.random().toString(36).slice(2), de="__reactFiber$"+Xi, Oe="__reactProps$"+Xi, jo="__reactContainer$"+Xi, nd="__reactEvents$"+Xi, oC="__reactListeners$"+Xi, rC="__reactHandles$"+Xi, Pg="__reactResources$"+Xi, _s="__reactMarker$"+Xi;
function Mh(t) {
  delete t[de], delete t[Oe], delete t[nd], delete t[oC], delete t[rC]
}function Ka(t) {
  var e=t[de];
  if(e)return e;
  for(var n=t.parentNode;
  n;
  ) {
    if(e=n[jo]||n[de]) {
      if(n=e.alternate, e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);
      t!==null;
      ) {
        if(n=t[de])return n;
        t=Zv(t)
      }return e
    }t=n, n=t.parentNode
  }return null
}function Bo(t) {
  if(t=t[de]||t[jo]) {
    var e=t.tag;
    if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t
  }return null
}function Sr(t) {
  var e=t.tag;
  if(e===5||e===26||e===27||e===6)return t.stateNode;
  throw Error(j(33))
}function co(t) {
  var e=t[Pg];
  return e||(e=t[Pg]= {
    hoistableStyles:new Map, hoistableScripts:new Map
  }), e
}function se(t) {
  t[_s]=!0
}var m_=new Set, p_= {
};
function wa(t, e) {
  xo(t, e), xo(t+"Capture", e)
}function xo(t, e) {
  for(p_[t]=e, t=0;
  t<e.length;
  t++)m_.add(e[t])
}var sC=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), jg= {
}, Bg= {
};
function lC(t) {
  return ed.call(Bg, t)?!0:ed.call(jg, t)?!1:sC.test(t)?Bg[t]=!0:(jg[t]=!0, !1)
}function wl(t, e, n) {
  if(lC(e))if(n===null)t.removeAttribute(e);
  else {
    switch(typeof n) {
      case"undefined":case"function":case"symbol":t.removeAttribute(e);
      return;
      case"boolean":var i=e.toLowerCase().slice(0, 5);
      if(i!=="data-"&&i!=="aria-") {
        t.removeAttribute(e);
        return
      }
    }t.setAttribute(e, ""+n)
  }
}function ol(t, e, n) {
  if(n===null)t.removeAttribute(e);
  else {
    switch(typeof n) {
      case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);
      return
    }t.setAttribute(e, ""+n)
  }
}function kn(t, e, n, i) {
  if(i===null)t.removeAttribute(n);
  else {
    switch(typeof i) {
      case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);
      return
    }t.setAttributeNS(e, n, ""+i)
  }
}function Je(t) {
  switch(typeof t) {
    case"bigint":case"boolean":case"number":case"string":case"undefined":return t;
    case"object":return t;
    default:return""
  }
}function g_(t) {
  var e=t.type;
  return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")
}function uC(t, e, n) {
  var i=Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
  if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function") {
    var o=i.get, r=i.set;
    return Object.defineProperty(t, e,  {
      configurable:!0, get:function() {
        return o.call(this)
      }, set:function(l) {
        n=""+l, r.call(this, l)
      }
    }), Object.defineProperty(t, e,  {
      enumerable:i.enumerable
    }),  {
      getValue:function() {
        return n
      }, setValue:function(l) {
        n=""+l
      }, stopTracking:function() {
        t._valueTracker=null, delete t[e]
      }
    }
  }
}function id(t) {
  if(!t._valueTracker) {
    var e=g_(t)?"checked":"value";
    t._valueTracker=uC(t, e, ""+t[e])
  }
}function v_(t) {
  if(!t)return!1;
  var e=t._valueTracker;
  if(!e)return!0;
  var n=e.getValue(), i="";
  return t&&(i=g_(t)?t.checked?"true":"false":t.value), t=i, t!==n?(e.setValue(t), !0):!1
}function Ql(t) {
  if(t=t||(typeof document<"u"?document:void 0), typeof t>"u")return null;
  try {
    return t.activeElement||t.body
  }catch {
    return t.body
  }
}var cC=/[\n"\\]/g;function nn(t){return t.replace(cC,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ad(t,e,n,i,o,r,l,u){t.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.type=l:t.removeAttribute("type"),e!=null?l==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Je(e)):t.value!==""+Je(e)&&(t.value=""+Je(e)):l!=="submit"&&l!=="reset"||t.removeAttribute("value"),e!=null?od(t,l,Je(e)):n!=null?od(t,l,Je(n)):i!=null&&t.removeAttribute("value"),o==null&&r!=null&&(t.defaultChecked=!!r),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+Je(u):t.removeAttribute("name")}function y_(t,e,n,i,o,r,l,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){id(t);return}n=n!=null?""+Je(n):"",e=e!=null?""+Je(e):n,u||e===t.value||(t.value=e),t.defaultValue=e}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=u?t.checked:!!i,t.defaultChecked=!!i,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.name=l),id(t)}function od(t,e,n){e==="number"&&Ql(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function fo(t,e,n,i){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Je(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,i&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function __(t,e,n){if(e!=null&&(e=""+Je(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Je(n):""}function b_(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(j(92));if(Tr(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Je(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),id(t)}function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fC=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kg(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||fC.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function x_(t,e,n){if(e!=null&&typeof e!="object")throw Error(j(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var o in e)i=e[o],e.hasOwnProperty(o)&&n[o]!==i&&kg(t,o,i)}else for(var r in e)e.hasOwnProperty(r)&&kg(t,r,e[r])}function Lh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return hC.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Kn(){}var rd=null;function Rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,ho=null;function Vg(t){var e=Bo(t);if(e&&(t=e.stateNode)){var n=t[Oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(ad(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+nn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var o=i[Oe]||null;if(!o)throw Error(j(90));ad(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&v_(i)}break t;case"textarea":__(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}}}var Kc=!1;function T_(t,e,n){if(Kc)return t(e,n);Kc=!0;try{var i=t(e);return i}finally{if(Kc=!1,(Qa!==null||ho!==null)&&(Xu(),Qa&&(e=Qa,t=ho,ho=Qa=null,Vg(e),t)))for(e=0;e<t.length;e++)Vg(t[e])}}function Kr(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Oe]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=!1;if(ii)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){sd=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{sd=!1}var Ai=null,Oh=null,Cl=null;function S_(){if(Cl)return Cl;var t,e=Oh,n=e.length,i,o="value"in Ai?Ai.value:Ai.textContent,r=o.length;for(t=0;t<n&&e[t]===o[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===o[r-i];i++);return Cl=o.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Ug(){return!1}function Ne(t){function e(n,i,o,r,l){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?rl:Ug,this.isPropagationStopped=Ug,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Ne(Ea),bs=zt({},Ea,{view:0,detail:0}),mC=Ne(bs),Qc,$c,cr,ku=zt({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cr&&(cr&&t.type==="mousemove"?(Qc=t.screenX-cr.screenX,$c=t.screenY-cr.screenY):$c=Qc=0,cr=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Hg=Ne(ku),pC=zt({},ku,{dataTransfer:0}),gC=Ne(pC),vC=zt({},bs,{relatedTarget:0}),Wc=Ne(vC),yC=zt({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),_C=Ne(yC),bC=zt({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xC=Ne(bC),TC=zt({},Ea,{data:0}),Zg=Ne(TC),SC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=EC[t])?!!e[t]:!1}function Nh(){return CC}var AC=zt({},bs,{key:function(t){if(t.key){var e=SC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nh,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MC=Ne(AC),LC=zt({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=Ne(LC),RC=zt({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nh}),OC=Ne(RC),NC=zt({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),zC=Ne(NC),DC=zt({},ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PC=Ne(DC),jC=zt({},Ea,{newState:0,oldState:0}),BC=Ne(jC),kC=[9,13,27,32],zh=ii&&"CompositionEvent"in window,Rr=null;ii&&"documentMode"in document&&(Rr=document.documentMode);var VC=ii&&"TextEvent"in window&&!Rr,w_=ii&&(!zh||Rr&&8<Rr&&11>=Rr),Gg=String.fromCharCode(32),Ig=!1;function E_(t,e){switch(t){case"keyup":return kC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $a=!1;function UC(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(Ig=!0,Gg);case"textInput":return t=e.data,t===Gg&&Ig?null:t;default:return null}}function HC(t,e){if($a)return t==="compositionend"||!zh&&E_(t,e)?(t=S_(),Cl=Oh=Ai=null,$a=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var ZC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZC[t.type]:e==="textarea"}function A_(t,e,n,i){Qa?ho?ho.push(i):ho=[i]:Qa=i,e=mu(e,"onChange"),0<e.length&&(n=new Bu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Or=null,Qr=null;function qC(t){Tx(t,0)}function Vu(t){var e=Sr(t);if(v_(e))return t}function Fg(t,e){if(t==="change")return e}var M_=!1;if(ii){var Jc;if(ii){var tf="oninput"in document;if(!tf){var Xg=document.createElement("div");Xg.setAttribute("oninput","return;
"),tf=typeof Xg.oninput=="function"}Jc=tf}else Jc=!1;M_=Jc&&(!document.documentMode||9<document.documentMode)}function Kg(){Or&&(Or.detachEvent("onpropertychange",L_),Qr=Or=null)}function L_(t){if(t.propertyName==="value"&&Vu(Qr)){var e=[];A_(e,Qr,t,Rh(t)),T_(qC,e)}}function GC(t,e,n){t==="focusin"?(Kg(),Or=e,Qr=n,Or.attachEvent("onpropertychange",L_)):t==="focusout"&&Kg()}function IC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(Qr)}function YC(t,e){if(t==="click")return Vu(e)}function FC(t,e){if(t==="input"||t==="change")return Vu(e)}function XC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qe=typeof Object.is=="function"?Object.is:XC;function $r(t,e){if(qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!ed.call(e,o)||!qe(t[o],e[o]))return!1}return!0}function Qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $g(t,e){var n=Qg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Qg(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ql(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var KC=ii&&"documentMode"in document&&11>=document.documentMode,Wa=null,ld=null,Nr=null,ud=!1;function Wg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||Wa==null||Wa!==Ql(i)||(i=Wa,"selectionStart"in i&&Dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Nr&&$r(Nr,i)||(Nr=i,i=mu(ld,"onSelect"),0<i.length&&(e=new Bu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wa)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ja={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},ef={},N_={};ii&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Ca(t){if(ef[t])return ef[t];if(!Ja[t])return t;var e=Ja[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N_)return ef[t]=e[n];return t}var z_=Ca("animationend"),D_=Ca("animationiteration"),P_=Ca("animationstart"),QC=Ca("transitionrun"),$C=Ca("transitionstart"),WC=Ca("transitioncancel"),j_=Ca("transitionend"),B_=new Map,cd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cd.push("scrollEnd");function _n(t,e){B_.set(t,e),wa(e,[t])}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},We=[],to=0,Ph=0;function Uu(){for(var t=to,e=Ph=to=0;e<t;){var n=We[e];We[e++]=null;var i=We[e];We[e++]=null;var o=We[e];We[e++]=null;var r=We[e];if(We[e++]=null,i!==null&&o!==null){var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}r!==0&&k_(n,o,r)}}function Hu(t,e,n,i){We[to++]=t,We[to++]=e,We[to++]=n,We[to++]=i,Ph|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function jh(t,e,n,i){return Hu(t,e,n,i),Wl(t)}function Aa(t,e){return Hu(t,null,null,e),Wl(t)}function k_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var o=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(o=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,o&&e!==null&&(o=31-Ue(n),t=r.hiddenUpdates,i=t[o],i===null?t[o]=[e]:i.push(e),e.lane=n|536870912),r):null}function Wl(t){if(50<Hr)throw Hr=0,Od=null,Error(j(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var eo={};function JC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,i){return new JC(t,e,n,i)}function Bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $n(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function V_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ml(t,e,n,i,o,r){var l=0;if(i=t,typeof t=="function")Bh(t)&&(l=1);else if(typeof t=="string")l=aA(t,n,An.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $f:return t=je(31,n,e,o),t.elementType=$f,t.lanes=r,t;case Fa:return da(n.children,o,r,e);case a_:l=8,o|=24;break;case Xf:return t=je(12,n,e,o|2),t.elementType=Xf,t.lanes=r,t;case Kf:return t=je(13,n,e,o),t.elementType=Kf,t.lanes=r,t;case Qf:return t=je(19,n,e,o),t.elementType=Qf,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xn:l=10;break t;case o_:l=9;break t;case Sh:l=11;break t;case wh:l=14;break t;case bi:l=16,i=null;break t}l=29,n=Error(j(130,t===null?"null":typeof t,"")),i=null}return e=je(l,n,e,o),e.elementType=t,e.type=i,e.lanes=r,e}function da(t,e,n,i){return t=je(7,t,i,e),t.lanes=n,t}function nf(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function U_(t){var e=je(18,null,null,0);return e.stateNode=t,e}function af(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Jg=new WeakMap;function an(t,e){if(typeof t=="object"&&t!==null){var n=Jg.get(t);return n!==void 0?n:(e={value:t,source:e,stack:zg(e)},Jg.set(t,e),e)}return{value:t,source:e,stack:zg(e)}}var no=[],io=0,Jl=null,Wr=0,tn=[],en=0,Hi=null,wn=1,En="";function Yn(t,e){no[io++]=Wr,no[io++]=Jl,Jl=t,Wr=e}function H_(t,e,n){tn[en++]=wn,tn[en++]=En,tn[en++]=Hi,Hi=t;var i=wn;t=En;var o=32-Ue(i)-1;i&=~(1<<o),n+=1;var r=32-Ue(e)+o;if(30<r){var l=o-o%5;r=(i&(1<<l)-1).toString(32),i>>=l,o-=l,wn=1<<32-Ue(e)+o|n<<o|i,En=r+t}else wn=1<<r|n<<o|i,En=t}function kh(t){t.return!==null&&(Yn(t,1),H_(t,1,0))}function Vh(t){for(;t===Jl;)Jl=no[--io],no[io]=null,Wr=no[--io],no[io]=null;for(;t===Hi;)Hi=tn[--en],tn[en]=null,En=tn[--en],tn[en]=null,wn=tn[--en],tn[en]=null}function Z_(t,e){tn[en++]=wn,tn[en++]=En,tn[en++]=Hi,wn=e.id,En=e.overflow,Hi=t}var he=null,Rt=null,dt=!1,Ni=null,on=!1,fd=Error(j(519));function Zi(t){var e=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(an(e,t)),fd}function tv(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[de]=t,e[Oe]=i,n){case"dialog":lt("cancel",e),lt("close",e);break;case"iframe":case"object":case"embed":lt("load",e);break;case"video":case"audio":for(n=0;n<is.length;n++)lt(is[n],e);break;case"source":lt("error",e);break;case"img":case"image":case"link":lt("error",e),lt("load",e);break;case"details":lt("toggle",e);break;case"input":lt("invalid",e),y_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":lt("invalid",e);break;case"textarea":lt("invalid",e),b_(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||wx(e.textContent,n)?(i.popover!=null&&(lt("beforetoggle",e),lt("toggle",e)),i.onScroll!=null&&lt("scroll",e),i.onScrollEnd!=null&&lt("scrollend",e),i.onClick!=null&&(e.onclick=Kn),e=!0):e=!1,e||Zi(t,!0)}function ev(t){for(he=t.return;he;)switch(he.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:he=he.return}}function Ua(t){if(t!==he)return!1;if(!dt)return ev(t),dt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||jd(t.type,t.memoizedProps)),n=!n),n&&Rt&&Zi(t),ev(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Rt=Hv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));Rt=Hv(t)}else e===27?(e=Rt,Ki(t.type)?(t=Ud,Ud=null,Rt=t):Rt=e):Rt=he?sn(t.stateNode.nextSibling):null;return!0}function ya(){Rt=he=null,dt=!1}function of(){var t=Ni;return t!==null&&(Le===null?Le=t:Le.push.apply(Le,t),Ni=null),t}function Jr(t){Ni===null?Ni=[t]:Ni.push(t)}var dd=On(null),Ma=null,Qn=null;function Ti(t,e,n){At(dd,e._currentValue),e._currentValue=n}function Wn(t){t._currentValue=dd.current,le(dd)}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function md(t,e,n,i){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var r=o.dependencies;if(r!==null){var l=o.child;r=r.firstContext;t:for(;r!==null;){var u=r;r=o;for(var f=0;f<e.length;f++)if(u.context===e[f]){r.lanes|=n,u=r.alternate,u!==null&&(u.lanes|=n),hd(r.return,n,t),i||(l=null);break t}r=u.next}}else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,r=l.alternate,r!==null&&(r.lanes|=n),hd(l,n,t),l=null}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}}function ko(t,e,n,i){t=null;for(var o=e,r=!1;o!==null;){if(!r){if(o.flags&524288)r=!0;else if(o.flags&262144)break}if(o.tag===10){var l=o.alternate;if(l===null)throw Error(j(387));if(l=l.memoizedProps,l!==null){var u=o.type;qe(o.pendingProps.value,l.value)||(t!==null?t.push(u):t=[u])}}else if(o===Yl.current){if(l=o.alternate,l===null)throw Error(j(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(os):t=[os])}o=o.return}t!==null&&md(e,t,n,i),e.flags|=262144}function tu(t){for(t=t.firstContext;t!==null;){if(!qe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _a(t){Ma=t,Qn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function me(t){return q_(Ma,t)}function sl(t,e){return Ma===null&&_a(t),q_(t,e)}function q_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Qn===null){if(t===null)throw Error(j(308));Qn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Qn=Qn.next=e;return n}var t2=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},e2=ae.unstable_scheduleCallback,n2=ae.unstable_NormalPriority,ee={$$typeof:Xn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uh(){return{controller:new t2,data:new Map,refCount:0}}function xs(t){t.refCount--,t.refCount===0&&e2(n2,function(){t.controller.abort()})}var zr=null,pd=0,So=0,mo=null;function i2(t,e){if(zr===null){var n=zr=[];pd=0,So=fm(),mo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return pd++,e.then(nv,nv),e}function nv(){if(--pd===0&&zr!==null){mo!==null&&(mo.status="fulfilled");var t=zr;zr=null,So=0,mo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function a2(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var o=0;o<n.length;o++)(0,n[o])(e)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var iv=W.S;W.S=function(t,e){ix=ke(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&i2(t,e),iv!==null&&iv(t,e)};var ha=On(null);function Hh(){var t=ha.current;return t!==null?t:Et.pooledCache}function Ll(t,e){e===null?At(ha,ha.current):At(ha,e.pool)}function G_(){var t=Hh();return t===null?null:{parent:ee._currentValue,pool:t}}var Vo=Error(j(460)),Zh=Error(j(474)),Zu=Error(j(542)),eu={then:function(){}};function av(t){return t=t.status,t==="fulfilled"||t==="rejected"}function I_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Kn,Kn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rv(t),t;default:if(typeof e.status=="string")e.then(Kn,Kn);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(j(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=i}},function(i){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rv(t),t}throw ma=e,Vo}}function ra(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ma=n,Vo):n}}var ma=null;function ov(){if(ma===null)throw Error(j(459));var t=ma;return ma=null,t}function rv(t){if(t===Vo||t===Zu)throw Error(j(483))}var po=null,ts=0;function ll(t){var e=ts;return ts+=1,po===null&&(po=[]),I_(po,t,e)}function fr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ul(t,e){throw e.$$typeof===GE?Error(j(525)):(t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys  {
  "+Object.keys(e).join(",  ")+"
}":t)))}function Y_(t){function e(_,b){if(t){var S=_.deletions;S===null?(_.deletions=[b],_.flags|=16):S.push(b)}}function n(_,b){if(!t)return null;for(;b!==null;)e(_,b),b=b.sibling;return null}function i(_){for(var b=new Map;_!==null;)_.key!==null?b.set(_.key,_):b.set(_.index,_),_=_.sibling;return b}function o(_,b){return _=$n(_,b),_.index=0,_.sibling=null,_}function r(_,b,S){return _.index=S,t?(S=_.alternate,S!==null?(S=S.index,S<b?(_.flags|=67108866,b):S):(_.flags|=67108866,b)):(_.flags|=1048576,b)}function l(_){return t&&_.alternate===null&&(_.flags|=67108866),_}function u(_,b,S,M){return b===null||b.tag!==6?(b=nf(S,_.mode,M),b.return=_,b):(b=o(b,S),b.return=_,b)}function f(_,b,S,M){var O=S.type;return O===Fa?p(_,b,S.props.children,M,S.key):b!==null&&(b.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===bi&&ra(O)===b.type)?(b=o(b,S.props),fr(b,S),b.return=_,b):(b=Ml(S.type,S.key,S.props,null,_.mode,M),fr(b,S),b.return=_,b)}function d(_,b,S,M){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=af(S,_.mode,M),b.return=_,b):(b=o(b,S.children||[]),b.return=_,b)}function p(_,b,S,M,O){return b===null||b.tag!==7?(b=da(S,_.mode,M,O),b.return=_,b):(b=o(b,S),b.return=_,b)}function m(_,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=nf(""+b,_.mode,S),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case el:return S=Ml(b.type,b.key,b.props,null,_.mode,S),fr(S,b),S.return=_,S;case xr:return b=af(b,_.mode,S),b.return=_,b;case bi:return b=ra(b),m(_,b,S)}if(Tr(b)||lr(b))return b=da(b,_.mode,S,null),b.return=_,b;if(typeof b.then=="function")return m(_,ll(b),S);if(b.$$typeof===Xn)return m(_,sl(_,b),S);ul(_,b)}return null}function g(_,b,S,M){var O=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return O!==null?null:u(_,b,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return S.key===O?f(_,b,S,M):null;case xr:return S.key===O?d(_,b,S,M):null;case bi:return S=ra(S),g(_,b,S,M)}if(Tr(S)||lr(S))return O!==null?null:p(_,b,S,M,null);if(typeof S.then=="function")return g(_,b,ll(S),M);if(S.$$typeof===Xn)return g(_,b,sl(_,S),M);ul(_,S)}return null}function y(_,b,S,M,O){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return _=_.get(S)||null,u(b,_,""+M,O);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case el:return _=_.get(M.key===null?S:M.key)||null,f(b,_,M,O);case xr:return _=_.get(M.key===null?S:M.key)||null,d(b,_,M,O);case bi:return M=ra(M),y(_,b,S,M,O)}if(Tr(M)||lr(M))return _=_.get(S)||null,p(b,_,M,O,null);if(typeof M.then=="function")return y(_,b,S,ll(M),O);if(M.$$typeof===Xn)return y(_,b,S,sl(b,M),O);ul(b,M)}return null}function C(_,b,S,M){for(var O=null,P=null,D=b,B=b=0,Z=null;D!==null&&B<S.length;B++){D.index>B?(Z=D,D=null):Z=D.sibling;var I=g(_,D,S[B],M);if(I===null){D===null&&(D=Z);break}t&&D&&I.alternate===null&&e(_,D),b=r(I,b,B),P===null?O=I:P.sibling=I,P=I,D=Z}if(B===S.length)return n(_,D),dt&&Yn(_,B),O;if(D===null){for(;B<S.length;B++)D=m(_,S[B],M),D!==null&&(b=r(D,b,B),P===null?O=D:P.sibling=D,P=D);return dt&&Yn(_,B),O}for(D=i(D);B<S.length;B++)Z=y(D,_,B,S[B],M),Z!==null&&(t&&Z.alternate!==null&&D.delete(Z.key===null?B:Z.key),b=r(Z,b,B),P===null?O=Z:P.sibling=Z,P=Z);return t&&D.forEach(function(H){return e(_,H)}),dt&&Yn(_,B),O}function E(_,b,S,M){if(S==null)throw Error(j(151));for(var O=null,P=null,D=b,B=b=0,Z=null,I=S.next();D!==null&&!I.done;B++,I=S.next()){D.index>B?(Z=D,D=null):Z=D.sibling;var H=g(_,D,I.value,M);if(H===null){D===null&&(D=Z);break}t&&D&&H.alternate===null&&e(_,D),b=r(H,b,B),P===null?O=H:P.sibling=H,P=H,D=Z}if(I.done)return n(_,D),dt&&Yn(_,B),O;if(D===null){for(;!I.done;B++,I=S.next())I=m(_,I.value,M),I!==null&&(b=r(I,b,B),P===null?O=I:P.sibling=I,P=I);return dt&&Yn(_,B),O}for(D=i(D);!I.done;B++,I=S.next())I=y(D,_,B,I.value,M),I!==null&&(t&&I.alternate!==null&&D.delete(I.key===null?B:I.key),b=r(I,b,B),P===null?O=I:P.sibling=I,P=I);return t&&D.forEach(function(q){return e(_,q)}),dt&&Yn(_,B),O}function A(_,b,S,M){if(typeof S=="object"&&S!==null&&S.type===Fa&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case el:t:{for(var O=S.key;b!==null;){if(b.key===O){if(O=S.type,O===Fa){if(b.tag===7){n(_,b.sibling),M=o(b,S.props.children),M.return=_,_=M;break t}}else if(b.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===bi&&ra(O)===b.type){n(_,b.sibling),M=o(b,S.props),fr(M,S),M.return=_,_=M;break t}n(_,b);break}else e(_,b);b=b.sibling}S.type===Fa?(M=da(S.props.children,_.mode,M,S.key),M.return=_,_=M):(M=Ml(S.type,S.key,S.props,null,_.mode,M),fr(M,S),M.return=_,_=M)}return l(_);case xr:t:{for(O=S.key;b!==null;){if(b.key===O)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(_,b.sibling),M=o(b,S.children||[]),M.return=_,_=M;break t}else{n(_,b);break}else e(_,b);b=b.sibling}M=af(S,_.mode,M),M.return=_,_=M}return l(_);case bi:return S=ra(S),A(_,b,S,M)}if(Tr(S))return C(_,b,S,M);if(lr(S)){if(O=lr(S),typeof O!="function")throw Error(j(150));return S=O.call(S),E(_,b,S,M)}if(typeof S.then=="function")return A(_,b,ll(S),M);if(S.$$typeof===Xn)return A(_,b,sl(_,S),M);ul(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(n(_,b.sibling),M=o(b,S),M.return=_,_=M):(n(_,b),M=nf(S,_.mode,M),M.return=_,_=M),l(_)):n(_,b)}return function(_,b,S,M){try{ts=0;var O=A(_,b,S,M);return po=null,O}catch(D){if(D===Vo||D===Zu)throw D;var P=je(29,D,null,_.mode);return P.lanes=M,P.return=_,P}finally{}}}var ba=Y_(!0),F_=Y_(!1),xi=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var o=i.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),i.pending=e,e=Wl(t),k_(t,null,n),e}return Hu(t,i,e,n),Wl(t)}function Dr(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,f_(t,n)}}function rf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?o=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?o=r=e:r=r.next=e}else o=r=e;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var vd=!1;function Pr(){if(vd){var t=mo;if(t!==null)throw t}}function jr(t,e,n,i){vd=!1;var o=t.updateQueue;xi=!1;var r=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?r=d:l.next=d,l=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=f))}if(r!==null){var m=o.baseState;l=0,p=d=f=null,u=r;do{var g=u.lane&-536870913,y=g!==u.lane;if(y?(ct&g)===g:(i&g)===g){g!==0&&g===So&&(vd=!0),p!==null&&(p=p.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var C=t,E=u;g=e;var A=n;switch(E.tag){case 1:if(C=E.payload,typeof C=="function"){m=C.call(A,m,g);break t}m=C;break t;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,g=typeof C=="function"?C.call(A,m,g):C,g==null)break t;m=zt({},m,g);break t;case 2:xi=!0}}g=u.callback,g!==null&&(t.flags|=64,y&&(t.flags|=8192),y=o.callbacks,y===null?o.callbacks=[g]:y.push(g))}else y={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=y,f=m):p=p.next=y,l|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;y=u,u=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(1);p===null&&(f=m),o.baseState=f,o.firstBaseUpdate=d,o.lastBaseUpdate=p,r===null&&(o.shared.lanes=0),Gi|=l,t.lanes=l,t.memoizedState=m}}function X_(t,e){if(typeof t!="function")throw Error(j(191,t));t.call(e)}function K_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)X_(n[t],e)}var wo=On(null),nu=On(0);function sv(t,e){t=si,At(nu,t),At(wo,e),si=t|e.baseLanes}function yd(){At(nu,si),At(wo,wo.current)}function Gh(){si=nu.current,le(wo),le(nu)}var Ge=On(null),rn=null;function Si(t){var e=t.alternate;At(Kt,Kt.current&1),At(Ge,t),rn===null&&(e===null||wo.current!==null||e.memoizedState!==null)&&(rn=t)}function _d(t){At(Kt,Kt.current),At(Ge,t),rn===null&&(rn=t)}function Q_(t){t.tag===22?(At(Kt,Kt.current),At(Ge,t),rn===null&&(rn=t)):wi()}function wi(){At(Kt,Kt.current),At(Ge,Ge.current)}function Pe(t){le(Ge),rn===t&&(rn=null),le(Kt)}var Kt=On(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||kd(n)||Vd(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ai=0,nt=null,wt=null,Jt=null,au=!1,go=!1,xa=!1,ou=0,es=0,vo=null,o2=0;function qt(){throw Error(j(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qe(t[n],e[n]))return!1;return!0}function Yh(t,e,n,i,o,r){return ai=r,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,W.H=t===null||t.memoizedState===null?Ab:im,xa=!1,r=n(i,o),xa=!1,go&&(r=W_(e,n,i,o)),$_(t),r}function $_(t){W.H=ns;var e=wt!==null&&wt.next!==null;if(ai=0,Jt=wt=nt=null,au=!1,es=0,vo=null,e)throw Error(j(300));t===null||ne||(t=t.dependencies,t!==null&&tu(t)&&(ne=!0))}function W_(t,e,n,i){nt=t;var o=0;do{if(go&&(vo=null),es=0,go=!1,25<=o)throw Error(j(301));if(o+=1,Jt=wt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}W.H=Mb,r=e(n,i)}while(go);return r}function r2(){var t=W.H,e=t.useState()[0];return e=typeof e.then=="function"?Ts(e):e,t=t.useState()[0],(wt!==null?wt.memoizedState:null)!==t&&(nt.flags|=1024),e}function Fh(){var t=ou!==0;return ou=0,t}function Xh(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Kh(t){if(au){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}au=!1}ai=0,Jt=wt=nt=null,go=!1,es=ou=0,vo=null}function _e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?nt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Qt(){if(wt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Jt===null?nt.memoizedState:Jt.next;if(e!==null)Jt=e,wt=t;else{if(t===null)throw nt.alternate===null?Error(j(467)):Error(j(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Jt===null?nt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ts(t){var e=es;return es+=1,vo===null&&(vo=[]),t=I_(vo,t,e),e=nt,(Jt===null?e.memoizedState:Jt.next)===null&&(e=e.alternate,W.H=e===null||e.memoizedState===null?Ab:im),t}function Gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ts(t);if(t.$$typeof===Xn)return me(t)}throw Error(j(438,String(t)))}function Qh(t){var e=null,n=nt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=nt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=qu(),nt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=IE;return e.index++,n}function oi(t,e){return typeof e=="function"?e(t):e}function Rl(t){var e=Qt();return $h(e,wt,t)}function $h(t,e,n){var i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var o=t.baseQueue,r=i.pending;if(r!==null){if(o!==null){var l=o.next;o.next=r.next,r.next=l}e.baseQueue=o=r,i.pending=null}if(r=t.baseState,o===null)t.memoizedState=r;else{e=o.next;var u=l=null,f=null,d=e,p=!1;do{var m=d.lane&-536870913;if(m!==d.lane?(ct&m)===m:(ai&m)===m){var g=d.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),m===So&&(p=!0);else if((ai&g)===g){d=d.next,g===So&&(p=!0);continue}else m={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(u=f=m,l=r):f=f.next=m,nt.lanes|=g,Gi|=g;m=d.action,xa&&n(r,m),r=d.hasEagerState?d.eagerState:n(r,m)}else g={lane:m,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},f===null?(u=f=g,l=r):f=f.next=g,nt.lanes|=m,Gi|=m;d=d.next}while(d!==null&&d!==e);if(f===null?l=r:f.next=u,!qe(r,t.memoizedState)&&(ne=!0,p&&(n=mo,n!==null)))throw n;t.memoizedState=r,t.baseState=l,t.baseQueue=f,i.lastRenderedState=r}return o===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function sf(t){var e=Qt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=n.dispatch,o=n.pending,r=e.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do r=t(r,l.action),l=l.next;while(l!==o);qe(r,e.memoizedState)||(ne=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function J_(t,e,n){var i=nt,o=Qt(),r=dt;if(r){if(n===void 0)throw Error(j(407));n=n()}else n=e();var l=!qe((wt||o).memoizedState,n);if(l&&(o.memoizedState=n,ne=!0),o=o.queue,Wh(nb.bind(null,i,o,t),[t]),o.getSnapshot!==e||l||Jt!==null&&Jt.memoizedState.tag&1){if(i.flags|=2048,Eo(9,{destroy:void 0},eb.bind(null,i,o,n,e),null),Et===null)throw Error(j(349));r||ai&127||tb(i,e,n)}return n}function tb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nt.updateQueue,e===null?(e=qu(),nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eb(t,e,n,i){e.value=n,e.getSnapshot=i,ib(e)&&ab(t)}function nb(t,e,n){return n(function(){ib(e)&&ab(t)})}function ib(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qe(t,n)}catch{return!0}}function ab(t){var e=Aa(t,2);e!==null&&Re(e,t,2)}function bd(t){var e=_e();if(typeof t=="function"){var n=t;if(t=n(),xa){Ci(!0);try{n()}finally{Ci(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:t},e}function ob(t,e,n,i){return t.baseState=n,$h(t,wt,typeof i=="function"?i:oi)}function s2(t,e,n,i,o){if(Yu(t))throw Error(j(485));if(t=e.action,t!==null){var r={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};W.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,rb(e,r)):(r.next=n.next,e.pending=n.next=r)}}function rb(t,e){var n=e.action,i=e.payload,o=t.state;if(e.isTransition){var r=W.T,l={};W.T=l;try{var u=n(o,i),f=W.S;f!==null&&f(l,u),lv(t,e,u)}catch(d){xd(t,e,d)}finally{r!==null&&l.types!==null&&(r.types=l.types),W.T=r}}else try{r=n(o,i),lv(t,e,r)}catch(d){xd(t,e,d)}}function lv(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){uv(t,e,i)},function(i){return xd(t,e,i)}):uv(t,e,n)}function uv(t,e,n){e.status="fulfilled",e.value=n,sb(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,rb(t,n)))}function xd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,sb(e),e=e.next;while(e!==i)}t.action=null}function sb(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lb(t,e){return e}function cv(t,e){if(dt){var n=Et.formState;if(n!==null){t:{var i=nt;if(dt){if(Rt){e:{for(var o=Rt,r=on;o.nodeType!==8;){if(!r){o=null;break e}if(o=sn(o.nextSibling),o===null){o=null;break e}}r=o.data,o=r==="F!"||r==="F"?o:null}if(o){Rt=sn(o.nextSibling),i=o.data==="F!";break t}}Zi(i)}i=!1}i&&(e=n[0])}}return n=_e(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lb,lastRenderedState:e},n.queue=i,n=wb.bind(null,nt,i),i.dispatch=n,i=bd(!1),r=nm.bind(null,nt,!1,i.queue),i=_e(),o={state:e,dispatch:null,action:t,pending:null},i.queue=o,n=s2.bind(null,nt,o,r,n),o.dispatch=n,i.memoizedState=t,[e,n,!1]}function fv(t){var e=Qt();return ub(e,wt,t)}function ub(t,e,n){if(e=$h(t,e,lb)[0],t=Rl(oi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Ts(e)}catch(l){throw l===Vo?Zu:l}else i=e;e=Qt();var o=e.queue,r=o.dispatch;return n!==e.memoizedState&&(nt.flags|=2048,Eo(9,{destroy:void 0},l2.bind(null,o,n),null)),[i,r,t]}function l2(t,e){t.action=e}function dv(t){var e=Qt(),n=wt;if(n!==null)return ub(e,n,t);Qt(),e=e.memoizedState,n=Qt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Eo(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=nt.updateQueue,e===null&&(e=qu(),nt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function cb(){return Qt().memoizedState}function Ol(t,e,n,i){var o=_e();nt.flags|=t,o.memoizedState=Eo(1|e,{destroy:void 0},n,i===void 0?null:i)}function Iu(t,e,n,i){var o=Qt();i=i===void 0?null:i;var r=o.memoizedState.inst;wt!==null&&i!==null&&Ih(i,wt.memoizedState.deps)?o.memoizedState=Eo(e,r,n,i):(nt.flags|=t,o.memoizedState=Eo(1|e,r,n,i))}function hv(t,e){Ol(8390656,8,t,e)}function Wh(t,e){Iu(2048,8,t,e)}function u2(t){nt.flags|=4;var e=nt.updateQueue;if(e===null)e=qu(),nt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function fb(t){var e=Qt().memoizedState;return u2({ref:e,nextImpl:t}),function(){if(yt&2)throw Error(j(440));return e.impl.apply(void 0,arguments)}}function db(t,e){return Iu(4,2,t,e)}function hb(t,e){return Iu(4,4,t,e)}function mb(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pb(t,e,n){n=n!=null?n.concat([t]):null,Iu(4,4,mb.bind(null,e,t),n)}function Jh(){}function gb(t,e){var n=Qt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vb(t,e){var n=Qt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Ih(e,i[1]))return i[0];if(i=t(),xa){Ci(!0);try{t()}finally{Ci(!1)}}return n.memoizedState=[i,e],i}function tm(t,e,n){return n===void 0||ai&1073741824&&!(ct&261930)?t.memoizedState=e:(t.memoizedState=n,t=ox(),nt.lanes|=t,Gi|=t,n)}function yb(t,e,n,i){return qe(n,e)?n:wo.current!==null?(t=tm(t,n,i),qe(t,e)||(ne=!0),t):!(ai&42)||ai&1073741824&&!(ct&261930)?(ne=!0,t.memoizedState=n):(t=ox(),nt.lanes|=t,Gi|=t,e)}function _b(t,e,n,i,o){var r=_t.p;_t.p=r!==0&&8>r?r:8;var l=W.T,u={};W.T=u,nm(t,!1,e,n);try{var f=o(),d=W.S;if(d!==null&&d(u,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=a2(f,i);Br(t,e,p,He(t))}else Br(t,e,i,He(t))}catch(m){Br(t,e,{then:function(){},status:"rejected",reason:m},He())}finally{_t.p=r,l!==null&&u.types!==null&&(l.types=u.types),W.T=l}}function c2(){}function Td(t,e,n,i){if(t.tag!==5)throw Error(j(476));var o=bb(t).queue;_b(t,o,e,fa,n===null?c2:function(){return xb(t),n(i)})}function bb(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:fa,baseState:fa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:fa},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function xb(t){var e=bb(t);e.next===null&&(e=t.alternate.memoizedState),Br(t,e.next.queue,{},He())}function em(){return me(os)}function Tb(){return Qt().memoizedState}function Sb(){return Qt().memoizedState}function f2(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=He();t=zi(n);var i=Di(e,t,n);i!==null&&(Re(i,e,n),Dr(i,e,n)),e={cache:Uh()},t.payload=e;return}e=e.return}}function d2(t,e,n){var i=He();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(t)?Eb(e,n):(n=jh(t,e,n,i),n!==null&&(Re(n,t,i),Cb(n,e,i)))}function wb(t,e,n){var i=He();Br(t,e,n,i)}function Br(t,e,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(t))Eb(e,o);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var l=e.lastRenderedState,u=r(l,n);if(o.hasEagerState=!0,o.eagerState=u,qe(u,l))return Hu(t,e,o,0),Et===null&&Uu(),!1}catch{}finally{}if(n=jh(t,e,o,i),n!==null)return Re(n,t,i),Cb(n,e,i),!0}return!1}function nm(t,e,n,i){if(i={lane:2,revertLane:fm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Yu(t)){if(e)throw Error(j(479))}else e=jh(t,n,i,2),e!==null&&Re(e,t,2)}function Yu(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function Eb(t,e){go=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cb(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,f_(t,n)}}var ns={readContext:me,use:Gu,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};ns.useEffectEvent=qt;var Ab={readContext:me,use:Gu,useCallback:function(t,e){return _e().memoizedState=[t,e===void 0?null:e],t},useContext:me,useEffect:hv,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ol(4194308,4,mb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){Ol(4,2,t,e)},useMemo:function(t,e){var n=_e();e=e===void 0?null:e;var i=t();if(xa){Ci(!0);try{t()}finally{Ci(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=_e();if(n!==void 0){var o=n(e);if(xa){Ci(!0);try{n(e)}finally{Ci(!1)}}}else o=e;return i.memoizedState=i.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},i.queue=t,t=t.dispatch=d2.bind(null,nt,t),[i.memoizedState,t]},useRef:function(t){var e=_e();return t={current:t},e.memoizedState=t},useState:function(t){t=bd(t);var e=t.queue,n=wb.bind(null,nt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Jh,useDeferredValue:function(t,e){var n=_e();return tm(n,t,e)},useTransition:function(){var t=bd(!1);return t=_b.bind(null,nt,t.queue,!0,!1),_e().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=nt,o=_e();if(dt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Et===null)throw Error(j(349));ct&127||tb(i,e,n)}o.memoizedState=n;var r={value:n,getSnapshot:e};return o.queue=r,hv(nb.bind(null,i,r,t),[t]),i.flags|=2048,Eo(9,{destroy:void 0},eb.bind(null,i,r,n,e),null),n},useId:function(){var t=_e(),e=Et.identifierPrefix;if(dt){var n=En,i=wn;n=(i&~(1<<32-Ue(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ou++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=o2++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:em,useFormState:cv,useActionState:cv,useOptimistic:function(t){var e=_e();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=nm.bind(null,nt,!0,n),n.dispatch=e,[t,e]},useMemoCache:Qh,useCacheRefresh:function(){return _e().memoizedState=f2.bind(null,nt)},useEffectEvent:function(t){var e=_e(),n={impl:t};return e.memoizedState=n,function(){if(yt&2)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},im={readContext:me,use:Gu,useCallback:gb,useContext:me,useEffect:Wh,useImperativeHandle:pb,useInsertionEffect:db,useLayoutEffect:hb,useMemo:vb,useReducer:Rl,useRef:cb,useState:function(){return Rl(oi)},useDebugValue:Jh,useDeferredValue:function(t,e){var n=Qt();return yb(n,wt.memoizedState,t,e)},useTransition:function(){var t=Rl(oi)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Ts(t),e]},useSyncExternalStore:J_,useId:Tb,useHostTransitionStatus:em,useFormState:fv,useActionState:fv,useOptimistic:function(t,e){var n=Qt();return ob(n,wt,t,e)},useMemoCache:Qh,useCacheRefresh:Sb};im.useEffectEvent=fb;var Mb={readContext:me,use:Gu,useCallback:gb,useContext:me,useEffect:Wh,useImperativeHandle:pb,useInsertionEffect:db,useLayoutEffect:hb,useMemo:vb,useReducer:sf,useRef:cb,useState:function(){return sf(oi)},useDebugValue:Jh,useDeferredValue:function(t,e){var n=Qt();return wt===null?tm(n,t,e):yb(n,wt.memoizedState,t,e)},useTransition:function(){var t=sf(oi)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:Ts(t),e]},useSyncExternalStore:J_,useId:Tb,useHostTransitionStatus:em,useFormState:dv,useActionState:dv,useOptimistic:function(t,e){var n=Qt();return wt!==null?ob(n,wt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Qh,useCacheRefresh:Sb};Mb.useEffectEvent=fb;function lf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=He(),o=zi(i);o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(Re(e,t,i),Dr(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=He(),o=zi(i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(Re(e,t,i),Dr(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),i=zi(n);i.tag=2,e!=null&&(i.callback=e),e=Di(t,i,n),e!==null&&(Re(e,t,n),Dr(e,t,n))}};function mv(t,e,n,i,o,r,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,l):e.prototype&&e.prototype.isPureReactComponent?!$r(n,i)||!$r(o,r):!0}function pv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sd.enqueueReplaceState(e,e.state,null)}function Ta(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=zt({},n));for(var o in t)n[o]===void 0&&(n[o]=t[o])}return n}function Lb(t){$l(t)}function Rb(t){console.error(t)}function Ob(t){$l(t)}function ru(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function gv(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function wd(t,e,n){return n=zi(n),n.tag=3,n.payload={element:null},n.callback=function(){ru(t,e)},n}function Nb(t){return t=zi(t),t.tag=3,t}function zb(t,e,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var r=i.value;t.payload=function(){return o(r)},t.callback=function(){gv(e,n,i)}}var l=n.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){gv(e,n,i),typeof o!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function h2(t,e,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&ko(e,n,o,!0),n=Ge.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?fu():n.alternate===null&&It===0&&(It=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===eu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),_f(t,i,o)),!1;case 22:return n.flags|=65536,i===eu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),_f(t,i,o)),!1}throw Error(j(435,n.tag))}return _f(t,i,o),fu(),!1}if(dt)return e=Ge.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=o,i!==fd&&(t=Error(j(422),{cause:i}),Jr(an(t,n)))):(i!==fd&&(e=Error(j(423),{cause:i}),Jr(an(e,n))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,i=an(i,n),o=wd(t.stateNode,i,o),rf(t,o),It!==4&&(It=2)),!1;var r=Error(j(520),{cause:i});if(r=an(r,n),Ur===null?Ur=[r]:Ur.push(r),It!==4&&(It=2),e===null)return!0;i=an(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=o&-o,n.lanes|=t,t=wd(n.stateNode,i,t),rf(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Pi===null||!Pi.has(r))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Nb(o),zb(o,t,n,i),rf(n,o),!1}n=n.return}while(n!==null);return!1}var am=Error(j(461)),ne=!1;function fe(t,e,n,i){e.child=t===null?F_(e,null,n,i):ba(e,t.child,n,i)}function vv(t,e,n,i,o){n=n.render;var r=e.ref;if("ref"in i){var l={};for(var u in i)u!=="ref"&&(l[u]=i[u])}else l=i;return _a(e),i=Yh(t,e,n,l,r,o),u=Fh(),t!==null&&!ne?(Xh(t,e,o),ri(t,e,o)):(dt&&u&&kh(e),e.flags|=1,fe(t,e,i,o),e.child)}function yv(t,e,n,i,o){if(t===null){var r=n.type;return typeof r=="function"&&!Bh(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,Db(t,e,r,i,o)):(t=Ml(n.type,null,i,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!om(t,o)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(l,i)&&t.ref===e.ref)return ri(t,e,o)}return e.flags|=1,t=$n(r,i),t.ref=e.ref,t.return=e,e.child=t}function Db(t,e,n,i,o){if(t!==null){var r=t.memoizedProps;if($r(r,i)&&t.ref===e.ref)if(ne=!1,e.pendingProps=i=r,om(t,o))t.flags&131072&&(ne=!0);else return e.lanes=t.lanes,ri(t,e,o)}return Ed(t,e,n,i,o)}function Pb(t,e,n,i){var o=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~r}else i=0,e.child=null;return _v(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(e,r!==null?r.cachePool:null),r!==null?sv(e,r):yd(),Q_(e);else return i=e.lanes=536870912,_v(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Ll(e,r.cachePool),sv(e,r),wi(),e.memoizedState=null):(t!==null&&Ll(e,null),yd(),wi());return fe(t,e,o,n),e.child}function wr(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function _v(t,e,n,i,o){var r=Hh();return r=r===null?null:{parent:ee._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Ll(e,null),yd(),Q_(e),t!==null&&ko(t,e,i,!0),e.childLanes=o,null}function Nl(t,e){return e=su({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function bv(t,e,n){return ba(e,t.child,null,n),t=Nl(e,e.pendingProps),t.flags|=2,Pe(e),e.memoizedState=null,t}function m2(t,e,n){var i=e.pendingProps,o=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(dt){if(i.mode==="hidden")return t=Nl(e,i),e.lanes=536870912,wr(null,t);if(_d(e),(t=Rt)?(t=Ax(t,on),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Hi!==null?{id:wn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},n=U_(t),n.return=e,e.child=n,he=e,Rt=null)):t=null,t===null)throw Zi(e);return e.lanes=536870912,null}return Nl(e,i)}var r=t.memoizedState;if(r!==null){var l=r.dehydrated;if(_d(e),o)if(e.flags&256)e.flags&=-257,e=bv(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(j(558));else if(ne||ko(t,e,n,!1),o=(n&t.childLanes)!==0,ne||o){if(i=Et,i!==null&&(l=d_(i,n),l!==0&&l!==r.retryLane))throw r.retryLane=l,Aa(t,l),Re(i,t,l),am;fu(),e=bv(t,e,n)}else t=r.treeContext,Rt=sn(l.nextSibling),he=e,dt=!0,Ni=null,on=!1,t!==null&&Z_(e,t),e=Nl(e,i),e.flags|=4096;return e}return t=$n(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function zl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ed(t,e,n,i,o){return _a(e),n=Yh(t,e,n,i,void 0,o),i=Fh(),t!==null&&!ne?(Xh(t,e,o),ri(t,e,o)):(dt&&i&&kh(e),e.flags|=1,fe(t,e,n,o),e.child)}function xv(t,e,n,i,o,r){return _a(e),e.updateQueue=null,n=W_(e,i,n,o),$_(t),i=Fh(),t!==null&&!ne?(Xh(t,e,r),ri(t,e,r)):(dt&&i&&kh(e),e.flags|=1,fe(t,e,n,r),e.child)}function Tv(t,e,n,i,o){if(_a(e),e.stateNode===null){var r=eo,l=n.contextType;typeof l=="object"&&l!==null&&(r=me(l)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},qh(e),l=n.contextType,r.context=typeof l=="object"&&l!==null?me(l):eo,r.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(lf(e,n,l,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&Sd.enqueueReplaceState(r,r.state,null),jr(e,i,r,o),Pr(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var u=e.memoizedProps,f=Ta(n,u);r.props=f;var d=r.context,p=n.contextType;l=eo,typeof p=="object"&&p!==null&&(l=me(p));var m=n.getDerivedStateFromProps;p=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||d!==l)&&pv(e,r,i,l),xi=!1;var g=e.memoizedState;r.state=g,jr(e,i,r,o),Pr(),d=e.memoizedState,u||g!==d||xi?(typeof m=="function"&&(lf(e,n,m,i),d=e.memoizedState),(f=xi||mv(e,n,f,i,g,d,l))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),r.props=i,r.state=d,r.context=l,i=f):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,gd(t,e),l=e.memoizedProps,p=Ta(n,l),r.props=p,m=e.pendingProps,g=r.context,d=n.contextType,f=eo,typeof d=="object"&&d!==null&&(f=me(d)),u=n.getDerivedStateFromProps,(d=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==m||g!==f)&&pv(e,r,i,f),xi=!1,g=e.memoizedState,r.state=g,jr(e,i,r,o),Pr();var y=e.memoizedState;l!==m||g!==y||xi||t!==null&&t.dependencies!==null&&tu(t.dependencies)?(typeof u=="function"&&(lf(e,n,u,i),y=e.memoizedState),(p=xi||mv(e,n,p,i,g,y,f)||t!==null&&t.dependencies!==null&&tu(t.dependencies))?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,y,f),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,y,f)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),r.props=i,r.state=y,r.context=f,i=p):(typeof r.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,zl(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=ba(e,t.child,null,o),e.child=ba(e,null,n,o)):fe(t,e,n,o),e.memoizedState=r.state,t=e.child):t=ri(t,e,o),t}function Sv(t,e,n,i){return ya(),e.flags|=256,fe(t,e,n,i),e.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(t){return{baseLanes:t,cachePool:G_()}}function ff(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Be),t}function jb(t,e,n){var i=e.pendingProps,o=!1,r=(e.flags&128)!==0,l;if((l=r)||(l=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),l&&(o=!0,e.flags&=-129),l=(e.flags&32)!==0,e.flags&=-33,t===null){if(dt){if(o?Si(e):wi(),(t=Rt)?(t=Ax(t,on),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Hi!==null?{id:wn,overflow:En}:null,retryLane:536870912,hydrationErrors:null},n=U_(t),n.return=e,e.child=n,he=e,Rt=null)):t=null,t===null)throw Zi(e);return Vd(t)?e.lanes=32:e.lanes=536870912,null}var u=i.children;return i=i.fallback,o?(wi(),o=e.mode,u=su({mode:"hidden",children:u},o),i=da(i,o,n,null),u.return=e,i.return=e,u.sibling=i,e.child=u,i=e.child,i.memoizedState=cf(n),i.childLanes=ff(t,l,n),e.memoizedState=uf,wr(null,i)):(Si(e),Cd(e,u))}var f=t.memoizedState;if(f!==null&&(u=f.dehydrated,u!==null)){if(r)e.flags&256?(Si(e),e.flags&=-257,e=df(t,e,n)):e.memoizedState!==null?(wi(),e.child=t.child,e.flags|=128,e=null):(wi(),u=i.fallback,o=e.mode,i=su({mode:"visible",children:i.children},o),u=da(u,o,n,null),u.flags|=2,i.return=e,u.return=e,i.sibling=u,e.child=i,ba(e,t.child,null,n),i=e.child,i.memoizedState=cf(n),i.childLanes=ff(t,l,n),e.memoizedState=uf,e=wr(null,i));else if(Si(e),Vd(u)){if(l=u.nextSibling&&u.nextSibling.dataset,l)var d=l.dgst;l=d,i=Error(j(419)),i.stack="",i.digest=l,Jr({value:i,source:null,stack:null}),e=df(t,e,n)}else if(ne||ko(t,e,n,!1),l=(n&t.childLanes)!==0,ne||l){if(l=Et,l!==null&&(i=d_(l,n),i!==0&&i!==f.retryLane))throw f.retryLane=i,Aa(t,i),Re(l,t,i),am;kd(u)||fu(),e=df(t,e,n)}else kd(u)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,Rt=sn(u.nextSibling),he=e,dt=!0,Ni=null,on=!1,t!==null&&Z_(e,t),e=Cd(e,i.children),e.flags|=4096);return e}return o?(wi(),u=i.fallback,o=e.mode,f=t.child,d=f.sibling,i=$n(f,{mode:"hidden",children:i.children}),i.subtreeFlags=f.subtreeFlags&65011712,d!==null?u=$n(d,u):(u=da(u,o,n,null),u.flags|=2),u.return=e,i.return=e,i.sibling=u,e.child=i,wr(null,i),i=e.child,u=t.child.memoizedState,u===null?u=cf(n):(o=u.cachePool,o!==null?(f=ee._currentValue,o=o.parent!==f?{parent:f,pool:f}:o):o=G_(),u={baseLanes:u.baseLanes|n,cachePool:o}),i.memoizedState=u,i.childLanes=ff(t,l,n),e.memoizedState=uf,wr(t.child,i)):(Si(e),n=t.child,t=n.sibling,n=$n(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(l=e.deletions,l===null?(e.deletions=[t],e.flags|=16):l.push(t)),e.child=n,e.memoizedState=null,n)}function Cd(t,e){return e=su({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function su(t,e){return t=je(22,t,null,e),t.lanes=0,t}function df(t,e,n){return ba(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function hf(t,e,n,i,o,r){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:r}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=n,l.tailMode=o,l.treeForkCount=r)}function Bb(t,e,n){var i=e.pendingProps,o=i.revealOrder,r=i.tail;i=i.children;var l=Kt.current,u=(l&2)!==0;if(u?(l=l&1|2,e.flags|=128):l&=1,At(Kt,l),fe(t,e,i,n),i=dt?Wr:0,!u&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wv(t,n,e);else if(t.tag===19)wv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),hf(e,!1,o,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&iu(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}hf(e,!0,n,null,r,i);break;case"together":hf(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))if(t!==null){if(ko(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function om(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&tu(t)))}function p2(t,e,n){switch(e.tag){case 3:Fl(e,e.stateNode.containerInfo),Ti(e,ee,t.memoizedState.cache),ya();break;case 27:case 5:td(e);break;case 4:Fl(e,e.stateNode.containerInfo);break;case 10:Ti(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,_d(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Si(e),e.flags|=128,null):n&e.child.childLanes?jb(t,e,n):(Si(e),t=ri(t,e,n),t!==null?t.sibling:null);Si(e);break;case 19:var o=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(ko(t,e,n,!1),i=(n&e.childLanes)!==0),o){if(i)return Bb(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),At(Kt,Kt.current),i)break;return null;case 22:return e.lanes=0,Pb(t,e,n,e.pendingProps);case 24:Ti(e,ee,t.memoizedState.cache)}return ri(t,e,n)}function kb(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)ne=!0;else{if(!om(t,n)&&!(e.flags&128))return ne=!1,p2(t,e,n);ne=!!(t.flags&131072)}else ne=!1,dt&&e.flags&1048576&&H_(e,Wr,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=ra(e.elementType),e.type=t,typeof t=="function")Bh(t)?(i=Ta(t,i),e.tag=1,e=Tv(null,e,t,i,n)):(e.tag=0,e=Ed(null,e,t,i,n));else{if(t!=null){var o=t.$$typeof;if(o===Sh){e.tag=11,e=vv(null,e,t,i,n);break t}else if(o===wh){e.tag=14,e=yv(null,e,t,i,n);break t}}throw e=Wf(t)||t,Error(j(306,e,""))}}return e;case 0:return Ed(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,o=Ta(i,e.pendingProps),Tv(t,e,i,o,n);case 3:t:{if(Fl(e,e.stateNode.containerInfo),t===null)throw Error(j(387));i=e.pendingProps;var r=e.memoizedState;o=r.element,gd(t,e),jr(e,i,null,n);var l=e.memoizedState;if(i=l.cache,Ti(e,ee,i),i!==r.cache&&md(e,[ee],n,!0),Pr(),i=l.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:l.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=Sv(t,e,i,n);break t}else if(i!==o){o=an(Error(j(424)),e),Jr(o),e=Sv(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=sn(t.firstChild),he=e,dt=!0,Ni=null,on=!0,n=F_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ya(),i===o){e=ri(t,e,n);break t}fe(t,e,i,n)}e=e.child}return e;case 26:return zl(t,e),t===null?(n=Gv(e.type,null,e.pendingProps,null))?e.memoizedState=n:dt||(n=e.type,t=e.pendingProps,i=pu(Oi.current).createElement(n),i[de]=e,i[Oe]=t,pe(i,n,t),se(i),e.stateNode=i):e.memoizedState=Gv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return td(e),t===null&&dt&&(i=e.stateNode=Mx(e.type,e.pendingProps,Oi.current),he=e,on=!0,o=Rt,Ki(e.type)?(Ud=o,Rt=sn(i.firstChild)):Rt=o),fe(t,e,e.pendingProps.children,n),zl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&dt&&((o=i=Rt)&&(i=I2(i,e.type,e.pendingProps,on),i!==null?(e.stateNode=i,he=e,Rt=sn(i.firstChild),on=!1,o=!0):o=!1),o||Zi(e)),td(e),o=e.type,r=e.pendingProps,l=t!==null?t.memoizedProps:null,i=r.children,jd(o,r)?i=null:l!==null&&jd(o,l)&&(e.flags|=32),e.memoizedState!==null&&(o=Yh(t,e,r2,null,null,n),os._currentValue=o),zl(t,e),fe(t,e,i,n),e.child;case 6:return t===null&&dt&&((t=n=Rt)&&(n=Y2(n,e.pendingProps,on),n!==null?(e.stateNode=n,he=e,Rt=null,t=!0):t=!1),t||Zi(e)),null;case 13:return jb(t,e,n);case 4:return Fl(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ba(e,null,i,n):fe(t,e,i,n),e.child;case 11:return vv(t,e,e.type,e.pendingProps,n);case 7:return fe(t,e,e.pendingProps,n),e.child;case 8:return fe(t,e,e.pendingProps.children,n),e.child;case 12:return fe(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Ti(e,e.type,i.value),fe(t,e,i.children,n),e.child;case 9:return o=e.type._context,i=e.pendingProps.children,_a(e),o=me(o),i=i(o),e.flags|=1,fe(t,e,i,n),e.child;case 14:return yv(t,e,e.type,e.pendingProps,n);case 15:return Db(t,e,e.type,e.pendingProps,n);case 19:return Bb(t,e,n);case 31:return m2(t,e,n);case 22:return Pb(t,e,n,e.pendingProps);case 24:return _a(e),i=me(ee),t===null?(o=Hh(),o===null&&(o=Et,r=Uh(),o.pooledCache=r,r.refCount++,r!==null&&(o.pooledCacheLanes|=n),o=r),e.memoizedState={parent:i,cache:o},qh(e),Ti(e,ee,o)):(t.lanes&n&&(gd(t,e),jr(e,null,null,n),Pr()),o=t.memoizedState,r=e.memoizedState,o.parent!==i?(o={parent:i,cache:i},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Ti(e,ee,i)):(i=r.cache,Ti(e,ee,i),i!==o.cache&&md(e,[ee],n,!0))),fe(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(j(156,e.tag))}function Vn(t){t.flags|=4}function mf(t,e,n,i,o){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if(lx())t.flags|=8192;else throw ma=eu,Zh}else t.flags&=-16777217}function Ev(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Ox(e))if(lx())t.flags|=8192;else throw ma=eu,Zh}function cl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?u_():536870912,t.lanes|=e,Co|=e)}function dr(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function g2(t,e,n){var i=e.pendingProps;switch(Vh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Mt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Wn(ee),bo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ua(e)?Vn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,of())),Mt(e),null;case 26:var o=e.type,r=e.memoizedState;return t===null?(Vn(e),r!==null?(Mt(e),Ev(e,r)):(Mt(e),mf(e,o,null,i,n))):r?r!==t.memoizedState?(Vn(e),Mt(e),Ev(e,r)):(Mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Vn(e),Mt(e),mf(e,o,t,i,n)),null;case 27:if(Xl(e),n=Oi.current,o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Vn(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Mt(e),null}t=An.current,Ua(e)?tv(e):(t=Mx(o,i,n),e.stateNode=t,Vn(e))}return Mt(e),null;case 5:if(Xl(e),o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Vn(e);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Mt(e),null}if(r=An.current,Ua(e))tv(e);else{var l=pu(Oi.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?l.createElement(o,{is:i.is}):l.createElement(o)}}r[de]=e,r[Oe]=i;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=r;t:switch(pe(r,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Vn(e)}}return Mt(e),mf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Vn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(j(166));if(t=Oi.current,Ua(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,o=he,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}t[de]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||wx(t.nodeValue,n)),t||Zi(e,!0)}else t=pu(t).createTextNode(i),t[de]=e,e.stateNode=t}return Mt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ua(e),n!==null){if(t===null){if(!i)throw Error(j(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(557));t[de]=e}else ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),t=!1}else n=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Pe(e),e):(Pe(e),null);if(e.flags&128)throw Error(j(558))}return Mt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(j(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[de]=e}else ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),o=!1}else o=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(Pe(e),e):(Pe(e),null)}return Pe(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==o&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),cl(e,e.updateQueue),Mt(e),null);case 4:return bo(),t===null&&dm(e.stateNode.containerInfo),Mt(e),null;case 10:return Wn(e.type),Mt(e),null;case 19:if(le(Kt),i=e.memoizedState,i===null)return Mt(e),null;if(o=(e.flags&128)!==0,r=i.rendering,r===null)if(o)dr(i,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=iu(t),r!==null){for(e.flags|=128,dr(i,!1),t=r.updateQueue,e.updateQueue=t,cl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)V_(n,t),n=n.sibling;return At(Kt,Kt.current&1|2),dt&&Yn(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ke()>uu&&(e.flags|=128,o=!0,dr(i,!1),e.lanes=4194304)}else{if(!o)if(t=iu(r),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,cl(e,t),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!dt)return Mt(e),null}else 2*ke()-i.renderingStartTime>uu&&n!==536870912&&(e.flags|=128,o=!0,dr(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ke(),t.sibling=null,n=Kt.current,At(Kt,o?n&1|2:n&1),dt&&Yn(e,i.treeForkCount),t):(Mt(e),null);case 22:case 23:return Pe(e),Gh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),n=e.updateQueue,n!==null&&cl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&le(ha),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Wn(ee),Mt(e),null;case 25:return null;case 30:return null}throw Error(j(156,e.tag))}function v2(t,e){switch(Vh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wn(ee),bo(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Xl(e),null;case 31:if(e.memoizedState!==null){if(Pe(e),e.alternate===null)throw Error(j(340));ya()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Pe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ya()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(Kt),null;case 4:return bo(),null;case 10:return Wn(e.type),null;case 22:case 23:return Pe(e),Gh(),t!==null&&le(ha),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Wn(ee),null;case 25:return null;default:return null}}function Vb(t,e){switch(Vh(e),e.tag){case 3:Wn(ee),bo();break;case 26:case 27:case 5:Xl(e);break;case 4:bo();break;case 31:e.memoizedState!==null&&Pe(e);break;case 13:Pe(e);break;case 19:le(Kt);break;case 10:Wn(e.type);break;case 22:case 23:Pe(e),Gh(),t!==null&&le(ha);break;case 24:Wn(ee)}}function Ss(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&t)===t){i=void 0;var r=n.create,l=n.inst;i=r(),l.destroy=i}n=n.next}while(n!==o)}}catch(u){Tt(e,e.return,u)}}function qi(t,e,n){try{var i=e.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var r=o.next;i=r;do{if((i.tag&t)===t){var l=i.inst,u=l.destroy;if(u!==void 0){l.destroy=void 0,o=e;var f=n,d=u;try{d()}catch(p){Tt(o,f,p)}}}i=i.next}while(i!==r)}}catch(p){Tt(e,e.return,p)}}function Ub(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{K_(e,n)}catch(i){Tt(t,t.return,i)}}}function Hb(t,e,n){n.props=Ta(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Tt(t,e,i)}}function kr(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){Tt(t,e,o)}}function Cn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){Tt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Tt(t,e,o)}else n.current=null}function Zb(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){Tt(t,t.return,o)}}function pf(t,e,n){try{var i=t.stateNode;V2(i,t.type,n,e),i[Oe]=e}catch(o){Tt(t,t.return,o)}}function qb(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ki(t.type)||t.tag===4}function gf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ki(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kn));else if(i!==4&&(i===27&&Ki(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function lu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ki(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}function Gb(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);pe(e,i,n),e[de]=t,e[Oe]=n}catch(r){Tt(t,t.return,r)}}var Fn=!1,te=!1,vf=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,re=null;function y2(t,e){if(t=t.containerInfo,Dd=_u,t=O_(t),Dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var l=0,u=-1,f=-1,d=0,p=0,m=t,g=null;e:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(u=l+o),m!==r||i!==0&&m.nodeType!==3||(f=l+i),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===t)break e;if(g===n&&++d===o&&(u=l),g===r&&++p===i&&(f=l),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},_u=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){switch(e=re,r=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)o=t[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,o=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var C=Ta(n.type,o);t=i.getSnapshotBeforeUpdate(C,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(E){Tt(n,n.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Bd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(j(163))}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}}function Ib(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Hn(t,n),i&4&&Ss(5,n);break;case 1:if(Hn(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(l){Tt(n,n.return,l)}else{var o=Ta(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(l){Tt(n,n.return,l)}}i&64&&Ub(n),i&512&&kr(n,n.return);break;case 3:if(Hn(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{K_(t,e)}catch(l){Tt(n,n.return,l)}}break;case 27:e===null&&i&4&&Gb(n);case 26:case 5:Hn(t,n),e===null&&i&4&&Zb(n),i&512&&kr(n,n.return);break;case 12:Hn(t,n);break;case 31:Hn(t,n),i&4&&Xb(t,n);break;case 13:Hn(t,n),i&4&&Kb(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=A2.bind(null,n),F2(t,n))));break;case 22:if(i=n.memoizedState!==null||Fn,!i){e=e!==null&&e.memoizedState!==null||te,o=Fn;var r=te;Fn=i,(te=e)&&!r?Gn(t,n,(n.subtreeFlags&8772)!==0):Hn(t,n),Fn=o,te=r}break;case 30:break;default:Hn(t,n)}}function Yb(t){var e=t.alternate;e!==null&&(t.alternate=null,Yb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Mh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,Me=!1;function Un(t,e,n){for(n=n.child;n!==null;)Fb(t,e,n),n=n.sibling}function Fb(t,e,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(gs,n)}catch{}switch(n.tag){case 26:te||Cn(n,e),Un(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:te||Cn(n,e);var i=Pt,o=Me;Ki(n.type)&&(Pt=n.stateNode,Me=!1),Un(t,e,n),Zr(n.stateNode),Pt=i,Me=o;break;case 5:te||Cn(n,e);case 6:if(i=Pt,o=Me,Pt=null,Un(t,e,n),Pt=i,Me=o,Pt!==null)if(Me)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(n.stateNode)}catch(r){Tt(n,e,r)}else try{Pt.removeChild(n.stateNode)}catch(r){Tt(n,e,r)}break;case 18:Pt!==null&&(Me?(t=Pt,Vv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ro(t)):Vv(Pt,n.stateNode));break;case 4:i=Pt,o=Me,Pt=n.stateNode.containerInfo,Me=!0,Un(t,e,n),Pt=i,Me=o;break;case 0:case 11:case 14:case 15:qi(2,n,e),te||qi(4,n,e),Un(t,e,n);break;case 1:te||(Cn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Hb(n,e,i)),Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:te=(i=te)||n.memoizedState!==null,Un(t,e,n),te=i;break;default:Un(t,e,n)}}function Xb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ro(t)}catch(n){Tt(e,e.return,n)}}}function Kb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ro(t)}catch(n){Tt(e,e.return,n)}}function _2(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cv),e;default:throw Error(j(435,t.tag))}}function fl(t,e){var n=_2(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var o=M2.bind(null,t,i);i.then(o,o)}})}function Ee(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],r=t,l=e,u=l;t:for(;u!==null;){switch(u.tag){case 27:if(Ki(u.type)){Pt=u.stateNode,Me=!1;break t}break;case 5:Pt=u.stateNode,Me=!1;break t;case 3:case 4:Pt=u.stateNode.containerInfo,Me=!0;break t}u=u.return}if(Pt===null)throw Error(j(160));Fb(r,l,o),Pt=null,Me=!1,r=o.alternate,r!==null&&(r.return=null),o.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qb(e,t),e=e.sibling}var pn=null;function Qb(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ee(e,t),Ce(t),i&4&&(qi(3,t,t.return),Ss(3,t),qi(5,t,t.return));break;case 1:Ee(e,t),Ce(t),i&512&&(te||n===null||Cn(n,n.return)),i&64&&Fn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=pn;if(Ee(e,t),Ce(t),i&512&&(te||n===null||Cn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,o=o.ownerDocument||o;e:switch(i){case"title":r=o.getElementsByTagName("title")[0],(!r||r[_s]||r[de]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=o.createElement(i),o.head.insertBefore(r,o.querySelector("head > title"))),pe(r,i,n),r[de]=t,se(r),i=r;break t;case"link":var l=Yv("link","href",o).get(i+(n.href||""));if(l){for(var u=0;u<l.length;u++)if(r=l[u],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(u,1);break e}}r=o.createElement(i),pe(r,i,n),o.head.appendChild(r);break;case"meta":if(l=Yv("meta","content",o).get(i+(n.content||""))){for(u=0;u<l.length;u++)if(r=l[u],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){l.splice(u,1);break e}}r=o.createElement(i),pe(r,i,n),o.head.appendChild(r);break;default:throw Error(j(468,i))}r[de]=t,se(r),i=r}t.stateNode=i}else Fv(o,t.type,t.stateNode);else t.stateNode=Iv(o,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Fv(o,t.type,t.stateNode):Iv(o,i,t.memoizedProps)):i===null&&t.stateNode!==null&&pf(t,t.memoizedProps,n.memoizedProps)}break;case 27:Ee(e,t),Ce(t),i&512&&(te||n===null||Cn(n,n.return)),n!==null&&i&4&&pf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Ee(e,t),Ce(t),i&512&&(te||n===null||Cn(n,n.return)),t.flags&32){o=t.stateNode;try{To(o,"")}catch(C){Tt(t,t.return,C)}}i&4&&t.stateNode!=null&&(o=t.memoizedProps,pf(t,o,n!==null?n.memoizedProps:o)),i&1024&&(vf=!0);break;case 6:if(Ee(e,t),Ce(t),i&4){if(t.stateNode===null)throw Error(j(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(C){Tt(t,t.return,C)}}break;case 3:if(jl=null,o=pn,pn=gu(e.containerInfo),Ee(e,t),pn=o,Ce(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(C){Tt(t,t.return,C)}vf&&(vf=!1,$b(t));break;case 4:i=pn,pn=gu(t.stateNode.containerInfo),Ee(e,t),Ce(t),pn=i;break;case 12:Ee(e,t),Ce(t);break;case 31:Ee(e,t),Ce(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fl(t,i)));break;case 13:Ee(e,t),Ce(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fu=ke()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fl(t,i)));break;case 22:o=t.memoizedState!==null;var f=n!==null&&n.memoizedState!==null,d=Fn,p=te;if(Fn=d||o,te=p||f,Ee(e,t),te=p,Fn=d,Ce(t),i&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(n===null||f||Fn||te||sa(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){f=n=e;try{if(r=f.stateNode,o)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{u=f.stateNode;var m=f.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(C){Tt(f,f.return,C)}}}else if(e.tag===6){if(n===null){f=e;try{f.stateNode.nodeValue=o?"":f.memoizedProps}catch(C){Tt(f,f.return,C)}}}else if(e.tag===18){if(n===null){f=e;try{var y=f.stateNode;o?Uv(y,!0):Uv(f.stateNode,!1)}catch(C){Tt(f,f.return,C)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,fl(t,n))));break;case 19:Ee(e,t),Ce(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fl(t,i)));break;case 30:break;case 21:break;default:Ee(e,t),Ce(t)}}function Ce(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(qb(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,r=gf(t);lu(t,r,o);break;case 5:var l=n.stateNode;n.flags&32&&(To(l,""),n.flags&=-33);var u=gf(t);lu(t,u,l);break;case 3:case 4:var f=n.stateNode.containerInfo,d=gf(t);Ad(t,d,f);break;default:throw Error(j(161))}}catch(p){Tt(t,t.return,p)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $b(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$b(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Hn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ib(t,e.alternate,e),e=e.sibling}function sa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:qi(4,e,e.return),sa(e);break;case 1:Cn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Hb(e,e.return,n),sa(e);break;case 27:Zr(e.stateNode);case 26:case 5:Cn(e,e.return),sa(e);break;case 22:e.memoizedState===null&&sa(e);break;case 30:sa(e);break;default:sa(e)}t=t.sibling}}function Gn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,o=t,r=e,l=r.flags;switch(r.tag){case 0:case 11:case 15:Gn(o,r,n),Ss(4,r);break;case 1:if(Gn(o,r,n),i=r,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(d){Tt(i,i.return,d)}if(i=r,o=i.updateQueue,o!==null){var u=i.stateNode;try{var f=o.shared.hiddenCallbacks;if(f!==null)for(o.shared.hiddenCallbacks=null,o=0;o<f.length;o++)X_(f[o],u)}catch(d){Tt(i,i.return,d)}}n&&l&64&&Ub(r),kr(r,r.return);break;case 27:Gb(r);case 26:case 5:Gn(o,r,n),n&&i===null&&l&4&&Zb(r),kr(r,r.return);break;case 12:Gn(o,r,n);break;case 31:Gn(o,r,n),n&&l&4&&Xb(o,r);break;case 13:Gn(o,r,n),n&&l&4&&Kb(o,r);break;case 22:r.memoizedState===null&&Gn(o,r,n),kr(r,r.return);break;case 30:break;default:Gn(o,r,n)}e=e.sibling}}function rm(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&xs(n))}function sm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xs(t))}function hn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wb(t,e,n,i),e=e.sibling}function Wb(t,e,n,i){var o=e.flags;switch(e.tag){case 0:case 11:case 15:hn(t,e,n,i),o&2048&&Ss(9,e);break;case 1:hn(t,e,n,i);break;case 3:hn(t,e,n,i),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xs(t)));break;case 12:if(o&2048){hn(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,l=r.id,u=r.onPostCommit;typeof u=="function"&&u(l,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){Tt(e,e.return,f)}}else hn(t,e,n,i);break;case 31:hn(t,e,n,i);break;case 13:hn(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,l=e.alternate,e.memoizedState!==null?r._visibility&2?hn(t,e,n,i):Vr(t,e):r._visibility&2?hn(t,e,n,i):(r._visibility|=2,Ga(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),o&2048&&rm(l,e);break;case 24:hn(t,e,n,i),o&2048&&sm(e.alternate,e);break;default:hn(t,e,n,i)}}function Ga(t,e,n,i,o){for(o=o&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,l=e,u=n,f=i,d=l.flags;switch(l.tag){case 0:case 11:case 15:Ga(r,l,u,f,o),Ss(8,l);break;case 23:break;case 22:var p=l.stateNode;l.memoizedState!==null?p._visibility&2?Ga(r,l,u,f,o):Vr(r,l):(p._visibility|=2,Ga(r,l,u,f,o)),o&&d&2048&&rm(l.alternate,l);break;case 24:Ga(r,l,u,f,o),o&&d&2048&&sm(l.alternate,l);break;default:Ga(r,l,u,f,o)}e=e.sibling}}function Vr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,o=i.flags;switch(i.tag){case 22:Vr(n,i),o&2048&&rm(i.alternate,i);break;case 24:Vr(n,i),o&2048&&sm(i.alternate,i);break;default:Vr(n,i)}e=e.sibling}}var Er=8192;function Ha(t,e,n){if(t.subtreeFlags&Er)for(t=t.child;t!==null;)Jb(t,e,n),t=t.sibling}function Jb(t,e,n){switch(t.tag){case 26:Ha(t,e,n),t.flags&Er&&t.memoizedState!==null&&oA(n,pn,t.memoizedState,t.memoizedProps);break;case 5:Ha(t,e,n);break;case 3:case 4:var i=pn;pn=gu(t.stateNode.containerInfo),Ha(t,e,n),pn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Er,Er=16777216,Ha(t,e,n),Er=i):Ha(t,e,n));break;default:Ha(t,e,n)}}function tx(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function hr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];re=i,nx(i,t)}tx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ex(t),t=t.sibling}function ex(t){switch(t.tag){case 0:case 11:case 15:hr(t),t.flags&2048&&qi(9,t,t.return);break;case 3:hr(t);break;case 12:hr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Dl(t)):hr(t);break;default:hr(t)}}function Dl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];re=i,nx(i,t)}tx(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:qi(8,e,e.return),Dl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Dl(e));break;default:Dl(e)}t=t.sibling}}function nx(t,e){for(;re!==null;){var n=re;switch(n.tag){case 0:case 11:case 15:qi(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:xs(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,re=i;else t:for(n=t;re!==null;){i=re;var o=i.sibling,r=i.return;if(Yb(i),i===n){re=null;break t}if(o!==null){o.return=r,re=o;break t}re=r}}}var b2={getCacheForType:function(t){var e=me(ee),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return me(ee).controller.signal}},x2=typeof WeakMap=="function"?WeakMap:Map,yt=0,Et=null,ut=null,ct=0,xt=0,De=null,Mi=!1,Uo=!1,lm=!1,si=0,It=0,Gi=0,pa=0,um=0,Be=0,Co=0,Ur=null,Le=null,Md=!1,Fu=0,ix=0,uu=1/0,cu=null,Pi=null,ie=0,ji=null,Ao=null,Jn=0,Ld=0,Rd=null,ax=null,Hr=0,Od=null;function He(){return yt&2&&ct!==0?ct&-ct:W.T!==null?fm():h_()}function ox(){if(Be===0)if(!(ct&536870912)||dt){var t=il;il<<=1,!(il&3932160)&&(il=262144),Be=t}else Be=536870912;return t=Ge.current,t!==null&&(t.flags|=32),Be}function Re(t,e,n){(t===Et&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(Mo(t,0),Li(t,ct,Be,!1)),ys(t,n),(!(yt&2)||t!==Et)&&(t===Et&&(!(yt&2)&&(pa|=n),It===4&&Li(t,ct,Be,!1)),Nn(t))}function rx(t,e,n){if(yt&6)throw Error(j(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||vs(t,e),o=i?w2(t,e):yf(t,e,!0),r=i;do{if(o===0){Uo&&!i&&Li(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!T2(n)){o=yf(t,e,!1),r=!1;continue}if(o===2){if(r=e,t.errorRecoveryDisabledLanes&r)var l=0;else l=t.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){e=l;t:{var u=t;o=Ur;var f=u.current.memoizedState.isDehydrated;if(f&&(Mo(u,l).flags|=256),l=yf(u,l,!1),l!==2){if(lm&&!f){u.errorRecoveryDisabledLanes|=r,pa|=r,o=4;break t}r=Le,Le=o,r!==null&&(Le===null?Le=r:Le.push.apply(Le,r))}o=l}if(r=!1,o!==2)continue}}if(o===1){Mo(t,0),Li(t,e,0,!0);break}t:{switch(i=t,r=o,r){case 0:case 1:throw Error(j(345));case 4:if((e&4194048)!==e)break;case 6:Li(i,e,Be,!Mi);break t;case 2:Le=null;break;case 3:case 5:break;default:throw Error(j(329))}if((e&62914560)===e&&(o=Fu+300-ke(),10<o)){if(Li(i,e,Be,!Mi),ju(i,0,!0)!==0)break t;Jn=e,i.timeoutHandle=Cx(Av.bind(null,i,n,Le,cu,Md,e,Be,pa,Co,Mi,r,"Throttled",-0,0),o);break t}Av(i,n,Le,cu,Md,e,Be,pa,Co,Mi,r,null,-0,0)}}break}while(1);Nn(t)}function Av(t,e,n,i,o,r,l,u,f,d,p,m,g,y){if(t.timeoutHandle=-1,m=e.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},Jb(e,r,m);var C=(r&62914560)===r?Fu-ke():(r&4194048)===r?ix-ke():0;if(C=rA(m,C),C!==null){Jn=r,t.cancelPendingCommit=C(Lv.bind(null,t,e,r,n,i,o,l,u,f,p,m,null,g,y)),Li(t,r,l,!d);return}}Lv(t,e,r,n,i,o,l,u,f)}function T2(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],r=o.getSnapshot;o=o.value;try{if(!qe(r(),o))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e,n,i){e&=~um,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var o=e;0<o;){var r=31-Ue(o),l=1<<r;i[r]=-1,o&=~l}n!==0&&c_(t,n,e)}function Xu(){return yt&6?!0:(ws(0,!1),!1)}function cm(){if(ut!==null){if(xt===0)var t=ut.return;else t=ut,Qn=Ma=null,Kh(t),po=null,ts=0,t=ut;for(;t!==null;)Vb(t.alternate,t),t=t.return;ut=null}}function Mo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Z2(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Jn=0,cm(),Et=t,ut=n=$n(t.current,null),ct=e,xt=0,De=null,Mi=!1,Uo=vs(t,e),lm=!1,Co=Be=um=pa=Gi=It=0,Le=Ur=null,Md=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var o=31-Ue(i),r=1<<o;e|=t[o],i&=~r}return si=e,Uu(),n}function sx(t,e){nt=null,W.H=ns,e===Vo||e===Zu?(e=ov(),xt=3):e===Zh?(e=ov(),xt=4):xt=e===am?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,De=e,ut===null&&(It=1,ru(t,an(e,t.current)))}function lx(){var t=Ge.current;return t===null?!0:(ct&4194048)===ct?rn===null:(ct&62914560)===ct||ct&536870912?t===rn:!1}function ux(){var t=W.H;return W.H=ns,t===null?ns:t}function cx(){var t=W.A;return W.A=b2,t}function fu(){It=4,Mi||(ct&4194048)!==ct&&Ge.current!==null||(Uo=!0),!(Gi&134217727)&&!(pa&134217727)||Et===null||Li(Et,ct,Be,!1)}function yf(t,e,n){var i=yt;yt|=2;var o=ux(),r=cx();(Et!==t||ct!==e)&&(cu=null,Mo(t,e)),e=!1;var l=It;t:do try{if(xt!==0&&ut!==null){var u=ut,f=De;switch(xt){case 8:cm(),l=6;break t;case 3:case 2:case 9:case 6:Ge.current===null&&(e=!0);var d=xt;if(xt=0,De=null,ao(t,u,f,d),n&&Uo){l=0;break t}break;default:d=xt,xt=0,De=null,ao(t,u,f,d)}}S2(),l=It;break}catch(p){sx(t,p)}while(1);return e&&t.shellSuspendCounter++,Qn=Ma=null,yt=i,W.H=o,W.A=r,ut===null&&(Et=null,ct=0,Uu()),l}function S2(){for(;ut!==null;)fx(ut)}function w2(t,e){var n=yt;yt|=2;var i=ux(),o=cx();Et!==t||ct!==e?(cu=null,uu=ke()+500,Mo(t,e)):Uo=vs(t,e);t:do try{if(xt!==0&&ut!==null){e=ut;var r=De;e:switch(xt){case 1:xt=0,De=null,ao(t,e,r,1);break;case 2:case 9:if(av(r)){xt=0,De=null,Mv(e);break}e=function(){xt!==2&&xt!==9||Et!==t||(xt=7),Nn(t)},r.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:av(r)?(xt=0,De=null,Mv(e)):(xt=0,De=null,ao(t,e,r,7));break;case 5:var l=null;switch(ut.tag){case 26:l=ut.memoizedState;case 5:case 27:var u=ut;if(l?Ox(l):u.stateNode.complete){xt=0,De=null;var f=u.sibling;if(f!==null)ut=f;else{var d=u.return;d!==null?(ut=d,Ku(d)):ut=null}break e}}xt=0,De=null,ao(t,e,r,5);break;case 6:xt=0,De=null,ao(t,e,r,6);break;case 8:cm(),It=6;break t;default:throw Error(j(462))}}E2();break}catch(p){sx(t,p)}while(1);return Qn=Ma=null,W.H=i,W.A=o,yt=n,ut!==null?0:(Et=null,ct=0,Uu(),It)}function E2(){for(;ut!==null&&!XE();)fx(ut)}function fx(t){var e=kb(t.alternate,t,si);t.memoizedProps=t.pendingProps,e===null?Ku(t):ut=e}function Mv(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=xv(n,e,e.pendingProps,e.type,void 0,ct);break;case 11:e=xv(n,e,e.pendingProps,e.type.render,e.ref,ct);break;case 5:Kh(e);default:Vb(n,e),e=ut=V_(e,si),e=kb(n,e,si)}t.memoizedProps=t.pendingProps,e===null?Ku(t):ut=e}function ao(t,e,n,i){Qn=Ma=null,Kh(e),po=null,ts=0;var o=e.return;try{if(h2(t,o,e,n,ct)){It=1,ru(t,an(n,t.current)),ut=null;return}}catch(r){if(o!==null)throw ut=o,r;It=1,ru(t,an(n,t.current)),ut=null;return}e.flags&32768?(dt||i===1?t=!0:Uo||ct&536870912?t=!1:(Mi=t=!0,(i===2||i===9||i===3||i===6)&&(i=Ge.current,i!==null&&i.tag===13&&(i.flags|=16384))),dx(e,t)):Ku(e)}function Ku(t){var e=t;do{if(e.flags&32768){dx(e,Mi);return}t=e.return;var n=g2(e.alternate,e,si);if(n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);It===0&&(It=5)}function dx(t,e){do{var n=v2(t.alternate,t);if(n!==null){n.flags&=32767,ut=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ut=t;return}ut=t=n}while(t!==null);It=6,ut=null}function Lv(t,e,n,i,o,r,l,u,f){t.cancelPendingCommit=null;do Qu();while(ie!==0);if(yt&6)throw Error(j(327));if(e!==null){if(e===t.current)throw Error(j(177));if(r=e.lanes|e.childLanes,r|=Ph,aC(t,n,r,l,u,f),t===Et&&(ut=Et=null,ct=0),Ao=e,ji=t,Jn=n,Ld=r,Rd=o,ax=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,L2(Kl,function(){return vx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=W.T,W.T=null,o=_t.p,_t.p=2,l=yt,yt|=4;try{y2(t,e,n)}finally{yt=l,_t.p=o,W.T=i}}ie=1,hx(),mx(),px()}}function hx(){if(ie===1){ie=0;var t=ji,e=Ao,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=W.T,W.T=null;var i=_t.p;_t.p=2;var o=yt;yt|=4;try{Qb(e,t);var r=Pd,l=O_(t.containerInfo),u=r.focusedElem,f=r.selectionRange;if(l!==u&&u&&u.ownerDocument&&R_(u.ownerDocument.documentElement,u)){if(f!==null&&Dh(u)){var d=f.start,p=f.end;if(p===void 0&&(p=d),"selectionStart"in u)u.selectionStart=d,u.selectionEnd=Math.min(p,u.value.length);else{var m=u.ownerDocument||document,g=m&&m.defaultView||window;if(g.getSelection){var y=g.getSelection(),C=u.textContent.length,E=Math.min(f.start,C),A=f.end===void 0?E:Math.min(f.end,C);!y.extend&&E>A&&(l=A,A=E,E=l);var _=$g(u,E),b=$g(u,A);if(_&&b&&(y.rangeCount!==1||y.anchorNode!==_.node||y.anchorOffset!==_.offset||y.focusNode!==b.node||y.focusOffset!==b.offset)){var S=m.createRange();S.setStart(_.node,_.offset),y.removeAllRanges(),E>A?(y.addRange(S),y.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),y.addRange(S))}}}}for(m=[],y=u;y=y.parentNode;)y.nodeType===1&&m.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<m.length;u++){var M=m[u];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}_u=!!Dd,Pd=Dd=null}finally{yt=o,_t.p=i,W.T=n}}t.current=e,ie=2}}function mx(){if(ie===2){ie=0;var t=ji,e=Ao,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=W.T,W.T=null;var i=_t.p;_t.p=2;var o=yt;yt|=4;try{Ib(t,e.alternate,e)}finally{yt=o,_t.p=i,W.T=n}}ie=3}}function px(){if(ie===4||ie===3){ie=0,KE();var t=ji,e=Ao,n=Jn,i=ax;e.subtreeFlags&10256||e.flags&10256?ie=5:(ie=0,Ao=ji=null,gx(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(Pi=null),Ah(n),e=e.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(gs,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=W.T,o=_t.p,_t.p=2,W.T=null;try{for(var r=t.onRecoverableError,l=0;l<i.length;l++){var u=i[l];r(u.value,{componentStack:u.stack})}}finally{W.T=e,_t.p=o}}Jn&3&&Qu(),Nn(t),o=t.pendingLanes,n&261930&&o&42?t===Od?Hr++:(Hr=0,Od=t):Hr=0,ws(0,!1)}}function gx(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xs(e)))}function Qu(){return hx(),mx(),px(),vx()}function vx(){if(ie!==5)return!1;var t=ji,e=Ld;Ld=0;var n=Ah(Jn),i=W.T,o=_t.p;try{_t.p=32>n?32:n,W.T=null,n=Rd,Rd=null;var r=ji,l=Jn;if(ie=0,Ao=ji=null,Jn=0,yt&6)throw Error(j(331));var u=yt;if(yt|=4,ex(r.current),Wb(r,r.current,l,n),yt=u,ws(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(gs,r)}catch{}return!0}finally{_t.p=o,W.T=i,gx(t,e)}}function Rv(t,e,n){e=an(n,e),e=wd(t.stateNode,e,2),t=Di(t,e,2),t!==null&&(ys(t,2),Nn(t))}function Tt(t,e,n){if(t.tag===3)Rv(t,t,n);else for(;e!==null;){if(e.tag===3){Rv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pi===null||!Pi.has(i))){t=an(n,t),n=Nb(2),i=Di(e,n,2),i!==null&&(zb(n,i,e,t),ys(i,2),Nn(i));break}}e=e.return}}function _f(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new x2;var o=new Set;i.set(e,o)}else o=i.get(e),o===void 0&&(o=new Set,i.set(e,o));o.has(n)||(lm=!0,o.add(n),t=C2.bind(null,t,e,n),e.then(t,t))}function C2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Et===t&&(ct&n)===n&&(It===4||It===3&&(ct&62914560)===ct&&300>ke()-Fu?!(yt&2)&&Mo(t,0):um|=n,Co===ct&&(Co=0)),Nn(t)}function yx(t,e){e===0&&(e=u_()),t=Aa(t,e),t!==null&&(ys(t,e),Nn(t))}function A2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yx(t,n)}function M2(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(e),yx(t,n)}function L2(t,e){return Eh(t,e)}var du=null,Ia=null,Nd=!1,hu=!1,bf=!1,Ri=0;function Nn(t){t!==Ia&&t.next===null&&(Ia===null?du=Ia=t:Ia=Ia.next=t),hu=!0,Nd||(Nd=!0,O2())}function ws(t,e){if(!bf&&hu){bf=!0;do for(var n=!1,i=du;i!==null;){if(!e)if(t!==0){var o=i.pendingLanes;if(o===0)var r=0;else{var l=i.suspendedLanes,u=i.pingedLanes;r=(1<<31-Ue(42|t)+1)-1,r&=o&~(l&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Ov(i,r))}else r=ct,r=ju(i,i===Et?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||vs(i,r)||(n=!0,Ov(i,r));i=i.next}while(n);bf=!1}}function R2(){_x()}function _x(){hu=Nd=!1;var t=0;Ri!==0&&H2()&&(t=Ri);for(var e=ke(),n=null,i=du;i!==null;){var o=i.next,r=bx(i,e);r===0?(i.next=null,n===null?du=o:n.next=o,o===null&&(Ia=n)):(n=i,(t!==0||r&3)&&(hu=!0)),i=o}ie!==0&&ie!==5||ws(t,!1),Ri!==0&&(Ri=0)}function bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,o=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var l=31-Ue(r),u=1<<l,f=o[l];f===-1?(!(u&n)||u&i)&&(o[l]=iC(u,e)):f<=e&&(t.expiredLanes|=u),r&=~u}if(e=Et,n=ct,n=ju(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Fc(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||vs(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Fc(i),Ah(n)){case 2:case 8:n=s_;break;case 32:n=Kl;break;case 268435456:n=l_;break;default:n=Kl}return i=xx.bind(null,t),n=Eh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Fc(i),t.callbackPriority=2,t.callbackNode=null,2}function xx(t,e){if(ie!==0&&ie!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Qu()&&t.callbackNode!==n)return null;var i=ct;return i=ju(t,t===Et?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(rx(t,i,e),bx(t,ke()),t.callbackNode!=null&&t.callbackNode===n?xx.bind(null,t):null)}function Ov(t,e){if(Qu())return null;rx(t,e,!0)}function O2(){q2(function(){yt&6?Eh(r_,R2):_x()})}function fm(){if(Ri===0){var t=So;t===0&&(t=nl,nl<<=1,!(nl&261888)&&(nl=256)),Ri=t}return Ri}function Nv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(""+t)}function zv(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function N2(t,e,n,i,o){if(e==="submit"&&n&&n.stateNode===o){var r=Nv((o[Oe]||null).action),l=i.submitter;l&&(e=(e=l[Oe]||null)?Nv(e.formAction):l.getAttribute("formAction"),e!==null&&(r=e,l=null));var u=new Bu("action","action",null,i,o);t.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ri!==0){var f=l?zv(o,l):new FormData(o);Td(n,{pending:!0,data:f,method:o.method,action:r},null,f)}}else typeof r=="function"&&(u.preventDefault(),f=l?zv(o,l):new FormData(o),Td(n,{pending:!0,data:f,method:o.method,action:r},r,f))},currentTarget:o}]})}}for(var xf=0;xf<cd.length;xf++){var Tf=cd[xf],z2=Tf.toLowerCase(),D2=Tf[0].toUpperCase()+Tf.slice(1);_n(z2,"on"+D2)}_n(z_,"onAnimationEnd");_n(D_,"onAnimationIteration");_n(P_,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(QC,"onTransitionRun");_n($C,"onTransitionStart");_n(WC,"onTransitionCancel");_n(j_,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wa("onBeforeInput",["compositionend","keypress","textInput","paste"]);wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(is));function Tx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],o=i.event;i=i.listeners;t:{var r=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==r&&o.isPropagationStopped())break t;r=u,o.currentTarget=d;try{r(o)}catch(p){$l(p)}o.currentTarget=null,r=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==r&&o.isPropagationStopped())break t;r=u,o.currentTarget=d;try{r(o)}catch(p){$l(p)}o.currentTarget=null,r=f}}}}function lt(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(Sx(e,t,2,!1),n.add(i))}function Sf(t,e,n){var i=0;e&&(i|=4),Sx(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function dm(t){if(!t[dl]){t[dl]=!0,m_.forEach(function(n){n!=="selectionchange"&&(P2.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Sf("selectionchange",!1,e))}}function Sx(t,e,n,i){switch(jx(e)){case 2:var o=uA;break;case 8:o=cA;break;default:o=gm}n=o.bind(null,e,n,t),o=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),i?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function wf(t,e,n,i,o){var r=i;if(!(e&1)&&!(e&2)&&i!==null)t:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===o)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&l.stateNode.containerInfo===o)return;l=l.return}for(;u!==null;){if(l=Ka(u),l===null)return;if(f=l.tag,f===5||f===6||f===26||f===27){i=r=l;continue t}u=u.parentNode}}i=i.return}T_(function(){var d=r,p=Rh(n),m=[];t:{var g=B_.get(t);if(g!==void 0){var y=Bu,C=t;switch(t){case"keypress":if(Al(n)===0)break t;case"keydown":case"keyup":y=MC;break;case"focusin":C="focus",y=Wc;break;case"focusout":C="blur",y=Wc;break;case"beforeblur":case"afterblur":y=Wc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=OC;break;case z_:case D_:case P_:y=_C;break;case j_:y=zC;break;case"scroll":case"scrollend":y=mC;break;case"wheel":y=PC;break;case"copy":case"cut":case"paste":y=xC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qg;break;case"toggle":case"beforetoggle":y=BC}var E=(e&4)!==0,A=!E&&(t==="scroll"||t==="scrollend"),_=E?g!==null?g+"Capture":null:g;E=[];for(var b=d,S;b!==null;){var M=b;if(S=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||S===null||_===null||(M=Kr(b,_),M!=null&&E.push(as(b,M,S))),A)break;b=b.return}0<E.length&&(g=new y(g,C,null,n,p),m.push({event:g,listeners:E}))}}if(!(e&7)){t:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==rd&&(C=n.relatedTarget||n.fromElement)&&(Ka(C)||C[jo]))break t;if((y||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,y?(C=n.relatedTarget||n.toElement,y=d,C=C?Ka(C):null,C!==null&&(A=ps(C),E=C.tag,C!==A||E!==5&&E!==27&&E!==6)&&(C=null)):(y=null,C=d),y!==C)){if(E=Hg,M="onMouseLeave",_="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(E=qg,M="onPointerLeave",_="onPointerEnter",b="pointer"),A=y==null?g:Sr(y),S=C==null?g:Sr(C),g=new E(M,b+"leave",y,n,p),g.target=A,g.relatedTarget=S,M=null,Ka(p)===d&&(E=new E(_,b+"enter",C,n,p),E.target=S,E.relatedTarget=A,M=E),A=M,y&&C)e:{for(E=j2,_=y,b=C,S=0,M=_;M;M=E(M))S++;M=0;for(var O=b;O;O=E(O))M++;for(;0<S-M;)_=E(_),S--;for(;0<M-S;)b=E(b),M--;for(;S--;){if(_===b||b!==null&&_===b.alternate){E=_;break e}_=E(_),b=E(b)}E=null}else E=null;y!==null&&Dv(m,g,y,E,!1),C!==null&&A!==null&&Dv(m,A,C,E,!0)}}t:{if(g=d?Sr(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var P=Fg;else if(Yg(g))if(M_)P=FC;else{P=IC;var D=GC}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?d&&Lh(d.elementType)&&(P=Fg):P=YC;if(P&&(P=P(t,d))){A_(m,P,n,p);break t}D&&D(t,g,d),t==="focusout"&&d&&g.type==="number"&&d.memoizedProps.value!=null&&od(g,"number",g.value)}switch(D=d?Sr(d):window,t){case"focusin":(Yg(D)||D.contentEditable==="true")&&(Wa=D,ld=d,Nr=null);break;case"focusout":Nr=ld=Wa=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Wg(m,n,p);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":Wg(m,n,p)}var B;if(zh)t:{switch(t){case"compositionstart":var Z="onCompositionStart";break t;case"compositionend":Z="onCompositionEnd";break t;case"compositionupdate":Z="onCompositionUpdate";break t}Z=void 0}else $a?E_(t,n)&&(Z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(w_&&n.locale!=="ko"&&($a||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&$a&&(B=S_()):(Ai=p,Oh="value"in Ai?Ai.value:Ai.textContent,$a=!0)),D=mu(d,Z),0<D.length&&(Z=new Zg(Z,t,null,n,p),m.push({event:Z,listeners:D}),B?Z.data=B:(B=C_(n),B!==null&&(Z.data=B)))),(B=VC?UC(t,n):HC(t,n))&&(Z=mu(d,"onBeforeInput"),0<Z.length&&(D=new Zg("onBeforeInput","beforeinput",null,n,p),m.push({event:D,listeners:Z}),D.data=B)),N2(m,t,d,n,p)}Tx(m,e)})}function as(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mu(t,e){for(var n=e+"Capture",i=[];t!==null;){var o=t,r=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||r===null||(o=Kr(t,n),o!=null&&i.unshift(as(t,o,r)),o=Kr(t,e),o!=null&&i.push(as(t,o,r))),t.tag===3)return i;t=t.return}return[]}function j2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dv(t,e,n,i,o){for(var r=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(u=u.tag,f!==null&&f===i)break;u!==5&&u!==26&&u!==27||d===null||(f=d,o?(d=Kr(n,r),d!=null&&l.unshift(as(n,d,f))):o||(d=Kr(n,r),d!=null&&l.push(as(n,d,f)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var B2=/\r\n?/g,k2=/\u0000|\uFFFD/g;function Pv(t){return(typeof t=="string"?t:""+t).replace(B2,`
`).replace(k2,"")}function wx(t,e){return e=Pv(e),Pv(t)===e}function St(t,e,n,i,o,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||To(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&To(t,""+i);break;case"className":ol(t,"class",i);break;case"tabIndex":ol(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ol(t,n,i);break;case"style":x_(t,i,r);break;case"data":if(e!=="object"){ol(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=El(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",o.name,o,null),St(t,e,"formEncType",o.formEncType,o,null),St(t,e,"formMethod",o.formMethod,o,null),St(t,e,"formTarget",o.formTarget,o,null)):(St(t,e,"encType",o.encType,o,null),St(t,e,"method",o.method,o,null),St(t,e,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=El(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Kn);break;case"onScroll":i!=null&&lt("scroll",t);break;case"onScrollEnd":i!=null&&lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=El(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":lt("beforetoggle",t),lt("toggle",t),wl(t,"popover",i);break;case"xlinkActuate":kn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":kn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":kn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":kn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":kn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":kn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":kn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":kn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":kn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":wl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dC.get(n)||n,wl(t,n,i))}}function zd(t,e,n,i,o,r){switch(n){case"style":x_(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(j(60));t.innerHTML=n}}break;case"children":typeof i=="string"?To(t,i):(typeof i=="number"||typeof i=="bigint")&&To(t,""+i);break;case"onScroll":i!=null&&lt("scroll",t);break;case"onScrollEnd":i!=null&&lt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!p_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),e=n.slice(2,o?n.length-7:void 0),r=t[Oe]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,o),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,o);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):wl(t,n,i)}}}function pe(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",t),lt("load",t);var i=!1,o=!1,r;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(l!=null)switch(r){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:St(t,e,r,l,n,null)}}o&&St(t,e,"srcSet",n.srcSet,n,null),i&&St(t,e,"src",n.src,n,null);return;case"input":lt("invalid",t);var u=r=l=o=null,f=null,d=null;for(i in n)if(n.hasOwnProperty(i)){var p=n[i];if(p!=null)switch(i){case"name":o=p;break;case"type":l=p;break;case"checked":f=p;break;case"defaultChecked":d=p;break;case"value":r=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,e));break;default:St(t,e,i,p,n,null)}}y_(t,r,u,f,d,l,o,!1);return;case"select":lt("invalid",t),i=l=r=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":r=u;break;case"defaultValue":l=u;break;case"multiple":i=u;default:St(t,e,o,u,n,null)}e=r,n=l,t.multiple=!!i,e!=null?fo(t,!!i,e,!1):n!=null&&fo(t,!!i,n,!0);return;case"textarea":lt("invalid",t),r=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":o=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(91));break;default:St(t,e,l,u,n,null)}b_(t,i,o,r);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(i=n[f],i!=null))switch(f){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:St(t,e,f,i,n,null)}return;case"dialog":lt("beforetoggle",t),lt("toggle",t),lt("cancel",t),lt("close",t);break;case"iframe":case"object":lt("load",t);break;case"video":case"audio":for(i=0;i<is.length;i++)lt(is[i],t);break;case"image":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"embed":case"source":case"link":lt("error",t),lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(i=n[d],i!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,e));default:St(t,e,d,i,n,null)}return;default:if(Lh(e)){for(p in n)n.hasOwnProperty(p)&&(i=n[p],i!==void 0&&zd(t,e,p,i,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!=null&&St(t,e,u,i,n,null))}function V2(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,r=null,l=null,u=null,f=null,d=null,p=null;for(y in n){var m=n[y];if(n.hasOwnProperty(y)&&m!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=m;default:i.hasOwnProperty(y)||St(t,e,y,null,i,m)}}for(var g in i){var y=i[g];if(m=n[g],i.hasOwnProperty(g)&&(y!=null||m!=null))switch(g){case"type":r=y;break;case"name":o=y;break;case"checked":d=y;break;case"defaultChecked":p=y;break;case"value":l=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(j(137,e));break;default:y!==m&&St(t,e,g,y,i,m)}}ad(t,l,u,f,d,p,r,o);return;case"select":y=l=u=g=null;for(r in n)if(f=n[r],n.hasOwnProperty(r)&&f!=null)switch(r){case"value":break;case"multiple":y=f;default:i.hasOwnProperty(r)||St(t,e,r,null,i,f)}for(o in i)if(r=i[o],f=n[o],i.hasOwnProperty(o)&&(r!=null||f!=null))switch(o){case"value":g=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:r!==f&&St(t,e,o,r,i,f)}e=u,n=l,i=y,g!=null?fo(t,!!n,g,!1):!!i!=!!n&&(e!=null?fo(t,!!n,e,!0):fo(t,!!n,n?[]:"",!1));return;case"textarea":y=g=null;for(u in n)if(o=n[u],n.hasOwnProperty(u)&&o!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:St(t,e,u,null,i,o)}for(l in i)if(o=i[l],r=n[l],i.hasOwnProperty(l)&&(o!=null||r!=null))switch(l){case"value":g=o;break;case"defaultValue":y=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:o!==r&&St(t,e,l,o,i,r)}__(t,g,y);return;case"option":for(var C in n)if(g=n[C],n.hasOwnProperty(C)&&g!=null&&!i.hasOwnProperty(C))switch(C){case"selected":t.selected=!1;break;default:St(t,e,C,null,i,g)}for(f in i)if(g=i[f],y=n[f],i.hasOwnProperty(f)&&g!==y&&(g!=null||y!=null))switch(f){case"selected":t.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:St(t,e,f,g,i,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)g=n[E],n.hasOwnProperty(E)&&g!=null&&!i.hasOwnProperty(E)&&St(t,e,E,null,i,g);for(d in i)if(g=i[d],y=n[d],i.hasOwnProperty(d)&&g!==y&&(g!=null||y!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(j(137,e));break;default:St(t,e,d,g,i,y)}return;default:if(Lh(e)){for(var A in n)g=n[A],n.hasOwnProperty(A)&&g!==void 0&&!i.hasOwnProperty(A)&&zd(t,e,A,void 0,i,g);for(p in i)g=i[p],y=n[p],!i.hasOwnProperty(p)||g===y||g===void 0&&y===void 0||zd(t,e,p,g,i,y);return}}for(var _ in n)g=n[_],n.hasOwnProperty(_)&&g!=null&&!i.hasOwnProperty(_)&&St(t,e,_,null,i,g);for(m in i)g=i[m],y=n[m],!i.hasOwnProperty(m)||g===y||g==null&&y==null||St(t,e,m,g,i,y)}function jv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],r=o.transferSize,l=o.initiatorType,u=o.duration;if(r&&u&&jv(l)){for(l=0,u=o.responseEnd,i+=1;i<n.length;i++){var f=n[i],d=f.startTime;if(d>u)break;var p=f.transferSize,m=f.initiatorType;p&&jv(m)&&(f=f.responseEnd,l+=p*(f<u?1:(u-d)/(f-d)))}if(--i,e+=8*(r+l)/(o.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dd=null,Pd=null;function pu(t){return t.nodeType===9?t:t.ownerDocument}function Bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ex(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=null;function H2(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Cx=typeof setTimeout=="function"?setTimeout:void 0,Z2=typeof clearTimeout=="function"?clearTimeout:void 0,kv=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof kv<"u"?function(t){return kv.resolve(null).then(t).catch(G2)}:Cx;function G2(t){setTimeout(function(){throw t})}function Ki(t){return t==="head"}function Vv(t,e){var n=e,i=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(o),Ro(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Zr(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Zr(n);for(var r=n.firstChild;r;){var l=r.nextSibling,u=r.nodeName;r[_s]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=l}}else n==="body"&&Zr(t.ownerDocument.body);n=o}while(n);Ro(e)}function Uv(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Bd(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bd(n),Mh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function I2(t,e,n,i){for(;t.nodeType===1;){var o=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[_s])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=sn(t.nextSibling),t===null)break}return null}function Y2(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=sn(t.nextSibling),t===null))return null;return t}function Ax(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=sn(t.nextSibling),t===null))return null;return t}function kd(t){return t.data==="$?"||t.data==="$~"}function Vd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function F2(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ud=null;function Hv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return sn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Mx(t,e,n){switch(e=pu(n),t){case"html":if(t=e.documentElement,!t)throw Error(j(452));return t;case"head":if(t=e.head,!t)throw Error(j(453));return t;case"body":if(t=e.body,!t)throw Error(j(454));return t;default:throw Error(j(451))}}function Zr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Mh(t)}var ln=new Map,qv=new Set;function gu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fi=_t.d;_t.d={f:X2,r:K2,D:Q2,C:$2,L:W2,m:J2,X:eA,S:tA,M:nA};function X2(){var t=fi.f(),e=Xu();return t||e}function K2(t){var e=Bo(t);e!==null&&e.tag===5&&e.type==="form"?xb(e):fi.r(t)}var Ho=typeof document>"u"?null:document;function Lx(t,e,n){var i=Ho;if(i&&typeof e=="string"&&e){var o=nn(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),qv.has(o)||(qv.add(o),t={rel:t,crossOrigin:n,href:e},i.querySelector(o)===null&&(e=i.createElement("link"),pe(e,"link",t),se(e),i.head.appendChild(e)))}}function Q2(t){fi.D(t),Lx("dns-prefetch",t,null)}function $2(t,e){fi.C(t,e),Lx("preconnect",t,e)}function W2(t,e,n){fi.L(t,e,n);var i=Ho;if(i&&t&&e){var o='link[rel="preload"][as="'+nn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+nn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+nn(n.imageSizes)+'"]')):o+='[href="'+nn(t)+'"]';var r=o;switch(e){case"style":r=Lo(t);break;case"script":r=Zo(t)}ln.has(r)||(t=zt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ln.set(r,t),i.querySelector(o)!==null||e==="style"&&i.querySelector(Es(r))||e==="script"&&i.querySelector(Cs(r))||(e=i.createElement("link"),pe(e,"link",t),se(e),i.head.appendChild(e)))}}function J2(t,e){fi.m(t,e);var n=Ho;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+nn(i)+'"][href="'+nn(t)+'"]',r=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Zo(t)}if(!ln.has(r)&&(t=zt({rel:"modulepreload",href:t},e),ln.set(r,t),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cs(r)))return}i=n.createElement("link"),pe(i,"link",t),se(i),n.head.appendChild(i)}}}function tA(t,e,n){fi.S(t,e,n);var i=Ho;if(i&&t){var o=co(i).hoistableStyles,r=Lo(t);e=e||"default";var l=o.get(r);if(!l){var u={loading:0,preload:null};if(l=i.querySelector(Es(r)))u.loading=5;else{t=zt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ln.get(r))&&hm(t,n);var f=l=i.createElement("link");se(f),pe(f,"link",t),f._p=new Promise(function(d,p){f.onload=d,f.onerror=p}),f.addEventListener("load",function(){u.loading|=1}),f.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Pl(l,e,i)}l={type:"stylesheet",instance:l,count:1,state:u},o.set(r,l)}}}function eA(t,e){fi.X(t,e);var n=Ho;if(n&&t){var i=co(n).hoistableScripts,o=Zo(t),r=i.get(o);r||(r=n.querySelector(Cs(o)),r||(t=zt({src:t,async:!0},e),(e=ln.get(o))&&mm(t,e),r=n.createElement("script"),se(r),pe(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(o,r))}}function nA(t,e){fi.M(t,e);var n=Ho;if(n&&t){var i=co(n).hoistableScripts,o=Zo(t),r=i.get(o);r||(r=n.querySelector(Cs(o)),r||(t=zt({src:t,async:!0,type:"module"},e),(e=ln.get(o))&&mm(t,e),r=n.createElement("script"),se(r),pe(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(o,r))}}function Gv(t,e,n,i){var o=(o=Oi.current)?gu(o):null;if(!o)throw Error(j(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Lo(n.href),n=co(o).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Lo(n.href);var r=co(o).hoistableStyles,l=r.get(t);if(l||(o=o.ownerDocument||o,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,l),(r=o.querySelector(Es(t)))&&!r._p&&(l.instance=r,l.state.loading=5),ln.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(t,n),r||iA(o,t,n,l.state))),e&&i===null)throw Error(j(528,""));return l}if(e&&i!==null)throw Error(j(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zo(n),n=co(o).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,t))}}function Lo(t){return'href="'+nn(t)+'"'}function Es(t){return'link[rel="stylesheet"]['+t+"]"}function Rx(t){return zt({},t,{"data-precedence":t.precedence,precedence:null})}function iA(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),pe(e,"link",n),se(e),t.head.appendChild(e))}function Zo(t){return'[src="'+nn(t)+'"]'}function Cs(t){return"script[async]"+t}function Iv(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+nn(n.href)+'"]');if(i)return e.instance=i,se(i),i;var o=zt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),se(i),pe(i,"style",o),Pl(i,n.precedence,t),e.instance=i;case"stylesheet":o=Lo(n.href);var r=t.querySelector(Es(o));if(r)return e.state.loading|=4,e.instance=r,se(r),r;i=Rx(n),(o=ln.get(o))&&hm(i,o),r=(t.ownerDocument||t).createElement("link"),se(r);var l=r;return l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),pe(r,"link",i),e.state.loading|=4,Pl(r,n.precedence,t),e.instance=r;case"script":return r=Zo(n.src),(o=t.querySelector(Cs(r)))?(e.instance=o,se(o),o):(i=n,(o=ln.get(r))&&(i=zt({},n),mm(i,o)),t=t.ownerDocument||t,o=t.createElement("script"),se(o),pe(o,"link",i),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(j(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Pl(i,n.precedence,t));return e.instance}function Pl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,r=o,l=0;l<i.length;l++){var u=i[l];if(u.dataset.precedence===e)r=u;else if(r!==o)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function hm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function mm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var jl=null;function Yv(t,e,n){if(jl===null){var i=new Map,o=jl=new Map;o.set(n,i)}else o=jl,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),o=0;o<n.length;o++){var r=n[o];if(!(r[_s]||r[de]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(e)||"";l=t+l;var u=i.get(l);u?u.push(r):i.set(l,[r])}}return i}function Fv(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function aA(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ox(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function oA(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var o=Lo(i.href),r=e.querySelector(Es(o));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=vu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,se(r);return}r=e.ownerDocument||e,i=Rx(i),(o=ln.get(o))&&hm(i,o),r=r.createElement("link"),se(r);var l=r;l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),pe(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=vu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Cf=0;function rA(t,e){return t.stylesheets&&t.count===0&&Bl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Cf===0&&(Cf=62500*U2());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Cf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yu=null;function Bl(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yu=new Map,e.forEach(sA,t),yu=null,vu.call(t))}function sA(t,e){if(!(e.state.loading&4)){var n=yu.get(t);if(n)var i=n.get(null);else{n=new Map,yu.set(t,n);for(var o=t.querySelectorAll("link[data-precedence], style[data-precedence]"),r=0;r<o.length;r++){var l=o[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(n.set(l.dataset.precedence,l),i=l)}i&&n.set(null,i)}o=e.instance,l=o.getAttribute("data-precedence"),r=n.get(l)||i,r===i&&n.set(null,o),n.set(l,o),this.count++,i=vu.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),r?r.parentNode.insertBefore(o,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var os={$$typeof:Xn,Provider:null,Consumer:null,_currentValue:fa,_currentValue2:fa,_threadCount:0};function lA(t,e,n,i,o,r,l,u,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.hiddenUpdates=Xc(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Nx(t,e,n,i,o,r,l,u,f,d,p,m){return t=new lA(t,e,n,l,f,d,p,m,u),e=1,r===!0&&(e|=24),r=je(3,null,null,e),t.current=r,r.stateNode=t,e=Uh(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},qh(r),t}function zx(t){return t?(t=eo,t):eo}function Dx(t,e,n,i,o,r){o=zx(o),i.context===null?i.context=o:i.pendingContext=o,i=zi(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Di(t,i,e),n!==null&&(Re(n,t,e),Dr(n,t,e))}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pm(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function Px(t){if(t.tag===13||t.tag===31){var e=Aa(t,67108864);e!==null&&Re(e,t,67108864),pm(t,67108864)}}function Kv(t){if(t.tag===13||t.tag===31){var e=He();e=Ch(e);var n=Aa(t,e);n!==null&&Re(n,t,e),pm(t,e)}}var _u=!0;function uA(t,e,n,i){var o=W.T;W.T=null;var r=_t.p;try{_t.p=2,gm(t,e,n,i)}finally{_t.p=r,W.T=o}}function cA(t,e,n,i){var o=W.T;W.T=null;var r=_t.p;try{_t.p=8,gm(t,e,n,i)}finally{_t.p=r,W.T=o}}function gm(t,e,n,i){if(_u){var o=Hd(i);if(o===null)wf(t,e,i,bu,n),Qv(t,i);else if(dA(o,t,e,n,i))i.stopPropagation();else if(Qv(t,i),e&4&&-1<fA.indexOf(t)){for(;o!==null;){var r=Bo(o);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=oa(r.pendingLanes);if(l!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;l;){var f=1<<31-Ue(l);u.entanglements[1]|=f,l&=~f}Nn(r),!(yt&6)&&(uu=ke()+500,ws(0,!1))}}break;case 31:case 13:u=Aa(r,2),u!==null&&Re(u,r,2),Xu(),pm(r,2)}if(r=Hd(i),r===null&&wf(t,e,i,bu,n),r===o)break;o=r}o!==null&&i.stopPropagation()}else wf(t,e,i,null,n)}}function Hd(t){return t=Rh(t),vm(t)}var bu=null;function vm(t){if(bu=null,t=Ka(t),t!==null){var e=ps(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=e_(e),t!==null)return t;t=null}else if(n===31){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return bu=t,null}function jx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(QE()){case r_:return 2;case s_:return 8;case Kl:case $E:return 32;case l_:return 268435456;default:return 32}default:return 32}}var Zd=!1,Bi=null,ki=null,Vi=null,rs=new Map,ss=new Map,Ei=[],fA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function mr(t,e,n,i,o,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[o]},e!==null&&(e=Bo(e),e!==null&&Px(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function dA(t,e,n,i,o){switch(e){case"focusin":return Bi=mr(Bi,t,e,n,i,o),!0;case"dragenter":return ki=mr(ki,t,e,n,i,o),!0;case"mouseover":return Vi=mr(Vi,t,e,n,i,o),!0;case"pointerover":var r=o.pointerId;return rs.set(r,mr(rs.get(r)||null,t,e,n,i,o)),!0;case"gotpointercapture":return r=o.pointerId,ss.set(r,mr(ss.get(r)||null,t,e,n,i,o)),!0}return!1}function Bx(t){var e=Ka(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=e_(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Kv(n)});return}}else if(e===31){if(e=n_(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){Kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rd=i,n.target.dispatchEvent(i),rd=null}else return e=Bo(n),e!==null&&Px(e),t.blockedOn=n,!1;e.shift()}return!0}function $v(t,e,n){kl(t)&&n.delete(e)}function hA(){Zd=!1,Bi!==null&&kl(Bi)&&(Bi=null),ki!==null&&kl(ki)&&(ki=null),Vi!==null&&kl(Vi)&&(Vi=null),rs.forEach($v),ss.forEach($v)}function hl(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,ae.unstable_scheduleCallback(ae.unstable_NormalPriority,hA)))}var ml=null;function Wv(t){ml!==t&&(ml=t,ae.unstable_scheduleCallback(ae.unstable_NormalPriority,function(){ml===t&&(ml=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],o=t[e+2];if(typeof i!="function"){if(vm(i||n)===null)continue;break}var r=Bo(n);r!==null&&(t.splice(e,3),e-=3,Td(r,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Ro(t){function e(f){return hl(f,t)}Bi!==null&&hl(Bi,t),ki!==null&&hl(ki,t),Vi!==null&&hl(Vi,t),rs.forEach(e),ss.forEach(e);for(var n=0;n<Ei.length;n++){var i=Ei[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)Bx(n),n.blockedOn===null&&Ei.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],r=n[i+1],l=o[Oe]||null;if(typeof r=="function")l||Wv(n);else if(l){var u=null;if(r&&r.hasAttribute("formAction")){if(o=r,l=r[Oe]||null)u=l.formAction;else if(vm(o)!==null)continue}else u=l.action;typeof u=="function"?n[i+1]=u:(n.splice(i,3),i-=3),Wv(n)}}}function kx(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return o=l})},focusReset:"manual",scroll:"manual"})}function e(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),o!==null&&(o(),o=null)}}}function ym(t){this._internalRoot=t}$u.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));var n=e.current,i=He();Dx(n,i,t,e,null,null)};$u.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dx(t.current,2,null,t,null,null),Xu(),e[jo]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&Bx(t)}};var Jv=J0.version;if(Jv!=="19.2.0")throw Error(j(527,Jv,"19.2.0"));_t.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(", "),Error(j(268,t)));return t=qE(e),t=t!==null?i_(t):null,t=t===null?null:t.stateNode,t};var mA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{gs=pl.inject(mA),Ve=pl}catch{}}zu.createRoot=function(t,e){if(!t_(t))throw Error(j(299));var n=!1,i="",o=Lb,r=Rb,l=Ob;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=Nx(t,1,!1,null,null,n,i,null,o,r,l,kx),t[jo]=e.current,dm(t),new ym(e)};zu.hydrateRoot=function(t,e,n){if(!t_(t))throw Error(j(299));var i=!1,o="",r=Lb,l=Rb,u=Ob,f=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),e=Nx(t,1,!0,e,n??null,i,o,f,r,l,u,kx),e.context=zx(null),n=e.current,i=He(),i=Ch(i),o=zi(i),o.callback=null,Di(n,o,i),n=i,e.current.lanes=n,ys(e,n),Nn(e),t[jo]=e.current,dm(t),new $u(e)};zu.version="19.2.0";function Vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vx)}catch(t){console.error(t)}}Vx(),F0.exports=zu;var pA=F0.exports;const gA=Fi(pA),vA="modulepreload",yA=function(t){return"/"+t},ty={},_A=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=yA(r),r in ty)return;ty[r]=!0;const l=r.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!i)for(let p=o.length-1;p>=0;p--){const m=o[p];if(m.href===r&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="$ {
  r
}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":vA,l||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),l)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})};var ey="popstate";function bA(t={}){function e(i,o){let{pathname:r,search:l,hash:u}=i.location;return qd("",{pathname:r,search:l,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:ls(o)}return TA(e,n,null,t)}function Zt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xA(){return Math.random().toString(36).substring(2,10)}function ny(t,e){return{usr:t.state,key:t.key,idx:e}}function qd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?qo(e):e,state:n,key:e&&e.key||i||xA()}}function ls({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function qo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function TA(t,e,n,i={}){let{window:o=document.defaultView,v5Compat:r=!1}=i,l=o.history,u="POP",f=null,d=p();d==null&&(d=0,l.replaceState({...l.state,idx:d},""));function p(){return(l.state||{idx:null}).idx}function m(){u="POP";let A=p(),_=A==null?null:A-d;d=A,f&&f({action:u,location:E.location,delta:_})}function g(A,_){u="PUSH";let b=qd(E.location,A,_);n&&n(b,A),d=p()+1;let S=ny(b,d),M=E.createHref(b);try{l.pushState(S,"",M)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(M)}r&&f&&f({action:u,location:E.location,delta:1})}function y(A,_){u="REPLACE";let b=qd(E.location,A,_);n&&n(b,A),d=p();let S=ny(b,d),M=E.createHref(b);l.replaceState(S,"",M),r&&f&&f({action:u,location:E.location,delta:0})}function C(A){return SA(A)}let E={get action(){return u},get location(){return t(o,l)},listen(A){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(ey,m),f=A,()=>{o.removeEventListener(ey,m),f=null}},createHref(A){return e(o,A)},createURL:C,encodeLocation(A){let _=C(A);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:y,go(A){return l.go(A)}};return E}function SA(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:ls(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function Ux(t,e,n="/"){return wA(t,e,n,!1)}function wA(t,e,n,i){let o=typeof e=="string"?qo(e):e,r=li(o.pathname||"/",n);if(r==null)return null;let l=Hx(t);EA(l);let u=null;for(let f=0;u==null&&f<l.length;++f){let d=jA(r);u=DA(l[f],d,i)}return u}function Hx(t,e=[],n=[],i="",o=!1){let r=(l,u,f=o,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(i)&&f)return;Zt(p.relativePath.startsWith(i),`Absolute route path "$ {
  p.relativePath
}" nested under path "$ {
  i
}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length)}let m=ti([i,p.relativePath]),g=n.concat(p);l.children&&l.children.length>0&&(Zt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "$ {
  m
}".`),Hx(l.children,e,g,m,f)),!(l.path==null&&!l.index)&&e.push({path:m,score:NA(m,l.index),routesMeta:g})};return t.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))r(l,u);else for(let d of Zx(l.path))r(l,u,!0,d)}),e}function Zx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return o?[r,""]:[r];let l=Zx(i.join("/")),u=[];return u.push(...l.map(f=>f===""?r:[r,f].join("/"))),o&&u.push(...l),u.map(f=>t.startsWith("/")&&f===""?"/":f)}function EA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var CA=/^:[\w-]+$/,AA=3,MA=2,LA=1,RA=10,OA=-2,iy=t=>t==="*";function NA(t,e){let n=t.split("/"),i=n.length;return n.some(iy)&&(i+=OA),e&&(i+=MA),n.filter(o=>!iy(o)).reduce((o,r)=>o+(CA.test(r)?AA:r===""?LA:RA),i)}function zA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function DA(t,e,n=!1){let{routesMeta:i}=t,o={},r="/",l=[];for(let u=0;u<i.length;++u){let f=i[u],d=u===i.length-1,p=r==="/"?e:e.slice(r.length)||"/",m=xu({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},p),g=f.route;if(!m&&d&&n&&!i[i.length-1].route.index&&(m=xu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!m)return null;Object.assign(o,m.params),l.push({params:o,pathname:ti([r,m.pathname]),pathnameBase:UA(ti([r,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(r=ti([r,m.pathnameBase]))}return l}function xu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=PA(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let r=o[0],l=r.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((d,{paramName:p,isOptional:m},g)=>{if(p==="*"){let C=u[g]||"";l=r.slice(0,r.length-C.length).replace(/(.)\/+$/,"$1")}const y=u[g];return m&&!y?d[p]=void 0:d[p]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:r,pathnameBase:l,pattern:t}}function PA(t,e=!1,n=!0){yn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "$ {
  t
}" will be treated as if it were "$ {
  t.replace(/\*$/, "/*")
}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "$ {
  t.replace(/\*$/, "/*")
}".`);let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,f)=>(i.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function jA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yn(!1,`The URL path "$ {
  t
}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function li(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BA=t=>qx.test(t);function kA(t,e="/"){let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?qo(t):t,r;if(n)if(BA(n))r=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),yn(!1,`Pathnames cannot have embedded double slashes - normalizing ${l} -> ${n}`)}n.startsWith("/")?r=ay(n.substring(1),"/"):r=ay(n,e)}else r=e;return{pathname:r,search:HA(i),hash:ZA(o)}}function ay(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Af(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gx(t){let e=VA(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Ix(t,e,n,i=!1){let o;typeof t=="string"?o=qo(t):(o={...t},Zt(!o.pathname||!o.pathname.includes("?"),Af("?","pathname","search",o)),Zt(!o.pathname||!o.pathname.includes("#"),Af("#","pathname","hash",o)),Zt(!o.search||!o.search.includes("#"),Af("#","search","hash",o)));let r=t===""||o.pathname==="",l=r?"/":o.pathname,u;if(l==null)u=n;else{let m=e.length-1;if(!i&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}u=m>=0?e[m]:"/"}let f=kA(o,u),d=l&&l!=="/"&&l.endsWith("/"),p=(r||l===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(d||p)&&(f.pathname+="/"),f}var ti=t=>t.join("/").replace(/\/\/+/g,"/"),UA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,qA=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function GA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function IA(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Yx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fx(t,e){let n=t;if(typeof n!="string"||!qx.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,o=!1;if(Yx)try{let r=new URL(window.location.href),l=n.startsWith("//")?new URL(r.protocol+n):new URL(n),u=li(l.pathname,e);l.origin===r.origin&&u!=null?n=u+l.search+l.hash:o=!0}catch{yn(!1,`<Link to="$ {
  n
}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xx=["POST","PUT","PATCH","DELETE"];new Set(Xx);var YA=["GET",...Xx];new Set(YA);var Go=T.createContext(null);Go.displayName="DataRouter";var Wu=T.createContext(null);Wu.displayName="DataRouterState";var FA=T.createContext(!1),Kx=T.createContext({isTransitioning:!1});Kx.displayName="ViewTransition";var XA=T.createContext(new Map);XA.displayName="Fetchers";var KA=T.createContext(null);KA.displayName="Await";var cn=T.createContext(null);cn.displayName="Navigation";var As=T.createContext(null);As.displayName="Location";var di=T.createContext({outlet:null,matches:[],isDataRoute:!1});di.displayName="Route";var _m=T.createContext(null);_m.displayName="RouteError";var Qx="REACT_ROUTER_ERROR",QA="REDIRECT",$A="ROUTE_ERROR_RESPONSE";function WA(t){if(t.startsWith(`${Qx}:${QA}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function JA(t){if(t.startsWith(`${Qx}:${$A}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new qA(e.status,e.statusText,e.data)}catch{}}function tM(t,{relative:e}={}){Zt(Ms(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=T.useContext(cn),{hash:o,pathname:r,search:l}=Ls(t,{relative:e}),u=r;return n!=="/"&&(u=r==="/"?n:ti([n,r])),i.createHref({pathname:u,search:l,hash:o})}function Ms(){return T.useContext(As)!=null}function La(){return Zt(Ms(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(As).location}var $x="You should call navigate() in a React.useEffect(),  not when your component is first rendered.";function Wx(t){T.useContext(cn).static||T.useLayoutEffect(t)}function eM(){let{isDataRoute:t}=T.useContext(di);return t?mM():nM()}function nM(){Zt(Ms(),"useNavigate() may be used only in the context of a <Router> component.");let t=T.useContext(Go),{basename:e,navigator:n}=T.useContext(cn),{matches:i}=T.useContext(di),{pathname:o}=La(),r=JSON.stringify(Gx(i)),l=T.useRef(!1);return Wx(()=>{l.current=!0}),T.useCallback((f,d={})=>{if(yn(l.current,$x),!l.current)return;if(typeof f=="number"){n.go(f);return}let p=Ix(f,JSON.parse(r),o,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ti([e,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[e,n,r,o,t])}T.createContext(null);function Ls(t,{relative:e}={}){let{matches:n}=T.useContext(di),{pathname:i}=La(),o=JSON.stringify(Gx(n));return T.useMemo(()=>Ix(t,JSON.parse(o),i,e==="path"),[t,o,i,e])}function iM(t,e){return Jx(t,e)}function Jx(t,e,n,i,o){var b;Zt(Ms(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=T.useContext(cn),{matches:l}=T.useContext(di),u=l[l.length-1],f=u?u.params:{},d=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let S=m&&m.path||"";e1(d,!m||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "$ {
  d
}" (under <Route path="$ {
  S
}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.
Please change the parent <Route path="$ {
  S
}"> to <Route path="$ {
  S==="/"?"*":`${S}/*`
}">.`)}let g=La(),y;if(e){let S=typeof e=="string"?qo(e):e;Zt(p==="/"||((b=S.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "$ {
  p
}" but pathname "$ {
  S.pathname
}" was given in the \`location\` prop.`),y=S}else y=g;let C=y.pathname||"/",E=C;if(p!=="/"){let S=p.replace(/^\//,"").split("/");E="/"+C.replace(/^\//,"").split("/").slice(S.length).join("/")}let A=Ux(t,{pathname:E});yn(m||A!=null,`No routes matched location "$ {
  y.pathname
}$ {
  y.search
}$ {
  y.hash
}" `),yn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "$ {
  y.pathname
}$ {
  y.search
}$ {
  y.hash
}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=lM(A&&A.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:ti([p,r.encodeLocation?r.encodeLocation(S.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?p:ti([p,r.encodeLocation?r.encodeLocation(S.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,n,i,o);return e&&_?T.createElement(As.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function aM(){let t=hM(),e=GA(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200, 200, 200,  0.5)",o={padding:"0.5rem",backgroundColor:i},r={padding:"2px 4px",backgroundColor:i},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:r},"ErrorBoundary")," or"," ",T.createElement("code",{style:r},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:o},n):null,l)}var oM=T.createElement(aM,null),t1=class extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=JA(t.digest);n&&(t=n)}let e=t!==void 0?T.createElement(di.Provider,{value:this.props.routeContext},T.createElement(_m.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?T.createElement(rM,{error:t},e):e}};t1.contextType=FA;var Mf=new WeakMap;function rM({children:t,error:e}){let{basename:n}=T.useContext(cn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=WA(e.digest);if(i){let o=Mf.get(e);if(o)throw o;let r=Fx(i.location,n);if(Yx&&!Mf.get(e))if(r.isExternal||i.reloadDocument)window.location.href=r.absoluteURL||r.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(r.to,{replace:i.replace}));throw Mf.set(e,l),l}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${r.absoluteURL||r.to}`})}}return t}function sM({routeContext:t,match:e,children:n}){let i=T.useContext(Go);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),T.createElement(di.Provider,{value:t},n)}function lM(t,e=[],n=null,i=null,o=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,l=n==null?void 0:n.errors;if(l!=null){let p=r.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);Zt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(", ")}`),r=r.slice(0,Math.min(r.length,p+1))}let u=!1,f=-1;if(n)for(let p=0;p<r.length;p++){let m=r[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:g,errors:y}=n,C=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||C){u=!0,f>=0?r=r.slice(0,f+1):r=[r[0]];break}}}let d=n&&i?(p,m)=>{var g,y;i(p,{location:n.location,params:((y=(g=n.matches)==null?void 0:g[0])==null?void 0:y.params)??{},unstable_pattern:IA(n.matches),errorInfo:m})}:void 0;return r.reduceRight((p,m,g)=>{let y,C=!1,E=null,A=null;n&&(y=l&&m.route.id?l[m.route.id]:void 0,E=m.route.errorElement||oM,u&&(f<0&&g===0?(e1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,A=null):f===g&&(C=!0,A=m.route.hydrateFallbackElement||null)));let _=e.concat(r.slice(0,g+1)),b=()=>{let S;return y?S=E:C?S=A:m.route.Component?S=T.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=p,T.createElement(sM,{match:m,routeContext:{outlet:p,matches:_,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?T.createElement(t1,{location:n.location,revalidation:n.revalidation,component:E,error:y,children:b(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:d}):b()},null)}function bm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uM(t){let e=T.useContext(Go);return Zt(e,bm(t)),e}function cM(t){let e=T.useContext(Wu);return Zt(e,bm(t)),e}function fM(t){let e=T.useContext(di);return Zt(e,bm(t)),e}function xm(t){let e=fM(t),n=e.matches[e.matches.length-1];return Zt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function dM(){return xm("useRouteId")}function hM(){var i;let t=T.useContext(_m),e=cM("useRouteError"),n=xm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function mM(){let{router:t}=uM("useNavigate"),e=xm("useNavigate"),n=T.useRef(!1);return Wx(()=>{n.current=!0}),T.useCallback(async(o,r={})=>{yn(n.current,$x),n.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...r}))},[t,e])}var oy={};function e1(t,e,n){!e&&!oy[t]&&(oy[t]=!0,yn(!1,n))}T.memo(pM);function pM({routes:t,future:e,state:n,onError:i}){return Jx(t,void 0,n,i,e)}function Vl(t){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element,  never rendered directly. Please wrap your <Route> in a <Routes>.")}function gM({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:o,static:r=!1,unstable_useTransitions:l}){Zt(!Ms(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=t.replace(/^\/*/,"/"),f=T.useMemo(()=>({basename:u,navigator:o,static:r,unstable_useTransitions:l,future:{}}),[u,o,r,l]);typeof n=="string"&&(n=qo(n));let{pathname:d="/",search:p="",hash:m="",state:g=null,key:y="default"}=n,C=T.useMemo(()=>{let E=li(d,u);return E==null?null:{location:{pathname:E,search:p,hash:m,state:g,key:y},navigationType:i}},[u,d,p,m,g,y,i]);return yn(C!=null,`<Router basename="$ {
  u
}"> is not able to match the URL "$ {
  d
}$ {
  p
}$ {
  m
}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:T.createElement(cn.Provider,{value:f},T.createElement(As.Provider,{children:e,value:C}))}function vM({children:t,location:e}){return iM(Gd(t),e)}function Gd(t,e=[]){let n=[];return T.Children.forEach(t,(i,o)=>{if(!T.isValidElement(i))return;let r=[...e,o];if(i.type===T.Fragment){n.push.apply(n,Gd(i.props.children,r));return}Zt(i.type===Vl,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let l={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=Gd(i.props.children,r)),n.push(l)}),n}var Ul="get",Hl="application/x-www-form-urlencoded";function Ju(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function yM(t){return Ju(t)&&t.tagName.toLowerCase()==="button"}function _M(t){return Ju(t)&&t.tagName.toLowerCase()==="form"}function bM(t){return Ju(t)&&t.tagName.toLowerCase()==="input"}function xM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TM(t,e){return t.button===0&&(!e||e==="_self")&&!xM(t)}var gl=null;function SM(){if(gl===null)try{new FormData(document.createElement("form"),0),gl=!1}catch{gl=!0}return gl}var wM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lf(t){return t!=null&&!wM.has(t)?(yn(!1,`"$ {
  t
}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "$ {
  Hl
}"`),null):t}function EM(t,e){let n,i,o,r,l;if(_M(t)){let u=t.getAttribute("action");i=u?li(u,e):null,n=t.getAttribute("method")||Ul,o=Lf(t.getAttribute("enctype"))||Hl,r=new FormData(t)}else if(yM(t)||bM(t)&&(t.type==="submit"||t.type==="image")){let u=t.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||u.getAttribute("action");if(i=f?li(f,e):null,n=t.getAttribute("formmethod")||u.getAttribute("method")||Ul,o=Lf(t.getAttribute("formenctype"))||Lf(u.getAttribute("enctype"))||Hl,r=new FormData(u,t),!SM()){let{name:d,type:p,value:m}=t;if(p==="image"){let g=d?`${d}.`:"";r.append(`${g}x`,"0"),r.append(`${g}y`,"0")}else d&&r.append(d,m)}}else{if(Ju(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ul,i=null,o=Hl,l=t}return r&&o==="text/plain"&&(l=r,r=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:r,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function CM(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&li(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function AM(t,e){if(t.id in e)return e[t.id];try{let n=await _A(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function MM(t){return t!=null&&typeof t.page=="string"}function LM(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function RM(t,e,n){let i=await Promise.all(t.map(async o=>{let r=e.routes[o.route.id];if(r){let l=await AM(r,n);return l.links?l.links():[]}return[]}));return DM(i.flat(1).filter(LM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ry(t,e,n,i,o,r){let l=(f,d)=>n[d]?f.route.id!==n[d].route.id:!0,u=(f,d)=>{var p;return n[d].pathname!==f.pathname||((p=n[d].route.path)==null?void 0:p.endsWith("*"))&&n[d].params["*"]!==f.params["*"]};return r==="assets"?e.filter((f,d)=>l(f,d)||u(f,d)):r==="data"?e.filter((f,d)=>{var m;let p=i.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(l(f,d)||u(f,d))return!0;if(f.route.shouldRevalidate){let g=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function OM(t,e,{includeHydrateFallback:n}={}){return NM(t.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let r=[o.module];return o.clientActionModule&&(r=r.concat(o.clientActionModule)),o.clientLoaderModule&&(r=r.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(r=r.concat(o.hydrateFallbackModule)),o.imports&&(r=r.concat(o.imports)),r}).flat(1))}function NM(t){return[...new Set(t)]}function zM(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function DM(t,e){let n=new Set,i=new Set(e);return t.reduce((o,r)=>{if(e&&!MM(r)&&r.as==="script"&&r.href&&i.has(r.href))return o;let u=JSON.stringify(zM(r));return n.has(u)||(n.add(u),o.push({key:u,link:r})),o},[])}function n1(){let t=T.useContext(Go);return Tm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function PM(){let t=T.useContext(Wu);return Tm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Sm=T.createContext(void 0);Sm.displayName="FrameworkContext";function i1(){let t=T.useContext(Sm);return Tm(t,"You must render this element inside a <HydratedRouter> element"),t}function jM(t,e){let n=T.useContext(Sm),[i,o]=T.useState(!1),[r,l]=T.useState(!1),{onFocus:u,onBlur:f,onMouseEnter:d,onMouseLeave:p,onTouchStart:m}=e,g=T.useRef(null);T.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let E=_=>{_.forEach(b=>{l(b.isIntersecting)})},A=new IntersectionObserver(E,{threshold:.5});return g.current&&A.observe(g.current),()=>{A.disconnect()}}},[t]),T.useEffect(()=>{if(i){let E=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(E)}}},[i]);let y=()=>{o(!0)},C=()=>{o(!1),l(!1)};return n?t!=="intent"?[r,g,{}]:[r,g,{onFocus:pr(u,y),onBlur:pr(f,C),onMouseEnter:pr(d,y),onMouseLeave:pr(p,C),onTouchStart:pr(m,y)}]:[!1,g,{}]}function pr(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function BM({page:t,...e}){let{router:n}=n1(),i=T.useMemo(()=>Ux(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?T.createElement(VM,{page:t,matches:i,...e}):null}function kM(t){let{manifest:e,routeModules:n}=i1(),[i,o]=T.useState([]);return T.useEffect(()=>{let r=!1;return RM(t,e,n).then(l=>{r||o(l)}),()=>{r=!0}},[t,e,n]),i}function VM({page:t,matches:e,...n}){let i=La(),{manifest:o,routeModules:r}=i1(),{basename:l}=n1(),{loaderData:u,matches:f}=PM(),d=T.useMemo(()=>ry(t,e,f,o,i,"data"),[t,e,f,o,i]),p=T.useMemo(()=>ry(t,e,f,o,i,"assets"),[t,e,f,o,i]),m=T.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let C=new Set,E=!1;if(e.forEach(_=>{var S;let b=o.routes[_.route.id];!b||!b.hasLoader||(!d.some(M=>M.route.id===_.route.id)&&_.route.id in u&&((S=r[_.route.id])!=null&&S.shouldRevalidate)||b.hasClientLoader?E=!0:C.add(_.route.id))}),C.size===0)return[];let A=CM(t,l,"data");return E&&C.size>0&&A.searchParams.set("_routes",e.filter(_=>C.has(_.route.id)).map(_=>_.route.id).join(", ")),[A.pathname+A.search]},[l,u,i,o,d,e,t,r]),g=T.useMemo(()=>OM(p,o),[p,o]),y=kM(p);return T.createElement(T.Fragment,null,m.map(C=>T.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),g.map(C=>T.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),y.map(({key:C,link:E})=>T.createElement("link",{key:C,nonce:n.nonce,...E})))}function UM(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var HM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{HM&&(window.__reactRouterVersion="7.11.0")}catch{}function ZM({basename:t,children:e,unstable_useTransitions:n,window:i}){let o=T.useRef();o.current==null&&(o.current=bA({window:i,v5Compat:!0}));let r=o.current,[l,u]=T.useState({action:r.action,location:r.location}),f=T.useCallback(d=>{n===!1?u(d):T.startTransition(()=>u(d))},[n]);return T.useLayoutEffect(()=>r.listen(f),[r,f]),T.createElement(gM,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:r,unstable_useTransitions:n})}var a1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gn=T.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:o,reloadDocument:r,replace:l,state:u,target:f,to:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:g,...y},C){let{basename:E,unstable_useTransitions:A}=T.useContext(cn),_=typeof d=="string"&&a1.test(d),b=Fx(d,E);d=b.to;let S=tM(d,{relative:o}),[M,O,P]=jM(i,y),D=YM(d,{replace:l,state:u,target:f,preventScrollReset:p,relative:o,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:A});function B(I){e&&e(I),I.defaultPrevented||D(I)}let Z=T.createElement("a",{...y,...P,href:b.absoluteURL||S,onClick:b.isExternal||r?e:B,ref:UM(C,O),target:f,"data-discover":!_&&n==="render"?"true":void 0});return M&&!_?T.createElement(T.Fragment,null,Z,T.createElement(BM,{page:S})):Z});gn.displayName="Link";var qM=T.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:o=!1,style:r,to:l,viewTransition:u,children:f,...d},p){let m=Ls(l,{relative:d.relative}),g=La(),y=T.useContext(Wu),{navigator:C,basename:E}=T.useContext(cn),A=y!=null&&$M(m)&&u===!0,_=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,b=g.pathname,S=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(b=b.toLowerCase(),S=S?S.toLowerCase():null,_=_.toLowerCase()),S&&E&&(S=li(S,E)||S);const M=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let O=b===_||!o&&b.startsWith(_)&&b.charAt(M)==="/",P=S!=null&&(S===_||!o&&S.startsWith(_)&&S.charAt(_.length)==="/"),D={isActive:O,isPending:P,isTransitioning:A},B=O?e:void 0,Z;typeof i=="function"?Z=i(D):Z=[i,O?"active":null,P?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let I=typeof r=="function"?r(D):r;return T.createElement(gn,{...d,"aria-current":B,className:Z,ref:p,style:I,to:l,viewTransition:u},typeof f=="function"?f(D):f)});qM.displayName="NavLink";var GM=T.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:o,state:r,method:l=Ul,action:u,onSubmit:f,relative:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:g,...y},C)=>{let{unstable_useTransitions:E}=T.useContext(cn),A=KM(),_=QM(u,{relative:d}),b=l.toLowerCase()==="get"?"get":"post",S=typeof u=="string"&&a1.test(u),M=O=>{if(f&&f(O),O.defaultPrevented)return;O.preventDefault();let P=O.nativeEvent.submitter,D=(P==null?void 0:P.getAttribute("formmethod"))||l,B=()=>A(P||O.currentTarget,{fetcherKey:e,method:D,navigate:n,replace:o,state:r,relative:d,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:g});E&&n!==!1?T.startTransition(()=>B()):B()};return T.createElement("form",{ref:C,method:b,action:_,onSubmit:i?f:M,...y,"data-discover":!S&&t==="render"?"true":void 0})});GM.displayName="Form";function IM(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o1(t){let e=T.useContext(Go);return Zt(e,IM(t)),e}function YM(t,{target:e,replace:n,state:i,preventScrollReset:o,relative:r,viewTransition:l,unstable_defaultShouldRevalidate:u,unstable_useTransitions:f}={}){let d=eM(),p=La(),m=Ls(t,{relative:r});return T.useCallback(g=>{if(TM(g,e)){g.preventDefault();let y=n!==void 0?n:ls(p)===ls(m),C=()=>d(t,{replace:y,state:i,preventScrollReset:o,relative:r,viewTransition:l,unstable_defaultShouldRevalidate:u});f?T.startTransition(()=>C()):C()}},[p,d,m,n,i,e,t,o,r,l,u,f])}var FM=0,XM=()=>`__${String(++FM)}__`;function KM(){let{router:t}=o1("useSubmit"),{basename:e}=T.useContext(cn),n=dM(),i=t.fetch,o=t.navigate;return T.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:p,body:m}=EM(r,e);if(l.navigate===!1){let g=l.fetcherKey||XM();await i(g,n,l.action||u,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await o(l.action||u,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[i,o,e,n])}function QM(t,{relative:e}={}){let{basename:n}=T.useContext(cn),i=T.useContext(di);Zt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),r={...Ls(t||".",{relative:e})},l=La();if(t==null){r.search=l.search;let u=new URLSearchParams(r.search),f=u.getAll("index");if(f.some(p=>p==="")){u.delete("index"),f.filter(m=>m).forEach(m=>u.append("index",m));let p=u.toString();r.search=p?`?${p}`:""}}return(!t||t===".")&&o.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:ti([n,r.pathname])),ls(r)}function $M(t,{relative:e}={}){let n=T.useContext(Kx);Zt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=o1("useViewTransitionState"),o=Ls(t,{relative:e});if(!n.isTransitioning)return!1;let r=li(n.currentLocation.pathname,i)||n.currentLocation.pathname,l=li(n.nextLocation.pathname,i)||n.nextLocation.pathname;return xu(o.pathname,l)!=null||xu(o.pathname,r)!=null}var r1={exports:{}},WM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JM=WM,tL=JM;function s1(){}function l1(){}l1.resetWarningCache=s1;var eL=function(){function t(i,o,r,l,u,f){if(f!==tL){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:l1,resetWarningCache:s1};return n.PropTypes=n,n};r1.exports=eL();var nL=r1.exports;const Dt=Fi(nL);function iL(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var u1=T,aL=iL(u1);function sy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oL(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var rL=!!(typeof window<"u"&&window.document&&window.document.createElement);function sL(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function i(o){return o.displayName||o.name||"Component"}return function(r){if(typeof r!="function")throw new Error("Expected WrappedComponent to be a React component.");var l=[],u;function f(){u=t(l.map(function(p){return p.props})),d.canUseDOM?e(u):n&&(u=n(u))}var d=function(p){oL(m,p);function m(){return p.apply(this,arguments)||this}m.peek=function(){return u},m.rewind=function(){if(m.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var C=u;return u=void 0,l=[],C};var g=m.prototype;return g.UNSAFE_componentWillMount=function(){l.push(this),f()},g.componentDidUpdate=function(){f()},g.componentWillUnmount=function(){var C=l.indexOf(this);l.splice(C,1),f()},g.render=function(){return aL.createElement(r,this.props)},m}(u1.PureComponent);return sy(d,"displayName","SideEffect("+i(r)+")"),sy(d,"canUseDOM",rL),d}}var lL=sL;const uL=Fi(lL);var cL=typeof Element<"u",fL=typeof Map=="function",dL=typeof Set=="function",hL=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Zl(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,i,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(!Zl(t[i],e[i]))return!1;return!0}var r;if(fL&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r=t.entries();!(i=r.next()).done;)if(!e.has(i.value[0]))return!1;for(r=t.entries();!(i=r.next()).done;)if(!Zl(i.value[1],e.get(i.value[0])))return!1;return!0}if(dL&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r=t.entries();!(i=r.next()).done;)if(!e.has(i.value[0]))return!1;return!0}if(hL&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;if(cL&&t instanceof Element)return!1;for(i=n;i--!==0;)if(!((o[i]==="_owner"||o[i]==="__v"||o[i]==="__o")&&t.$$typeof)&&!Zl(t[o[i]],e[o[i]]))return!1;return!0}return t!==t&&e!==e}var mL=function(e,n){try{return Zl(e,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const pL=Fi(mL);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ly=Object.getOwnPropertySymbols,gL=Object.prototype.hasOwnProperty,vL=Object.prototype.propertyIsEnumerable;function yL(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function _L(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(e).map(function(r){return e[r]});if(i.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(r){o[r]=r}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var bL=_L()?Object.assign:function(t,e){for(var n,i=yL(t),o,r=1;r<arguments.length;r++){n=Object(arguments[r]);for(var l in n)gL.call(n,l)&&(i[l]=n[l]);if(ly){o=ly(n);for(var u=0;u<o.length;u++)vL.call(n,o[u])&&(i[o[u]]=n[o[u]])}}return i};const xL=Fi(bL);var ga={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},J={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(J).map(function(t){return J[t]});var jt={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Tu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},us={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},TL=Object.keys(Tu).reduce(function(t,e){return t[Tu[e]]=e,t},{}),SL=[J.NOSCRIPT,J.SCRIPT,J.STYLE],vn="data-react-helmet",wL=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},EL=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},CL=function(){function t(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ae=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},AL=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},uy=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},ML=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Id=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g, "&#x27;")
}, LL=function(e) {
  var n=yo(e, J.TITLE), i=yo(e, us.TITLE_TEMPLATE);
  if(i&&n)return i.replace(/%s/g, function() {
    return Array.isArray(n)?n.join(""):n
  });
  var o=yo(e, us.DEFAULT_TITLE);
  return n||o||void 0
}, RL=function(e) {
  return yo(e, us.ON_CHANGE_CLIENT_STATE)||function() {
  }
}, Rf=function(e, n) {
  return n.filter(function(i) {
    return typeof i[e]<"u"
  }).map(function(i) {
    return i[e]
  }).reduce(function(i, o) {
    return Ae( {
    }, i, o)
  },  {
  })
}, OL=function(e, n) {
  return n.filter(function(i) {
    return typeof i[J.BASE]<"u"
  }).map(function(i) {
    return i[J.BASE]
  }).reverse().reduce(function(i, o) {
    if(!i.length)for(var r=Object.keys(o), l=0;
    l<r.length;
    l++) {
      var u=r[l], f=u.toLowerCase();
      if(e.indexOf(f)!==-1&&o[f])return i.concat(o)
    }return i
  }, [])
}, gr=function(e, n, i) {
  var o= {
  };
  return i.filter(function(r) {
    return Array.isArray(r[e])?!0:(typeof r[e]<"u"&&PL("Helmet: "+e+' should be of type "Array". Instead found type "'+wL(r[e])+'"'), !1)
  }).map(function(r) {
    return r[e]
  }).reverse().reduce(function(r, l) {
    var u= {
    };
    l.filter(function(g) {
      for(var y=void 0, C=Object.keys(g), E=0;
      E<C.length;
      E++) {
        var A=C[E], _=A.toLowerCase();
        n.indexOf(_)!==-1&&!(y===jt.REL&&g[y].toLowerCase()==="canonical")&&!(_===jt.REL&&g[_].toLowerCase()==="stylesheet")&&(y=_), n.indexOf(A)!==-1&&(A===jt.INNER_HTML||A===jt.CSS_TEXT||A===jt.ITEM_PROP)&&(y=A)
      }if(!y||!g[y])return!1;
      var b=g[y].toLowerCase();
      return o[y]||(o[y]= {
      }), u[y]||(u[y]= {
      }), o[y][b]?!1:(u[y][b]=!0, !0)
    }).reverse().forEach(function(g) {
      return r.push(g)
    });
    for(var f=Object.keys(u), d=0;
    d<f.length;
    d++) {
      var p=f[d], m=xL( {
      }, o[p], u[p]);
      o[p]=m
    }return r
  }, []).reverse()
}, yo=function(e, n) {
  for(var i=e.length-1;
  i>=0;
  i--) {
    var o=e[i];
    if(o.hasOwnProperty(n))return o[n]
  }return null
}, NL=function(e) {
  return {
    baseTag:OL([jt.HREF, jt.TARGET], e), bodyAttributes:Rf(ga.BODY, e), defer:yo(e, us.DEFER), encode:yo(e, us.ENCODE_SPECIAL_CHARACTERS), htmlAttributes:Rf(ga.HTML, e), linkTags:gr(J.LINK, [jt.REL, jt.HREF], e), metaTags:gr(J.META, [jt.NAME, jt.CHARSET, jt.HTTPEQUIV, jt.PROPERTY, jt.ITEM_PROP], e), noscriptTags:gr(J.NOSCRIPT, [jt.INNER_HTML], e), onChangeClientState:RL(e), scriptTags:gr(J.SCRIPT, [jt.SRC, jt.INNER_HTML], e), styleTags:gr(J.STYLE, [jt.CSS_TEXT], e), title:LL(e), titleAttributes:Rf(ga.TITLE, e)
  }
}, Yd=function() {
  var t=Date.now();
  return function(e) {
    var n=Date.now();
    n-t>16?(t=n, e(n)):setTimeout(function() {
      Yd(e)
    }, 0)
  }
}(), cy=function(e) {
  return clearTimeout(e)
}, zL=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Yd:global.requestAnimationFrame||Yd, DL=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||cy:global.cancelAnimationFrame||cy, PL=function(e) {
  return console&&typeof console.warn=="function"&&console.warn(e)
}, vr=null, jL=function(e) {
  vr&&DL(vr), e.defer?vr=zL(function() {
    fy(e, function() {
      vr=null
    })
  }):(fy(e), vr=null)
}, fy=function(e, n) {
  var i=e.baseTag, o=e.bodyAttributes, r=e.htmlAttributes, l=e.linkTags, u=e.metaTags, f=e.noscriptTags, d=e.onChangeClientState, p=e.scriptTags, m=e.styleTags, g=e.title, y=e.titleAttributes;
  Fd(J.BODY, o), Fd(J.HTML, r), BL(g, y);
  var C= {
    baseTag:Za(J.BASE, i), linkTags:Za(J.LINK, l), metaTags:Za(J.META, u), noscriptTags:Za(J.NOSCRIPT, f), scriptTags:Za(J.SCRIPT, p), styleTags:Za(J.STYLE, m)
  }, E= {
  }, A= {
  };
  Object.keys(C).forEach(function(_) {
    var b=C[_], S=b.newTags, M=b.oldTags;
    S.length&&(E[_]=S), M.length&&(A[_]=C[_].oldTags)
  }), n&&n(), d(e, E, A)
}, c1=function(e) {
  return Array.isArray(e)?e.join(""):e
}, BL=function(e, n) {
  typeof e<"u"&&document.title!==e&&(document.title=c1(e)), Fd(J.TITLE, n)
}, Fd=function(e, n) {
  var i=document.getElementsByTagName(e)[0];
  if(i) {
    for(var o=i.getAttribute(vn), r=o?o.split(","):[], l=[].concat(r), u=Object.keys(n), f=0;
    f<u.length;
    f++) {
      var d=u[f], p=n[d]||"";
      i.getAttribute(d)!==p&&i.setAttribute(d, p), r.indexOf(d)===-1&&r.push(d);
      var m=l.indexOf(d);
      m!==-1&&l.splice(m, 1)
    }for(var g=l.length-1;
    g>=0;
    g--)i.removeAttribute(l[g]);
    r.length===l.length?i.removeAttribute(vn):i.getAttribute(vn)!==u.join(",")&&i.setAttribute(vn, u.join(","))
  }
}, Za=function(e, n) {
  var i=document.head||document.querySelector(J.HEAD), o=i.querySelectorAll(e+"["+vn+"]"), r=Array.prototype.slice.call(o), l=[], u=void 0;
  return n&&n.length&&n.forEach(function(f) {
    var d=document.createElement(e);
    for(var p in f)if(f.hasOwnProperty(p))if(p===jt.INNER_HTML)d.innerHTML=f.innerHTML;
    else if(p===jt.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=f.cssText:d.appendChild(document.createTextNode(f.cssText));
    else {
      var m=typeof f[p]>"u"?"":f[p];
      d.setAttribute(p, m)
    }d.setAttribute(vn, "true"), r.some(function(g, y) {
      return u=y, d.isEqualNode(g)
    })?r.splice(u, 1):l.push(d)
  }), r.forEach(function(f) {
    return f.parentNode.removeChild(f)
  }), l.forEach(function(f) {
    return i.appendChild(f)
  }),  {
    oldTags:r, newTags:l
  }
}, f1=function(e) {
  return Object.keys(e).reduce(function(n, i) {
    var o=typeof e[i]<"u"?i+'="'+e[i]+'"':""+i;
    return n?n+" "+o:o
  }, "")
}, kL=function(e, n, i, o) {
  var r=f1(i), l=c1(n);
  return r?"<"+e+" "+vn+'="true" '+r+">"+Id(l, o)+"</"+e+">":"<"+e+" "+vn+'="true">'+Id(l, o)+"</"+e+">"
}, VL=function(e, n, i) {
  return n.reduce(function(o, r) {
    var l=Object.keys(r).filter(function(d) {
      return!(d===jt.INNER_HTML||d===jt.CSS_TEXT)
    }).reduce(function(d, p) {
      var m=typeof r[p]>"u"?p:p+'="'+Id(r[p], i)+'"';
      return d?d+" "+m:m
    }, ""), u=r.innerHTML||r.cssText||"", f=SL.indexOf(e)===-1;
    return o+"<"+e+" "+vn+'="true" '+l+(f?"/>":">"+u+"</"+e+">")
  }, "")
}, d1=function(e) {
  var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]: {
  };
  return Object.keys(e).reduce(function(i, o) {
    return i[Tu[o]||o]=e[o], i
  }, n)
}, UL=function(e) {
  var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]: {
  };
  return Object.keys(e).reduce(function(i, o) {
    return i[TL[o]||o]=e[o], i
  }, n)
}, HL=function(e, n, i) {
  var o, r=(o= {
    key:n
  }, o[vn]=!0, o), l=d1(i, r);
  return[Bt.createElement(J.TITLE, l, n)]
}, ZL=function(e, n) {
  return n.map(function(i, o) {
    var r, l=(r= {
      key:o
    }, r[vn]=!0, r);
    return Object.keys(i).forEach(function(u) {
      var f=Tu[u]||u;
      if(f===jt.INNER_HTML||f===jt.CSS_TEXT) {
        var d=i.innerHTML||i.cssText;
        l.dangerouslySetInnerHTML= {
          __html:d
        }
      }else l[f]=i[u]
    }), Bt.createElement(e, l)
  })
}, Zn=function(e, n, i) {
  switch(e) {
    case J.TITLE:return {
      toComponent:function() {
        return HL(e, n.title, n.titleAttributes)
      }, toString:function() {
        return kL(e, n.title, n.titleAttributes, i)
      }
    };
    case ga.BODY:case ga.HTML:return {
      toComponent:function() {
        return d1(n)
      }, toString:function() {
        return f1(n)
      }
    };
    default:return {
      toComponent:function() {
        return ZL(e, n)
      }, toString:function() {
        return VL(e, n, i)
      }
    }
  }
}, h1=function(e) {
  var n=e.baseTag, i=e.bodyAttributes, o=e.encode, r=e.htmlAttributes, l=e.linkTags, u=e.metaTags, f=e.noscriptTags, d=e.scriptTags, p=e.styleTags, m=e.title, g=m===void 0?"":m, y=e.titleAttributes;
  return {
    base:Zn(J.BASE, n, o), bodyAttributes:Zn(ga.BODY, i, o), htmlAttributes:Zn(ga.HTML, r, o), link:Zn(J.LINK, l, o), meta:Zn(J.META, u, o), noscript:Zn(J.NOSCRIPT, f, o), script:Zn(J.SCRIPT, d, o), style:Zn(J.STYLE, p, o), title:Zn(J.TITLE,  {
      title:g, titleAttributes:y
    }, o)
  }
}, qL=function(e) {
  var n, i;
  return i=n=function(o) {
    AL(r, o);
    function r() {
      return EL(this, r), ML(this, o.apply(this, arguments))
    }return r.prototype.shouldComponentUpdate=function(u) {
      return!pL(this.props, u)
    }, r.prototype.mapNestedChildrenToProps=function(u, f) {
      if(!f)return null;
      switch(u.type) {
        case J.SCRIPT:case J.NOSCRIPT:return {
          innerHTML:f
        };
        case J.STYLE:return {
          cssText:f
        }
      }throw new Error("<"+u.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")
    }, r.prototype.flattenArrayTypeChildren=function(u) {
      var f, d=u.child, p=u.arrayTypeChildren, m=u.newChildProps, g=u.nestedChildren;
      return Ae( {
      }, p, (f= {
      }, f[d.type]=[].concat(p[d.type]||[], [Ae( {
      }, m, this.mapNestedChildrenToProps(d, g))]), f))
    }, r.prototype.mapObjectTypeChildren=function(u) {
      var f, d, p=u.child, m=u.newProps, g=u.newChildProps, y=u.nestedChildren;
      switch(p.type) {
        case J.TITLE:return Ae( {
        }, m, (f= {
        }, f[p.type]=y, f.titleAttributes=Ae( {
        }, g), f));
        case J.BODY:return Ae( {
        }, m,  {
          bodyAttributes:Ae( {
          }, g)
        });
        case J.HTML:return Ae( {
        }, m,  {
          htmlAttributes:Ae( {
          }, g)
        })
      }return Ae( {
      }, m, (d= {
      }, d[p.type]=Ae( {
      }, g), d))
    }, r.prototype.mapArrayTypeChildrenToProps=function(u, f) {
      var d=Ae( {
      }, f);
      return Object.keys(u).forEach(function(p) {
        var m;
        d=Ae( {
        }, d, (m= {
        }, m[p]=u[p], m))
      }), d
    }, r.prototype.warnOnInvalidChildren=function(u, f) {
      return!0
    }, r.prototype.mapChildrenToProps=function(u, f) {
      var d=this, p= {
      };
      return Bt.Children.forEach(u, function(m) {
        if(!(!m||!m.props)) {
          var g=m.props, y=g.children, C=uy(g, ["children"]), E=UL(C);
          switch(d.warnOnInvalidChildren(m, y), m.type) {
            case J.LINK:case J.META:case J.NOSCRIPT:case J.SCRIPT:case J.STYLE:p=d.flattenArrayTypeChildren( {
              child:m, arrayTypeChildren:p, newChildProps:E, nestedChildren:y
            });
            break;
            default:f=d.mapObjectTypeChildren( {
              child:m, newProps:f, newChildProps:E, nestedChildren:y
            });
            break
          }
        }
      }), f=this.mapArrayTypeChildrenToProps(p, f), f
    }, r.prototype.render=function() {
      var u=this.props, f=u.children, d=uy(u, ["children"]), p=Ae( {
      }, d);
      return f&&(p=this.mapChildrenToProps(f, p)), Bt.createElement(e, p)
    }, CL(r, null, [ {
      key:"canUseDOM", set:function(u) {
        e.canUseDOM=u
      }
    }]), r
  }(Bt.Component), n.propTypes= {
    base:Dt.object, bodyAttributes:Dt.object, children:Dt.oneOfType([Dt.arrayOf(Dt.node), Dt.node]), defaultTitle:Dt.string, defer:Dt.bool, encodeSpecialCharacters:Dt.bool, htmlAttributes:Dt.object, link:Dt.arrayOf(Dt.object), meta:Dt.arrayOf(Dt.object), noscript:Dt.arrayOf(Dt.object), onChangeClientState:Dt.func, script:Dt.arrayOf(Dt.object), style:Dt.arrayOf(Dt.object), title:Dt.string, titleAttributes:Dt.object, titleTemplate:Dt.string
  }, n.defaultProps= {
    defer:!0, encodeSpecialCharacters:!0
  }, n.peek=e.peek, n.rewind=function() {
    var o=e.rewind();
    return o||(o=h1( {
      baseTag:[], bodyAttributes: {
      }, encodeSpecialCharacters:!0, htmlAttributes: {
      }, linkTags:[], metaTags:[], noscriptTags:[], scriptTags:[], styleTags:[], title:"", titleAttributes: {
      }
    })), o
  }, i
}, GL=function() {
  return null
}, IL=uL(NL, jL, h1)(GL), Xd=qL(IL);
Xd.renderStatic=Xd.rewind;
const wm=T.createContext( {
});
function Em(t) {
  const e=T.useRef(null);
  return e.current===null&&(e.current=t()), e.current
}const tc=T.createContext(null), Cm=T.createContext( {
  transformPagePoint:t=>t, isStatic:!1, reducedMotion:"never"
});
class YL extends T.Component {
  getSnapshotBeforeUpdate(e) {
    const n=this.props.childRef.current;
    if(n&&e.isPresent&&!this.props.isPresent) {
      const i=this.props.sizeRef.current;
      i.height=n.offsetHeight||0, i.width=n.offsetWidth||0, i.top=n.offsetTop, i.left=n.offsetLeft
    }return null
  }componentDidUpdate() {
  }render() {
    return this.props.children
  }
}function FL( {
  children:t, isPresent:e
}) {
  const n=T.useId(), i=T.useRef(null), o=T.useRef( {
    width:0, height:0, top:0, left:0
  }),  {
    nonce:r
  }=T.useContext(Cm);
  return T.useInsertionEffect(()=> {
    const {
      width:l, height:u, top:f, left:d
    }=o.current;
    if(e||!i.current||!l||!u)return;
    i.current.dataset.motionPopId=n;
    const p=document.createElement("style");
    return r&&(p.nonce=r), document.head.appendChild(p), p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            top: ${f}px !important;
            left: ${d}px !important;
          }
        `), ()=> {
      document.head.removeChild(p)
    }
  }, [e]), w.jsx(YL,  {
    isPresent:e, childRef:i, sizeRef:o, children:T.cloneElement(t,  {
      ref:i
    })
  })
}const XL=( {
  children:t, initial:e, isPresent:n, onExitComplete:i, custom:o, presenceAffectsLayout:r, mode:l
})=> {
  const u=Em(KL), f=T.useId(), d=T.useCallback(m=> {
    u.set(m, !0);
    for(const g of u.values())if(!g)return;
    i&&i()
  }, [u, i]), p=T.useMemo(()=>( {
    id:f, initial:e, isPresent:n, custom:o, onExitComplete:d, register:m=>(u.set(m, !1), ()=>u.delete(m))
  }), r?[Math.random(), d]:[n, d]);
  return T.useMemo(()=> {
    u.forEach((m, g)=>u.set(g, !1))
  }, [n]), T.useEffect(()=> {
    !n&&!u.size&&i&&i()
  }, [n]), l==="popLayout"&&(t=w.jsx(FL,  {
    isPresent:n, children:t
  })), w.jsx(tc.Provider,  {
    value:p, children:t
  })
};
function KL() {
  return new Map
}function m1(t=!0) {
  const e=T.useContext(tc);
  if(e===null)return[!0, null];
  const {
    isPresent:n, onExitComplete:i, register:o
  }=e, r=T.useId();
  T.useEffect(()=> {
    t&&o(r)
  }, [t]);
  const l=T.useCallback(()=>t&&i&&i(r), [r, i, t]);
  return!n&&i?[!1, l]:[!0]
}const vl=t=>t.key||"";
function dy(t) {
  const e=[];
  return T.Children.forEach(t, n=> {
    T.isValidElement(n)&&e.push(n)
  }), e
}const Am=typeof window<"u", p1=Am?T.useLayoutEffect:T.useEffect, QL=( {
  children:t, custom:e, initial:n=!0, onExitComplete:i, presenceAffectsLayout:o=!0, mode:r="sync", propagate:l=!1
})=> {
  const[u, f]=m1(l), d=T.useMemo(()=>dy(t), [t]), p=l&&!u?[]:d.map(vl), m=T.useRef(!0), g=T.useRef(d), y=Em(()=>new Map), [C, E]=T.useState(d), [A, _]=T.useState(d);
  p1(()=> {
    m.current=!1, g.current=d;
    for(let M=0;
    M<A.length;
    M++) {
      const O=vl(A[M]);
      p.includes(O)?y.delete(O):y.get(O)!==!0&&y.set(O, !1)
    }
  }, [A, p.length, p.join("-")]);
  const b=[];
  if(d!==C) {
    let M=[...d];
    for(let O=0;
    O<A.length;
    O++) {
      const P=A[O], D=vl(P);
      p.includes(D)||(M.splice(O, 0, P), b.push(P))
    }r==="wait"&&b.length&&(M=b), _(dy(M)), E(d);
    return
  }const {
    forceRender:S
  }=T.useContext(wm);
  return w.jsx(w.Fragment,  {
    children:A.map(M=> {
      const O=vl(M), P=l&&!u?!1:d===A||p.includes(O), D=()=> {
        if(y.has(O))y.set(O, !0);
        else return;
        let B=!0;
        y.forEach(Z=> {
          Z||(B=!1)
        }), B&&(S==null||S(), _(g.current), l&&(f==null||f()), i&&i())
      };
      return w.jsx(XL,  {
        isPresent:P, initial:!m.current||n?void 0:!1, custom:P?void 0:e, presenceAffectsLayout:o, mode:r, onExitComplete:P?void 0:D, children:M
      }, O)
    })
  })
}, Ze=t=>t;
let g1=Ze;
function Mm(t) {
  let e;
  return()=>(e===void 0&&(e=t()), e)
}const Oo=(t, e, n)=> {
  const i=e-t;
  return i===0?1:(n-t)/i
}, ei=t=>t*1e3, ni=t=>t/1e3, $L= {
  skipAnimations:!1, useManualTiming:!1
};
function WL(t) {
  let e=new Set, n=new Set, i=!1, o=!1;
  const r=new WeakSet;
  let l= {
    delta:0, timestamp:0, isProcessing:!1
  };
  function u(d) {
    r.has(d)&&(f.schedule(d), t()), d(l)
  }const f= {
    schedule:(d, p=!1, m=!1)=> {
      const y=m&&i?e:n;
      return p&&r.add(d), y.has(d)||y.add(d), d
    }, cancel:d=> {
      n.delete(d), r.delete(d)
    }, process:d=> {
      if(l=d, i) {
        o=!0;
        return
      }i=!0, [e, n]=[n, e], e.forEach(u), e.clear(), i=!1, o&&(o=!1, f.process(d))
    }
  };
  return f
}const yl=["read", "resolveKeyframes", "update", "preRender", "render", "postRender"], JL=40;
function v1(t, e) {
  let n=!1, i=!0;
  const o= {
    delta:0, timestamp:0, isProcessing:!1
  }, r=()=>n=!0, l=yl.reduce((_, b)=>(_[b]=WL(r), _),  {
  }),  {
    read:u, resolveKeyframes:f, update:d, preRender:p, render:m, postRender:g
  }=l, y=()=> {
    const _=performance.now();
    n=!1, o.delta=i?1e3/60:Math.max(Math.min(_-o.timestamp, JL), 1), o.timestamp=_, o.isProcessing=!0, u.process(o), f.process(o), d.process(o), p.process(o), m.process(o), g.process(o), o.isProcessing=!1, n&&e&&(i=!1, t(y))
  }, C=()=> {
    n=!0, i=!0, o.isProcessing||t(y)
  };
  return {
    schedule:yl.reduce((_, b)=> {
      const S=l[b];
      return _[b]=(M, O=!1, P=!1)=>(n||C(), S.schedule(M, O, P)), _
    },  {
    }), cancel:_=> {
      for(let b=0;
      b<yl.length;
      b++)l[yl[b]].cancel(_)
    }, state:o, steps:l
  }
}const {
  schedule:Nt, cancel:Ii, state:ce, steps:Of
}=v1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze, !0), y1=T.createContext( {
  strict:!1
}), hy= {
  animation:["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit:["exit"], drag:["drag", "dragControls"], focus:["whileFocus"], hover:["whileHover", "onHoverStart", "onHoverEnd"], tap:["whileTap", "onTap", "onTapStart", "onTapCancel"], pan:["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView:["whileInView", "onViewportEnter", "onViewportLeave"], layout:["layout", "layoutId"]
}, No= {
};
for(const t in hy)No[t]= {
  isEnabled:e=>hy[t].some(n=>!!e[n])
};
function tR(t) {
  for(const e in t)No[e]= {
    ...No[e], ...t[e]
  }
}const eR=new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Su(t) {
  return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||eR.has(t)
}let _1=t=>!Su(t);
function nR(t) {
  t&&(_1=e=>e.startsWith("on")?!Su(e):t(e))
}try {
  nR(require("@emotion/is-prop-valid").default)
}catch {
}function iR(t, e, n) {
  const i= {
  };
  for(const o in t)o==="values"&&typeof t.values=="object"||(_1(o)||n===!0&&Su(o)||!e&&!Su(o)||t.draggable&&o.startsWith("onDrag"))&&(i[o]=t[o]);
  return i
}function aR(t) {
  if(typeof Proxy>"u")return t;
  const e=new Map, n=(...i)=>t(...i);
  return new Proxy(n,  {
    get:(i, o)=>o==="create"?t:(e.has(o)||e.set(o, t(o)), e.get(o))
  })
}const ec=T.createContext( {
});
function cs(t) {
  return typeof t=="string"||Array.isArray(t)
}function nc(t) {
  return t!==null&&typeof t=="object"&&typeof t.start=="function"
}const Lm=["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Rm=["initial", ...Lm];
function ic(t) {
  return nc(t.animate)||Rm.some(e=>cs(t[e]))
}function b1(t) {
  return!!(ic(t)||t.variants)
}function oR(t, e) {
  if(ic(t)) {
    const {
      initial:n, animate:i
    }=t;
    return {
      initial:n===!1||cs(n)?n:void 0, animate:cs(i)?i:void 0
    }
  }return t.inherit!==!1?e: {
  }
}function rR(t) {
  const {
    initial:e, animate:n
  }=oR(t, T.useContext(ec));
  return T.useMemo(()=>( {
    initial:e, animate:n
  }), [my(e), my(n)])
}function my(t) {
  return Array.isArray(t)?t.join(" "):t
}const sR=Symbol.for("motionComponentSymbol");
function oo(t) {
  return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t, "current")
}function lR(t, e, n) {
  return T.useCallback(i=> {
    i&&t.onMount&&t.onMount(i), e&&(i?e.mount(i):e.unmount()), n&&(typeof n=="function"?n(i):oo(n)&&(n.current=i))
  }, [e])
}const Om=t=>t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), uR="framerAppearId", x1="data-"+Om(uR),  {
  schedule:Nm, cancel:n5
}=v1(queueMicrotask, !1), T1=T.createContext( {
});
function cR(t, e, n, i, o) {
  var r, l;
  const {
    visualElement:u
  }=T.useContext(ec), f=T.useContext(y1), d=T.useContext(tc), p=T.useContext(Cm).reducedMotion, m=T.useRef(null);
  i=i||f.renderer, !m.current&&i&&(m.current=i(t,  {
    visualState:e, parent:u, props:n, presenceContext:d, blockInitialAnimation:d?d.initial===!1:!1, reducedMotionConfig:p
  }));
  const g=m.current, y=T.useContext(T1);
  g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&fR(m.current, n, o, y);
  const C=T.useRef(!1);
  T.useInsertionEffect(()=> {
    g&&C.current&&g.update(n, d)
  });
  const E=n[x1], A=T.useRef(!!E&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window, E))&&((l=window.MotionHasOptimisedAnimation)===null||l===void 0?void 0:l.call(window, E)));
  return p1(()=> {
    g&&(C.current=!0, window.MotionIsMounted=!0, g.updateFeatures(), Nm.render(g.render), A.current&&g.animationState&&g.animationState.animateChanges())
  }), T.useEffect(()=> {
    g&&(!A.current&&g.animationState&&g.animationState.animateChanges(), A.current&&(queueMicrotask(()=> {
      var _;
      (_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window, E)
    }), A.current=!1))
  }), g
}function fR(t, e, n, i) {
  const {
    layoutId:o, layout:r, drag:l, dragConstraints:u, layoutScroll:f, layoutRoot:d
  }=e;
  t.projection=new n(t.latestValues, e["data-framer-portal-id"]?void 0:S1(t.parent)), t.projection.setOptions( {
    layoutId:o, layout:r, alwaysMeasureLayout:!!l||u&&oo(u), visualElement:t, animationType:typeof r=="string"?r:"both", initialPromotionConfig:i, layoutScroll:f, layoutRoot:d
  })
}function S1(t) {
  if(t)return t.options.allowProjection!==!1?t.projection:S1(t.parent)
}function dR( {
  preloadedFeatures:t, createVisualElement:e, useRender:n, useVisualState:i, Component:o
}) {
  var r, l;
  t&&tR(t);
  function u(d, p) {
    let m;
    const g= {
      ...T.useContext(Cm), ...d, layoutId:hR(d)
    },  {
      isStatic:y
    }=g, C=rR(d), E=i(d, y);
    if(!y&&Am) {
      mR();
      const A=pR(g);
      m=A.MeasureLayout, C.visualElement=cR(o, E, g, e, A.ProjectionNode)
    }return w.jsxs(ec.Provider,  {
      value:C, children:[m&&C.visualElement?w.jsx(m,  {
        visualElement:C.visualElement, ...g
      }):null, n(o, d, lR(E, C.visualElement, p), E, y, C.visualElement)]
    })
  }u.displayName=`motion.${typeof o=="string"?o:`create($ {
    (l=(r=o.displayName)!==null&&r!==void 0?r:o.name)!==null&&l!==void 0?l:""
  })`}`;
  const f=T.forwardRef(u);
  return f[sR]=o, f
}function hR( {
  layoutId:t
}) {
  const e=T.useContext(wm).id;
  return e&&t!==void 0?e+"-"+t:t
}function mR(t, e) {
  T.useContext(y1).strict
}function pR(t) {
  const {
    drag:e, layout:n
  }=No;
  if(!e&&!n)return {
  };
  const i= {
    ...e, ...n
  };
  return {
    MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0, ProjectionNode:i.ProjectionNode
  }
}const gR=["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function zm(t) {
  return typeof t!="string"||t.includes("-")?!1:!!(gR.indexOf(t)>-1||/[A-Z]/u.test(t))
}function py(t) {
  const e=[ {
  },  {
  }];
  return t==null||t.values.forEach((n, i)=> {
    e[0][i]=n.get(), e[1][i]=n.getVelocity()
  }), e
}function Dm(t, e, n, i) {
  if(typeof e=="function") {
    const[o, r]=py(i);
    e=e(n!==void 0?n:t.custom, o, r)
  }if(typeof e=="string"&&(e=t.variants&&t.variants[e]), typeof e=="function") {
    const[o, r]=py(i);
    e=e(n!==void 0?n:t.custom, o, r)
  }return e
}const Kd=t=>Array.isArray(t), vR=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue), yR=t=>Kd(t)?t[t.length-1]||0:t, ve=t=>!!(t&&t.getVelocity);
function ql(t) {
  const e=ve(t)?t.get():t;
  return vR(e)?e.toValue():e
}function _R( {
  scrapeMotionValuesFromProps:t, createRenderState:e, onUpdate:n
}, i, o, r) {
  const l= {
    latestValues:bR(i, o, r, t), renderState:e()
  };
  return n&&(l.onMount=u=>n( {
    props:i, current:u, ...l
  }), l.onUpdate=u=>n(u)), l
}const w1=t=>(e, n)=> {
  const i=T.useContext(ec), o=T.useContext(tc), r=()=>_R(t, e, i, o);
  return n?r():Em(r)
};
function bR(t, e, n, i) {
  const o= {
  }, r=i(t,  {
  });
  for(const g in r)o[g]=ql(r[g]);
  let {
    initial:l, animate:u
  }=t;
  const f=ic(t), d=b1(t);
  e&&d&&!f&&t.inherit!==!1&&(l===void 0&&(l=e.initial), u===void 0&&(u=e.animate));
  let p=n?n.initial===!1:!1;
  p=p||l===!1;
  const m=p?u:l;
  if(m&&typeof m!="boolean"&&!nc(m)) {
    const g=Array.isArray(m)?m:[m];
    for(let y=0;
    y<g.length;
    y++) {
      const C=Dm(t, g[y]);
      if(C) {
        const {
          transitionEnd:E, transition:A, ..._
        }=C;
        for(const b in _) {
          let S=_[b];
          if(Array.isArray(S)) {
            const M=p?S.length-1:0;
            S=S[M]
          }S!==null&&(o[b]=S)
        }for(const b in E)o[b]=E[b]
      }
    }
  }return o
}const Io=["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], Ra=new Set(Io), E1=t=>e=>typeof e=="string"&&e.startsWith(t), C1=E1("--"), xR=E1("var(--"), Pm=t=>xR(t)?TR.test(t.split("/*")[0].trim()):!1, TR=/var\(--(?:[\w-]+\s*|[\w-]+\s*, (?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, A1=(t, e)=>e&&typeof t=="number"?e.transform(t):t, ui=(t, e, n)=>n>e?e:n<t?t:n, Yo= {
  test:t=>typeof t=="number", parse:parseFloat, transform:t=>t
}, fs= {
  ...Yo, transform:t=>ui(0, 1, t)
}, _l= {
  ...Yo, default:1
}, Rs=t=>( {
  test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1, parse:parseFloat, transform:e=>`${e}${t}`
}), _i=Rs("deg"), Mn=Rs("%"), Q=Rs("px"), SR=Rs("vh"), wR=Rs("vw"), gy= {
  ...Mn, parse:t=>Mn.parse(t)/100, transform:t=>Mn.transform(t*100)
}, ER= {
  borderWidth:Q, borderTopWidth:Q, borderRightWidth:Q, borderBottomWidth:Q, borderLeftWidth:Q, borderRadius:Q, radius:Q, borderTopLeftRadius:Q, borderTopRightRadius:Q, borderBottomRightRadius:Q, borderBottomLeftRadius:Q, width:Q, maxWidth:Q, height:Q, maxHeight:Q, top:Q, right:Q, bottom:Q, left:Q, padding:Q, paddingTop:Q, paddingRight:Q, paddingBottom:Q, paddingLeft:Q, margin:Q, marginTop:Q, marginRight:Q, marginBottom:Q, marginLeft:Q, backgroundPositionX:Q, backgroundPositionY:Q
}, CR= {
  rotate:_i, rotateX:_i, rotateY:_i, rotateZ:_i, scale:_l, scaleX:_l, scaleY:_l, scaleZ:_l, skew:_i, skewX:_i, skewY:_i, distance:Q, translateX:Q, translateY:Q, translateZ:Q, x:Q, y:Q, z:Q, perspective:Q, transformPerspective:Q, opacity:fs, originX:gy, originY:gy, originZ:Q
}, vy= {
  ...Yo, transform:Math.round
}, jm= {
  ...ER, ...CR, zIndex:vy, size:Q, fillOpacity:fs, strokeOpacity:fs, numOctaves:vy
}, AR= {
  x:"translateX", y:"translateY", z:"translateZ", transformPerspective:"perspective"
}, MR=Io.length;
function LR(t, e, n) {
  let i="", o=!0;
  for(let r=0;
  r<MR;
  r++) {
    const l=Io[r], u=t[l];
    if(u===void 0)continue;
    let f=!0;
    if(typeof u=="number"?f=u===(l.startsWith("scale")?1:0):f=parseFloat(u)===0, !f||n) {
      const d=A1(u, jm[l]);
      if(!f) {
        o=!1;
        const p=AR[l]||l;
        i+=`${p}(${d}) `
      }n&&(e[l]=d)
    }
  }return i=i.trim(), n?i=n(e, o?"":i):o&&(i="none"), i
}function Bm(t, e, n) {
  const {
    style:i, vars:o, transformOrigin:r
  }=t;
  let l=!1, u=!1;
  for(const f in e) {
    const d=e[f];
    if(Ra.has(f)) {
      l=!0;
      continue
    }else if(C1(f)) {
      o[f]=d;
      continue
    }else {
      const p=A1(d, jm[f]);
      f.startsWith("origin")?(u=!0, r[f]=p):i[f]=p
    }
  }if(e.transform||(l||n?i.transform=LR(e, t.transform, n):i.transform&&(i.transform="none")), u) {
    const {
      originX:f="50%", originY:d="50%", originZ:p=0
    }=r;
    i.transformOrigin=`${f} ${d} ${p}`
  }
}const RR= {
  offset:"stroke-dashoffset", array:"stroke-dasharray"
}, OR= {
  offset:"strokeDashoffset", array:"strokeDasharray"
};
function NR(t, e, n=1, i=0, o=!0) {
  t.pathLength=1;
  const r=o?RR:OR;
  t[r.offset]=Q.transform(-i);
  const l=Q.transform(e), u=Q.transform(n);
  t[r.array]=`${l} ${u}`
}function yy(t, e, n) {
  return typeof t=="string"?t:Q.transform(e+n*t)
}function zR(t, e, n) {
  const i=yy(e, t.x, t.width), o=yy(n, t.y, t.height);
  return`${i} ${o}`
}function km(t,  {
  attrX:e, attrY:n, attrScale:i, originX:o, originY:r, pathLength:l, pathSpacing:u=1, pathOffset:f=0, ...d
}, p, m) {
  if(Bm(t, d, m), p) {
    t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);
    return
  }t.attrs=t.style, t.style= {
  };
  const {
    attrs:g, style:y, dimensions:C
  }=t;
  g.transform&&(C&&(y.transform=g.transform), delete g.transform), C&&(o!==void 0||r!==void 0||y.transform)&&(y.transformOrigin=zR(C, o!==void 0?o:.5, r!==void 0?r:.5)), e!==void 0&&(g.x=e), n!==void 0&&(g.y=n), i!==void 0&&(g.scale=i), l!==void 0&&NR(g, l, u, f, !1)
}const Vm=()=>( {
  style: {
  }, transform: {
  }, transformOrigin: {
  }, vars: {
  }
}), M1=()=>( {
  ...Vm(), attrs: {
  }
}), Um=t=>typeof t=="string"&&t.toLowerCase()==="svg";
function L1(t,  {
  style:e, vars:n
}, i, o) {
  Object.assign(t.style, e, o&&o.getProjectionStyles(i));
  for(const r in n)t.style.setProperty(r, n[r])
}const R1=new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function O1(t, e, n, i) {
  L1(t, e, void 0, i);
  for(const o in e.attrs)t.setAttribute(R1.has(o)?o:Om(o), e.attrs[o])
}const wu= {
};
function DR(t) {
  Object.assign(wu, t)
}function N1(t,  {
  layout:e, layoutId:n
}) {
  return Ra.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!wu[t]||t==="opacity")
}function Hm(t, e, n) {
  var i;
  const {
    style:o
  }=t, r= {
  };
  for(const l in o)(ve(o[l])||e.style&&ve(e.style[l])||N1(l, t)||((i=n==null?void 0:n.getValue(l))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[l]=o[l]);
  return r
}function z1(t, e, n) {
  const i=Hm(t, e, n);
  for(const o in t)if(ve(t[o])||ve(e[o])) {
    const r=Io.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;
    i[r]=t[o]
  }return i
}function PR(t, e) {
  try {
    e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()
  }catch {
    e.dimensions= {
      x:0, y:0, width:0, height:0
    }
  }
}const _y=["x", "y", "width", "height", "cx", "cy", "r"], jR= {
  useVisualState:w1( {
    scrapeMotionValuesFromProps:z1, createRenderState:M1, onUpdate:( {
      props:t, prevProps:e, current:n, renderState:i, latestValues:o
    })=> {
      if(!n)return;
      let r=!!t.drag;
      if(!r) {
        for(const u in o)if(Ra.has(u)) {
          r=!0;
          break
        }
      }if(!r)return;
      let l=!e;
      if(e)for(let u=0;
      u<_y.length;
      u++) {
        const f=_y[u];
        t[f]!==e[f]&&(l=!0)
      }l&&Nt.read(()=> {
        PR(n, i), Nt.render(()=> {
          km(i, o, Um(n.tagName), t.transformTemplate), O1(n, i)
        })
      })
    }
  })
}, BR= {
  useVisualState:w1( {
    scrapeMotionValuesFromProps:Hm, createRenderState:Vm
  })
};
function D1(t, e, n) {
  for(const i in e)!ve(e[i])&&!N1(i, n)&&(t[i]=e[i])
}function kR( {
  transformTemplate:t
}, e) {
  return T.useMemo(()=> {
    const n=Vm();
    return Bm(n, e, t), Object.assign( {
    }, n.vars, n.style)
  }, [e])
}function VR(t, e) {
  const n=t.style|| {
  }, i= {
  };
  return D1(i, n, t), Object.assign(i, kR(t, e)), i
}function UR(t, e) {
  const n= {
  }, i=VR(t, e);
  return t.drag&&t.dragListener!==!1&&(n.draggable=!1, i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none", i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`), t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0), n.style=i, n
}function HR(t, e, n, i) {
  const o=T.useMemo(()=> {
    const r=M1();
    return km(r, e, Um(i), t.transformTemplate),  {
      ...r.attrs, style: {
        ...r.style
      }
    }
  }, [e]);
  if(t.style) {
    const r= {
    };
    D1(r, t.style, t), o.style= {
      ...r, ...o.style
    }
  }return o
}function ZR(t=!1) {
  return(n, i, o,  {
    latestValues:r
  }, l)=> {
    const f=(zm(n)?HR:UR)(i, r, l, n), d=iR(i, typeof n=="string", t), p=n!==T.Fragment? {
      ...d, ...f, ref:o
    }: {
    },  {
      children:m
    }=i, g=T.useMemo(()=>ve(m)?m.get():m, [m]);
    return T.createElement(n,  {
      ...p, children:g
    })
  }
}function qR(t, e) {
  return function(i,  {
    forwardMotionProps:o
  }= {
    forwardMotionProps:!1
  }) {
    const l= {
      ...zm(i)?jR:BR, preloadedFeatures:t, useRender:ZR(o), createVisualElement:e, Component:i
    };
    return dR(l)
  }
}function P1(t, e) {
  if(!Array.isArray(e))return!1;
  const n=e.length;
  if(n!==t.length)return!1;
  for(let i=0;
  i<n;
  i++)if(e[i]!==t[i])return!1;
  return!0
}function ac(t, e, n) {
  const i=t.getProps();
  return Dm(i, e, n!==void 0?n:i.custom, t)
}const GR=Mm(()=>window.ScrollTimeline!==void 0);
class IR {
  constructor(e) {
    this.stop=()=>this.runAll("stop"), this.animations=e.filter(Boolean)
  }get finished() {
    return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))
  }getAll(e) {
    return this.animations[0][e]
  }setAll(e, n) {
    for(let i=0;
    i<this.animations.length;
    i++)this.animations[i][e]=n
  }attachTimeline(e, n) {
    const i=this.animations.map(o=> {
      if(GR()&&o.attachTimeline)return o.attachTimeline(e);
      if(typeof n=="function")return n(o)
    });
    return()=> {
      i.forEach((o, r)=> {
        o&&o(), this.animations[r].stop()
      })
    }
  }get time() {
    return this.getAll("time")
  }set time(e) {
    this.setAll("time", e)
  }get speed() {
    return this.getAll("speed")
  }set speed(e) {
    this.setAll("speed", e)
  }get startTime() {
    return this.getAll("startTime")
  }get duration() {
    let e=0;
    for(let n=0;
    n<this.animations.length;
    n++)e=Math.max(e, this.animations[n].duration);
    return e
  }runAll(e) {
    this.animations.forEach(n=>n[e]())
  }flatten() {
    this.runAll("flatten")
  }play() {
    this.runAll("play")
  }pause() {
    this.runAll("pause")
  }cancel() {
    this.runAll("cancel")
  }complete() {
    this.runAll("complete")
  }
}class YR extends IR {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n)
  }
}function Zm(t, e) {
  return t?t[e]||t.default||t:void 0
}const Qd=2e4;
function j1(t) {
  let e=0;
  const n=50;
  let i=t.next(e);
  for(;
  !i.done&&e<Qd;
  )e+=n, i=t.next(e);
  return e>=Qd?1/0:e
}function qm(t) {
  return typeof t=="function"
}function by(t, e) {
  t.timeline=e, t.onfinish=null
}const Gm=t=>Array.isArray(t)&&typeof t[0]=="number", FR= {
  linearEasing:void 0
};
function XR(t, e) {
  const n=Mm(t);
  return()=> {
    var i;
    return(i=FR[e])!==null&&i!==void 0?i:n()
  }
}const Eu=XR(()=> {
  try {
    document.createElement("div").animate( {
      opacity:0
    },  {
      easing:"linear(0, 1)"
    })
  }catch {
    return!1
  }return!0
}, "linearEasing"), B1=(t, e, n=10)=> {
  let i="";
  const o=Math.max(Math.round(e/n), 2);
  for(let r=0;
  r<o;
  r++)i+=t(Oo(0, o-1, r))+", ";
  return`linear(${i.substring(0,i.length-2)})`
};
function k1(t) {
  return!!(typeof t=="function"&&Eu()||!t||typeof t=="string"&&(t in $d||Eu())||Gm(t)||Array.isArray(t)&&t.every(k1))
}const Cr=([t, e, n, i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`, $d= {
  linear:"linear", ease:"ease", easeIn:"ease-in", easeOut:"ease-out", easeInOut:"ease-in-out", circIn:Cr([0, .65, .55, 1]), circOut:Cr([.55, 0, 1, .45]), backIn:Cr([.31, .01, .66, -.59]), backOut:Cr([.33, 1.53, .69, .99])
};
function V1(t, e) {
  if(t)return typeof t=="function"&&Eu()?B1(t, e):Gm(t)?Cr(t):Array.isArray(t)?t.map(n=>V1(n, e)||$d.easeOut):$d[t]
}const mn= {
  x:!1, y:!1
};
function U1() {
  return mn.x||mn.y
}function KR(t, e, n) {
  var i;
  if(t instanceof Element)return[t];
  if(typeof t=="string") {
    let o=document;
    e&&(o=e.current);
    const r=(i=n==null?void 0:n[t])!==null&&i!==void 0?i:o.querySelectorAll(t);
    return r?Array.from(r):[]
  }return Array.from(t)
}function H1(t, e) {
  const n=KR(t), i=new AbortController, o= {
    passive:!0, ...e, signal:i.signal
  };
  return[n, o, ()=>i.abort()]
}function xy(t) {
  return e=> {
    e.pointerType==="touch"||U1()||t(e)
  }
}function QR(t, e, n= {
}) {
  const[i, o, r]=H1(t, n), l=xy(u=> {
    const {
      target:f
    }=u, d=e(u);
    if(typeof d!="function"||!f)return;
    const p=xy(m=> {
      d(m), f.removeEventListener("pointerleave", p)
    });
    f.addEventListener("pointerleave", p, o)
  });
  return i.forEach(u=> {
    u.addEventListener("pointerenter", l, o)
  }), r
}const Z1=(t, e)=>e?t===e?!0:Z1(t, e.parentElement):!1, Im=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1, $R=new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function WR(t) {
  return $R.has(t.tagName)||t.tabIndex!==-1
}const Ar=new WeakSet;
function Ty(t) {
  return e=> {
    e.key==="Enter"&&t(e)
  }
}function Nf(t, e) {
  t.dispatchEvent(new PointerEvent("pointer"+e,  {
    isPrimary:!0, bubbles:!0
  }))
}const JR=(t, e)=> {
  const n=t.currentTarget;
  if(!n)return;
  const i=Ty(()=> {
    if(Ar.has(n))return;
    Nf(n, "down");
    const o=Ty(()=> {
      Nf(n, "up")
    }), r=()=>Nf(n, "cancel");
    n.addEventListener("keyup", o, e), n.addEventListener("blur", r, e)
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", ()=>n.removeEventListener("keydown", i), e)
};
function Sy(t) {
  return Im(t)&&!U1()
}function tO(t, e, n= {
}) {
  const[i, o, r]=H1(t, n), l=u=> {
    const f=u.currentTarget;
    if(!Sy(u)||Ar.has(f))return;
    Ar.add(f);
    const d=e(u), p=(y, C)=> {
      window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", g), !(!Sy(y)||!Ar.has(f))&&(Ar.delete(f), typeof d=="function"&&d(y,  {
        success:C
      }))
    }, m=y=> {
      p(y, n.useGlobalTarget||Z1(f, y.target))
    }, g=y=> {
      p(y, !1)
    };
    window.addEventListener("pointerup", m, o), window.addEventListener("pointercancel", g, o)
  };
  return i.forEach(u=> {
    !WR(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0), (n.useGlobalTarget?window:u).addEventListener("pointerdown", l, o), u.addEventListener("focus", d=>JR(d, o), o)
  }), r
}function eO(t) {
  return t==="x"||t==="y"?mn[t]?null:(mn[t]=!0, ()=> {
    mn[t]=!1
  }):mn.x||mn.y?null:(mn.x=mn.y=!0, ()=> {
    mn.x=mn.y=!1
  })
}const q1=new Set(["width", "height", "top", "left", "right", "bottom", ...Io]);
let Gl;
function nO() {
  Gl=void 0
}const Ln= {
  now:()=>(Gl===void 0&&Ln.set(ce.isProcessing||$L.useManualTiming?ce.timestamp:performance.now()), Gl), set:t=> {
    Gl=t, queueMicrotask(nO)
  }
};
function Ym(t, e) {
  t.indexOf(e)===-1&&t.push(e)
}function Fm(t, e) {
  const n=t.indexOf(e);
  n>-1&&t.splice(n, 1)
}class Xm {
  constructor() {
    this.subscriptions=[]
  }add(e) {
    return Ym(this.subscriptions, e), ()=>Fm(this.subscriptions, e)
  }notify(e, n, i) {
    const o=this.subscriptions.length;
    if(o)if(o===1)this.subscriptions[0](e, n, i);
    else for(let r=0;
    r<o;
    r++) {
      const l=this.subscriptions[r];
      l&&l(e, n, i)
    }
  }getSize() {
    return this.subscriptions.length
  }clear() {
    this.subscriptions.length=0
  }
}function G1(t, e) {
  return e?t*(1e3/e):0
}const wy=30, iO=t=>!isNaN(parseFloat(t));
class aO {
  constructor(e, n= {
  }) {
    this.version="11.18.2", this.canTrackVelocity=null, this.events= {
    }, this.updateAndNotify=(i, o=!0)=> {
      const r=Ln.now();
      this.updatedAt!==r&&this.setPrevFrameValue(), this.prev=this.current, this.setCurrent(i), this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current), o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)
    }, this.hasAnimated=!1, this.setCurrent(e), this.owner=n.owner
  }setCurrent(e) {
    this.current=e, this.updatedAt=Ln.now(), this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=iO(this.current))
  }setPrevFrameValue(e=this.current) {
    this.prevFrameValue=e, this.prevUpdatedAt=this.updatedAt
  }onChange(e) {
    return this.on("change", e)
  }on(e, n) {
    this.events[e]||(this.events[e]=new Xm);
    const i=this.events[e].add(n);
    return e==="change"?()=> {
      i(), Nt.read(()=> {
        this.events.change.getSize()||this.stop()
      })
    }:i
  }clearListeners() {
    for(const e in this.events)this.events[e].clear()
  }attach(e, n) {
    this.passiveEffect=e, this.stopPassiveEffect=n
  }set(e, n=!0) {
    !n||!this.passiveEffect?this.updateAndNotify(e, n):this.passiveEffect(e, this.updateAndNotify)
  }setWithVelocity(e, n, i) {
    this.set(n), this.prev=void 0, this.prevFrameValue=e, this.prevUpdatedAt=this.updatedAt-i
  }jump(e, n=!0) {
    this.updateAndNotify(e), this.prev=e, this.prevUpdatedAt=this.prevFrameValue=void 0, n&&this.stop(), this.stopPassiveEffect&&this.stopPassiveEffect()
  }get() {
    return this.current
  }getPrevious() {
    return this.prev
  }getVelocity() {
    const e=Ln.now();
    if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>wy)return 0;
    const n=Math.min(this.updatedAt-this.prevUpdatedAt, wy);
    return G1(parseFloat(this.current)-parseFloat(this.prevFrameValue), n)
  }start(e) {
    return this.stop(), new Promise(n=> {
      this.hasAnimated=!0, this.animation=e(n), this.events.animationStart&&this.events.animationStart.notify()
    }).then(()=> {
      this.events.animationComplete&&this.events.animationComplete.notify(), this.clearAnimation()
    })
  }stop() {
    this.animation&&(this.animation.stop(), this.events.animationCancel&&this.events.animationCancel.notify()), this.clearAnimation()
  }isAnimating() {
    return!!this.animation
  }clearAnimation() {
    delete this.animation
  }destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect&&this.stopPassiveEffect()
  }
}function ds(t, e) {
  return new aO(t, e)
}function oO(t, e, n) {
  t.hasValue(e)?t.getValue(e).set(n):t.addValue(e, ds(n))
}function rO(t, e) {
  const n=ac(t, e);
  let {
    transitionEnd:i= {
    }, transition:o= {
    }, ...r
  }=n|| {
  };
  r= {
    ...r, ...i
  };
  for(const l in r) {
    const u=yR(r[l]);
    oO(t, l, u)
  }
}function sO(t) {
  return!!(ve(t)&&t.add)
}function Wd(t, e) {
  const n=t.getValue("willChange");
  if(sO(n))return n.add(e)
}function I1(t) {
  return t.props[x1]
}const Y1=(t, e, n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t, lO=1e-7, uO=12;
function cO(t, e, n, i, o) {
  let r, l, u=0;
  do l=e+(n-e)/2, r=Y1(l, i, o)-t, r>0?n=l:e=l;
  while(Math.abs(r)>lO&&++u<uO);
  return l
}function Os(t, e, n, i) {
  if(t===e&&n===i)return Ze;
  const o=r=>cO(r, 0, 1, t, n);
  return r=>r===0||r===1?r:Y1(o(r), e, i)
}const F1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2, X1=t=>e=>1-t(1-e), K1=Os(.33, 1.53, .69, .99), Km=X1(K1), Q1=F1(Km), $1=t=>(t*=2)<1?.5*Km(t):.5*(2-Math.pow(2, -10*(t-1))), Qm=t=>1-Math.sin(Math.acos(t)), W1=X1(Qm), J1=F1(Qm), tT=t=>/^0[^.\s]+$/u.test(t);
function fO(t) {
  return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||tT(t):!0
}const qr=t=>Math.round(t*1e5)/1e5, $m=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dO(t) {
  return t==null
}const hO=/^(?:#[\da-f] {
  3, 8
}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[, \s]+) {
  2
}-?[\d.]+%?\s*(?:[, /]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wm=(t, e)=>n=>!!(typeof n=="string"&&hO.test(n)&&n.startsWith(t)||e&&!dO(n)&&Object.prototype.hasOwnProperty.call(n, e)), eT=(t, e, n)=>i=> {
  if(typeof i!="string")return i;
  const[o, r, l, u]=i.match($m);
  return {
    [t]:parseFloat(o), [e]:parseFloat(r), [n]:parseFloat(l), alpha:u!==void 0?parseFloat(u):1
  }
}, mO=t=>ui(0, 255, t), zf= {
  ...Yo, transform:t=>Math.round(mO(t))
}, ca= {
  test:Wm("rgb", "red"), parse:eT("red", "green", "blue"), transform:( {
    red:t, green:e, blue:n, alpha:i=1
  })=>"rgba("+zf.transform(t)+", "+zf.transform(e)+", "+zf.transform(n)+", "+qr(fs.transform(i))+")"
};
function pO(t) {
  let e="", n="", i="", o="";
  return t.length>5?(e=t.substring(1, 3), n=t.substring(3, 5), i=t.substring(5, 7), o=t.substring(7, 9)):(e=t.substring(1, 2), n=t.substring(2, 3), i=t.substring(3, 4), o=t.substring(4, 5), e+=e, n+=n, i+=i, o+=o),  {
    red:parseInt(e, 16), green:parseInt(n, 16), blue:parseInt(i, 16), alpha:o?parseInt(o, 16)/255:1
  }
}const Jd= {
  test:Wm("#"), parse:pO, transform:ca.transform
}, ro= {
  test:Wm("hsl", "hue"), parse:eT("hue", "saturation", "lightness"), transform:( {
    hue:t, saturation:e, lightness:n, alpha:i=1
  })=>"hsla("+Math.round(t)+", "+Mn.transform(qr(e))+", "+Mn.transform(qr(n))+", "+qr(fs.transform(i))+")"
}, ge= {
  test:t=>ca.test(t)||Jd.test(t)||ro.test(t), parse:t=>ca.test(t)?ca.parse(t):ro.test(t)?ro.parse(t):Jd.parse(t), transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ca.transform(t):ro.transform(t)
}, gO=/(?:#[\da-f] {
  3, 8
}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[, \s]+) {
  2
}-?[\d.]+%?\s*(?:[, /]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vO(t) {
  var e, n;
  return isNaN(t)&&typeof t=="string"&&(((e=t.match($m))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(gO))===null||n===void 0?void 0:n.length)||0)>0
}const nT="number", iT="color", yO="var", _O="var(", Ey="${}", bO=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*, (?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f] {
  3, 8
}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[, \s]+) {
  2
}-?[\d.]+%?\s*(?:[, /]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hs(t) {
  const e=t.toString(), n=[], i= {
    color:[], number:[], var:[]
  }, o=[];
  let r=0;
  const u=e.replace(bO, f=>(ge.test(f)?(i.color.push(r), o.push(iT), n.push(ge.parse(f))):f.startsWith(_O)?(i.var.push(r), o.push(yO), n.push(f)):(i.number.push(r), o.push(nT), n.push(parseFloat(f))), ++r, Ey)).split(Ey);
  return {
    values:n, split:u, indexes:i, types:o
  }
}function aT(t) {
  return hs(t).values
}function oT(t) {
  const {
    split:e, types:n
  }=hs(t), i=e.length;
  return o=> {
    let r="";
    for(let l=0;
    l<i;
    l++)if(r+=e[l], o[l]!==void 0) {
      const u=n[l];
      u===nT?r+=qr(o[l]):u===iT?r+=ge.transform(o[l]):r+=o[l]
    }return r
  }
}const xO=t=>typeof t=="number"?0:t;
function TO(t) {
  const e=aT(t);
  return oT(t)(e.map(xO))
}const Yi= {
  test:vO, parse:aT, createTransformer:oT, getAnimatableNone:TO
}, SO=new Set(["brightness", "contrast", "saturate", "opacity"]);
function wO(t) {
  const[e, n]=t.slice(0, -1).split("(");
  if(e==="drop-shadow")return t;
  const[i]=n.match($m)||[];
  if(!i)return t;
  const o=n.replace(i, "");
  let r=SO.has(e)?1:0;
  return i!==n&&(r*=100), e+"("+r+o+")"
}const EO=/\b([a-z-]*)\(.*?\)/gu, th= {
  ...Yi, getAnimatableNone:t=> {
    const e=t.match(EO);
    return e?e.map(wO).join(" "):t
  }
}, CO= {
  ...jm, color:ge, backgroundColor:ge, outlineColor:ge, fill:ge, stroke:ge, borderColor:ge, borderTopColor:ge, borderRightColor:ge, borderBottomColor:ge, borderLeftColor:ge, filter:th, WebkitFilter:th
}, Jm=t=>CO[t];
function rT(t, e) {
  let n=Jm(t);
  return n!==th&&(n=Yi), n.getAnimatableNone?n.getAnimatableNone(e):void 0
}const AO=new Set(["auto", "none", "0"]);
function MO(t, e, n) {
  let i=0, o;
  for(;
  i<t.length&&!o;
  ) {
    const r=t[i];
    typeof r=="string"&&!AO.has(r)&&hs(r).values.length&&(o=t[i]), i++
  }if(o&&n)for(const r of e)t[r]=rT(n, o)
}const Cy=t=>t===Yo||t===Q, Ay=(t, e)=>parseFloat(t.split(", ")[e]), My=(t, e)=>(n,  {
  transform:i
})=> {
  if(i==="none"||!i)return 0;
  const o=i.match(/^matrix3d\((.+)\)$/u);
  if(o)return Ay(o[1], e);
   {
    const r=i.match(/^matrix\((.+)\)$/u);
    return r?Ay(r[1], t):0
  }
}, LO=new Set(["x", "y", "z"]), RO=Io.filter(t=>!LO.has(t));
function OO(t) {
  const e=[];
  return RO.forEach(n=> {
    const i=t.getValue(n);
    i!==void 0&&(e.push([n, i.get()]), i.set(n.startsWith("scale")?1:0))
  }), e
}const zo= {
  width:( {
    x:t
  },  {
    paddingLeft:e="0", paddingRight:n="0"
  })=>t.max-t.min-parseFloat(e)-parseFloat(n), height:( {
    y:t
  },  {
    paddingTop:e="0", paddingBottom:n="0"
  })=>t.max-t.min-parseFloat(e)-parseFloat(n), top:(t,  {
    top:e
  })=>parseFloat(e), left:(t,  {
    left:e
  })=>parseFloat(e), bottom:( {
    y:t
  },  {
    top:e
  })=>parseFloat(e)+(t.max-t.min), right:( {
    x:t
  },  {
    left:e
  })=>parseFloat(e)+(t.max-t.min), x:My(4, 13), y:My(5, 14)
};
zo.translateX=zo.x;
zo.translateY=zo.y;
const va=new Set;
let eh=!1, nh=!1;
function sT() {
  if(nh) {
    const t=Array.from(va).filter(i=>i.needsMeasurement), e=new Set(t.map(i=>i.element)), n=new Map;
    e.forEach(i=> {
      const o=OO(i);
      o.length&&(n.set(i, o), i.render())
    }), t.forEach(i=>i.measureInitialState()), e.forEach(i=> {
      i.render();
      const o=n.get(i);
      o&&o.forEach(([r, l])=> {
        var u;
        (u=i.getValue(r))===null||u===void 0||u.set(l)
      })
    }), t.forEach(i=>i.measureEndState()), t.forEach(i=> {
      i.suspendedScrollY!==void 0&&window.scrollTo(0, i.suspendedScrollY)
    })
  }nh=!1, eh=!1, va.forEach(t=>t.complete()), va.clear()
}function lT() {
  va.forEach(t=> {
    t.readKeyframes(), t.needsMeasurement&&(nh=!0)
  })
}function NO() {
  lT(), sT()
}class tp {
  constructor(e, n, i, o, r, l=!1) {
    this.isComplete=!1, this.isAsync=!1, this.needsMeasurement=!1, this.isScheduled=!1, this.unresolvedKeyframes=[...e], this.onComplete=n, this.name=i, this.motionValue=o, this.element=r, this.isAsync=l
  }scheduleResolve() {
    this.isScheduled=!0, this.isAsync?(va.add(this), eh||(eh=!0, Nt.read(lT), Nt.resolveKeyframes(sT))):(this.readKeyframes(), this.complete())
  }readKeyframes() {
    const {
      unresolvedKeyframes:e, name:n, element:i, motionValue:o
    }=this;
    for(let r=0;
    r<e.length;
    r++)if(e[r]===null)if(r===0) {
      const l=o==null?void 0:o.get(), u=e[e.length-1];
      if(l!==void 0)e[0]=l;
      else if(i&&n) {
        const f=i.readValue(n, u);
        f!=null&&(e[0]=f)
      }e[0]===void 0&&(e[0]=u), o&&l===void 0&&o.set(e[0])
    }else e[r]=e[r-1]
  }setFinalKeyframe() {
  }measureInitialState() {
  }renderEndStyles() {
  }measureEndState() {
  }complete() {
    this.isComplete=!0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), va.delete(this)
  }cancel() {
    this.isComplete||(this.isScheduled=!1, va.delete(this))
  }resume() {
    this.isComplete||this.scheduleResolve()
  }
}const uT=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), zO=/^var\(--(?:([\w-]+)|([\w-]+),  ?([a-zA-Z\d ()%#., -]+))\)/u;
function DO(t) {
  const e=zO.exec(t);
  if(!e)return[, ];
  const[, n, i, o]=e;
  return[`--${n??i}`, o]
}function cT(t, e, n=1) {
  const[i, o]=DO(t);
  if(!i)return;
  const r=window.getComputedStyle(e).getPropertyValue(i);
  if(r) {
    const l=r.trim();
    return uT(l)?parseFloat(l):l
  }return Pm(o)?cT(o, e, n+1):o
}const fT=t=>e=>e.test(t), PO= {
  test:t=>t==="auto", parse:t=>t
}, dT=[Yo, Q, Mn, _i, wR, SR, PO], Ly=t=>dT.find(fT(t));
class hT extends tp {
  constructor(e, n, i, o, r) {
    super(e, n, i, o, r, !0)
  }readKeyframes() {
    const {
      unresolvedKeyframes:e, element:n, name:i
    }=this;
    if(!n||!n.current)return;
    super.readKeyframes();
    for(let f=0;
    f<e.length;
    f++) {
      let d=e[f];
      if(typeof d=="string"&&(d=d.trim(), Pm(d))) {
        const p=cT(d, n.current);
        p!==void 0&&(e[f]=p), f===e.length-1&&(this.finalKeyframe=d)
      }
    }if(this.resolveNoneKeyframes(), !q1.has(i)||e.length!==2)return;
    const[o, r]=e, l=Ly(o), u=Ly(r);
    if(l!==u)if(Cy(l)&&Cy(u))for(let f=0;
    f<e.length;
    f++) {
      const d=e[f];
      typeof d=="string"&&(e[f]=parseFloat(d))
    }else this.needsMeasurement=!0
  }resolveNoneKeyframes() {
    const {
      unresolvedKeyframes:e, name:n
    }=this, i=[];
    for(let o=0;
    o<e.length;
    o++)fO(e[o])&&i.push(o);
    i.length&&MO(e, i, n)
  }measureInitialState() {
    const {
      element:e, unresolvedKeyframes:n, name:i
    }=this;
    if(!e||!e.current)return;
    i==="height"&&(this.suspendedScrollY=window.pageYOffset), this.measuredOrigin=zo[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0]=this.measuredOrigin;
    const o=n[n.length-1];
    o!==void 0&&e.getValue(i, o).jump(o, !1)
  }measureEndState() {
    var e;
    const {
      element:n, name:i, unresolvedKeyframes:o
    }=this;
    if(!n||!n.current)return;
    const r=n.getValue(i);
    r&&r.jump(this.measuredOrigin, !1);
    const l=o.length-1, u=o[l];
    o[l]=zo[i](n.measureViewportBox(), window.getComputedStyle(n.current)), u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u), !((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f, d])=> {
      n.getValue(f).set(d)
    }), this.resolveNoneKeyframes()
  }
}const Ry=(t, e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Yi.test(t)||t==="0")&&!t.startsWith("url("));
function jO(t) {
  const e=t[0];
  if(t.length===1)return!0;
  for(let n=0;
  n<t.length;
  n++)if(t[n]!==e)return!0
}function BO(t, e, n, i) {
  const o=t[0];
  if(o===null)return!1;
  if(e==="display"||e==="visibility")return!0;
  const r=t[t.length-1], l=Ry(o, e), u=Ry(r, e);
  return!l||!u?!1:jO(t)||(n==="spring"||qm(n))&&i
}const kO=t=>t!==null;
function oc(t,  {
  repeat:e, repeatType:n="loop"
}, i) {
  const o=t.filter(kO), r=e&&n!=="loop"&&e%2===1?0:o.length-1;
  return!r||i===void 0?o[r]:i
}const VO=40;
class mT {
  constructor( {
    autoplay:e=!0, delay:n=0, type:i="keyframes", repeat:o=0, repeatDelay:r=0, repeatType:l="loop", ...u
  }) {
    this.isStopped=!1, this.hasAttemptedResolve=!1, this.createdAt=Ln.now(), this.options= {
      autoplay:e, delay:n, type:i, repeat:o, repeatDelay:r, repeatType:l, ...u
    }, this.updateFinishedPromise()
  }calcStartTime() {
    return this.resolvedAt?this.resolvedAt-this.createdAt>VO?this.resolvedAt:this.createdAt:this.createdAt
  }get resolved() {
    return!this._resolved&&!this.hasAttemptedResolve&&NO(), this._resolved
  }onKeyframesResolved(e, n) {
    this.resolvedAt=Ln.now(), this.hasAttemptedResolve=!0;
    const {
      name:i, type:o, velocity:r, delay:l, onComplete:u, onUpdate:f, isGenerator:d
    }=this.options;
    if(!d&&!BO(e, i, o, r))if(l)this.options.duration=0;
    else {
      f&&f(oc(e, this.options, n)), u&&u(), this.resolveFinishedPromise();
      return
    }const p=this.initPlayback(e, n);
    p!==!1&&(this._resolved= {
      keyframes:e, finalKeyframe:n, ...p
    }, this.onPostResolved())
  }onPostResolved() {
  }then(e, n) {
    return this.currentFinishedPromise.then(e, n)
  }flatten() {
    this.options.type="keyframes", this.options.ease="linear"
  }updateFinishedPromise() {
    this.currentFinishedPromise=new Promise(e=> {
      this.resolveFinishedPromise=e
    })
  }
}const Ht=(t, e, n)=>t+(e-t)*n;
function Df(t, e, n) {
  return n<0&&(n+=1), n>1&&(n-=1), n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t
}function UO( {
  hue:t, saturation:e, lightness:n, alpha:i
}) {
  t/=360, e/=100, n/=100;
  let o=0, r=0, l=0;
  if(!e)o=r=l=n;
  else {
    const u=n<.5?n*(1+e):n+e-n*e, f=2*n-u;
    o=Df(f, u, t+1/3), r=Df(f, u, t), l=Df(f, u, t-1/3)
  }return {
    red:Math.round(o*255), green:Math.round(r*255), blue:Math.round(l*255), alpha:i
  }
}function Cu(t, e) {
  return n=>n>0?e:t
}const Pf=(t, e, n)=> {
  const i=t*t, o=n*(e*e-i)+i;
  return o<0?0:Math.sqrt(o)
}, HO=[Jd, ca, ro], ZO=t=>HO.find(e=>e.test(t));
function Oy(t) {
  const e=ZO(t);
  if(!e)return!1;
  let n=e.parse(t);
  return e===ro&&(n=UO(n)), n
}const Ny=(t, e)=> {
  const n=Oy(t), i=Oy(e);
  if(!n||!i)return Cu(t, e);
  const o= {
    ...n
  };
  return r=>(o.red=Pf(n.red, i.red, r), o.green=Pf(n.green, i.green, r), o.blue=Pf(n.blue, i.blue, r), o.alpha=Ht(n.alpha, i.alpha, r), ca.transform(o))
}, qO=(t, e)=>n=>e(t(n)), Ns=(...t)=>t.reduce(qO), ih=new Set(["none", "hidden"]);
function GO(t, e) {
  return ih.has(t)?n=>n<=0?t:e:n=>n>=1?e:t
}function IO(t, e) {
  return n=>Ht(t, e, n)
}function ep(t) {
  return typeof t=="number"?IO:typeof t=="string"?Pm(t)?Cu:ge.test(t)?Ny:XO:Array.isArray(t)?pT:typeof t=="object"?ge.test(t)?Ny:YO:Cu
}function pT(t, e) {
  const n=[...t], i=n.length, o=t.map((r, l)=>ep(r)(r, e[l]));
  return r=> {
    for(let l=0;
    l<i;
    l++)n[l]=o[l](r);
    return n
  }
}function YO(t, e) {
  const n= {
    ...t, ...e
  }, i= {
  };
  for(const o in n)t[o]!==void 0&&e[o]!==void 0&&(i[o]=ep(t[o])(t[o], e[o]));
  return o=> {
    for(const r in i)n[r]=i[r](o);
    return n
  }
}function FO(t, e) {
  var n;
  const i=[], o= {
    color:0, var:0, number:0
  };
  for(let r=0;
  r<e.values.length;
  r++) {
    const l=e.types[r], u=t.indexes[l][o[l]], f=(n=t.values[u])!==null&&n!==void 0?n:0;
    i[r]=f, o[l]++
  }return i
}const XO=(t, e)=> {
  const n=Yi.createTransformer(e), i=hs(t), o=hs(e);
  return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?ih.has(t)&&!o.values.length||ih.has(e)&&!i.values.length?GO(t, e):Ns(pT(FO(i, o), o.values), n):Cu(t, e)
};
function gT(t, e, n) {
  return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Ht(t, e, n):ep(t)(t, e)
}const KO=5;
function vT(t, e, n) {
  const i=Math.max(e-KO, 0);
  return G1(n-t(i), e-i)
}const Gt= {
  stiffness:100, damping:10, mass:1, velocity:0, duration:800, bounce:.3, visualDuration:.3, restSpeed: {
    granular:.01, default:2
  }, restDelta: {
    granular:.005, default:.5
  }, minDuration:.01, maxDuration:10, minDamping:.05, maxDamping:1
}, jf=.001;
function QO( {
  duration:t=Gt.duration, bounce:e=Gt.bounce, velocity:n=Gt.velocity, mass:i=Gt.mass
}) {
  let o, r, l=1-e;
  l=ui(Gt.minDamping, Gt.maxDamping, l), t=ui(Gt.minDuration, Gt.maxDuration, ni(t)), l<1?(o=d=> {
    const p=d*l, m=p*t, g=p-n, y=ah(d, l), C=Math.exp(-m);
    return jf-g/y*C
  }, r=d=> {
    const m=d*l*t, g=m*n+n, y=Math.pow(l, 2)*Math.pow(d, 2)*t, C=Math.exp(-m), E=ah(Math.pow(d, 2), l);
    return(-o(d)+jf>0?-1:1)*((g-y)*C)/E
  }):(o=d=> {
    const p=Math.exp(-d*t), m=(d-n)*t+1;
    return-jf+p*m
  }, r=d=> {
    const p=Math.exp(-d*t), m=(n-d)*(t*t);
    return p*m
  });
  const u=5/t, f=WO(o, r, u);
  if(t=ei(t), isNaN(f))return {
    stiffness:Gt.stiffness, damping:Gt.damping, duration:t
  };
   {
    const d=Math.pow(f, 2)*i;
    return {
      stiffness:d, damping:l*2*Math.sqrt(i*d), duration:t
    }
  }
}const $O=12;
function WO(t, e, n) {
  let i=n;
  for(let o=1;
  o<$O;
  o++)i=i-t(i)/e(i);
  return i
}function ah(t, e) {
  return t*Math.sqrt(1-e*e)
}const JO=["duration", "bounce"], tN=["stiffness", "damping", "mass"];
function zy(t, e) {
  return e.some(n=>t[n]!==void 0)
}function eN(t) {
  let e= {
    velocity:Gt.velocity, stiffness:Gt.stiffness, damping:Gt.damping, mass:Gt.mass, isResolvedFromDuration:!1, ...t
  };
  if(!zy(t, tN)&&zy(t, JO))if(t.visualDuration) {
    const n=t.visualDuration, i=2*Math.PI/(n*1.2), o=i*i, r=2*ui(.05, 1, 1-(t.bounce||0))*Math.sqrt(o);
    e= {
      ...e, mass:Gt.mass, stiffness:o, damping:r
    }
  }else {
    const n=QO(t);
    e= {
      ...e, ...n, mass:Gt.mass
    }, e.isResolvedFromDuration=!0
  }return e
}function yT(t=Gt.visualDuration, e=Gt.bounce) {
  const n=typeof t!="object"? {
    visualDuration:t, keyframes:[0, 1], bounce:e
  }:t;
  let {
    restSpeed:i, restDelta:o
  }=n;
  const r=n.keyframes[0], l=n.keyframes[n.keyframes.length-1], u= {
    done:!1, value:r
  },  {
    stiffness:f, damping:d, mass:p, duration:m, velocity:g, isResolvedFromDuration:y
  }=eN( {
    ...n, velocity:-ni(n.velocity||0)
  }), C=g||0, E=d/(2*Math.sqrt(f*p)), A=l-r, _=ni(Math.sqrt(f/p)), b=Math.abs(A)<5;
  i||(i=b?Gt.restSpeed.granular:Gt.restSpeed.default), o||(o=b?Gt.restDelta.granular:Gt.restDelta.default);
  let S;
  if(E<1) {
    const O=ah(_, E);
    S=P=> {
      const D=Math.exp(-E*_*P);
      return l-D*((C+E*_*A)/O*Math.sin(O*P)+A*Math.cos(O*P))
    }
  }else if(E===1)S=O=>l-Math.exp(-_*O)*(A+(C+_*A)*O);
  else {
    const O=_*Math.sqrt(E*E-1);
    S=P=> {
      const D=Math.exp(-E*_*P), B=Math.min(O*P, 300);
      return l-D*((C+E*_*A)*Math.sinh(B)+O*A*Math.cosh(B))/O
    }
  }const M= {
    calculatedDuration:y&&m||null, next:O=> {
      const P=S(O);
      if(y)u.done=O>=m;
      else {
        let D=0;
        E<1&&(D=O===0?ei(C):vT(S, O, P));
        const B=Math.abs(D)<=i, Z=Math.abs(l-P)<=o;
        u.done=B&&Z
      }return u.value=u.done?l:P, u
    }, toString:()=> {
      const O=Math.min(j1(M), Qd), P=B1(D=>M.next(O*D).value, O, 30);
      return O+"ms "+P
    }
  };
  return M
}function Dy( {
  keyframes:t, velocity:e=0, power:n=.8, timeConstant:i=325, bounceDamping:o=10, bounceStiffness:r=500, modifyTarget:l, min:u, max:f, restDelta:d=.5, restSpeed:p
}) {
  const m=t[0], g= {
    done:!1, value:m
  }, y=B=>u!==void 0&&B<u||f!==void 0&&B>f, C=B=>u===void 0?f:f===void 0||Math.abs(u-B)<Math.abs(f-B)?u:f;
  let E=n*e;
  const A=m+E, _=l===void 0?A:l(A);
  _!==A&&(E=_-m);
  const b=B=>-E*Math.exp(-B/i), S=B=>_+b(B), M=B=> {
    const Z=b(B), I=S(B);
    g.done=Math.abs(Z)<=d, g.value=g.done?_:I
  };
  let O, P;
  const D=B=> {
    y(g.value)&&(O=B, P=yT( {
      keyframes:[g.value, C(g.value)], velocity:vT(S, B, g.value), damping:o, stiffness:r, restDelta:d, restSpeed:p
    }))
  };
  return D(0),  {
    calculatedDuration:null, next:B=> {
      let Z=!1;
      return!P&&O===void 0&&(Z=!0, M(B), D(B)), O!==void 0&&B>=O?P.next(B-O):(!Z&&M(B), g)
    }
  }
}const nN=Os(.42, 0, 1, 1), iN=Os(0, 0, .58, 1), _T=Os(.42, 0, .58, 1), aN=t=>Array.isArray(t)&&typeof t[0]!="number", oN= {
  linear:Ze, easeIn:nN, easeInOut:_T, easeOut:iN, circIn:Qm, circInOut:J1, circOut:W1, backIn:Km, backInOut:Q1, backOut:K1, anticipate:$1
}, Py=t=> {
  if(Gm(t)) {
    g1(t.length===4);
    const[e, n, i, o]=t;
    return Os(e, n, i, o)
  }else if(typeof t=="string")return oN[t];
  return t
};
function rN(t, e, n) {
  const i=[], o=n||gT, r=t.length-1;
  for(let l=0;
  l<r;
  l++) {
    let u=o(t[l], t[l+1]);
    if(e) {
      const f=Array.isArray(e)?e[l]||Ze:e;
      u=Ns(f, u)
    }i.push(u)
  }return i
}function sN(t, e,  {
  clamp:n=!0, ease:i, mixer:o
}= {
}) {
  const r=t.length;
  if(g1(r===e.length), r===1)return()=>e[0];
  if(r===2&&e[0]===e[1])return()=>e[1];
  const l=t[0]===t[1];
  t[0]>t[r-1]&&(t=[...t].reverse(), e=[...e].reverse());
  const u=rN(e, i, o), f=u.length, d=p=> {
    if(l&&p<t[0])return e[0];
    let m=0;
    if(f>1)for(;
    m<t.length-2&&!(p<t[m+1]);
    m++);
    const g=Oo(t[m], t[m+1], p);
    return u[m](g)
  };
  return n?p=>d(ui(t[0], t[r-1], p)):d
}function lN(t, e) {
  const n=t[t.length-1];
  for(let i=1;
  i<=e;
  i++) {
    const o=Oo(0, e, i);
    t.push(Ht(n, 1, o))
  }
}function uN(t) {
  const e=[0];
  return lN(e, t.length-1), e
}function cN(t, e) {
  return t.map(n=>n*e)
}function fN(t, e) {
  return t.map(()=>e||_T).splice(0, t.length-1)
}function Au( {
  duration:t=300, keyframes:e, times:n, ease:i="easeInOut"
}) {
  const o=aN(i)?i.map(Py):Py(i), r= {
    done:!1, value:e[0]
  }, l=cN(n&&n.length===e.length?n:uN(e), t), u=sN(l, e,  {
    ease:Array.isArray(o)?o:fN(e, o)
  });
  return {
    calculatedDuration:t, next:f=>(r.value=u(f), r.done=f>=t, r)
  }
}const dN=t=> {
  const e=( {
    timestamp:n
  })=>t(n);
  return {
    start:()=>Nt.update(e, !0), stop:()=>Ii(e), now:()=>ce.isProcessing?ce.timestamp:Ln.now()
  }
}, hN= {
  decay:Dy, inertia:Dy, tween:Au, keyframes:Au, spring:yT
}, mN=t=>t/100;
class np extends mT {
  constructor(e) {
    super(e), this.holdTime=null, this.cancelTime=null, this.currentTime=0, this.playbackSpeed=1, this.pendingPlayState="running", this.startTime=null, this.state="idle", this.stop=()=> {
      if(this.resolver.cancel(), this.isStopped=!0, this.state==="idle")return;
      this.teardown();
      const {
        onStop:f
      }=this.options;
      f&&f()
    };
    const {
      name:n, motionValue:i, element:o, keyframes:r
    }=this.options, l=(o==null?void 0:o.KeyframeResolver)||tp, u=(f, d)=>this.onKeyframesResolved(f, d);
    this.resolver=new l(r, u, n, i, o), this.resolver.scheduleResolve()
  }flatten() {
    super.flatten(), this._resolved&&Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
  }initPlayback(e) {
    const {
      type:n="keyframes", repeat:i=0, repeatDelay:o=0, repeatType:r, velocity:l=0
    }=this.options, u=qm(n)?n:hN[n]||Au;
    let f, d;
    u!==Au&&typeof e[0]!="number"&&(f=Ns(mN, gT(e[0], e[1])), e=[0, 100]);
    const p=u( {
      ...this.options, keyframes:e
    });
    r==="mirror"&&(d=u( {
      ...this.options, keyframes:[...e].reverse(), velocity:-l
    })), p.calculatedDuration===null&&(p.calculatedDuration=j1(p));
    const {
      calculatedDuration:m
    }=p, g=m+o, y=g*(i+1)-o;
    return {
      generator:p, mirroredGenerator:d, mapPercentToKeyframes:f, calculatedDuration:m, resolvedDuration:g, totalDuration:y
    }
  }onPostResolved() {
    const {
      autoplay:e=!0
    }=this.options;
    this.play(), this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState
  }tick(e, n=!1) {
    const {
      resolved:i
    }=this;
    if(!i) {
      const {
        keyframes:B
      }=this.options;
      return {
        done:!0, value:B[B.length-1]
      }
    }const {
      finalKeyframe:o, generator:r, mirroredGenerator:l, mapPercentToKeyframes:u, keyframes:f, calculatedDuration:d, totalDuration:p, resolvedDuration:m
    }=i;
    if(this.startTime===null)return r.next(0);
    const {
      delay:g, repeat:y, repeatType:C, repeatDelay:E, onUpdate:A
    }=this.options;
    this.speed>0?this.startTime=Math.min(this.startTime, e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed, this.startTime)), n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;
    const _=this.currentTime-g*(this.speed>=0?1:-1), b=this.speed>=0?_<0:_>p;
    this.currentTime=Math.max(_, 0), this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);
    let S=this.currentTime, M=r;
    if(y) {
      const B=Math.min(this.currentTime, p)/m;
      let Z=Math.floor(B), I=B%1;
      !I&&B>=1&&(I=1), I===1&&Z--, Z=Math.min(Z, y+1), !!(Z%2)&&(C==="reverse"?(I=1-I, E&&(I-=E/m)):C==="mirror"&&(M=l)), S=ui(0, 1, I)*m
    }const O=b? {
      done:!1, value:f[0]
    }:M.next(S);
    u&&(O.value=u(O.value));
    let {
      done:P
    }=O;
    !b&&d!==null&&(P=this.speed>=0?this.currentTime>=p:this.currentTime<=0);
    const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);
    return D&&o!==void 0&&(O.value=oc(f, this.options, o)), A&&A(O.value), D&&this.finish(), O
  }get duration() {
    const {
      resolved:e
    }=this;
    return e?ni(e.calculatedDuration):0
  }get time() {
    return ni(this.currentTime)
  }set time(e) {
    e=ei(e), this.currentTime=e, this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)
  }get speed() {
    return this.playbackSpeed
  }set speed(e) {
    const n=this.playbackSpeed!==e;
    this.playbackSpeed=e, n&&(this.time=ni(this.currentTime))
  }play() {
    if(this.resolver.isScheduled||this.resolver.resume(), !this._resolved) {
      this.pendingPlayState="running";
      return
    }if(this.isStopped)return;
    const {
      driver:e=dN, onPlay:n, startTime:i
    }=this.options;
    this.driver||(this.driver=e(r=>this.tick(r))), n&&n();
    const o=this.driver.now();
    this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=i??this.calcStartTime(), this.state==="finished"&&this.updateFinishedPromise(), this.cancelTime=this.startTime, this.holdTime=null, this.state="running", this.driver.start()
  }pause() {
    var e;
    if(!this._resolved) {
      this.pendingPlayState="paused";
      return
    }this.state="paused", this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0
  }complete() {
    this.state!=="running"&&this.play(), this.pendingPlayState=this.state="finished", this.holdTime=null
  }finish() {
    this.teardown(), this.state="finished";
    const {
      onComplete:e
    }=this.options;
    e&&e()
  }cancel() {
    this.cancelTime!==null&&this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }teardown() {
    this.state="idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime=this.cancelTime=null, this.resolver.cancel()
  }stopDriver() {
    this.driver&&(this.driver.stop(), this.driver=void 0)
  }sample(e) {
    return this.startTime=0, this.tick(e, !0)
  }
}const pN=new Set(["opacity", "clipPath", "filter", "transform"]);
function gN(t, e, n,  {
  delay:i=0, duration:o=300, repeat:r=0, repeatType:l="loop", ease:u="easeInOut", times:f
}= {
}) {
  const d= {
    [e]:n
  };
  f&&(d.offset=f);
  const p=V1(u, o);
  return Array.isArray(p)&&(d.easing=p), t.animate(d,  {
    delay:i, duration:o, easing:Array.isArray(p)?"linear":p, fill:"both", iterations:r+1, direction:l==="reverse"?"alternate":"normal"
  })
}const vN=Mm(()=>Object.hasOwnProperty.call(Element.prototype, "animate")), Mu=10, yN=2e4;
function _N(t) {
  return qm(t.type)||t.type==="spring"||!k1(t.ease)
}function bN(t, e) {
  const n=new np( {
    ...e, keyframes:t, repeat:0, delay:0, isGenerator:!0
  });
  let i= {
    done:!1, value:t[0]
  };
  const o=[];
  let r=0;
  for(;
  !i.done&&r<yN;
  )i=n.sample(r), o.push(i.value), r+=Mu;
  return {
    times:void 0, keyframes:o, duration:r-Mu, ease:"linear"
  }
}const bT= {
  anticipate:$1, backInOut:Q1, circInOut:J1
};
function xN(t) {
  return t in bT
}class jy extends mT {
  constructor(e) {
    super(e);
    const {
      name:n, motionValue:i, element:o, keyframes:r
    }=this.options;
    this.resolver=new hT(r, (l, u)=>this.onKeyframesResolved(l, u), n, i, o), this.resolver.scheduleResolve()
  }initPlayback(e, n) {
    let {
      duration:i=300, times:o, ease:r, type:l, motionValue:u, name:f, startTime:d
    }=this.options;
    if(!u.owner||!u.owner.current)return!1;
    if(typeof r=="string"&&Eu()&&xN(r)&&(r=bT[r]), _N(this.options)) {
      const {
        onComplete:m, onUpdate:g, motionValue:y, element:C, ...E
      }=this.options, A=bN(e, E);
      e=A.keyframes, e.length===1&&(e[1]=e[0]), i=A.duration, o=A.times, r=A.ease, l="keyframes"
    }const p=gN(u.owner.current, f, e,  {
      ...this.options, duration:i, times:o, ease:r
    });
    return p.startTime=d??this.calcStartTime(), this.pendingTimeline?(by(p, this.pendingTimeline), this.pendingTimeline=void 0):p.onfinish=()=> {
      const {
        onComplete:m
      }=this.options;
      u.set(oc(e, this.options, n)), m&&m(), this.cancel(), this.resolveFinishedPromise()
    },  {
      animation:p, duration:i, times:o, type:l, ease:r, keyframes:e
    }
  }get duration() {
    const {
      resolved:e
    }=this;
    if(!e)return 0;
    const {
      duration:n
    }=e;
    return ni(n)
  }get time() {
    const {
      resolved:e
    }=this;
    if(!e)return 0;
    const {
      animation:n
    }=e;
    return ni(n.currentTime||0)
  }set time(e) {
    const {
      resolved:n
    }=this;
    if(!n)return;
    const {
      animation:i
    }=n;
    i.currentTime=ei(e)
  }get speed() {
    const {
      resolved:e
    }=this;
    if(!e)return 1;
    const {
      animation:n
    }=e;
    return n.playbackRate
  }set speed(e) {
    const {
      resolved:n
    }=this;
    if(!n)return;
    const {
      animation:i
    }=n;
    i.playbackRate=e
  }get state() {
    const {
      resolved:e
    }=this;
    if(!e)return"idle";
    const {
      animation:n
    }=e;
    return n.playState
  }get startTime() {
    const {
      resolved:e
    }=this;
    if(!e)return null;
    const {
      animation:n
    }=e;
    return n.startTime
  }attachTimeline(e) {
    if(!this._resolved)this.pendingTimeline=e;
    else {
      const {
        resolved:n
      }=this;
      if(!n)return Ze;
      const {
        animation:i
      }=n;
      by(i, e)
    }return Ze
  }play() {
    if(this.isStopped)return;
    const {
      resolved:e
    }=this;
    if(!e)return;
    const {
      animation:n
    }=e;
    n.playState==="finished"&&this.updateFinishedPromise(), n.play()
  }pause() {
    const {
      resolved:e
    }=this;
    if(!e)return;
    const {
      animation:n
    }=e;
    n.pause()
  }stop() {
    if(this.resolver.cancel(), this.isStopped=!0, this.state==="idle")return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const {
      resolved:e
    }=this;
    if(!e)return;
    const {
      animation:n, keyframes:i, duration:o, type:r, ease:l, times:u
    }=e;
    if(n.playState==="idle"||n.playState==="finished")return;
    if(this.time) {
      const {
        motionValue:d, onUpdate:p, onComplete:m, element:g, ...y
      }=this.options, C=new np( {
        ...y, keyframes:i, duration:o, type:r, ease:l, times:u, isGenerator:!0
      }), E=ei(this.time);
      d.setWithVelocity(C.sample(E-Mu).value, C.sample(E).value, Mu)
    }const {
      onStop:f
    }=this.options;
    f&&f(), this.cancel()
  }complete() {
    const {
      resolved:e
    }=this;
    e&&e.animation.finish()
  }cancel() {
    const {
      resolved:e
    }=this;
    e&&e.animation.cancel()
  }static supports(e) {
    const {
      motionValue:n, name:i, repeatDelay:o, repeatType:r, damping:l, type:u
    }=e;
    if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;
    const {
      onUpdate:f, transformTemplate:d
    }=n.owner.getProps();
    return vN()&&i&&pN.has(i)&&!f&&!d&&!o&&r!=="mirror"&&l!==0&&u!=="inertia"
  }
}const TN= {
  type:"spring", stiffness:500, damping:25, restSpeed:10
}, SN=t=>( {
  type:"spring", stiffness:550, damping:t===0?2*Math.sqrt(550):30, restSpeed:10
}), wN= {
  type:"keyframes", duration:.8
}, EN= {
  type:"keyframes", ease:[.25, .1, .35, 1], duration:.3
}, CN=(t,  {
  keyframes:e
})=>e.length>2?wN:Ra.has(t)?t.startsWith("scale")?SN(e[1]):TN:EN;
function AN( {
  when:t, delay:e, delayChildren:n, staggerChildren:i, staggerDirection:o, repeat:r, repeatType:l, repeatDelay:u, from:f, elapsed:d, ...p
}) {
  return!!Object.keys(p).length
}const ip=(t, e, n, i= {
}, o, r)=>l=> {
  const u=Zm(i, t)|| {
  }, f=u.delay||i.delay||0;
  let {
    elapsed:d=0
  }=i;
  d=d-ei(f);
  let p= {
    keyframes:Array.isArray(n)?n:[null, n], ease:"easeOut", velocity:e.getVelocity(), ...u, delay:-d, onUpdate:g=> {
      e.set(g), u.onUpdate&&u.onUpdate(g)
    }, onComplete:()=> {
      l(), u.onComplete&&u.onComplete()
    }, name:t, motionValue:e, element:r?void 0:o
  };
  AN(u)||(p= {
    ...p, ...CN(t, p)
  }), p.duration&&(p.duration=ei(p.duration)), p.repeatDelay&&(p.repeatDelay=ei(p.repeatDelay)), p.from!==void 0&&(p.keyframes[0]=p.from);
  let m=!1;
  if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0, p.delay===0&&(m=!0)), m&&!r&&e.get()!==void 0) {
    const g=oc(p.keyframes, u);
    if(g!==void 0)return Nt.update(()=> {
      p.onUpdate(g), p.onComplete()
    }), new YR([])
  }return!r&&jy.supports(p)?new jy(p):new np(p)
};
function MN( {
  protectedKeys:t, needsAnimating:e
}, n) {
  const i=t.hasOwnProperty(n)&&e[n]!==!0;
  return e[n]=!1, i
}function xT(t, e,  {
  delay:n=0, transitionOverride:i, type:o
}= {
}) {
  var r;
  let {
    transition:l=t.getDefaultTransition(), transitionEnd:u, ...f
  }=e;
  i&&(l=i);
  const d=[], p=o&&t.animationState&&t.animationState.getState()[o];
  for(const m in f) {
    const g=t.getValue(m, (r=t.latestValues[m])!==null&&r!==void 0?r:null), y=f[m];
    if(y===void 0||p&&MN(p, m))continue;
    const C= {
      delay:n, ...Zm(l|| {
      }, m)
    };
    let E=!1;
    if(window.MotionHandoffAnimation) {
      const _=I1(t);
      if(_) {
        const b=window.MotionHandoffAnimation(_, m, Nt);
        b!==null&&(C.startTime=b, E=!0)
      }
    }Wd(t, m), g.start(ip(m, g, y, t.shouldReduceMotion&&q1.has(m)? {
      type:!1
    }:C, t, E));
    const A=g.animation;
    A&&d.push(A)
  }return u&&Promise.all(d).then(()=> {
    Nt.update(()=> {
      u&&rO(t, u)
    })
  }), d
}function oh(t, e, n= {
}) {
  var i;
  const o=ac(t, e, n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);
  let {
    transition:r=t.getDefaultTransition()|| {
    }
  }=o|| {
  };
  n.transitionOverride&&(r=n.transitionOverride);
  const l=o?()=>Promise.all(xT(t, o, n)):()=>Promise.resolve(), u=t.variantChildren&&t.variantChildren.size?(d=0)=> {
    const {
      delayChildren:p=0, staggerChildren:m, staggerDirection:g
    }=r;
    return LN(t, e, p+d, m, g, n)
  }:()=>Promise.resolve(),  {
    when:f
  }=r;
  if(f) {
    const[d, p]=f==="beforeChildren"?[l, u]:[u, l];
    return d().then(()=>p())
  }else return Promise.all([l(), u(n.delay)])
}function LN(t, e, n=0, i=0, o=1, r) {
  const l=[], u=(t.variantChildren.size-1)*i, f=o===1?(d=0)=>d*i:(d=0)=>u-d*i;
  return Array.from(t.variantChildren).sort(RN).forEach((d, p)=> {
    d.notify("AnimationStart", e), l.push(oh(d, e,  {
      ...r, delay:n+f(p)
    }).then(()=>d.notify("AnimationComplete", e)))
  }), Promise.all(l)
}function RN(t, e) {
  return t.sortNodePosition(e)
}function ON(t, e, n= {
}) {
  t.notify("AnimationStart", e);
  let i;
  if(Array.isArray(e)) {
    const o=e.map(r=>oh(t, r, n));
    i=Promise.all(o)
  }else if(typeof e=="string")i=oh(t, e, n);
  else {
    const o=typeof e=="function"?ac(t, e, n.custom):e;
    i=Promise.all(xT(t, o, n))
  }return i.then(()=> {
    t.notify("AnimationComplete", e)
  })
}const NN=Rm.length;
function TT(t) {
  if(!t)return;
  if(!t.isControllingVariants) {
    const n=t.parent?TT(t.parent)|| {
    }: {
    };
    return t.props.initial!==void 0&&(n.initial=t.props.initial), n
  }const e= {
  };
  for(let n=0;
  n<NN;
  n++) {
    const i=Rm[n], o=t.props[i];
    (cs(o)||o===!1)&&(e[i]=o)
  }return e
}const zN=[...Lm].reverse(), DN=Lm.length;
function PN(t) {
  return e=>Promise.all(e.map(( {
    animation:n, options:i
  })=>ON(t, n, i)))
}function jN(t) {
  let e=PN(t), n=By(), i=!0;
  const o=f=>(d, p)=> {
    var m;
    const g=ac(t, p, f==="exit"?(m=t.presenceContext)===null||m===void 0?void 0:m.custom:void 0);
    if(g) {
      const {
        transition:y, transitionEnd:C, ...E
      }=g;
      d= {
        ...d, ...E, ...C
      }
    }return d
  };
  function r(f) {
    e=f(t)
  }function l(f) {
    const {
      props:d
    }=t, p=TT(t.parent)|| {
    }, m=[], g=new Set;
    let y= {
    }, C=1/0;
    for(let A=0;
    A<DN;
    A++) {
      const _=zN[A], b=n[_], S=d[_]!==void 0?d[_]:p[_], M=cs(S), O=_===f?b.isActive:null;
      O===!1&&(C=A);
      let P=S===p[_]&&S!==d[_]&&M;
      if(P&&i&&t.manuallyAnimateOnMount&&(P=!1), b.protectedKeys= {
        ...y
      }, !b.isActive&&O===null||!S&&!b.prevProp||nc(S)||typeof S=="boolean")continue;
      const D=BN(b.prevProp, S);
      let B=D||_===f&&b.isActive&&!P&&M||A>C&&M, Z=!1;
      const I=Array.isArray(S)?S:[S];
      let H=I.reduce(o(_),  {
      });
      O===!1&&(H= {
      });
      const {
        prevResolvedValues:q= {
        }
      }=b, bt= {
        ...q, ...H
      }, X=F=> {
        B=!0, g.has(F)&&(Z=!0, g.delete(F)), b.needsAnimating[F]=!0;
        const U=t.getValue(F);
        U&&(U.liveStyle=!1)
      };
      for(const F in bt) {
        const U=H[F], rt=q[F];
        if(y.hasOwnProperty(F))continue;
        let G=!1;
        Kd(U)&&Kd(rt)?G=!P1(U, rt):G=U!==rt, G?U!=null?X(F):g.add(F):U!==void 0&&g.has(F)?X(F):b.protectedKeys[F]=!0
      }b.prevProp=S, b.prevResolvedValues=H, b.isActive&&(y= {
        ...y, ...H
      }), i&&t.blockInitialAnimation&&(B=!1), B&&(!(P&&D)||Z)&&m.push(...I.map(F=>( {
        animation:F, options: {
          type:_
        }
      })))
    }if(g.size) {
      const A= {
      };
      g.forEach(_=> {
        const b=t.getBaseTarget(_), S=t.getValue(_);
        S&&(S.liveStyle=!0), A[_]=b??null
      }), m.push( {
        animation:A
      })
    }let E=!!m.length;
    return i&&(d.initial===!1||d.initial===d.animate)&&!t.manuallyAnimateOnMount&&(E=!1), i=!1, E?e(m):Promise.resolve()
  }function u(f, d) {
    var p;
    if(n[f].isActive===d)return Promise.resolve();
    (p=t.variantChildren)===null||p===void 0||p.forEach(g=> {
      var y;
      return(y=g.animationState)===null||y===void 0?void 0:y.setActive(f, d)
    }), n[f].isActive=d;
    const m=l(f);
    for(const g in n)n[g].protectedKeys= {
    };
    return m
  }return {
    animateChanges:l, setActive:u, setAnimateFunction:r, getState:()=>n, reset:()=> {
      n=By(), i=!0
    }
  }
}function BN(t, e) {
  return typeof e=="string"?e!==t:Array.isArray(e)?!P1(e, t):!1
}function ia(t=!1) {
  return {
    isActive:t, protectedKeys: {
    }, needsAnimating: {
    }, prevResolvedValues: {
    }
  }
}function By() {
  return {
    animate:ia(!0), whileInView:ia(), whileHover:ia(), whileTap:ia(), whileDrag:ia(), whileFocus:ia(), exit:ia()
  }
}class Qi {
  constructor(e) {
    this.isMounted=!1, this.node=e
  }update() {
  }
}class kN extends Qi {
  constructor(e) {
    super(e), e.animationState||(e.animationState=jN(e))
  }updateAnimationControlsSubscription() {
    const {
      animate:e
    }=this.node.getProps();
    nc(e)&&(this.unmountControls=e.subscribe(this.node))
  }mount() {
    this.updateAnimationControlsSubscription()
  }update() {
    const {
      animate:e
    }=this.node.getProps(),  {
      animate:n
    }=this.node.prevProps|| {
    };
    e!==n&&this.updateAnimationControlsSubscription()
  }unmount() {
    var e;
    this.node.animationState.reset(), (e=this.unmountControls)===null||e===void 0||e.call(this)
  }
}let VN=0;
class UN extends Qi {
  constructor() {
    super(...arguments), this.id=VN++
  }update() {
    if(!this.node.presenceContext)return;
    const {
      isPresent:e, onExitComplete:n
    }=this.node.presenceContext,  {
      isPresent:i
    }=this.node.prevPresenceContext|| {
    };
    if(!this.node.animationState||e===i)return;
    const o=this.node.animationState.setActive("exit", !e);
    n&&!e&&o.then(()=>n(this.id))
  }mount() {
    const {
      register:e
    }=this.node.presenceContext|| {
    };
    e&&(this.unmount=e(this.id))
  }unmount() {
  }
}const HN= {
  animation: {
    Feature:kN
  }, exit: {
    Feature:UN
  }
};
function ms(t, e, n, i= {
  passive:!0
}) {
  return t.addEventListener(e, n, i), ()=>t.removeEventListener(e, n)
}function zs(t) {
  return {
    point: {
      x:t.pageX, y:t.pageY
    }
  }
}const ZN=t=>e=>Im(e)&&t(e, zs(e));
function Gr(t, e, n, i) {
  return ms(t, e, ZN(n), i)
}const ky=(t, e)=>Math.abs(t-e);
function qN(t, e) {
  const n=ky(t.x, e.x), i=ky(t.y, e.y);
  return Math.sqrt(n**2+i**2)
}class ST {
  constructor(e, n,  {
    transformPagePoint:i, contextWindow:o, dragSnapToOrigin:r=!1
  }= {
  }) {
    if(this.startEvent=null, this.lastMoveEvent=null, this.lastMoveEventInfo=null, this.handlers= {
    }, this.contextWindow=window, this.updatePoint=()=> {
      if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
      const m=kf(this.lastMoveEventInfo, this.history), g=this.startEvent!==null, y=qN(m.offset,  {
        x:0, y:0
      })>=3;
      if(!g&&!y)return;
      const {
        point:C
      }=m,  {
        timestamp:E
      }=ce;
      this.history.push( {
        ...C, timestamp:E
      });
      const {
        onStart:A, onMove:_
      }=this.handlers;
      g||(A&&A(this.lastMoveEvent, m), this.startEvent=this.lastMoveEvent), _&&_(this.lastMoveEvent, m)
    }, this.handlePointerMove=(m, g)=> {
      this.lastMoveEvent=m, this.lastMoveEventInfo=Bf(g, this.transformPagePoint), Nt.update(this.updatePoint, !0)
    }, this.handlePointerUp=(m, g)=> {
      this.end();
      const {
        onEnd:y, onSessionEnd:C, resumeAnimation:E
      }=this.handlers;
      if(this.dragSnapToOrigin&&E&&E(), !(this.lastMoveEvent&&this.lastMoveEventInfo))return;
      const A=kf(m.type==="pointercancel"?this.lastMoveEventInfo:Bf(g, this.transformPagePoint), this.history);
      this.startEvent&&y&&y(m, A), C&&C(m, A)
    }, !Im(e))return;
    this.dragSnapToOrigin=r, this.handlers=n, this.transformPagePoint=i, this.contextWindow=o||window;
    const l=zs(e), u=Bf(l, this.transformPagePoint),  {
      point:f
    }=u,  {
      timestamp:d
    }=ce;
    this.history=[ {
      ...f, timestamp:d
    }];
    const {
      onSessionStart:p
    }=n;
    p&&p(e, kf(u, this.history)), this.removeListeners=Ns(Gr(this.contextWindow, "pointermove", this.handlePointerMove), Gr(this.contextWindow, "pointerup", this.handlePointerUp), Gr(this.contextWindow, "pointercancel", this.handlePointerUp))
  }updateHandlers(e) {
    this.handlers=e
  }end() {
    this.removeListeners&&this.removeListeners(), Ii(this.updatePoint)
  }
}function Bf(t, e) {
  return e? {
    point:e(t.point)
  }:t
}function Vy(t, e) {
  return {
    x:t.x-e.x, y:t.y-e.y
  }
}function kf( {
  point:t
}, e) {
  return {
    point:t, delta:Vy(t, wT(e)), offset:Vy(t, GN(e)), velocity:IN(e, .1)
  }
}function GN(t) {
  return t[0]
}function wT(t) {
  return t[t.length-1]
}function IN(t, e) {
  if(t.length<2)return {
    x:0, y:0
  };
  let n=t.length-1, i=null;
  const o=wT(t);
  for(;
  n>=0&&(i=t[n], !(o.timestamp-i.timestamp>ei(e)));
  )n--;
  if(!i)return {
    x:0, y:0
  };
  const r=ni(o.timestamp-i.timestamp);
  if(r===0)return {
    x:0, y:0
  };
  const l= {
    x:(o.x-i.x)/r, y:(o.y-i.y)/r
  };
  return l.x===1/0&&(l.x=0), l.y===1/0&&(l.y=0), l
}const ET=1e-4, YN=1-ET, FN=1+ET, CT=.01, XN=0-CT, KN=0+CT;
function Ie(t) {
  return t.max-t.min
}function QN(t, e, n) {
  return Math.abs(t-e)<=n
}function Uy(t, e, n, i=.5) {
  t.origin=i, t.originPoint=Ht(e.min, e.max, t.origin), t.scale=Ie(n)/Ie(e), t.translate=Ht(n.min, n.max, t.origin)-t.originPoint, (t.scale>=YN&&t.scale<=FN||isNaN(t.scale))&&(t.scale=1), (t.translate>=XN&&t.translate<=KN||isNaN(t.translate))&&(t.translate=0)
}function Ir(t, e, n, i) {
  Uy(t.x, e.x, n.x, i?i.originX:void 0), Uy(t.y, e.y, n.y, i?i.originY:void 0)
}function Hy(t, e, n) {
  t.min=n.min+e.min, t.max=t.min+Ie(e)
}function $N(t, e, n) {
  Hy(t.x, e.x, n.x), Hy(t.y, e.y, n.y)
}function Zy(t, e, n) {
  t.min=e.min-n.min, t.max=t.min+Ie(e)
}function Yr(t, e, n) {
  Zy(t.x, e.x, n.x), Zy(t.y, e.y, n.y)
}function WN(t,  {
  min:e, max:n
}, i) {
  return e!==void 0&&t<e?t=i?Ht(e, t, i.min):Math.max(t, e):n!==void 0&&t>n&&(t=i?Ht(n, t, i.max):Math.min(t, n)), t
}function qy(t, e, n) {
  return {
    min:e!==void 0?t.min+e:void 0, max:n!==void 0?t.max+n-(t.max-t.min):void 0
  }
}function JN(t,  {
  top:e, left:n, bottom:i, right:o
}) {
  return {
    x:qy(t.x, n, o), y:qy(t.y, e, i)
  }
}function Gy(t, e) {
  let n=e.min-t.min, i=e.max-t.max;
  return e.max-e.min<t.max-t.min&&([n, i]=[i, n]),  {
    min:n, max:i
  }
}function tz(t, e) {
  return {
    x:Gy(t.x, e.x), y:Gy(t.y, e.y)
  }
}function ez(t, e) {
  let n=.5;
  const i=Ie(t), o=Ie(e);
  return o>i?n=Oo(e.min, e.max-i, t.min):i>o&&(n=Oo(t.min, t.max-o, e.min)), ui(0, 1, n)
}function nz(t, e) {
  const n= {
  };
  return e.min!==void 0&&(n.min=e.min-t.min), e.max!==void 0&&(n.max=e.max-t.min), n
}const rh=.35;
function iz(t=rh) {
  return t===!1?t=0:t===!0&&(t=rh),  {
    x:Iy(t, "left", "right"), y:Iy(t, "top", "bottom")
  }
}function Iy(t, e, n) {
  return {
    min:Yy(t, e), max:Yy(t, n)
  }
}function Yy(t, e) {
  return typeof t=="number"?t:t[e]||0
}const Fy=()=>( {
  translate:0, scale:1, origin:0, originPoint:0
}), so=()=>( {
  x:Fy(), y:Fy()
}), Xy=()=>( {
  min:0, max:0
}), Xt=()=>( {
  x:Xy(), y:Xy()
});
function $e(t) {
  return[t("x"), t("y")]
}function AT( {
  top:t, left:e, right:n, bottom:i
}) {
  return {
    x: {
      min:e, max:n
    }, y: {
      min:t, max:i
    }
  }
}function az( {
  x:t, y:e
}) {
  return {
    top:e.min, right:t.max, bottom:e.max, left:t.min
  }
}function oz(t, e) {
  if(!e)return t;
  const n=e( {
    x:t.left, y:t.top
  }), i=e( {
    x:t.right, y:t.bottom
  });
  return {
    top:n.y, left:n.x, bottom:i.y, right:i.x
  }
}function Vf(t) {
  return t===void 0||t===1
}function sh( {
  scale:t, scaleX:e, scaleY:n
}) {
  return!Vf(t)||!Vf(e)||!Vf(n)
}function la(t) {
  return sh(t)||MT(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY
}function MT(t) {
  return Ky(t.x)||Ky(t.y)
}function Ky(t) {
  return t&&t!=="0%"
}function Lu(t, e, n) {
  const i=t-n, o=e*i;
  return n+o
}function Qy(t, e, n, i, o) {
  return o!==void 0&&(t=Lu(t, o, i)), Lu(t, n, i)+e
}function lh(t, e=0, n=1, i, o) {
  t.min=Qy(t.min, e, n, i, o), t.max=Qy(t.max, e, n, i, o)
}function LT(t,  {
  x:e, y:n
}) {
  lh(t.x, e.translate, e.scale, e.originPoint), lh(t.y, n.translate, n.scale, n.originPoint)
}const $y=.999999999999, Wy=1.0000000000001;
function rz(t, e, n, i=!1) {
  const o=n.length;
  if(!o)return;
  e.x=e.y=1;
  let r, l;
  for(let u=0;
  u<o;
  u++) {
    r=n[u], l=r.projectionDelta;
    const {
      visualElement:f
    }=r.options;
    f&&f.props.style&&f.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&uo(t,  {
      x:-r.scroll.offset.x, y:-r.scroll.offset.y
    }), l&&(e.x*=l.x.scale, e.y*=l.y.scale, LT(t, l)), i&&la(r.latestValues)&&uo(t, r.latestValues))
  }e.x<Wy&&e.x>$y&&(e.x=1), e.y<Wy&&e.y>$y&&(e.y=1)
}function lo(t, e) {
  t.min=t.min+e, t.max=t.max+e
}function Jy(t, e, n, i, o=.5) {
  const r=Ht(t.min, t.max, o);
  lh(t, e, n, r, i)
}function uo(t, e) {
  Jy(t.x, e.x, e.scaleX, e.scale, e.originX), Jy(t.y, e.y, e.scaleY, e.scale, e.originY)
}function RT(t, e) {
  return AT(oz(t.getBoundingClientRect(), e))
}function sz(t, e, n) {
  const i=RT(t, n),  {
    scroll:o
  }=e;
  return o&&(lo(i.x, o.offset.x), lo(i.y, o.offset.y)), i
}const OT=( {
  current:t
})=>t?t.ownerDocument.defaultView:null, lz=new WeakMap;
class uz {
  constructor(e) {
    this.openDragLock=null, this.isDragging=!1, this.currentDirection=null, this.originPoint= {
      x:0, y:0
    }, this.constraints=!1, this.hasMutatedConstraints=!1, this.elastic=Xt(), this.visualElement=e
  }start(e,  {
    snapToCursor:n=!1
  }= {
  }) {
    const {
      presenceContext:i
    }=this.visualElement;
    if(i&&i.isPresent===!1)return;
    const o=p=> {
      const {
        dragSnapToOrigin:m
      }=this.getProps();
      m?this.pauseAnimation():this.stopAnimation(), n&&this.snapToCursor(zs(p).point)
    }, r=(p, m)=> {
      const {
        drag:g, dragPropagation:y, onDragStart:C
      }=this.getProps();
      if(g&&!y&&(this.openDragLock&&this.openDragLock(), this.openDragLock=eO(g), !this.openDragLock))return;
      this.isDragging=!0, this.currentDirection=null, this.resolveConstraints(), this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0, this.visualElement.projection.target=void 0), $e(A=> {
        let _=this.getAxisMotionValue(A).get()||0;
        if(Mn.test(_)) {
          const {
            projection:b
          }=this.visualElement;
          if(b&&b.layout) {
            const S=b.layout.layoutBox[A];
            S&&(_=Ie(S)*(parseFloat(_)/100))
          }
        }this.originPoint[A]=_
      }), C&&Nt.postRender(()=>C(p, m)), Wd(this.visualElement, "transform");
      const {
        animationState:E
      }=this.visualElement;
      E&&E.setActive("whileDrag", !0)
    }, l=(p, m)=> {
      const {
        dragPropagation:g, dragDirectionLock:y, onDirectionLock:C, onDrag:E
      }=this.getProps();
      if(!g&&!this.openDragLock)return;
      const {
        offset:A
      }=m;
      if(y&&this.currentDirection===null) {
        this.currentDirection=cz(A), this.currentDirection!==null&&C&&C(this.currentDirection);
        return
      }this.updateAxis("x", m.point, A), this.updateAxis("y", m.point, A), this.visualElement.render(), E&&E(p, m)
    }, u=(p, m)=>this.stop(p, m), f=()=>$e(p=> {
      var m;
      return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())
    }),  {
      dragSnapToOrigin:d
    }=this.getProps();
    this.panSession=new ST(e,  {
      onSessionStart:o, onStart:r, onMove:l, onSessionEnd:u, resumeAnimation:f
    },  {
      transformPagePoint:this.visualElement.getTransformPagePoint(), dragSnapToOrigin:d, contextWindow:OT(this.visualElement)
    })
  }stop(e, n) {
    const i=this.isDragging;
    if(this.cancel(), !i)return;
    const {
      velocity:o
    }=n;
    this.startAnimation(o);
    const {
      onDragEnd:r
    }=this.getProps();
    r&&Nt.postRender(()=>r(e, n))
  }cancel() {
    this.isDragging=!1;
    const {
      projection:e, animationState:n
    }=this.visualElement;
    e&&(e.isAnimationBlocked=!1), this.panSession&&this.panSession.end(), this.panSession=void 0;
    const {
      dragPropagation:i
    }=this.getProps();
    !i&&this.openDragLock&&(this.openDragLock(), this.openDragLock=null), n&&n.setActive("whileDrag", !1)
  }updateAxis(e, n, i) {
    const {
      drag:o
    }=this.getProps();
    if(!i||!bl(e, o, this.currentDirection))return;
    const r=this.getAxisMotionValue(e);
    let l=this.originPoint[e]+i[e];
    this.constraints&&this.constraints[e]&&(l=WN(l, this.constraints[e], this.elastic[e])), r.set(l)
  }resolveConstraints() {
    var e;
    const {
      dragConstraints:n, dragElastic:i
    }=this.getProps(), o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout, r=this.constraints;
    n&&oo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=JN(o.layoutBox, n):this.constraints=!1, this.elastic=iz(i), r!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&$e(l=> {
      this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=nz(o.layoutBox[l], this.constraints[l]))
    })
  }resolveRefConstraints() {
    const {
      dragConstraints:e, onMeasureDragConstraints:n
    }=this.getProps();
    if(!e||!oo(e))return!1;
    const i=e.current,  {
      projection:o
    }=this.visualElement;
    if(!o||!o.layout)return!1;
    const r=sz(i, o.root, this.visualElement.getTransformPagePoint());
    let l=tz(o.layout.layoutBox, r);
    if(n) {
      const u=n(az(l));
      this.hasMutatedConstraints=!!u, u&&(l=AT(u))
    }return l
  }startAnimation(e) {
    const {
      drag:n, dragMomentum:i, dragElastic:o, dragTransition:r, dragSnapToOrigin:l, onDragTransitionEnd:u
    }=this.getProps(), f=this.constraints|| {
    }, d=$e(p=> {
      if(!bl(p, n, this.currentDirection))return;
      let m=f&&f[p]|| {
      };
      l&&(m= {
        min:0, max:0
      });
      const g=o?200:1e6, y=o?40:1e7, C= {
        type:"inertia", velocity:i?e[p]:0, bounceStiffness:g, bounceDamping:y, timeConstant:750, restDelta:1, restSpeed:10, ...r, ...m
      };
      return this.startAxisValueAnimation(p, C)
    });
    return Promise.all(d).then(u)
  }startAxisValueAnimation(e, n) {
    const i=this.getAxisMotionValue(e);
    return Wd(this.visualElement, e), i.start(ip(e, i, 0, n, this.visualElement, !1))
  }stopAnimation() {
    $e(e=>this.getAxisMotionValue(e).stop())
  }pauseAnimation() {
    $e(e=> {
      var n;
      return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()
    })
  }getAnimationState(e) {
    var n;
    return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state
  }getAxisMotionValue(e) {
    const n=`_drag${e.toUpperCase()}`, i=this.visualElement.getProps(), o=i[n];
    return o||this.visualElement.getValue(e, (i.initial?i.initial[e]:void 0)||0)
  }snapToCursor(e) {
    $e(n=> {
      const {
        drag:i
      }=this.getProps();
      if(!bl(n, i, this.currentDirection))return;
      const {
        projection:o
      }=this.visualElement, r=this.getAxisMotionValue(n);
      if(o&&o.layout) {
        const {
          min:l, max:u
        }=o.layout.layoutBox[n];
        r.set(e[n]-Ht(l, u, .5))
      }
    })
  }scalePositionWithinConstraints() {
    if(!this.visualElement.current)return;
    const {
      drag:e, dragConstraints:n
    }=this.getProps(),  {
      projection:i
    }=this.visualElement;
    if(!oo(n)||!i||!this.constraints)return;
    this.stopAnimation();
    const o= {
      x:0, y:0
    };
    $e(l=> {
      const u=this.getAxisMotionValue(l);
      if(u&&this.constraints!==!1) {
        const f=u.get();
        o[l]=ez( {
          min:f, max:f
        }, this.constraints[l])
      }
    });
    const {
      transformTemplate:r
    }=this.visualElement.getProps();
    this.visualElement.current.style.transform=r?r( {
    }, ""):"none", i.root&&i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), $e(l=> {
      if(!bl(l, e, null))return;
      const u=this.getAxisMotionValue(l),  {
        min:f, max:d
      }=this.constraints[l];
      u.set(Ht(f, d, o[l]))
    })
  }addListeners() {
    if(!this.visualElement.current)return;
    lz.set(this.visualElement, this);
    const e=this.visualElement.current, n=Gr(e, "pointerdown", f=> {
      const {
        drag:d, dragListener:p=!0
      }=this.getProps();
      d&&p&&this.start(f)
    }), i=()=> {
      const {
        dragConstraints:f
      }=this.getProps();
      oo(f)&&f.current&&(this.constraints=this.resolveRefConstraints())
    },  {
      projection:o
    }=this.visualElement, r=o.addEventListener("measure", i);
    o&&!o.layout&&(o.root&&o.root.updateScroll(), o.updateLayout()), Nt.read(i);
    const l=ms(window, "resize", ()=>this.scalePositionWithinConstraints()), u=o.addEventListener("didUpdate", ( {
      delta:f, hasLayoutChanged:d
    })=> {
      this.isDragging&&d&&($e(p=> {
        const m=this.getAxisMotionValue(p);
        m&&(this.originPoint[p]+=f[p].translate, m.set(m.get()+f[p].translate))
      }), this.visualElement.render())
    });
    return()=> {
      l(), n(), r(), u&&u()
    }
  }getProps() {
    const e=this.visualElement.getProps(),  {
      drag:n=!1, dragDirectionLock:i=!1, dragPropagation:o=!1, dragConstraints:r=!1, dragElastic:l=rh, dragMomentum:u=!0
    }=e;
    return {
      ...e, drag:n, dragDirectionLock:i, dragPropagation:o, dragConstraints:r, dragElastic:l, dragMomentum:u
    }
  }
}function bl(t, e, n) {
  return(e===!0||e===t)&&(n===null||n===t)
}function cz(t, e=10) {
  let n=null;
  return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"), n
}class fz extends Qi {
  constructor(e) {
    super(e), this.removeGroupControls=Ze, this.removeListeners=Ze, this.controls=new uz(e)
  }mount() {
    const {
      dragControls:e
    }=this.node.getProps();
    e&&(this.removeGroupControls=e.subscribe(this.controls)), this.removeListeners=this.controls.addListeners()||Ze
  }unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}const t0=t=>(e, n)=> {
  t&&Nt.postRender(()=>t(e, n))
};
class dz extends Qi {
  constructor() {
    super(...arguments), this.removePointerDownListener=Ze
  }onPointerDown(e) {
    this.session=new ST(e, this.createPanHandlers(),  {
      transformPagePoint:this.node.getTransformPagePoint(), contextWindow:OT(this.node)
    })
  }createPanHandlers() {
    const {
      onPanSessionStart:e, onPanStart:n, onPan:i, onPanEnd:o
    }=this.node.getProps();
    return {
      onSessionStart:t0(e), onStart:t0(n), onMove:i, onEnd:(r, l)=> {
        delete this.session, o&&Nt.postRender(()=>o(r, l))
      }
    }
  }mount() {
    this.removePointerDownListener=Gr(this.node.current, "pointerdown", e=>this.onPointerDown(e))
  }update() {
    this.session&&this.session.updateHandlers(this.createPanHandlers())
  }unmount() {
    this.removePointerDownListener(), this.session&&this.session.end()
  }
}const Il= {
  hasAnimatedSinceResize:!0, hasEverUpdated:!1
};
function e0(t, e) {
  return e.max===e.min?0:t/(e.max-e.min)*100
}const yr= {
  correct:(t, e)=> {
    if(!e.target)return t;
    if(typeof t=="string")if(Q.test(t))t=parseFloat(t);
    else return t;
    const n=e0(t, e.target.x), i=e0(t, e.target.y);
    return`${n}% ${i}%`
  }
}, hz= {
  correct:(t,  {
    treeScale:e, projectionDelta:n
  })=> {
    const i=t, o=Yi.parse(t);
    if(o.length>5)return i;
    const r=Yi.createTransformer(t), l=typeof o[0]!="number"?1:0, u=n.x.scale*e.x, f=n.y.scale*e.y;
    o[0+l]/=u, o[1+l]/=f;
    const d=Ht(u, f, .5);
    return typeof o[2+l]=="number"&&(o[2+l]/=d), typeof o[3+l]=="number"&&(o[3+l]/=d), r(o)
  }
};
class mz extends T.Component {
  componentDidMount() {
    const {
      visualElement:e, layoutGroup:n, switchLayoutGroup:i, layoutId:o
    }=this.props,  {
      projection:r
    }=e;
    DR(pz), r&&(n.group&&n.group.add(r), i&&i.register&&o&&i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", ()=> {
      this.safeToRemove()
    }), r.setOptions( {
      ...r.options, onExitComplete:()=>this.safeToRemove()
    })), Il.hasEverUpdated=!0
  }getSnapshotBeforeUpdate(e) {
    const {
      layoutDependency:n, visualElement:i, drag:o, isPresent:r
    }=this.props, l=i.projection;
    return l&&(l.isPresent=r, o||e.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(), e.isPresent!==r&&(r?l.promote():l.relegate()||Nt.postRender(()=> {
      const u=l.getStack();
      (!u||!u.members.length)&&this.safeToRemove()
    }))), null
  }componentDidUpdate() {
    const {
      projection:e
    }=this.props.visualElement;
    e&&(e.root.didUpdate(), Nm.postRender(()=> {
      !e.currentAnimation&&e.isLead()&&this.safeToRemove()
    }))
  }componentWillUnmount() {
    const {
      visualElement:e, layoutGroup:n, switchLayoutGroup:i
    }=this.props,  {
      projection:o
    }=e;
    o&&(o.scheduleCheckAfterUnmount(), n&&n.group&&n.group.remove(o), i&&i.deregister&&i.deregister(o))
  }safeToRemove() {
    const {
      safeToRemove:e
    }=this.props;
    e&&e()
  }render() {
    return null
  }
}function NT(t) {
  const[e, n]=m1(), i=T.useContext(wm);
  return w.jsx(mz,  {
    ...t, layoutGroup:i, switchLayoutGroup:T.useContext(T1), isPresent:e, safeToRemove:n
  })
}const pz= {
  borderRadius: {
    ...yr, applyTo:["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }, borderTopLeftRadius:yr, borderTopRightRadius:yr, borderBottomLeftRadius:yr, borderBottomRightRadius:yr, boxShadow:hz
};
function gz(t, e, n) {
  const i=ve(t)?t:ds(t);
  return i.start(ip("", i, e, n)), i.animation
}function vz(t) {
  return t instanceof SVGElement&&t.tagName!=="svg"
}const yz=(t, e)=>t.depth-e.depth;
class _z {
  constructor() {
    this.children=[], this.isDirty=!1
  }add(e) {
    Ym(this.children, e), this.isDirty=!0
  }remove(e) {
    Fm(this.children, e), this.isDirty=!0
  }forEach(e) {
    this.isDirty&&this.children.sort(yz), this.isDirty=!1, this.children.forEach(e)
  }
}function bz(t, e) {
  const n=Ln.now(), i=( {
    timestamp:o
  })=> {
    const r=o-n;
    r>=e&&(Ii(i), t(r-e))
  };
  return Nt.read(i, !0), ()=>Ii(i)
}const zT=["TopLeft", "TopRight", "BottomLeft", "BottomRight"], xz=zT.length, n0=t=>typeof t=="string"?parseFloat(t):t, i0=t=>typeof t=="number"||Q.test(t);
function Tz(t, e, n, i, o, r) {
  o?(t.opacity=Ht(0, n.opacity!==void 0?n.opacity:1, Sz(i)), t.opacityExit=Ht(e.opacity!==void 0?e.opacity:1, 0, wz(i))):r&&(t.opacity=Ht(e.opacity!==void 0?e.opacity:1, n.opacity!==void 0?n.opacity:1, i));
  for(let l=0;
  l<xz;
  l++) {
    const u=`border${zT[l]}Radius`;
    let f=a0(e, u), d=a0(n, u);
    if(f===void 0&&d===void 0)continue;
    f||(f=0), d||(d=0), f===0||d===0||i0(f)===i0(d)?(t[u]=Math.max(Ht(n0(f), n0(d), i), 0), (Mn.test(d)||Mn.test(f))&&(t[u]+="%")):t[u]=d
  }(e.rotate||n.rotate)&&(t.rotate=Ht(e.rotate||0, n.rotate||0, i))
}function a0(t, e) {
  return t[e]!==void 0?t[e]:t.borderRadius
}const Sz=DT(0, .5, W1), wz=DT(.5, .95, Ze);
function DT(t, e, n) {
  return i=>i<t?0:i>e?1:n(Oo(t, e, i))
}function o0(t, e) {
  t.min=e.min, t.max=e.max
}function Qe(t, e) {
  o0(t.x, e.x), o0(t.y, e.y)
}function r0(t, e) {
  t.translate=e.translate, t.scale=e.scale, t.originPoint=e.originPoint, t.origin=e.origin
}function s0(t, e, n, i, o) {
  return t-=e, t=Lu(t, 1/n, i), o!==void 0&&(t=Lu(t, 1/o, i)), t
}function Ez(t, e=0, n=1, i=.5, o, r=t, l=t) {
  if(Mn.test(e)&&(e=parseFloat(e), e=Ht(l.min, l.max, e/100)-l.min), typeof e!="number")return;
  let u=Ht(r.min, r.max, i);
  t===r&&(u-=e), t.min=s0(t.min, e, n, u, o), t.max=s0(t.max, e, n, u, o)
}function l0(t, e, [n, i, o], r, l) {
  Ez(t, e[n], e[i], e[o], e.scale, r, l)
}const Cz=["x", "scaleX", "originX"], Az=["y", "scaleY", "originY"];
function u0(t, e, n, i) {
  l0(t.x, e, Cz, n?n.x:void 0, i?i.x:void 0), l0(t.y, e, Az, n?n.y:void 0, i?i.y:void 0)
}function c0(t) {
  return t.translate===0&&t.scale===1
}function PT(t) {
  return c0(t.x)&&c0(t.y)
}function f0(t, e) {
  return t.min===e.min&&t.max===e.max
}function Mz(t, e) {
  return f0(t.x, e.x)&&f0(t.y, e.y)
}function d0(t, e) {
  return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)
}function jT(t, e) {
  return d0(t.x, e.x)&&d0(t.y, e.y)
}function h0(t) {
  return Ie(t.x)/Ie(t.y)
}function m0(t, e) {
  return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint
}class Lz {
  constructor() {
    this.members=[]
  }add(e) {
    Ym(this.members, e), e.scheduleRender()
  }remove(e) {
    if(Fm(this.members, e), e===this.prevLead&&(this.prevLead=void 0), e===this.lead) {
      const n=this.members[this.members.length-1];
      n&&this.promote(n)
    }
  }relegate(e) {
    const n=this.members.findIndex(o=>e===o);
    if(n===0)return!1;
    let i;
    for(let o=n;
    o>=0;
    o--) {
      const r=this.members[o];
      if(r.isPresent!==!1) {
        i=r;
        break
      }
    }return i?(this.promote(i), !0):!1
  }promote(e, n) {
    const i=this.lead;
    if(e!==i&&(this.prevLead=i, this.lead=e, e.show(), i)) {
      i.instance&&i.scheduleRender(), e.scheduleRender(), e.resumeFrom=i, n&&(e.resumeFrom.preserveOpacity=!0), i.snapshot&&(e.snapshot=i.snapshot, e.snapshot.latestValues=i.animationValues||i.latestValues), e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);
      const {
        crossfade:o
      }=e.options;
      o===!1&&i.hide()
    }
  }exitAnimationComplete() {
    this.members.forEach(e=> {
      const {
        options:n, resumingFrom:i
      }=e;
      n.onExitComplete&&n.onExitComplete(), i&&i.options.onExitComplete&&i.options.onExitComplete()
    })
  }scheduleRender() {
    this.members.forEach(e=> {
      e.instance&&e.scheduleRender(!1)
    })
  }removeLeadSnapshot() {
    this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)
  }
}function Rz(t, e, n) {
  let i="";
  const o=t.x.translate/e.x, r=t.y.translate/e.y, l=(n==null?void 0:n.z)||0;
  if((o||r||l)&&(i=`translate3d(${o}px, ${r}px, ${l}px) `), (e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `), n) {
    const {
      transformPerspective:d, rotate:p, rotateX:m, rotateY:g, skewX:y, skewY:C
    }=n;
    d&&(i=`perspective(${d}px) ${i}`), p&&(i+=`rotate(${p}deg) `), m&&(i+=`rotateX(${m}deg) `), g&&(i+=`rotateY(${g}deg) `), y&&(i+=`skewX(${y}deg) `), C&&(i+=`skewY(${C}deg) `)
  }const u=t.x.scale*e.x, f=t.y.scale*e.y;
  return(u!==1||f!==1)&&(i+=`scale(${u}, ${f})`), i||"none"
}const ua= {
  type:"projectionFrame", totalNodes:0, resolvedTargetDeltas:0, recalculatedProjection:0
}, Mr=typeof window<"u"&&window.MotionDebug!==void 0, Uf=["", "X", "Y", "Z"], Oz= {
  visibility:"hidden"
}, p0=1e3;
let Nz=0;
function Hf(t, e, n, i) {
  const {
    latestValues:o
  }=e;
  o[t]&&(n[t]=o[t], e.setStaticValue(t, 0), i&&(i[t]=0))
}function BT(t) {
  if(t.hasCheckedOptimisedAppear=!0, t.root===t)return;
  const {
    visualElement:e
  }=t.options;
  if(!e)return;
  const n=I1(e);
  if(window.MotionHasOptimisedAnimation(n, "transform")) {
    const {
      layout:o, layoutId:r
    }=t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Nt, !(o||r))
  }const {
    parent:i
  }=t;
  i&&!i.hasCheckedOptimisedAppear&&BT(i)
}function kT( {
  attachResizeListener:t, defaultParent:e, measureScroll:n, checkIsScrollRoot:i, resetTransform:o
}) {
  return class {
    constructor(l= {
    }, u=e==null?void 0:e()) {
      this.id=Nz++, this.animationId=0, this.children=new Set, this.options= {
      }, this.isTreeAnimating=!1, this.isAnimationBlocked=!1, this.isLayoutDirty=!1, this.isProjectionDirty=!1, this.isSharedProjectionDirty=!1, this.isTransformDirty=!1, this.updateManuallyBlocked=!1, this.updateBlockedByResize=!1, this.isUpdating=!1, this.isSVG=!1, this.needsReset=!1, this.shouldResetTransform=!1, this.hasCheckedOptimisedAppear=!1, this.treeScale= {
        x:1, y:1
      }, this.eventHandlers=new Map, this.hasTreeAnimated=!1, this.updateScheduled=!1, this.scheduleUpdate=()=>this.update(), this.projectionUpdateScheduled=!1, this.checkUpdateFailed=()=> {
        this.isUpdating&&(this.isUpdating=!1, this.clearAllSnapshots())
      }, this.updateProjection=()=> {
        this.projectionUpdateScheduled=!1, Mr&&(ua.totalNodes=ua.resolvedTargetDeltas=ua.recalculatedProjection=0), this.nodes.forEach(Pz), this.nodes.forEach(Uz), this.nodes.forEach(Hz), this.nodes.forEach(jz), Mr&&window.MotionDebug.record(ua)
      }, this.resolvedRelativeTargetAt=0, this.hasProjected=!1, this.isVisible=!0, this.animationProgress=0, this.sharedNodes=new Map, this.latestValues=l, this.root=u?u.root||u:this, this.path=u?[...u.path, u]:[], this.parent=u, this.depth=u?u.depth+1:0;
      for(let f=0;
      f<this.path.length;
      f++)this.path[f].shouldResetTransform=!0;
      this.root===this&&(this.nodes=new _z)
    }addEventListener(l, u) {
      return this.eventHandlers.has(l)||this.eventHandlers.set(l, new Xm), this.eventHandlers.get(l).add(u)
    }notifyListeners(l, ...u) {
      const f=this.eventHandlers.get(l);
      f&&f.notify(...u)
    }hasListeners(l) {
      return this.eventHandlers.has(l)
    }mount(l, u=this.root.hasTreeAnimated) {
      if(this.instance)return;
      this.isSVG=vz(l), this.instance=l;
      const {
        layoutId:f, layout:d, visualElement:p
      }=this.options;
      if(p&&!p.current&&p.mount(l), this.root.nodes.add(this), this.parent&&this.parent.children.add(this), u&&(d||f)&&(this.isLayoutDirty=!0), t) {
        let m;
        const g=()=>this.root.updateBlockedByResize=!1;
        t(l, ()=> {
          this.root.updateBlockedByResize=!0, m&&m(), m=bz(g, 250), Il.hasAnimatedSinceResize&&(Il.hasAnimatedSinceResize=!1, this.nodes.forEach(v0))
        })
      }f&&this.root.registerSharedNode(f, this), this.options.animate!==!1&&p&&(f||d)&&this.addEventListener("didUpdate", ( {
        delta:m, hasLayoutChanged:g, hasRelativeTargetChanged:y, layout:C
      })=> {
        if(this.isTreeAnimationBlocked()) {
          this.target=void 0, this.relativeTarget=void 0;
          return
        }const E=this.options.transition||p.getDefaultTransition()||Yz,  {
          onLayoutAnimationStart:A, onLayoutAnimationComplete:_
        }=p.getProps(), b=!this.targetLayout||!jT(this.targetLayout, C)||y, S=!g&&y;
        if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||g&&(b||!this.currentAnimation)) {
          this.resumeFrom&&(this.resumingFrom=this.resumeFrom, this.resumingFrom.resumingFrom=void 0), this.setAnimationOrigin(m, S);
          const M= {
            ...Zm(E, "layout"), onPlay:A, onComplete:_
          };
          (p.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0, M.type=!1), this.startAnimation(M)
        }else g||v0(this), this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();
        this.targetLayout=C
      })
    }unmount() {
      this.options.layoutId&&this.willUpdate(), this.root.nodes.remove(this);
      const l=this.getStack();
      l&&l.remove(this), this.parent&&this.parent.children.delete(this), this.instance=void 0, Ii(this.updateProjection)
    }blockUpdate() {
      this.updateManuallyBlocked=!0
    }unblockUpdate() {
      this.updateManuallyBlocked=!1
    }isUpdateBlocked() {
      return this.updateManuallyBlocked||this.updateBlockedByResize
    }isTreeAnimationBlocked() {
      return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1
    }startUpdate() {
      this.isUpdateBlocked()||(this.isUpdating=!0, this.nodes&&this.nodes.forEach(Zz), this.animationId++)
    }getTransformTemplate() {
      const {
        visualElement:l
      }=this.options;
      return l&&l.getProps().transformTemplate
    }willUpdate(l=!0) {
      if(this.root.hasTreeAnimated=!0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete&&this.options.onExitComplete();
        return
      }if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BT(this), !this.root.isUpdating&&this.root.startUpdate(), this.isLayoutDirty)return;
      this.isLayoutDirty=!0;
      for(let p=0;
      p<this.path.length;
      p++) {
        const m=this.path[p];
        m.shouldResetTransform=!0, m.updateScroll("snapshot"), m.options.layoutRoot&&m.willUpdate(!1)
      }const {
        layoutId:u, layout:f
      }=this.options;
      if(u===void 0&&!f)return;
      const d=this.getTransformTemplate();
      this.prevTransformTemplateValue=d?d(this.latestValues, ""):void 0, this.updateSnapshot(), l&&this.notifyListeners("willUpdate")
    }update() {
      if(this.updateScheduled=!1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(g0);
        return
      }this.isUpdating||this.nodes.forEach(kz), this.isUpdating=!1, this.nodes.forEach(Vz), this.nodes.forEach(zz), this.nodes.forEach(Dz), this.clearAllSnapshots();
      const u=Ln.now();
      ce.delta=ui(0, 1e3/60, u-ce.timestamp), ce.timestamp=u, ce.isProcessing=!0, Of.update.process(ce), Of.preRender.process(ce), Of.render.process(ce), ce.isProcessing=!1
    }didUpdate() {
      this.updateScheduled||(this.updateScheduled=!0, Nm.read(this.scheduleUpdate))
    }clearAllSnapshots() {
      this.nodes.forEach(Bz), this.sharedNodes.forEach(qz)
    }scheduleUpdateProjection() {
      this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0, Nt.preRender(this.updateProjection, !1, !0))
    }scheduleCheckAfterUnmount() {
      Nt.postRender(()=> {
        this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()
      })
    }updateSnapshot() {
      this.snapshot||!this.instance||(this.snapshot=this.measure())
    }updateLayout() {
      if(!this.instance||(this.updateScroll(), !(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;
      if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;
      f<this.path.length;
      f++)this.path[f].updateScroll();
      const l=this.layout;
      this.layout=this.measure(!1), this.layoutCorrected=Xt(), this.isLayoutDirty=!1, this.projectionDelta=void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement:u
      }=this.options;
      u&&u.notify("LayoutMeasure", this.layout.layoutBox, l?l.layoutBox:void 0)
    }updateScroll(l="measure") {
      let u=!!(this.options.layoutScroll&&this.instance);
      if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(u=!1), u) {
        const f=i(this.instance);
        this.scroll= {
          animationId:this.root.animationId, phase:l, isRoot:f, offset:n(this.instance), wasRoot:this.scroll?this.scroll.isRoot:f
        }
      }
    }resetTransform() {
      if(!o)return;
      const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout, u=this.projectionDelta&&!PT(this.projectionDelta), f=this.getTransformTemplate(), d=f?f(this.latestValues, ""):void 0, p=d!==this.prevTransformTemplateValue;
      l&&(u||la(this.latestValues)||p)&&(o(this.instance, d), this.shouldResetTransform=!1, this.scheduleRender())
    }measure(l=!0) {
      const u=this.measurePageBox();
      let f=this.removeElementScroll(u);
      return l&&(f=this.removeTransform(f)), Fz(f),  {
        animationId:this.root.animationId, measuredBox:u, layoutBox:f, latestValues: {
        }, source:this.id
      }
    }measurePageBox() {
      var l;
      const {
        visualElement:u
      }=this.options;
      if(!u)return Xt();
      const f=u.measureViewportBox();
      if(!(((l=this.scroll)===null||l===void 0?void 0:l.wasRoot)||this.path.some(Xz))) {
        const {
          scroll:p
        }=this.root;
        p&&(lo(f.x, p.offset.x), lo(f.y, p.offset.y))
      }return f
    }removeElementScroll(l) {
      var u;
      const f=Xt();
      if(Qe(f, l), !((u=this.scroll)===null||u===void 0)&&u.wasRoot)return f;
      for(let d=0;
      d<this.path.length;
      d++) {
        const p=this.path[d],  {
          scroll:m, options:g
        }=p;
        p!==this.root&&m&&g.layoutScroll&&(m.wasRoot&&Qe(f, l), lo(f.x, m.offset.x), lo(f.y, m.offset.y))
      }return f
    }applyTransform(l, u=!1) {
      const f=Xt();
      Qe(f, l);
      for(let d=0;
      d<this.path.length;
      d++) {
        const p=this.path[d];
        !u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&uo(f,  {
          x:-p.scroll.offset.x, y:-p.scroll.offset.y
        }), la(p.latestValues)&&uo(f, p.latestValues)
      }return la(this.latestValues)&&uo(f, this.latestValues), f
    }removeTransform(l) {
      const u=Xt();
      Qe(u, l);
      for(let f=0;
      f<this.path.length;
      f++) {
        const d=this.path[f];
        if(!d.instance||!la(d.latestValues))continue;
        sh(d.latestValues)&&d.updateSnapshot();
        const p=Xt(), m=d.measurePageBox();
        Qe(p, m), u0(u, d.latestValues, d.snapshot?d.snapshot.layoutBox:void 0, p)
      }return la(this.latestValues)&&u0(u, this.latestValues), u
    }setTargetDelta(l) {
      this.targetDelta=l, this.root.scheduleUpdateProjection(), this.isProjectionDirty=!0
    }setOptions(l) {
      this.options= {
        ...this.options, ...l, crossfade:l.crossfade!==void 0?l.crossfade:!0
      }
    }clearMeasurements() {
      this.scroll=void 0, this.layout=void 0, this.snapshot=void 0, this.prevTransformTemplateValue=void 0, this.targetDelta=void 0, this.target=void 0, this.isLayoutDirty=!1
    }forceRelativeParentToResolveTarget() {
      this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)
    }resolveTargetDelta(l=!1) {
      var u;
      const f=this.getLead();
      this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty), this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty), this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);
      const d=!!this.resumingFrom||this!==f;
      if(!(l||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;
      const {
        layout:m, layoutId:g
      }=this.options;
      if(!(!this.layout||!(m||g))) {
        if(this.resolvedRelativeTargetAt=ce.timestamp, !this.targetDelta&&!this.relativeTarget) {
          const y=this.getClosestProjectingParent();
          y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y, this.forceRelativeParentToResolveTarget(), this.relativeTarget=Xt(), this.relativeTargetOrigin=Xt(), Yr(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), Qe(this.relativeTarget, this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0
        }if(!(!this.relativeTarget&&!this.targetDelta)) {
          if(this.target||(this.target=Xt(), this.targetWithTransforms=Xt()), this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(), $N(this.target, this.relativeTarget, this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qe(this.target, this.layout.layoutBox), LT(this.target, this.targetDelta)):Qe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget=!1;
            const y=this.getClosestProjectingParent();
            y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y, this.forceRelativeParentToResolveTarget(), this.relativeTarget=Xt(), this.relativeTargetOrigin=Xt(), Yr(this.relativeTargetOrigin, this.target, y.target), Qe(this.relativeTarget, this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0
          }Mr&&ua.resolvedTargetDeltas++
        }
      }
    }getClosestProjectingParent() {
      if(!(!this.parent||sh(this.parent.latestValues)||MT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()
    }isProjecting() {
      return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)
    }calcProjection() {
      var l;
      const u=this.getLead(), f=!!this.resumingFrom||this!==u;
      let d=!0;
      if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(d=!1), f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1), this.resolvedRelativeTargetAt===ce.timestamp&&(d=!1), d)return;
      const {
        layout:p, layoutId:m
      }=this.options;
      if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation), this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0), !this.layout||!(p||m))return;
      Qe(this.layoutCorrected, this.layout.layoutBox);
      const g=this.treeScale.x, y=this.treeScale.y;
      rz(this.layoutCorrected, this.treeScale, this.path, f), u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox, u.targetWithTransforms=Xt());
      const {
        target:C
      }=u;
      if(!C) {
        this.prevProjectionDelta&&(this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(r0(this.prevProjectionDelta.x, this.projectionDelta.x), r0(this.prevProjectionDelta.y, this.projectionDelta.y)), Ir(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x!==g||this.treeScale.y!==y||!m0(this.projectionDelta.x, this.prevProjectionDelta.x)||!m0(this.projectionDelta.y, this.prevProjectionDelta.y))&&(this.hasProjected=!0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C)), Mr&&ua.recalculatedProjection++
    }hide() {
      this.isVisible=!1
    }show() {
      this.isVisible=!0
    }scheduleRender(l=!0) {
      var u;
      if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(), l) {
        const f=this.getStack();
        f&&f.scheduleRender()
      }this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)
    }createProjectionDeltas() {
      this.prevProjectionDelta=so(), this.projectionDelta=so(), this.projectionDeltaWithTransform=so()
    }setAnimationOrigin(l, u=!1) {
      const f=this.snapshot, d=f?f.latestValues: {
      }, p= {
        ...this.latestValues
      }, m=so();
      (!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0), this.attemptToResolveRelativeTarget=!u;
      const g=Xt(), y=f?f.source:void 0, C=this.layout?this.layout.source:void 0, E=y!==C, A=this.getStack(), _=!A||A.members.length<=1, b=!!(E&&!_&&this.options.crossfade===!0&&!this.path.some(Iz));
      this.animationProgress=0;
      let S;
      this.mixTargetDelta=M=> {
        const O=M/1e3;
        y0(m.x, l.x, O), y0(m.y, l.y, O), this.setTargetDelta(m), this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yr(g, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Gz(this.relativeTarget, this.relativeTargetOrigin, g, O), S&&Mz(this.relativeTarget, S)&&(this.isProjectionDirty=!1), S||(S=Xt()), Qe(S, this.relativeTarget)), E&&(this.animationValues=p, Tz(p, d, this.latestValues, O, b, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress=O
      }, this.mixTargetDelta(this.options.layoutRoot?1e3:0)
    }startAnimation(l) {
      this.notifyListeners("animationStart"), this.currentAnimation&&this.currentAnimation.stop(), this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(), this.pendingAnimation&&(Ii(this.pendingAnimation), this.pendingAnimation=void 0), this.pendingAnimation=Nt.update(()=> {
        Il.hasAnimatedSinceResize=!0, this.currentAnimation=gz(0, p0,  {
          ...l, onUpdate:u=> {
            this.mixTargetDelta(u), l.onUpdate&&l.onUpdate(u)
          }, onComplete:()=> {
            l.onComplete&&l.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation), this.pendingAnimation=void 0
      })
    }completeAnimation() {
      this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0, this.resumingFrom.preserveOpacity=void 0);
      const l=this.getStack();
      l&&l.exitAnimationComplete(), this.resumingFrom=this.currentAnimation=this.animationValues=void 0, this.notifyListeners("animationComplete")
    }finishAnimation() {
      this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(p0), this.currentAnimation.stop()), this.completeAnimation()
    }applyTransformsToTarget() {
      const l=this.getLead();
      let {
        targetWithTransforms:u, target:f, layout:d, latestValues:p
      }=l;
      if(!(!u||!f||!d)) {
        if(this!==l&&this.layout&&d&&VT(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          f=this.target||Xt();
          const m=Ie(this.layout.layoutBox.x);
          f.x.min=l.target.x.min, f.x.max=f.x.min+m;
          const g=Ie(this.layout.layoutBox.y);
          f.y.min=l.target.y.min, f.y.max=f.y.min+g
        }Qe(u, f), uo(u, p), Ir(this.projectionDeltaWithTransform, this.layoutCorrected, u, p)
      }
    }registerSharedNode(l, u) {
      this.sharedNodes.has(l)||this.sharedNodes.set(l, new Lz), this.sharedNodes.get(l).add(u);
      const d=u.options.initialPromotionConfig;
      u.promote( {
        transition:d?d.transition:void 0, preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0
      })
    }isLead() {
      const l=this.getStack();
      return l?l.lead===this:!0
    }getLead() {
      var l;
      const {
        layoutId:u
      }=this.options;
      return u?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this
    }getPrevLead() {
      var l;
      const {
        layoutId:u
      }=this.options;
      return u?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0
    }getStack() {
      const {
        layoutId:l
      }=this.options;
      if(l)return this.root.sharedNodes.get(l)
    }promote( {
      needsReset:l, transition:u, preserveFollowOpacity:f
    }= {
    }) {
      const d=this.getStack();
      d&&d.promote(this, f), l&&(this.projectionDelta=void 0, this.needsReset=!0), u&&this.setOptions( {
        transition:u
      })
    }relegate() {
      const l=this.getStack();
      return l?l.relegate(this):!1
    }resetSkewAndRotation() {
      const {
        visualElement:l
      }=this.options;
      if(!l)return;
      let u=!1;
      const {
        latestValues:f
      }=l;
      if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0), !u)return;
      const d= {
      };
      f.z&&Hf("z", l, d, this.animationValues);
      for(let p=0;
      p<Uf.length;
      p++)Hf(`rotate${Uf[p]}`, l, d, this.animationValues), Hf(`skew${Uf[p]}`, l, d, this.animationValues);
      l.render();
      for(const p in d)l.setStaticValue(p, d[p]), this.animationValues&&(this.animationValues[p]=d[p]);
      l.scheduleRender()
    }getProjectionStyles(l) {
      var u, f;
      if(!this.instance||this.isSVG)return;
      if(!this.isVisible)return Oz;
      const d= {
        visibility:""
      }, p=this.getTransformTemplate();
      if(this.needsReset)return this.needsReset=!1, d.opacity="", d.pointerEvents=ql(l==null?void 0:l.pointerEvents)||"", d.transform=p?p(this.latestValues, ""):"none", d;
      const m=this.getLead();
      if(!this.projectionDelta||!this.layout||!m.target) {
        const E= {
        };
        return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1, E.pointerEvents=ql(l==null?void 0:l.pointerEvents)||""), this.hasProjected&&!la(this.latestValues)&&(E.transform=p?p( {
        }, ""):"none", this.hasProjected=!1), E
      }const g=m.animationValues||m.latestValues;
      this.applyTransformsToTarget(), d.transform=Rz(this.projectionDeltaWithTransform, this.treeScale, g), p&&(d.transform=p(g, d.transform));
      const {
        x:y, y:C
      }=this.projectionDelta;
      d.transformOrigin=`${y.origin*100}% ${C.origin*100}% 0`, m.animationValues?d.opacity=m===this?(f=(u=g.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;
      for(const E in wu) {
        if(g[E]===void 0)continue;
        const {
          correct:A, applyTo:_
        }=wu[E], b=d.transform==="none"?g[E]:A(g[E], m);
        if(_) {
          const S=_.length;
          for(let M=0;
          M<S;
          M++)d[_[M]]=b
        }else d[E]=b
      }return this.options.layoutId&&(d.pointerEvents=m===this?ql(l==null?void 0:l.pointerEvents)||"":"none"), d
    }clearSnapshot() {
      this.resumeFrom=this.snapshot=void 0
    }resetTree() {
      this.root.nodes.forEach(l=> {
        var u;
        return(u=l.currentAnimation)===null||u===void 0?void 0:u.stop()
      }), this.root.nodes.forEach(g0), this.root.sharedNodes.clear()
    }
  }
}function zz(t) {
  t.updateLayout()
}function Dz(t) {
  var e;
  const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;
  if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")) {
    const {
      layoutBox:i, measuredBox:o
    }=t.layout,  {
      animationType:r
    }=t.options, l=n.source!==t.layout.source;
    r==="size"?$e(m=> {
      const g=l?n.measuredBox[m]:n.layoutBox[m], y=Ie(g);
      g.min=i[m].min, g.max=g.min+y
    }):VT(r, n.layoutBox, i)&&$e(m=> {
      const g=l?n.measuredBox[m]:n.layoutBox[m], y=Ie(i[m]);
      g.max=g.min+y, t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0, t.relativeTarget[m].max=t.relativeTarget[m].min+y)
    });
    const u=so();
    Ir(u, i, n.layoutBox);
    const f=so();
    l?Ir(f, t.applyTransform(o, !0), n.measuredBox):Ir(f, i, n.layoutBox);
    const d=!PT(u);
    let p=!1;
    if(!t.resumeFrom) {
      const m=t.getClosestProjectingParent();
      if(m&&!m.resumeFrom) {
        const {
          snapshot:g, layout:y
        }=m;
        if(g&&y) {
          const C=Xt();
          Yr(C, n.layoutBox, g.layoutBox);
          const E=Xt();
          Yr(E, i, y.layoutBox), jT(C, E)||(p=!0), m.options.layoutRoot&&(t.relativeTarget=E, t.relativeTargetOrigin=C, t.relativeParent=m)
        }
      }
    }t.notifyListeners("didUpdate",  {
      layout:i, snapshot:n, delta:f, layoutDelta:u, hasLayoutChanged:d, hasRelativeTargetChanged:p
    })
  }else if(t.isLead()) {
    const {
      onExitComplete:i
    }=t.options;
    i&&i()
  }t.options.transition=void 0
}function Pz(t) {
  Mr&&ua.totalNodes++, t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty), t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)), t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))
}function jz(t) {
  t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1
}function Bz(t) {
  t.clearSnapshot()
}function g0(t) {
  t.clearMeasurements()
}function kz(t) {
  t.isLayoutDirty=!1
}function Vz(t) {
  const {
    visualElement:e
  }=t.options;
  e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"), t.resetTransform()
}function v0(t) {
  t.finishAnimation(), t.targetDelta=t.relativeTarget=t.target=void 0, t.isProjectionDirty=!0
}function Uz(t) {
  t.resolveTargetDelta()
}function Hz(t) {
  t.calcProjection()
}function Zz(t) {
  t.resetSkewAndRotation()
}function qz(t) {
  t.removeLeadSnapshot()
}function y0(t, e, n) {
  t.translate=Ht(e.translate, 0, n), t.scale=Ht(e.scale, 1, n), t.origin=e.origin, t.originPoint=e.originPoint
}function _0(t, e, n, i) {
  t.min=Ht(e.min, n.min, i), t.max=Ht(e.max, n.max, i)
}function Gz(t, e, n, i) {
  _0(t.x, e.x, n.x, i), _0(t.y, e.y, n.y, i)
}function Iz(t) {
  return t.animationValues&&t.animationValues.opacityExit!==void 0
}const Yz= {
  duration:.45, ease:[.4, 0, .1, 1]
}, b0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t), x0=b0("applewebkit/")&&!b0("chrome/")?Math.round:Ze;
function T0(t) {
  t.min=x0(t.min), t.max=x0(t.max)
}function Fz(t) {
  T0(t.x), T0(t.y)
}function VT(t, e, n) {
  return t==="position"||t==="preserve-aspect"&&!QN(h0(e), h0(n), .2)
}function Xz(t) {
  var e;
  return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)
}const Kz=kT( {
  attachResizeListener:(t, e)=>ms(t, "resize", e), measureScroll:()=>( {
    x:document.documentElement.scrollLeft||document.body.scrollLeft, y:document.documentElement.scrollTop||document.body.scrollTop
  }), checkIsScrollRoot:()=>!0
}), Zf= {
  current:void 0
}, UT=kT( {
  measureScroll:t=>( {
    x:t.scrollLeft, y:t.scrollTop
  }), defaultParent:()=> {
    if(!Zf.current) {
      const t=new Kz( {
      });
      t.mount(window), t.setOptions( {
        layoutScroll:!0
      }), Zf.current=t
    }return Zf.current
  }, resetTransform:(t, e)=> {
    t.style.transform=e!==void 0?e:"none"
  }, checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"
}), Qz= {
  pan: {
    Feature:dz
  }, drag: {
    Feature:fz, ProjectionNode:UT, MeasureLayout:NT
  }
};
function S0(t, e, n) {
  const {
    props:i
  }=t;
  t.animationState&&i.whileHover&&t.animationState.setActive("whileHover", n==="Start");
  const o="onHover"+n, r=i[o];
  r&&Nt.postRender(()=>r(e, zs(e)))
}class $z extends Qi {
  mount() {
    const {
      current:e
    }=this.node;
    e&&(this.unmount=QR(e, n=>(S0(this.node, n, "Start"), i=>S0(this.node, i, "End"))))
  }unmount() {
  }
}class Wz extends Qi {
  constructor() {
    super(...arguments), this.isActive=!1
  }onFocus() {
    let e=!1;
    try {
      e=this.node.current.matches(":focus-visible")
    }catch {
      e=!0
    }!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus", !0), this.isActive=!0)
  }onBlur() {
    !this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus", !1), this.isActive=!1)
  }mount() {
    this.unmount=Ns(ms(this.node.current, "focus", ()=>this.onFocus()), ms(this.node.current, "blur", ()=>this.onBlur()))
  }unmount() {
  }
}function w0(t, e, n) {
  const {
    props:i
  }=t;
  t.animationState&&i.whileTap&&t.animationState.setActive("whileTap", n==="Start");
  const o="onTap"+(n==="End"?"":n), r=i[o];
  r&&Nt.postRender(()=>r(e, zs(e)))
}class Jz extends Qi {
  mount() {
    const {
      current:e
    }=this.node;
    e&&(this.unmount=tO(e, n=>(w0(this.node, n, "Start"), (i,  {
      success:o
    })=>w0(this.node, i, o?"End":"Cancel")),  {
      useGlobalTarget:this.node.props.globalTapTarget
    }))
  }unmount() {
  }
}const uh=new WeakMap, qf=new WeakMap, tD=t=> {
  const e=uh.get(t.target);
  e&&e(t)
}, eD=t=> {
  t.forEach(tD)
};
function nD( {
  root:t, ...e
}) {
  const n=t||document;
  qf.has(n)||qf.set(n,  {
  });
  const i=qf.get(n), o=JSON.stringify(e);
  return i[o]||(i[o]=new IntersectionObserver(eD,  {
    root:t, ...e
  })), i[o]
}function iD(t, e, n) {
  const i=nD(e);
  return uh.set(t, n), i.observe(t), ()=> {
    uh.delete(t), i.unobserve(t)
  }
}const aD= {
  some:0, all:1
};
class oD extends Qi {
  constructor() {
    super(...arguments), this.hasEnteredView=!1, this.isInView=!1
  }startObserver() {
    this.unmount();
    const {
      viewport:e= {
      }
    }=this.node.getProps(),  {
      root:n, margin:i, amount:o="some", once:r
    }=e, l= {
      root:n?n.current:void 0, rootMargin:i, threshold:typeof o=="number"?o:aD[o]
    }, u=f=> {
      const {
        isIntersecting:d
      }=f;
      if(this.isInView===d||(this.isInView=d, r&&!d&&this.hasEnteredView))return;
      d&&(this.hasEnteredView=!0), this.node.animationState&&this.node.animationState.setActive("whileInView", d);
      const {
        onViewportEnter:p, onViewportLeave:m
      }=this.node.getProps(), g=d?p:m;
      g&&g(f)
    };
    return iD(this.node.current, l, u)
  }mount() {
    this.startObserver()
  }update() {
    if(typeof IntersectionObserver>"u")return;
    const {
      props:e, prevProps:n
    }=this.node;
    ["amount", "margin", "root"].some(rD(e, n))&&this.startObserver()
  }unmount() {
  }
}function rD( {
  viewport:t= {
  }
},  {
  viewport:e= {
  }
}= {
}) {
  return n=>t[n]!==e[n]
}const sD= {
  inView: {
    Feature:oD
  }, tap: {
    Feature:Jz
  }, focus: {
    Feature:Wz
  }, hover: {
    Feature:$z
  }
}, lD= {
  layout: {
    ProjectionNode:UT, MeasureLayout:NT
  }
}, ch= {
  current:null
}, HT= {
  current:!1
};
function uD() {
  if(HT.current=!0, !!Am)if(window.matchMedia) {
    const t=window.matchMedia("(prefers-reduced-motion)"), e=()=>ch.current=t.matches;
    t.addListener(e), e()
  }else ch.current=!1
}const cD=[...dT, ge, Yi], fD=t=>cD.find(fT(t)), E0=new WeakMap;
function dD(t, e, n) {
  for(const i in e) {
    const o=e[i], r=n[i];
    if(ve(o))t.addValue(i, o);
    else if(ve(r))t.addValue(i, ds(o,  {
      owner:t
    }));
    else if(r!==o)if(t.hasValue(i)) {
      const l=t.getValue(i);
      l.liveStyle===!0?l.jump(o):l.hasAnimated||l.set(o)
    }else {
      const l=t.getStaticValue(i);
      t.addValue(i, ds(l!==void 0?l:o,  {
        owner:t
      }))
    }
  }for(const i in n)e[i]===void 0&&t.removeValue(i);
  return e
}const C0=["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class hD {
  scrapeMotionValuesFromProps(e, n, i) {
    return {
    }
  }constructor( {
    parent:e, props:n, presenceContext:i, reducedMotionConfig:o, blockInitialAnimation:r, visualState:l
  }, u= {
  }) {
    this.current=null, this.children=new Set, this.isVariantNode=!1, this.isControllingVariants=!1, this.shouldReduceMotion=null, this.values=new Map, this.KeyframeResolver=tp, this.features= {
    }, this.valueSubscriptions=new Map, this.prevMotionValues= {
    }, this.events= {
    }, this.propEventSubscriptions= {
    }, this.notifyUpdate=()=>this.notify("Update", this.latestValues), this.render=()=> {
      this.current&&(this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.renderScheduledAt=0, this.scheduleRender=()=> {
      const y=Ln.now();
      this.renderScheduledAt<y&&(this.renderScheduledAt=y, Nt.render(this.render, !1, !0))
    };
    const {
      latestValues:f, renderState:d, onUpdate:p
    }=l;
    this.onUpdate=p, this.latestValues=f, this.baseTarget= {
      ...f
    }, this.initialValues=n.initial? {
      ...f
    }: {
    }, this.renderState=d, this.parent=e, this.props=n, this.presenceContext=i, this.depth=e?e.depth+1:0, this.reducedMotionConfig=o, this.options=u, this.blockInitialAnimation=!!r, this.isControllingVariants=ic(n), this.isVariantNode=b1(n), this.isVariantNode&&(this.variantChildren=new Set), this.manuallyAnimateOnMount=!!(e&&e.current);
    const {
      willChange:m, ...g
    }=this.scrapeMotionValuesFromProps(n,  {
    }, this);
    for(const y in g) {
      const C=g[y];
      f[y]!==void 0&&ve(C)&&C.set(f[y], !1)
    }
  }mount(e) {
    this.current=e, E0.set(e, this), this.projection&&!this.projection.instance&&this.projection.mount(e), this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)), this.values.forEach((n, i)=>this.bindToMotionValue(i, n)), HT.current||uD(), this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ch.current, this.parent&&this.parent.children.add(this), this.update(this.props, this.presenceContext)
  }unmount() {
    E0.delete(this.current), this.projection&&this.projection.unmount(), Ii(this.notifyUpdate), Ii(this.render), this.valueSubscriptions.forEach(e=>e()), this.valueSubscriptions.clear(), this.removeFromVariantTree&&this.removeFromVariantTree(), this.parent&&this.parent.children.delete(this);
    for(const e in this.events)this.events[e].clear();
    for(const e in this.features) {
      const n=this.features[e];
      n&&(n.unmount(), n.isMounted=!1)
    }this.current=null
  }bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();
    const i=Ra.has(e), o=n.on("change", u=> {
      this.latestValues[e]=u, this.props.onUpdate&&Nt.preRender(this.notifyUpdate), i&&this.projection&&(this.projection.isTransformDirty=!0)
    }), r=n.on("renderRequest", this.scheduleRender);
    let l;
    window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, ()=> {
      o(), r(), l&&l(), n.owner&&n.stop()
    })
  }sortNodePosition(e) {
    return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current, e.current)
  }updateFeatures() {
    let e="animation";
    for(e in No) {
      const n=No[e];
      if(!n)continue;
      const {
        isEnabled:i, Feature:o
      }=n;
      if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)), this.features[e]) {
        const r=this.features[e];
        r.isMounted?r.update():(r.mount(), r.isMounted=!0)
      }
    }
  }triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }measureViewportBox() {
    return this.current?this.measureInstanceViewportBox(this.current, this.props):Xt()
  }getStaticValue(e) {
    return this.latestValues[e]
  }setStaticValue(e, n) {
    this.latestValues[e]=n
  }update(e, n) {
    (e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(), this.prevProps=this.props, this.props=e, this.prevPresenceContext=this.presenceContext, this.presenceContext=n;
    for(let i=0;
    i<C0.length;
    i++) {
      const o=C0[i];
      this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const r="on"+o, l=e[r];
      l&&(this.propEventSubscriptions[o]=this.on(o, l))
    }this.prevMotionValues=dD(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue&&this.handleChildMotionValue(), this.onUpdate&&this.onUpdate(this)
  }getProps() {
    return this.props
  }getVariant(e) {
    return this.props.variants?this.props.variants[e]:void 0
  }getDefaultTransition() {
    return this.props.transition
  }getTransformPagePoint() {
    return this.props.transformPagePoint
  }getClosestVariantNode() {
    return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0
  }addVariantChild(e) {
    const n=this.getClosestVariantNode();
    if(n)return n.variantChildren&&n.variantChildren.add(e), ()=>n.variantChildren.delete(e)
  }addValue(e, n) {
    const i=this.values.get(e);
    n!==i&&(i&&this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e]=n.get())
  }removeValue(e) {
    this.values.delete(e);
    const n=this.valueSubscriptions.get(e);
    n&&(n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
  }hasValue(e) {
    return this.values.has(e)
  }getValue(e, n) {
    if(this.props.values&&this.props.values[e])return this.props.values[e];
    let i=this.values.get(e);
    return i===void 0&&n!==void 0&&(i=ds(n===null?void 0:n,  {
      owner:this
    }), this.addValue(e, i)), i
  }readValue(e, n) {
    var i;
    let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props, e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current, e, this.options);
    return o!=null&&(typeof o=="string"&&(uT(o)||tT(o))?o=parseFloat(o):!fD(o)&&Yi.test(n)&&(o=rT(e, n)), this.setBaseTarget(e, ve(o)?o.get():o)), ve(o)?o.get():o
  }setBaseTarget(e, n) {
    this.baseTarget[e]=n
  }getBaseTarget(e) {
    var n;
    const {
      initial:i
    }=this.props;
    let o;
    if(typeof i=="string"||typeof i=="object") {
      const l=Dm(this.props, i, (n=this.presenceContext)===null||n===void 0?void 0:n.custom);
      l&&(o=l[e])
    }if(i&&o!==void 0)return o;
    const r=this.getBaseTargetFromProps(this.props, e);
    return r!==void 0&&!ve(r)?r:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]
  }on(e, n) {
    return this.events[e]||(this.events[e]=new Xm), this.events[e].add(n)
  }notify(e, ...n) {
    this.events[e]&&this.events[e].notify(...n)
  }
}class ZT extends hD {
  constructor() {
    super(...arguments), this.KeyframeResolver=hT
  }sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n)&2?1:-1
  }getBaseTargetFromProps(e, n) {
    return e.style?e.style[n]:void 0
  }removeValueFromRenderState(e,  {
    vars:n, style:i
  }) {
    delete n[e], delete i[e]
  }handleChildMotionValue() {
    this.childSubscription&&(this.childSubscription(), delete this.childSubscription);
    const {
      children:e
    }=this.props;
    ve(e)&&(this.childSubscription=e.on("change", n=> {
      this.current&&(this.current.textContent=`${n}`)
    }))
  }
}function mD(t) {
  return window.getComputedStyle(t)
}class pD extends ZT {
  constructor() {
    super(...arguments), this.type="html", this.renderInstance=L1
  }readValueFromInstance(e, n) {
    if(Ra.has(n)) {
      const i=Jm(n);
      return i&&i.default||0
    }else {
      const i=mD(e), o=(C1(n)?i.getPropertyValue(n):i[n])||0;
      return typeof o=="string"?o.trim():o
    }
  }measureInstanceViewportBox(e,  {
    transformPagePoint:n
  }) {
    return RT(e, n)
  }build(e, n, i) {
    Bm(e, n, i.transformTemplate)
  }scrapeMotionValuesFromProps(e, n, i) {
    return Hm(e, n, i)
  }
}class gD extends ZT {
  constructor() {
    super(...arguments), this.type="svg", this.isSVGTag=!1, this.measureInstanceViewportBox=Xt
  }getBaseTargetFromProps(e, n) {
    return e[n]
  }readValueFromInstance(e, n) {
    if(Ra.has(n)) {
      const i=Jm(n);
      return i&&i.default||0
    }return n=R1.has(n)?n:Om(n), e.getAttribute(n)
  }scrapeMotionValuesFromProps(e, n, i) {
    return z1(e, n, i)
  }build(e, n, i) {
    km(e, n, this.isSVGTag, i.transformTemplate)
  }renderInstance(e, n, i, o) {
    O1(e, n, i, o)
  }mount(e) {
    this.isSVGTag=Um(e.tagName), super.mount(e)
  }
}const vD=(t, e)=>zm(t)?new gD(e):new pD(e,  {
  allowProjection:t!==T.Fragment
}), yD=qR( {
  ...HN, ...sD, ...Qz, ...lD
}, vD), Rn=aR(yD);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=t=>t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qT=(...t)=>t.filter((e, n, i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bD= {
  xmlns:"http://www.w3.org/2000/svg", width:24, height:24, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:2, strokeLinecap:"round", strokeLinejoin:"round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=T.forwardRef(( {
  color:t="currentColor", size:e=24, strokeWidth:n=2, absoluteStrokeWidth:i, className:o="", children:r, iconNode:l, ...u
}, f)=>T.createElement("svg",  {
  ref:f, ...bD, width:e, height:e, stroke:t, strokeWidth:i?Number(n)*24/Number(e):n, className:qT("lucide", o), ...u
}, [...l.map(([d, p])=>T.createElement(d, p)), ...Array.isArray(r)?r:[r]]));
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=(t, e)=> {
  const n=T.forwardRef(( {
    className:i, ...o
  }, r)=>T.createElement(xD,  {
    ref:r, iconNode:e, className:qT(`lucide-${_D(t)}`, i), ...o
  }));
  return n.displayName=`${t}`, n
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=Yt("Anchor", [["path",  {
  d:"M12 22V8", key:"qkxhtm"
}], ["path",  {
  d:"M5 12H2a10 10 0 0 0 20 0h-3", key:"1hv3nh"
}], ["circle",  {
  cx:"12", cy:"5", r:"3", key:"rqqgnr"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=Yt("ArrowLeft", [["path",  {
  d:"m12 19-7-7 7-7", key:"1l729n"
}], ["path",  {
  d:"M19 12H5", key:"x3x0zl"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=Yt("ArrowRight", [["path",  {
  d:"M5 12h14", key:"1ays0h"
}], ["path",  {
  d:"m12 5 7 7-7 7", key:"xquz4c"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=Yt("Calendar", [["path",  {
  d:"M8 2v4", key:"1cmpym"
}], ["path",  {
  d:"M16 2v4", key:"4m81vk"
}], ["rect",  {
  width:"18", height:"18", x:"3", y:"4", rx:"2", key:"1hopcy"
}], ["path",  {
  d:"M3 10h18", key:"8toen8"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=Yt("Check", [["path",  {
  d:"M20 6 9 17l-5-5", key:"1gmf2c"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=Yt("ChevronLeft", [["path",  {
  d:"m15 18-6-6 6-6", key:"1wnfg3"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=Yt("ChevronRight", [["path",  {
  d:"m9 18 6-6-6-6", key:"mthhwq"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=Yt("Clock", [["circle",  {
  cx:"12", cy:"12", r:"10", key:"1mglay"
}], ["polyline",  {
  points:"12 6 12 12 16 14", key:"68esgv"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=Yt("Earth", [["path",  {
  d:"M21.54 15H17a2 2 0 0 0-2 2v4.54", key:"1djwo0"
}], ["path",  {
  d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", key:"1tzkfa"
}], ["path",  {
  d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key:"14pb5j"
}], ["circle",  {
  cx:"12", cy:"12", r:"10", key:"1mglay"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=Yt("FileText", [["path",  {
  d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key:"1rqfz7"
}], ["path",  {
  d:"M14 2v4a2 2 0 0 0 2 2h4", key:"tnqrlb"
}], ["path",  {
  d:"M10 9H8", key:"b1mrlr"
}], ["path",  {
  d:"M16 13H8", key:"t4e002"
}], ["path",  {
  d:"M16 17H8", key:"z1uh3a"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=Yt("Github", [["path",  {
  d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4", key:"tonef"
}], ["path",  {
  d:"M9 18c-4.51 2-5-2-7-2", key:"9comsn"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=Yt("Leaf", [["path",  {
  d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", key:"nnexq3"
}], ["path",  {
  d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key:"mt58a7"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=Yt("Linkedin", [["path",  {
  d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", key:"c2jq9f"
}], ["rect",  {
  width:"4", height:"12", x:"2", y:"9", key:"mk3on5"
}], ["circle",  {
  cx:"4", cy:"4", r:"2", key:"bt5ra8"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=Yt("Mail", [["rect",  {
  width:"20", height:"16", x:"2", y:"4", rx:"2", key:"18n3k1"
}], ["path",  {
  d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key:"1ocrg3"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=Yt("MapPin", [["path",  {
  d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key:"1r0f0z"
}], ["circle",  {
  cx:"12", cy:"10", r:"3", key:"ilqhr7"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=Yt("Map", [["path",  {
  d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z", key:"169xi5"
}], ["path",  {
  d:"M15 5.764v15", key:"1pn4in"
}], ["path",  {
  d:"M9 3.236v15", key:"1uimfh"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Yt("Navigation", [["polygon",  {
  points:"3 11 22 2 13 21 11 13 3 11", key:"1ltx0t"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=Yt("Pen", [["path",  {
  d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key:"1a8usu"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=Yt("Sparkles", [["path",  {
  d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key:"4pj2yx"
}], ["path",  {
  d:"M20 3v4", key:"1olli1"
}], ["path",  {
  d:"M22 5h-4", key:"1gvqau"
}], ["path",  {
  d:"M4 17v2", key:"vumght"
}], ["path",  {
  d:"M5 18H3", key:"zchphs"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=Yt("Trash2", [["path",  {
  d:"M3 6h18", key:"d0wm0j"
}], ["path",  {
  d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key:"4alrt4"
}], ["path",  {
  d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key:"v07s0e"
}], ["line",  {
  x1:"10", x2:"10", y1:"11", y2:"17", key:"1uufr5"
}], ["line",  {
  x1:"14", x2:"14", y1:"11", y2:"17", key:"xtxkd"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=Yt("Users", [["path",  {
  d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key:"1yyitq"
}], ["circle",  {
  cx:"9", cy:"7", r:"4", key:"nufk8"
}], ["path",  {
  d:"M22 21v-2a4 4 0 0 0-3-3.87", key:"kshegd"
}], ["path",  {
  d:"M16 3.13a4 4 0 0 1 0 7.75", key:"1da9ce"
}]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=Yt("X", [["path",  {
  d:"M18 6 6 18", key:"1bl5f8"
}], ["path",  {
  d:"m6 6 12 12", key:"d8bk6v"
}]]);
var dh= {
  exports: {
  }
};
/* @preserve
 * Leaflet 1.9.4,  a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin,  (c) 2010-2011 CloudMade
 */(function(t, e) {
  (function(n, i) {
    i(e)
  })(yE, function(n) {
    var i="1.9.4";
    function o(a) {
      var s, c, h, v;
      for(c=1, h=arguments.length;
      c<h;
      c++) {
        v=arguments[c];
        for(s in v)a[s]=v[s]
      }return a
    }var r=Object.create||function() {
      function a() {
      }return function(s) {
        return a.prototype=s, new a
      }
    }();
    function l(a, s) {
      var c=Array.prototype.slice;
      if(a.bind)return a.bind.apply(a, c.call(arguments, 1));
      var h=c.call(arguments, 2);
      return function() {
        return a.apply(s, h.length?h.concat(c.call(arguments)):arguments)
      }
    }var u=0;
    function f(a) {
      return"_leaflet_id"in a||(a._leaflet_id=++u), a._leaflet_id
    }function d(a, s, c) {
      var h, v, x, R;
      return R=function() {
        h=!1, v&&(x.apply(c, v), v=!1)
      }, x=function() {
        h?v=arguments:(a.apply(c, arguments), setTimeout(R, s), h=!0)
      }, x
    }function p(a, s, c) {
      var h=s[1], v=s[0], x=h-v;
      return a===h&&c?a:((a-v)%x+x)%x+v
    }function m() {
      return!1
    }function g(a, s) {
      if(s===!1)return a;
      var c=Math.pow(10, s===void 0?6:s);
      return Math.round(a*c)/c
    }function y(a) {
      return a.trim?a.trim():a.replace(/^\s+|\s+$/g, "")
    }function C(a) {
      return y(a).split(/\s+/)
    }function E(a, s) {
      Object.prototype.hasOwnProperty.call(a, "options")||(a.options=a.options?r(a.options): {
      });
      for(var c in s)a.options[c]=s[c];
      return a.options
    }function A(a, s, c) {
      var h=[];
      for(var v in a)h.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(a[v]));
      return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")
    }var _=/\ {
       *([\w_ -]+) *\
    }/g;
    function b(a, s) {
      return a.replace(_, function(c, h) {
        var v=s[h];
        if(v===void 0)throw new Error("No value provided for variable "+c);
        return typeof v=="function"&&(v=v(s)), v
      })
    }var S=Array.isArray||function(a) {
      return Object.prototype.toString.call(a)==="[object Array]"
    };
    function M(a, s) {
      for(var c=0;
      c<a.length;
      c++)if(a[c]===s)return c;
      return-1
    }var O="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function P(a) {
      return window["webkit"+a]||window["moz"+a]||window["ms"+a]
    }var D=0;
    function B(a) {
      var s=+new Date, c=Math.max(0, 16-(s-D));
      return D=s+c, window.setTimeout(a, c)
    }var Z=window.requestAnimationFrame||P("RequestAnimationFrame")||B, I=window.cancelAnimationFrame||P("CancelAnimationFrame")||P("CancelRequestAnimationFrame")||function(a) {
      window.clearTimeout(a)
    };
    function H(a, s, c) {
      if(c&&Z===B)a.call(s);
      else return Z.call(window, l(a, s))
    }function q(a) {
      a&&I.call(window, a)
    }var bt= {
      __proto__:null, extend:o, create:r, bind:l, get lastId() {
        return u
      }, stamp:f, throttle:d, wrapNum:p, falseFn:m, formatNum:g, trim:y, splitWords:C, setOptions:E, getParamString:A, template:b, isArray:S, indexOf:M, emptyImageUrl:O, requestFn:Z, cancelFn:I, requestAnimFrame:H, cancelAnimFrame:q
    };
    function X() {
    }X.extend=function(a) {
      var s=function() {
        E(this), this.initialize&&this.initialize.apply(this, arguments), this.callInitHooks()
      }, c=s.__super__=this.prototype, h=r(c);
      h.constructor=s, s.prototype=h;
      for(var v in this)Object.prototype.hasOwnProperty.call(this, v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);
      return a.statics&&o(s, a.statics), a.includes&&(ft(a.includes), o.apply(null, [h].concat(a.includes))), o(h, a), delete h.statics, delete h.includes, h.options&&(h.options=c.options?r(c.options): {
      }, o(h.options, a.options)), h._initHooks=[], h.callInitHooks=function() {
        if(!this._initHooksCalled) {
          c.callInitHooks&&c.callInitHooks.call(this), this._initHooksCalled=!0;
          for(var x=0, R=h._initHooks.length;
          x<R;
          x++)h._initHooks[x].call(this)
        }
      }, s
    }, X.include=function(a) {
      var s=this.prototype.options;
      return o(this.prototype, a), a.options&&(this.prototype.options=s, this.mergeOptions(a.options)), this
    }, X.mergeOptions=function(a) {
      return o(this.prototype.options, a), this
    }, X.addInitHook=function(a) {
      var s=Array.prototype.slice.call(arguments, 1), c=typeof a=="function"?a:function() {
        this[a].apply(this, s)
      };
      return this.prototype._initHooks=this.prototype._initHooks||[], this.prototype._initHooks.push(c), this
    };
    function ft(a) {
      if(!(typeof L>"u"||!L||!L.Mixin)) {
        a=S(a)?a:[a];
        for(var s=0;
        s<a.length;
        s++)a[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack)
      }
    }var V= {
      on:function(a, s, c) {
        if(typeof a=="object")for(var h in a)this._on(h, a[h], s);
        else {
          a=C(a);
          for(var v=0, x=a.length;
          v<x;
          v++)this._on(a[v], s, c)
        }return this
      }, off:function(a, s, c) {
        if(!arguments.length)delete this._events;
        else if(typeof a=="object")for(var h in a)this._off(h, a[h], s);
        else {
          a=C(a);
          for(var v=arguments.length===1, x=0, R=a.length;
          x<R;
          x++)v?this._off(a[x]):this._off(a[x], s, c)
        }return this
      }, _on:function(a, s, c, h) {
        if(typeof s!="function") {
          console.warn("wrong listener type: "+typeof s);
          return
        }if(this._listens(a, s, c)===!1) {
          c===this&&(c=void 0);
          var v= {
            fn:s, ctx:c
          };
          h&&(v.once=!0), this._events=this._events|| {
          }, this._events[a]=this._events[a]||[], this._events[a].push(v)
        }
      }, _off:function(a, s, c) {
        var h, v, x;
        if(this._events&&(h=this._events[a], !!h)) {
          if(arguments.length===1) {
            if(this._firingCount)for(v=0, x=h.length;
            v<x;
            v++)h[v].fn=m;
            delete this._events[a];
            return
          }if(typeof s!="function") {
            console.warn("wrong listener type: "+typeof s);
            return
          }var R=this._listens(a, s, c);
          if(R!==!1) {
            var N=h[R];
            this._firingCount&&(N.fn=m, this._events[a]=h=h.slice()), h.splice(R, 1)
          }
        }
      }, fire:function(a, s, c) {
        if(!this.listens(a, c))return this;
        var h=o( {
        }, s,  {
          type:a, target:this, sourceTarget:s&&s.sourceTarget||this
        });
        if(this._events) {
          var v=this._events[a];
          if(v) {
            this._firingCount=this._firingCount+1||1;
            for(var x=0, R=v.length;
            x<R;
            x++) {
              var N=v[x], z=N.fn;
              N.once&&this.off(a, z, N.ctx), z.call(N.ctx||this, h)
            }this._firingCount--
          }
        }return c&&this._propagateEvent(h), this
      }, listens:function(a, s, c, h) {
        typeof a!="string"&&console.warn('"string" type argument expected');
        var v=s;
        typeof s!="function"&&(h=!!s, v=void 0, c=void 0);
        var x=this._events&&this._events[a];
        if(x&&x.length&&this._listens(a, v, c)!==!1)return!0;
        if(h) {
          for(var R in this._eventParents)if(this._eventParents[R].listens(a, s, c, h))return!0
        }return!1
      }, _listens:function(a, s, c) {
        if(!this._events)return!1;
        var h=this._events[a]||[];
        if(!s)return!!h.length;
        c===this&&(c=void 0);
        for(var v=0, x=h.length;
        v<x;
        v++)if(h[v].fn===s&&h[v].ctx===c)return v;
        return!1
      }, once:function(a, s, c) {
        if(typeof a=="object")for(var h in a)this._on(h, a[h], s, !0);
        else {
          a=C(a);
          for(var v=0, x=a.length;
          v<x;
          v++)this._on(a[v], s, c, !0)
        }return this
      }, addEventParent:function(a) {
        return this._eventParents=this._eventParents|| {
        }, this._eventParents[f(a)]=a, this
      }, removeEventParent:function(a) {
        return this._eventParents&&delete this._eventParents[f(a)], this
      }, _propagateEvent:function(a) {
        for(var s in this._eventParents)this._eventParents[s].fire(a.type, o( {
          layer:a.target, propagatedFrom:a.target
        }, a), !0)
      }
    };
    V.addEventListener=V.on, V.removeEventListener=V.clearAllEventListeners=V.off, V.addOneTimeEventListener=V.once, V.fireEvent=V.fire, V.hasEventListeners=V.listens;
    var F=X.extend(V);
    function U(a, s, c) {
      this.x=c?Math.round(a):a, this.y=c?Math.round(s):s
    }var rt=Math.trunc||function(a) {
      return a>0?Math.floor(a):Math.ceil(a)
    };
    U.prototype= {
      clone:function() {
        return new U(this.x, this.y)
      }, add:function(a) {
        return this.clone()._add(G(a))
      }, _add:function(a) {
        return this.x+=a.x, this.y+=a.y, this
      }, subtract:function(a) {
        return this.clone()._subtract(G(a))
      }, _subtract:function(a) {
        return this.x-=a.x, this.y-=a.y, this
      }, divideBy:function(a) {
        return this.clone()._divideBy(a)
      }, _divideBy:function(a) {
        return this.x/=a, this.y/=a, this
      }, multiplyBy:function(a) {
        return this.clone()._multiplyBy(a)
      }, _multiplyBy:function(a) {
        return this.x*=a, this.y*=a, this
      }, scaleBy:function(a) {
        return new U(this.x*a.x, this.y*a.y)
      }, unscaleBy:function(a) {
        return new U(this.x/a.x, this.y/a.y)
      }, round:function() {
        return this.clone()._round()
      }, _round:function() {
        return this.x=Math.round(this.x), this.y=Math.round(this.y), this
      }, floor:function() {
        return this.clone()._floor()
      }, _floor:function() {
        return this.x=Math.floor(this.x), this.y=Math.floor(this.y), this
      }, ceil:function() {
        return this.clone()._ceil()
      }, _ceil:function() {
        return this.x=Math.ceil(this.x), this.y=Math.ceil(this.y), this
      }, trunc:function() {
        return this.clone()._trunc()
      }, _trunc:function() {
        return this.x=rt(this.x), this.y=rt(this.y), this
      }, distanceTo:function(a) {
        a=G(a);
        var s=a.x-this.x, c=a.y-this.y;
        return Math.sqrt(s*s+c*c)
      }, equals:function(a) {
        return a=G(a), a.x===this.x&&a.y===this.y
      }, contains:function(a) {
        return a=G(a), Math.abs(a.x)<=Math.abs(this.x)&&Math.abs(a.y)<=Math.abs(this.y)
      }, toString:function() {
        return"Point("+g(this.x)+", "+g(this.y)+")"
      }
    };
    function G(a, s, c) {
      return a instanceof U?a:S(a)?new U(a[0], a[1]):a==null?a:typeof a=="object"&&"x"in a&&"y"in a?new U(a.x, a.y):new U(a, s, c)
    }function at(a, s) {
      if(a)for(var c=s?[a, s]:a, h=0, v=c.length;
      h<v;
      h++)this.extend(c[h])
    }at.prototype= {
      extend:function(a) {
        var s, c;
        if(!a)return this;
        if(a instanceof U||typeof a[0]=="number"||"x"in a)s=c=G(a);
        else if(a=kt(a), s=a.min, c=a.max, !s||!c)return this;
        return!this.min&&!this.max?(this.min=s.clone(), this.max=c.clone()):(this.min.x=Math.min(s.x, this.min.x), this.max.x=Math.max(c.x, this.max.x), this.min.y=Math.min(s.y, this.min.y), this.max.y=Math.max(c.y, this.max.y)), this
      }, getCenter:function(a) {
        return G((this.min.x+this.max.x)/2, (this.min.y+this.max.y)/2, a)
      }, getBottomLeft:function() {
        return G(this.min.x, this.max.y)
      }, getTopRight:function() {
        return G(this.max.x, this.min.y)
      }, getTopLeft:function() {
        return this.min
      }, getBottomRight:function() {
        return this.max
      }, getSize:function() {
        return this.max.subtract(this.min)
      }, contains:function(a) {
        var s, c;
        return typeof a[0]=="number"||a instanceof U?a=G(a):a=kt(a), a instanceof at?(s=a.min, c=a.max):s=c=a, s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y
      }, intersects:function(a) {
        a=kt(a);
        var s=this.min, c=this.max, h=a.min, v=a.max, x=v.x>=s.x&&h.x<=c.x, R=v.y>=s.y&&h.y<=c.y;
        return x&&R
      }, overlaps:function(a) {
        a=kt(a);
        var s=this.min, c=this.max, h=a.min, v=a.max, x=v.x>s.x&&h.x<c.x, R=v.y>s.y&&h.y<c.y;
        return x&&R
      }, isValid:function() {
        return!!(this.min&&this.max)
      }, pad:function(a) {
        var s=this.min, c=this.max, h=Math.abs(s.x-c.x)*a, v=Math.abs(s.y-c.y)*a;
        return kt(G(s.x-h, s.y-v), G(c.x+h, c.y+v))
      }, equals:function(a) {
        return a?(a=kt(a), this.min.equals(a.getTopLeft())&&this.max.equals(a.getBottomRight())):!1
      }
    };
    function kt(a, s) {
      return!a||a instanceof at?a:new at(a, s)
    }function Vt(a, s) {
      if(a)for(var c=s?[a, s]:a, h=0, v=c.length;
      h<v;
      h++)this.extend(c[h])
    }Vt.prototype= {
      extend:function(a) {
        var s=this._southWest, c=this._northEast, h, v;
        if(a instanceof pt)h=a, v=a;
        else if(a instanceof Vt) {
          if(h=a._southWest, v=a._northEast, !h||!v)return this
        }else return a?this.extend(ht(a)||vt(a)):this;
        return!s&&!c?(this._southWest=new pt(h.lat, h.lng), this._northEast=new pt(v.lat, v.lng)):(s.lat=Math.min(h.lat, s.lat), s.lng=Math.min(h.lng, s.lng), c.lat=Math.max(v.lat, c.lat), c.lng=Math.max(v.lng, c.lng)), this
      }, pad:function(a) {
        var s=this._southWest, c=this._northEast, h=Math.abs(s.lat-c.lat)*a, v=Math.abs(s.lng-c.lng)*a;
        return new Vt(new pt(s.lat-h, s.lng-v), new pt(c.lat+h, c.lng+v))
      }, getCenter:function() {
        return new pt((this._southWest.lat+this._northEast.lat)/2, (this._southWest.lng+this._northEast.lng)/2)
      }, getSouthWest:function() {
        return this._southWest
      }, getNorthEast:function() {
        return this._northEast
      }, getNorthWest:function() {
        return new pt(this.getNorth(), this.getWest())
      }, getSouthEast:function() {
        return new pt(this.getSouth(), this.getEast())
      }, getWest:function() {
        return this._southWest.lng
      }, getSouth:function() {
        return this._southWest.lat
      }, getEast:function() {
        return this._northEast.lng
      }, getNorth:function() {
        return this._northEast.lat
      }, contains:function(a) {
        typeof a[0]=="number"||a instanceof pt||"lat"in a?a=ht(a):a=vt(a);
        var s=this._southWest, c=this._northEast, h, v;
        return a instanceof Vt?(h=a.getSouthWest(), v=a.getNorthEast()):h=v=a, h.lat>=s.lat&&v.lat<=c.lat&&h.lng>=s.lng&&v.lng<=c.lng
      }, intersects:function(a) {
        a=vt(a);
        var s=this._southWest, c=this._northEast, h=a.getSouthWest(), v=a.getNorthEast(), x=v.lat>=s.lat&&h.lat<=c.lat, R=v.lng>=s.lng&&h.lng<=c.lng;
        return x&&R
      }, overlaps:function(a) {
        a=vt(a);
        var s=this._southWest, c=this._northEast, h=a.getSouthWest(), v=a.getNorthEast(), x=v.lat>s.lat&&h.lat<c.lat, R=v.lng>s.lng&&h.lng<c.lng;
        return x&&R
      }, toBBoxString:function() {
        return[this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
      }, equals:function(a, s) {
        return a?(a=vt(a), this._southWest.equals(a.getSouthWest(), s)&&this._northEast.equals(a.getNorthEast(), s)):!1
      }, isValid:function() {
        return!!(this._southWest&&this._northEast)
      }
    };
    function vt(a, s) {
      return a instanceof Vt?a:new Vt(a, s)
    }function pt(a, s, c) {
      if(isNaN(a)||isNaN(s))throw new Error("Invalid LatLng object: ("+a+", "+s+")");
      this.lat=+a, this.lng=+s, c!==void 0&&(this.alt=+c)
    }pt.prototype= {
      equals:function(a, s) {
        if(!a)return!1;
        a=ht(a);
        var c=Math.max(Math.abs(this.lat-a.lat), Math.abs(this.lng-a.lng));
        return c<=(s===void 0?1e-9:s)
      }, toString:function(a) {
        return"LatLng("+g(this.lat, a)+", "+g(this.lng, a)+")"
      }, distanceTo:function(a) {
        return hi.distance(this, ht(a))
      }, wrap:function() {
        return hi.wrapLatLng(this)
      }, toBounds:function(a) {
        var s=180*a/40075017, c=s/Math.cos(Math.PI/180*this.lat);
        return vt([this.lat-s, this.lng-c], [this.lat+s, this.lng+c])
      }, clone:function() {
        return new pt(this.lat, this.lng, this.alt)
      }
    };
    function ht(a, s, c) {
      return a instanceof pt?a:S(a)&&typeof a[0]!="object"?a.length===3?new pt(a[0], a[1], a[2]):a.length===2?new pt(a[0], a[1]):null:a==null?a:typeof a=="object"&&"lat"in a?new pt(a.lat, "lng"in a?a.lng:a.lon, a.alt):s===void 0?null:new pt(a, s, c)
    }var zn= {
      latLngToPoint:function(a, s) {
        var c=this.projection.project(a), h=this.scale(s);
        return this.transformation._transform(c, h)
      }, pointToLatLng:function(a, s) {
        var c=this.scale(s), h=this.transformation.untransform(a, c);
        return this.projection.unproject(h)
      }, project:function(a) {
        return this.projection.project(a)
      }, unproject:function(a) {
        return this.projection.unproject(a)
      }, scale:function(a) {
        return 256*Math.pow(2, a)
      }, zoom:function(a) {
        return Math.log(a/256)/Math.LN2
      }, getProjectedBounds:function(a) {
        if(this.infinite)return null;
        var s=this.projection.bounds, c=this.scale(a), h=this.transformation.transform(s.min, c), v=this.transformation.transform(s.max, c);
        return new at(h, v)
      }, infinite:!1, wrapLatLng:function(a) {
        var s=this.wrapLng?p(a.lng, this.wrapLng, !0):a.lng, c=this.wrapLat?p(a.lat, this.wrapLat, !0):a.lat, h=a.alt;
        return new pt(c, s, h)
      }, wrapLatLngBounds:function(a) {
        var s=a.getCenter(), c=this.wrapLatLng(s), h=s.lat-c.lat, v=s.lng-c.lng;
        if(h===0&&v===0)return a;
        var x=a.getSouthWest(), R=a.getNorthEast(), N=new pt(x.lat-h, x.lng-v), z=new pt(R.lat-h, R.lng-v);
        return new Vt(N, z)
      }
    }, hi=o( {
    }, zn,  {
      wrapLng:[-180, 180], R:6371e3, distance:function(a, s) {
        var c=Math.PI/180, h=a.lat*c, v=s.lat*c, x=Math.sin((s.lat-a.lat)*c/2), R=Math.sin((s.lng-a.lng)*c/2), N=x*x+Math.cos(h)*Math.cos(v)*R*R, z=2*Math.atan2(Math.sqrt(N), Math.sqrt(1-N));
        return this.R*z
      }
    }), gp=6378137, uc= {
      R:gp, MAX_LATITUDE:85.0511287798, project:function(a) {
        var s=Math.PI/180, c=this.MAX_LATITUDE, h=Math.max(Math.min(c, a.lat), -c), v=Math.sin(h*s);
        return new U(this.R*a.lng*s, this.R*Math.log((1+v)/(1-v))/2)
      }, unproject:function(a) {
        var s=180/Math.PI;
        return new pt((2*Math.atan(Math.exp(a.y/this.R))-Math.PI/2)*s, a.x*s/this.R)
      }, bounds:function() {
        var a=gp*Math.PI;
        return new at([-a, -a], [a, a])
      }()
    };
    function cc(a, s, c, h) {
      if(S(a)) {
        this._a=a[0], this._b=a[1], this._c=a[2], this._d=a[3];
        return
      }this._a=a, this._b=s, this._c=c, this._d=h
    }cc.prototype= {
      transform:function(a, s) {
        return this._transform(a.clone(), s)
      }, _transform:function(a, s) {
        return s=s||1, a.x=s*(this._a*a.x+this._b), a.y=s*(this._c*a.y+this._d), a
      }, untransform:function(a, s) {
        return s=s||1, new U((a.x/s-this._b)/this._a, (a.y/s-this._d)/this._c)
      }
    };
    function Xo(a, s, c, h) {
      return new cc(a, s, c, h)
    }var fc=o( {
    }, hi,  {
      code:"EPSG:3857", projection:uc, transformation:function() {
        var a=.5/(Math.PI*uc.R);
        return Xo(a, .5, -a, .5)
      }()
    }), FS=o( {
    }, fc,  {
      code:"EPSG:900913"
    });
    function vp(a) {
      return document.createElementNS("http://www.w3.org/2000/svg", a)
    }function yp(a, s) {
      var c="", h, v, x, R, N, z;
      for(h=0, x=a.length;
      h<x;
      h++) {
        for(N=a[h], v=0, R=N.length;
        v<R;
        v++)z=N[v], c+=(v?"L":"M")+z.x+" "+z.y;
        c+=s?K.svg?"z":"x":""
      }return c||"M0 0"
    }var dc=document.documentElement.style, Ps="ActiveXObject"in window, XS=Ps&&!document.addEventListener, _p="msLaunchUri"in navigator&&!("documentMode"in document), hc=bn("webkit"), bp=bn("android"), xp=bn("android 2")||bn("android 3"), KS=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), QS=bp&&bn("Google")&&KS<537&&!("AudioNode"in window), mc=!!window.opera, Tp=!_p&&bn("chrome"), Sp=bn("gecko")&&!hc&&!mc&&!Ps, $S=!Tp&&bn("safari"), wp=bn("phantom"), Ep="OTransition"in dc, WS=navigator.platform.indexOf("Win")===0, Cp=Ps&&"transition"in dc, pc="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!xp, Ap="MozPerspective"in dc, JS=!window.L_DISABLE_3D&&(Cp||pc||Ap)&&!Ep&&!wp, Ko=typeof orientation<"u"||bn("mobile"), tw=Ko&&hc, ew=Ko&&pc, Mp=!window.PointerEvent&&window.MSPointerEvent, Lp=!!(window.PointerEvent||Mp), Rp="ontouchstart"in window||!!window.TouchEvent, nw=!window.L_NO_TOUCH&&(Rp||Lp), iw=Ko&&mc, aw=Ko&&Sp, ow=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1, rw=function() {
      var a=!1;
      try {
        var s=Object.defineProperty( {
        }, "passive",  {
          get:function() {
            a=!0
          }
        });
        window.addEventListener("testPassiveEventSupport", m, s), window.removeEventListener("testPassiveEventSupport", m, s)
      }catch {
      }return a
    }(), sw=function() {
      return!!document.createElement("canvas").getContext
    }(), gc=!!(document.createElementNS&&vp("svg").createSVGRect), lw=!!gc&&function() {
      var a=document.createElement("div");
      return a.innerHTML="<svg/>", (a.firstChild&&a.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"
    }(), uw=!gc&&function() {
      try {
        var a=document.createElement("div");
        a.innerHTML='<v:shape adj="1"/>';
        var s=a.firstChild;
        return s.style.behavior="url(#default#VML)", s&&typeof s.adj=="object"
      }catch {
        return!1
      }
    }(), cw=navigator.platform.indexOf("Mac")===0, fw=navigator.platform.indexOf("Linux")===0;
    function bn(a) {
      return navigator.userAgent.toLowerCase().indexOf(a)>=0
    }var K= {
      ie:Ps, ielt9:XS, edge:_p, webkit:hc, android:bp, android23:xp, androidStock:QS, opera:mc, chrome:Tp, gecko:Sp, safari:$S, phantom:wp, opera12:Ep, win:WS, ie3d:Cp, webkit3d:pc, gecko3d:Ap, any3d:JS, mobile:Ko, mobileWebkit:tw, mobileWebkit3d:ew, msPointer:Mp, pointer:Lp, touch:nw, touchNative:Rp, mobileOpera:iw, mobileGecko:aw, retina:ow, passiveEvents:rw, canvas:sw, svg:gc, vml:uw, inlineSvg:lw, mac:cw, linux:fw
    }, Op=K.msPointer?"MSPointerDown":"pointerdown", Np=K.msPointer?"MSPointerMove":"pointermove", zp=K.msPointer?"MSPointerUp":"pointerup", Dp=K.msPointer?"MSPointerCancel":"pointercancel", vc= {
      touchstart:Op, touchmove:Np, touchend:zp, touchcancel:Dp
    }, Pp= {
      touchstart:vw, touchmove:js, touchend:js, touchcancel:js
    }, Oa= {
    }, jp=!1;
    function dw(a, s, c) {
      return s==="touchstart"&&gw(), Pp[s]?(c=Pp[s].bind(this, c), a.addEventListener(vc[s], c, !1), c):(console.warn("wrong event specified:", s), m)
    }function hw(a, s, c) {
      if(!vc[s]) {
        console.warn("wrong event specified:", s);
        return
      }a.removeEventListener(vc[s], c, !1)
    }function mw(a) {
      Oa[a.pointerId]=a
    }function pw(a) {
      Oa[a.pointerId]&&(Oa[a.pointerId]=a)
    }function Bp(a) {
      delete Oa[a.pointerId]
    }function gw() {
      jp||(document.addEventListener(Op, mw, !0), document.addEventListener(Np, pw, !0), document.addEventListener(zp, Bp, !0), document.addEventListener(Dp, Bp, !0), jp=!0)
    }function js(a, s) {
      if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")) {
        s.touches=[];
        for(var c in Oa)s.touches.push(Oa[c]);
        s.changedTouches=[s], a(s)
      }
    }function vw(a, s) {
      s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&ue(s), js(a, s)
    }function yw(a) {
      var s= {
      }, c, h;
      for(h in a)c=a[h], s[h]=c&&c.bind?c.bind(a):c;
      return a=s, s.type="dblclick", s.detail=2, s.isTrusted=!1, s._simulated=!0, s
    }var _w=200;
    function bw(a, s) {
      a.addEventListener("dblclick", s);
      var c=0, h;
      function v(x) {
        if(x.detail!==1) {
          h=x.detail;
          return
        }if(!(x.pointerType==="mouse"||x.sourceCapabilities&&!x.sourceCapabilities.firesTouchEvents)) {
          var R=Zp(x);
          if(!(R.some(function(z) {
            return z instanceof HTMLLabelElement&&z.attributes.for
          })&&!R.some(function(z) {
            return z instanceof HTMLInputElement||z instanceof HTMLSelectElement
          }))) {
            var N=Date.now();
            N-c<=_w?(h++, h===2&&s(yw(x))):h=1, c=N
          }
        }
      }return a.addEventListener("click", v),  {
        dblclick:s, simDblclick:v
      }
    }function xw(a, s) {
      a.removeEventListener("dblclick", s.dblclick), a.removeEventListener("click", s.simDblclick)
    }var yc=Vs(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), Qo=Vs(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), kp=Qo==="webkitTransition"||Qo==="OTransition"?Qo+"End":"transitionend";
    function Vp(a) {
      return typeof a=="string"?document.getElementById(a):a
    }function $o(a, s) {
      var c=a.style[s]||a.currentStyle&&a.currentStyle[s];
      if((!c||c==="auto")&&document.defaultView) {
        var h=document.defaultView.getComputedStyle(a, null);
        c=h?h[s]:null
      }return c==="auto"?null:c
    }function gt(a, s, c) {
      var h=document.createElement(a);
      return h.className=s||"", c&&c.appendChild(h), h
    }function Ut(a) {
      var s=a.parentNode;
      s&&s.removeChild(a)
    }function Bs(a) {
      for(;
      a.firstChild;
      )a.removeChild(a.firstChild)
    }function Na(a) {
      var s=a.parentNode;
      s&&s.lastChild!==a&&s.appendChild(a)
    }function za(a) {
      var s=a.parentNode;
      s&&s.firstChild!==a&&s.insertBefore(a, s.firstChild)
    }function _c(a, s) {
      if(a.classList!==void 0)return a.classList.contains(s);
      var c=ks(a);
      return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)
    }function ot(a, s) {
      if(a.classList!==void 0)for(var c=C(s), h=0, v=c.length;
      h<v;
      h++)a.classList.add(c[h]);
      else if(!_c(a, s)) {
        var x=ks(a);
        bc(a, (x?x+" ":"")+s)
      }
    }function Ft(a, s) {
      a.classList!==void 0?a.classList.remove(s):bc(a, y((" "+ks(a)+" ").replace(" "+s+" ", " ")))
    }function bc(a, s) {
      a.className.baseVal===void 0?a.className=s:a.className.baseVal=s
    }function ks(a) {
      return a.correspondingElement&&(a=a.correspondingElement), a.className.baseVal===void 0?a.className:a.className.baseVal
    }function Fe(a, s) {
      "opacity"in a.style?a.style.opacity=s:"filter"in a.style&&Tw(a, s)
    }function Tw(a, s) {
      var c=!1, h="DXImageTransform.Microsoft.Alpha";
      try {
        c=a.filters.item(h)
      }catch {
        if(s===1)return
      }s=Math.round(s*100), c?(c.Enabled=s!==100, c.Opacity=s):a.style.filter+=" progid:"+h+"(opacity="+s+")"
    }function Vs(a) {
      for(var s=document.documentElement.style, c=0;
      c<a.length;
      c++)if(a[c]in s)return a[c];
      return!1
    }function $i(a, s, c) {
      var h=s||new U(0, 0);
      a.style[yc]=(K.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")
    }function $t(a, s) {
      a._leaflet_pos=s, K.any3d?$i(a, s):(a.style.left=s.x+"px", a.style.top=s.y+"px")
    }function Wi(a) {
      return a._leaflet_pos||new U(0, 0)
    }var Wo, Jo, xc;
    if("onselectstart"in document)Wo=function() {
      et(window, "selectstart", ue)
    }, Jo=function() {
      Ct(window, "selectstart", ue)
    };
    else {
      var tr=Vs(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
      Wo=function() {
        if(tr) {
          var a=document.documentElement.style;
          xc=a[tr], a[tr]="none"
        }
      }, Jo=function() {
        tr&&(document.documentElement.style[tr]=xc, xc=void 0)
      }
    }function Tc() {
      et(window, "dragstart", ue)
    }function Sc() {
      Ct(window, "dragstart", ue)
    }var Us, wc;
    function Ec(a) {
      for(;
      a.tabIndex===-1;
      )a=a.parentNode;
      a.style&&(Hs(), Us=a, wc=a.style.outlineStyle, a.style.outlineStyle="none", et(window, "keydown", Hs))
    }function Hs() {
      Us&&(Us.style.outlineStyle=wc, Us=void 0, wc=void 0, Ct(window, "keydown", Hs))
    }function Up(a) {
      do a=a.parentNode;
      while((!a.offsetWidth||!a.offsetHeight)&&a!==document.body);
      return a
    }function Cc(a) {
      var s=a.getBoundingClientRect();
      return {
        x:s.width/a.offsetWidth||1, y:s.height/a.offsetHeight||1, boundingClientRect:s
      }
    }var Sw= {
      __proto__:null, TRANSFORM:yc, TRANSITION:Qo, TRANSITION_END:kp, get:Vp, getStyle:$o, create:gt, remove:Ut, empty:Bs, toFront:Na, toBack:za, hasClass:_c, addClass:ot, removeClass:Ft, setClass:bc, getClass:ks, setOpacity:Fe, testProp:Vs, setTransform:$i, setPosition:$t, getPosition:Wi, get disableTextSelection() {
        return Wo
      }, get enableTextSelection() {
        return Jo
      }, disableImageDrag:Tc, enableImageDrag:Sc, preventOutline:Ec, restoreOutline:Hs, getSizedParentNode:Up, getScale:Cc
    };
    function et(a, s, c, h) {
      if(s&&typeof s=="object")for(var v in s)Mc(a, v, s[v], c);
      else {
        s=C(s);
        for(var x=0, R=s.length;
        x<R;
        x++)Mc(a, s[x], c, h)
      }return this
    }var xn="_leaflet_events";
    function Ct(a, s, c, h) {
      if(arguments.length===1)Hp(a), delete a[xn];
      else if(s&&typeof s=="object")for(var v in s)Lc(a, v, s[v], c);
      else if(s=C(s), arguments.length===2)Hp(a, function(N) {
        return M(s, N)!==-1
      });
      else for(var x=0, R=s.length;
      x<R;
      x++)Lc(a, s[x], c, h);
      return this
    }function Hp(a, s) {
      for(var c in a[xn]) {
        var h=c.split(/\d/)[0];
        (!s||s(h))&&Lc(a, h, null, null, c)
      }
    }var Ac= {
      mouseenter:"mouseover", mouseleave:"mouseout", wheel:!("onwheel"in window)&&"mousewheel"
    };
    function Mc(a, s, c, h) {
      var v=s+f(c)+(h?"_"+f(h):"");
      if(a[xn]&&a[xn][v])return this;
      var x=function(N) {
        return c.call(h||a, N||window.event)
      }, R=x;
      !K.touchNative&&K.pointer&&s.indexOf("touch")===0?x=dw(a, s, x):K.touch&&s==="dblclick"?x=bw(a, x):"addEventListener"in a?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?a.addEventListener(Ac[s]||s, x, K.passiveEvents? {
        passive:!1
      }:!1):s==="mouseenter"||s==="mouseleave"?(x=function(N) {
        N=N||window.event, Oc(a, N)&&R(N)
      }, a.addEventListener(Ac[s], x, !1)):a.addEventListener(s, R, !1):a.attachEvent("on"+s, x), a[xn]=a[xn]|| {
      }, a[xn][v]=x
    }function Lc(a, s, c, h, v) {
      v=v||s+f(c)+(h?"_"+f(h):"");
      var x=a[xn]&&a[xn][v];
      if(!x)return this;
      !K.touchNative&&K.pointer&&s.indexOf("touch")===0?hw(a, s, x):K.touch&&s==="dblclick"?xw(a, x):"removeEventListener"in a?a.removeEventListener(Ac[s]||s, x, !1):a.detachEvent("on"+s, x), a[xn][v]=null
    }function Ji(a) {
      return a.stopPropagation?a.stopPropagation():a.originalEvent?a.originalEvent._stopped=!0:a.cancelBubble=!0, this
    }function Rc(a) {
      return Mc(a, "wheel", Ji), this
    }function er(a) {
      return et(a, "mousedown touchstart dblclick contextmenu", Ji), a._leaflet_disable_click=!0, this
    }function ue(a) {
      return a.preventDefault?a.preventDefault():a.returnValue=!1, this
    }function ta(a) {
      return ue(a), Ji(a), this
    }function Zp(a) {
      if(a.composedPath)return a.composedPath();
      for(var s=[], c=a.target;
      c;
      )s.push(c), c=c.parentNode;
      return s
    }function qp(a, s) {
      if(!s)return new U(a.clientX, a.clientY);
      var c=Cc(s), h=c.boundingClientRect;
      return new U((a.clientX-h.left)/c.x-s.clientLeft, (a.clientY-h.top)/c.y-s.clientTop)
    }var ww=K.linux&&K.chrome?window.devicePixelRatio:K.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;
    function Gp(a) {
      return K.edge?a.wheelDeltaY/2:a.deltaY&&a.deltaMode===0?-a.deltaY/ww:a.deltaY&&a.deltaMode===1?-a.deltaY*20:a.deltaY&&a.deltaMode===2?-a.deltaY*60:a.deltaX||a.deltaZ?0:a.wheelDelta?(a.wheelDeltaY||a.wheelDelta)/2:a.detail&&Math.abs(a.detail)<32765?-a.detail*20:a.detail?a.detail/-32765*60:0
    }function Oc(a, s) {
      var c=s.relatedTarget;
      if(!c)return!0;
      try {
        for(;
        c&&c!==a;
        )c=c.parentNode
      }catch {
        return!1
      }return c!==a
    }var Ew= {
      __proto__:null, on:et, off:Ct, stopPropagation:Ji, disableScrollPropagation:Rc, disableClickPropagation:er, preventDefault:ue, stop:ta, getPropagationPath:Zp, getMousePosition:qp, getWheelDelta:Gp, isExternalTarget:Oc, addListener:et, removeListener:Ct
    }, Ip=F.extend( {
      run:function(a, s, c, h) {
        this.stop(), this._el=a, this._inProgress=!0, this._duration=c||.25, this._easeOutPower=1/Math.max(h||.5, .2), this._startPos=Wi(a), this._offset=s.subtract(this._startPos), this._startTime=+new Date, this.fire("start"), this._animate()
      }, stop:function() {
        this._inProgress&&(this._step(!0), this._complete())
      }, _animate:function() {
        this._animId=H(this._animate, this), this._step()
      }, _step:function(a) {
        var s=+new Date-this._startTime, c=this._duration*1e3;
        s<c?this._runFrame(this._easeOut(s/c), a):(this._runFrame(1), this._complete())
      }, _runFrame:function(a, s) {
        var c=this._startPos.add(this._offset.multiplyBy(a));
        s&&c._round(), $t(this._el, c), this.fire("step")
      }, _complete:function() {
        q(this._animId), this._inProgress=!1, this.fire("end")
      }, _easeOut:function(a) {
        return 1-Math.pow(1-a, this._easeOutPower)
      }
    }), mt=F.extend( {
      options: {
        crs:fc, center:void 0, zoom:void 0, minZoom:void 0, maxZoom:void 0, layers:[], maxBounds:void 0, renderer:void 0, zoomAnimation:!0, zoomAnimationThreshold:4, fadeAnimation:!0, markerZoomAnimation:!0, transform3DLimit:8388608, zoomSnap:1, zoomDelta:1, trackResize:!0
      }, initialize:function(a, s) {
        s=E(this, s), this._handlers=[], this._layers= {
        }, this._zoomBoundLayers= {
        }, this._sizeChanged=!0, this._initContainer(a), this._initLayout(), this._onResize=l(this._onResize, this), this._initEvents(), s.maxBounds&&this.setMaxBounds(s.maxBounds), s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)), s.center&&s.zoom!==void 0&&this.setView(ht(s.center), s.zoom,  {
          reset:!0
        }), this.callInitHooks(), this._zoomAnimated=Qo&&K.any3d&&!K.mobileOpera&&this.options.zoomAnimation, this._zoomAnimated&&(this._createAnimProxy(), et(this._proxy, kp, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
      }, setView:function(a, s, c) {
        if(s=s===void 0?this._zoom:this._limitZoom(s), a=this._limitCenter(ht(a), s, this.options.maxBounds), c=c|| {
        }, this._stop(), this._loaded&&!c.reset&&c!==!0) {
          c.animate!==void 0&&(c.zoom=o( {
            animate:c.animate
          }, c.zoom), c.pan=o( {
            animate:c.animate, duration:c.duration
          }, c.pan));
          var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(a, s, c.zoom):this._tryAnimatedPan(a, c.pan);
          if(h)return clearTimeout(this._sizeTimer), this
        }return this._resetView(a, s, c.pan&&c.pan.noMoveStart), this
      }, setZoom:function(a, s) {
        return this._loaded?this.setView(this.getCenter(), a,  {
          zoom:s
        }):(this._zoom=a, this)
      }, zoomIn:function(a, s) {
        return a=a||(K.any3d?this.options.zoomDelta:1), this.setZoom(this._zoom+a, s)
      }, zoomOut:function(a, s) {
        return a=a||(K.any3d?this.options.zoomDelta:1), this.setZoom(this._zoom-a, s)
      }, setZoomAround:function(a, s, c) {
        var h=this.getZoomScale(s), v=this.getSize().divideBy(2), x=a instanceof U?a:this.latLngToContainerPoint(a), R=x.subtract(v).multiplyBy(1-1/h), N=this.containerPointToLatLng(v.add(R));
        return this.setView(N, s,  {
          zoom:c
        })
      }, _getBoundsCenterZoom:function(a, s) {
        s=s|| {
        }, a=a.getBounds?a.getBounds():vt(a);
        var c=G(s.paddingTopLeft||s.padding||[0, 0]), h=G(s.paddingBottomRight||s.padding||[0, 0]), v=this.getBoundsZoom(a, !1, c.add(h));
        if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom, v):v, v===1/0)return {
          center:a.getCenter(), zoom:v
        };
        var x=h.subtract(c).divideBy(2), R=this.project(a.getSouthWest(), v), N=this.project(a.getNorthEast(), v), z=this.unproject(R.add(N).divideBy(2).add(x), v);
        return {
          center:z, zoom:v
        }
      }, fitBounds:function(a, s) {
        if(a=vt(a), !a.isValid())throw new Error("Bounds are not valid.");
        var c=this._getBoundsCenterZoom(a, s);
        return this.setView(c.center, c.zoom, s)
      }, fitWorld:function(a) {
        return this.fitBounds([[-90, -180], [90, 180]], a)
      }, panTo:function(a, s) {
        return this.setView(a, this._zoom,  {
          pan:s
        })
      }, panBy:function(a, s) {
        if(a=G(a).round(), s=s|| {
        }, !a.x&&!a.y)return this.fire("moveend");
        if(s.animate!==!0&&!this.getSize().contains(a))return this._resetView(this.unproject(this.project(this.getCenter()).add(a)), this.getZoom()), this;
        if(this._panAnim||(this._panAnim=new Ip, this._panAnim.on( {
          step:this._onPanTransitionStep, end:this._onPanTransitionEnd
        }, this)), s.noMoveStart||this.fire("movestart"), s.animate!==!1) {
          ot(this._mapPane, "leaflet-pan-anim");
          var c=this._getMapPanePos().subtract(a).round();
          this._panAnim.run(this._mapPane, c, s.duration||.25, s.easeLinearity)
        }else this._rawPanBy(a), this.fire("move").fire("moveend");
        return this
      }, flyTo:function(a, s, c) {
        if(c=c|| {
        }, c.animate===!1||!K.any3d)return this.setView(a, s, c);
        this._stop();
        var h=this.project(this.getCenter()), v=this.project(a), x=this.getSize(), R=this._zoom;
        a=ht(a), s=s===void 0?R:s;
        var N=Math.max(x.x, x.y), z=N*this.getZoomScale(R, s), k=v.distanceTo(h)||1, Y=1.42, $=Y*Y;
        function st(Wt) {
          var Js=Wt?-1:1, hE=Wt?z:N, mE=z*z-N*N+Js*$*$*k*k, pE=2*hE*$*k, Zc=mE/pE, Eg=Math.sqrt(Zc*Zc+1)-Zc, gE=Eg<1e-9?-18:Math.log(Eg);
          return gE
        }function ye(Wt) {
          return(Math.exp(Wt)-Math.exp(-Wt))/2
        }function oe(Wt) {
          return(Math.exp(Wt)+Math.exp(-Wt))/2
        }function Ke(Wt) {
          return ye(Wt)/oe(Wt)
        }var we=st(0);
        function Va(Wt) {
          return N*(oe(we)/oe(we+Y*Wt))
        }function uE(Wt) {
          return N*(oe(we)*Ke(we+Y*Wt)-ye(we))/$
        }function cE(Wt) {
          return 1-Math.pow(1-Wt, 1.5)
        }var fE=Date.now(), Sg=(st(1)-we)/Y, dE=c.duration?1e3*c.duration:1e3*Sg*.8;
        function wg() {
          var Wt=(Date.now()-fE)/dE, Js=cE(Wt)*Sg;
          Wt<=1?(this._flyToFrame=H(wg, this), this._move(this.unproject(h.add(v.subtract(h).multiplyBy(uE(Js)/k)), R), this.getScaleZoom(N/Va(Js), R),  {
            flyTo:!0
          })):this._move(a, s)._moveEnd(!0)
        }return this._moveStart(!0, c.noMoveStart), wg.call(this), this
      }, flyToBounds:function(a, s) {
        var c=this._getBoundsCenterZoom(a, s);
        return this.flyTo(c.center, c.zoom, s)
      }, setMaxBounds:function(a) {
        return a=vt(a), this.listens("moveend", this._panInsideMaxBounds)&&this.off("moveend", this._panInsideMaxBounds), a.isValid()?(this.options.maxBounds=a, this._loaded&&this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)):(this.options.maxBounds=null, this)
      }, setMinZoom:function(a) {
        var s=this.options.minZoom;
        return this.options.minZoom=a, this._loaded&&s!==a&&(this.fire("zoomlevelschange"), this.getZoom()<this.options.minZoom)?this.setZoom(a):this
      }, setMaxZoom:function(a) {
        var s=this.options.maxZoom;
        return this.options.maxZoom=a, this._loaded&&s!==a&&(this.fire("zoomlevelschange"), this.getZoom()>this.options.maxZoom)?this.setZoom(a):this
      }, panInsideBounds:function(a, s) {
        this._enforcingBounds=!0;
        var c=this.getCenter(), h=this._limitCenter(c, this._zoom, vt(a));
        return c.equals(h)||this.panTo(h, s), this._enforcingBounds=!1, this
      }, panInside:function(a, s) {
        s=s|| {
        };
        var c=G(s.paddingTopLeft||s.padding||[0, 0]), h=G(s.paddingBottomRight||s.padding||[0, 0]), v=this.project(this.getCenter()), x=this.project(a), R=this.getPixelBounds(), N=kt([R.min.add(c), R.max.subtract(h)]), z=N.getSize();
        if(!N.contains(x)) {
          this._enforcingBounds=!0;
          var k=x.subtract(N.getCenter()), Y=N.extend(x).getSize().subtract(z);
          v.x+=k.x<0?-Y.x:Y.x, v.y+=k.y<0?-Y.y:Y.y, this.panTo(this.unproject(v), s), this._enforcingBounds=!1
        }return this
      }, invalidateSize:function(a) {
        if(!this._loaded)return this;
        a=o( {
          animate:!1, pan:!0
        }, a===!0? {
          animate:!0
        }:a);
        var s=this.getSize();
        this._sizeChanged=!0, this._lastCenter=null;
        var c=this.getSize(), h=s.divideBy(2).round(), v=c.divideBy(2).round(), x=h.subtract(v);
        return!x.x&&!x.y?this:(a.animate&&a.pan?this.panBy(x):(a.pan&&this._rawPanBy(x), this.fire("move"), a.debounceMoveend?(clearTimeout(this._sizeTimer), this._sizeTimer=setTimeout(l(this.fire, this, "moveend"), 200)):this.fire("moveend")), this.fire("resize",  {
          oldSize:s, newSize:c
        }))
      }, stop:function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap||this.fire("viewreset"), this._stop()
      }, locate:function(a) {
        if(a=this._locateOptions=o( {
          timeout:1e4, watch:!1
        }, a), !("geolocation"in navigator))return this._handleGeolocationError( {
          code:0, message:"Geolocation not supported."
        }), this;
        var s=l(this._handleGeolocationResponse, this), c=l(this._handleGeolocationError, this);
        return a.watch?this._locationWatchId=navigator.geolocation.watchPosition(s, c, a):navigator.geolocation.getCurrentPosition(s, c, a), this
      }, stopLocate:function() {
        return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions&&(this._locateOptions.setView=!1), this
      }, _handleGeolocationError:function(a) {
        if(this._container._leaflet_id) {
          var s=a.code, c=a.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");
          this._locateOptions.setView&&!this._loaded&&this.fitWorld(), this.fire("locationerror",  {
            code:s, message:"Geolocation error: "+c+"."
          })
        }
      }, _handleGeolocationResponse:function(a) {
        if(this._container._leaflet_id) {
          var s=a.coords.latitude, c=a.coords.longitude, h=new pt(s, c), v=h.toBounds(a.coords.accuracy*2), x=this._locateOptions;
          if(x.setView) {
            var R=this.getBoundsZoom(v);
            this.setView(h, x.maxZoom?Math.min(R, x.maxZoom):R)
          }var N= {
            latlng:h, bounds:v, timestamp:a.timestamp
          };
          for(var z in a.coords)typeof a.coords[z]=="number"&&(N[z]=a.coords[z]);
          this.fire("locationfound", N)
        }
      }, addHandler:function(a, s) {
        if(!s)return this;
        var c=this[a]=new s(this);
        return this._handlers.push(c), this.options[a]&&c.enable(), this
      }, remove:function() {
        if(this._initEvents(!0), this.options.maxBounds&&this.off("moveend", this._panInsideMaxBounds), this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId
        }catch {
          this._container._leaflet_id=void 0, this._containerId=void 0
        }this._locationWatchId!==void 0&&this.stopLocate(), this._stop(), Ut(this._mapPane), this._clearControlPos&&this._clearControlPos(), this._resizeRequest&&(q(this._resizeRequest), this._resizeRequest=null), this._clearHandlers(), this._loaded&&this.fire("unload");
        var a;
        for(a in this._layers)this._layers[a].remove();
        for(a in this._panes)Ut(this._panes[a]);
        return this._layers=[], this._panes=[], delete this._mapPane, delete this._renderer, this
      }, createPane:function(a, s) {
        var c="leaflet-pane"+(a?" leaflet-"+a.replace("Pane", "")+"-pane":""), h=gt("div", c, s||this._mapPane);
        return a&&(this._panes[a]=h), h
      }, getCenter:function() {
        return this._checkIfLoaded(), this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())
      }, getZoom:function() {
        return this._zoom
      }, getBounds:function() {
        var a=this.getPixelBounds(), s=this.unproject(a.getBottomLeft()), c=this.unproject(a.getTopRight());
        return new Vt(s, c)
      }, getMinZoom:function() {
        return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom
      }, getMaxZoom:function() {
        return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom
      }, getBoundsZoom:function(a, s, c) {
        a=vt(a), c=G(c||[0, 0]);
        var h=this.getZoom()||0, v=this.getMinZoom(), x=this.getMaxZoom(), R=a.getNorthWest(), N=a.getSouthEast(), z=this.getSize().subtract(c), k=kt(this.project(N, h), this.project(R, h)).getSize(), Y=K.any3d?this.options.zoomSnap:1, $=z.x/k.x, st=z.y/k.y, ye=s?Math.max($, st):Math.min($, st);
        return h=this.getScaleZoom(ye, h), Y&&(h=Math.round(h/(Y/100))*(Y/100), h=s?Math.ceil(h/Y)*Y:Math.floor(h/Y)*Y), Math.max(v, Math.min(x, h))
      }, getSize:function() {
        return(!this._size||this._sizeChanged)&&(this._size=new U(this._container.clientWidth||0, this._container.clientHeight||0), this._sizeChanged=!1), this._size.clone()
      }, getPixelBounds:function(a, s) {
        var c=this._getTopLeftPoint(a, s);
        return new at(c, c.add(this.getSize()))
      }, getPixelOrigin:function() {
        return this._checkIfLoaded(), this._pixelOrigin
      }, getPixelWorldBounds:function(a) {
        return this.options.crs.getProjectedBounds(a===void 0?this.getZoom():a)
      }, getPane:function(a) {
        return typeof a=="string"?this._panes[a]:a
      }, getPanes:function() {
        return this._panes
      }, getContainer:function() {
        return this._container
      }, getZoomScale:function(a, s) {
        var c=this.options.crs;
        return s=s===void 0?this._zoom:s, c.scale(a)/c.scale(s)
      }, getScaleZoom:function(a, s) {
        var c=this.options.crs;
        s=s===void 0?this._zoom:s;
        var h=c.zoom(a*c.scale(s));
        return isNaN(h)?1/0:h
      }, project:function(a, s) {
        return s=s===void 0?this._zoom:s, this.options.crs.latLngToPoint(ht(a), s)
      }, unproject:function(a, s) {
        return s=s===void 0?this._zoom:s, this.options.crs.pointToLatLng(G(a), s)
      }, layerPointToLatLng:function(a) {
        var s=G(a).add(this.getPixelOrigin());
        return this.unproject(s)
      }, latLngToLayerPoint:function(a) {
        var s=this.project(ht(a))._round();
        return s._subtract(this.getPixelOrigin())
      }, wrapLatLng:function(a) {
        return this.options.crs.wrapLatLng(ht(a))
      }, wrapLatLngBounds:function(a) {
        return this.options.crs.wrapLatLngBounds(vt(a))
      }, distance:function(a, s) {
        return this.options.crs.distance(ht(a), ht(s))
      }, containerPointToLayerPoint:function(a) {
        return G(a).subtract(this._getMapPanePos())
      }, layerPointToContainerPoint:function(a) {
        return G(a).add(this._getMapPanePos())
      }, containerPointToLatLng:function(a) {
        var s=this.containerPointToLayerPoint(G(a));
        return this.layerPointToLatLng(s)
      }, latLngToContainerPoint:function(a) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(ht(a)))
      }, mouseEventToContainerPoint:function(a) {
        return qp(a, this._container)
      }, mouseEventToLayerPoint:function(a) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a))
      }, mouseEventToLatLng:function(a) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(a))
      }, _initContainer:function(a) {
        var s=this._container=Vp(a);
        if(s) {
          if(s._leaflet_id)throw new Error("Map container is already initialized.")
        }else throw new Error("Map container not found.");
        et(s, "scroll", this._onScroll, this), this._containerId=f(s)
      }, _initLayout:function() {
        var a=this._container;
        this._fadeAnimated=this.options.fadeAnimation&&K.any3d, ot(a, "leaflet-container"+(K.touch?" leaflet-touch":"")+(K.retina?" leaflet-retina":"")+(K.ielt9?" leaflet-oldie":"")+(K.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));
        var s=$o(a, "position");
        s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(a.style.position="relative"), this._initPanes(), this._initControlPos&&this._initControlPos()
      }, _initPanes:function() {
        var a=this._panes= {
        };
        this._paneRenderers= {
        }, this._mapPane=this.createPane("mapPane", this._container), $t(this._mapPane, new U(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation||(ot(a.markerPane, "leaflet-zoom-hide"), ot(a.shadowPane, "leaflet-zoom-hide"))
      }, _resetView:function(a, s, c) {
        $t(this._mapPane, new U(0, 0));
        var h=!this._loaded;
        this._loaded=!0, s=this._limitZoom(s), this.fire("viewprereset");
        var v=this._zoom!==s;
        this._moveStart(v, c)._move(a, s)._moveEnd(v), this.fire("viewreset"), h&&this.fire("load")
      }, _moveStart:function(a, s) {
        return a&&this.fire("zoomstart"), s||this.fire("movestart"), this
      }, _move:function(a, s, c, h) {
        s===void 0&&(s=this._zoom);
        var v=this._zoom!==s;
        return this._zoom=s, this._lastCenter=a, this._pixelOrigin=this._getNewPixelOrigin(a), h?c&&c.pinch&&this.fire("zoom", c):((v||c&&c.pinch)&&this.fire("zoom", c), this.fire("move", c)), this
      }, _moveEnd:function(a) {
        return a&&this.fire("zoomend"), this.fire("moveend")
      }, _stop:function() {
        return q(this._flyToFrame), this._panAnim&&this._panAnim.stop(), this
      }, _rawPanBy:function(a) {
        $t(this._mapPane, this._getMapPanePos().subtract(a))
      }, _getZoomSpan:function() {
        return this.getMaxZoom()-this.getMinZoom()
      }, _panInsideMaxBounds:function() {
        this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)
      }, _checkIfLoaded:function() {
        if(!this._loaded)throw new Error("Set map center and zoom first.")
      }, _initEvents:function(a) {
        this._targets= {
        }, this._targets[f(this._container)]=this;
        var s=a?Ct:et;
        s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize&&s(window, "resize", this._onResize, this), K.any3d&&this.options.transform3DLimit&&(a?this.off:this.on).call(this, "moveend", this._onMoveEnd)
      }, _onResize:function() {
        q(this._resizeRequest), this._resizeRequest=H(function() {
          this.invalidateSize( {
            debounceMoveend:!0
          })
        }, this)
      }, _onScroll:function() {
        this._container.scrollTop=0, this._container.scrollLeft=0
      }, _onMoveEnd:function() {
        var a=this._getMapPanePos();
        Math.max(Math.abs(a.x), Math.abs(a.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(), this.getZoom())
      }, _findEventTargets:function(a, s) {
        for(var c=[], h, v=s==="mouseout"||s==="mouseover", x=a.target||a.srcElement, R=!1;
        x;
        ) {
          if(h=this._targets[f(x)], h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)) {
            R=!0;
            break
          }if(h&&h.listens(s, !0)&&(v&&!Oc(x, a)||(c.push(h), v))||x===this._container)break;
          x=x.parentNode
        }return!c.length&&!R&&!v&&this.listens(s, !0)&&(c=[this]), c
      }, _isClickDisabled:function(a) {
        for(;
        a&&a!==this._container;
        ) {
          if(a._leaflet_disable_click)return!0;
          a=a.parentNode
        }
      }, _handleDOMEvent:function(a) {
        var s=a.target||a.srcElement;
        if(!(!this._loaded||s._leaflet_disable_events||a.type==="click"&&this._isClickDisabled(s))) {
          var c=a.type;
          c==="mousedown"&&Ec(s), this._fireDOMEvent(a, c)
        }
      }, _mouseEvents:["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent:function(a, s, c) {
        if(a.type==="click") {
          var h=o( {
          }, a);
          h.type="preclick", this._fireDOMEvent(h, h.type, c)
        }var v=this._findEventTargets(a, s);
        if(c) {
          for(var x=[], R=0;
          R<c.length;
          R++)c[R].listens(s, !0)&&x.push(c[R]);
          v=x.concat(v)
        }if(v.length) {
          s==="contextmenu"&&ue(a);
          var N=v[0], z= {
            originalEvent:a
          };
          if(a.type!=="keypress"&&a.type!=="keydown"&&a.type!=="keyup") {
            var k=N.getLatLng&&(!N._radius||N._radius<=10);
            z.containerPoint=k?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(a), z.layerPoint=this.containerPointToLayerPoint(z.containerPoint), z.latlng=k?N.getLatLng():this.layerPointToLatLng(z.layerPoint)
          }for(R=0;
          R<v.length;
          R++)if(v[R].fire(s, z, !0), z.originalEvent._stopped||v[R].options.bubblingMouseEvents===!1&&M(this._mouseEvents, s)!==-1)return
        }
      }, _draggableMoved:function(a) {
        return a=a.dragging&&a.dragging.enabled()?a:this, a.dragging&&a.dragging.moved()||this.boxZoom&&this.boxZoom.moved()
      }, _clearHandlers:function() {
        for(var a=0, s=this._handlers.length;
        a<s;
        a++)this._handlers[a].disable()
      }, whenReady:function(a, s) {
        return this._loaded?a.call(s||this,  {
          target:this
        }):this.on("load", a, s), this
      }, _getMapPanePos:function() {
        return Wi(this._mapPane)||new U(0, 0)
      }, _moved:function() {
        var a=this._getMapPanePos();
        return a&&!a.equals([0, 0])
      }, _getTopLeftPoint:function(a, s) {
        var c=a&&s!==void 0?this._getNewPixelOrigin(a, s):this.getPixelOrigin();
        return c.subtract(this._getMapPanePos())
      }, _getNewPixelOrigin:function(a, s) {
        var c=this.getSize()._divideBy(2);
        return this.project(a, s)._subtract(c)._add(this._getMapPanePos())._round()
      }, _latLngToNewLayerPoint:function(a, s, c) {
        var h=this._getNewPixelOrigin(c, s);
        return this.project(a, s)._subtract(h)
      }, _latLngBoundsToNewLayerBounds:function(a, s, c) {
        var h=this._getNewPixelOrigin(c, s);
        return kt([this.project(a.getSouthWest(), s)._subtract(h), this.project(a.getNorthWest(), s)._subtract(h), this.project(a.getSouthEast(), s)._subtract(h), this.project(a.getNorthEast(), s)._subtract(h)])
      }, _getCenterLayerPoint:function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
      }, _getCenterOffset:function(a) {
        return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint())
      }, _limitCenter:function(a, s, c) {
        if(!c)return a;
        var h=this.project(a, s), v=this.getSize().divideBy(2), x=new at(h.subtract(v), h.add(v)), R=this._getBoundsOffset(x, c, s);
        return Math.abs(R.x)<=1&&Math.abs(R.y)<=1?a:this.unproject(h.add(R), s)
      }, _limitOffset:function(a, s) {
        if(!s)return a;
        var c=this.getPixelBounds(), h=new at(c.min.add(a), c.max.add(a));
        return a.add(this._getBoundsOffset(h, s))
      }, _getBoundsOffset:function(a, s, c) {
        var h=kt(this.project(s.getNorthEast(), c), this.project(s.getSouthWest(), c)), v=h.min.subtract(a.min), x=h.max.subtract(a.max), R=this._rebound(v.x, -x.x), N=this._rebound(v.y, -x.y);
        return new U(R, N)
      }, _rebound:function(a, s) {
        return a+s>0?Math.round(a-s)/2:Math.max(0, Math.ceil(a))-Math.max(0, Math.floor(s))
      }, _limitZoom:function(a) {
        var s=this.getMinZoom(), c=this.getMaxZoom(), h=K.any3d?this.options.zoomSnap:1;
        return h&&(a=Math.round(a/h)*h), Math.max(s, Math.min(c, a))
      }, _onPanTransitionStep:function() {
        this.fire("move")
      }, _onPanTransitionEnd:function() {
        Ft(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
      }, _tryAnimatedPan:function(a, s) {
        var c=this._getCenterOffset(a)._trunc();
        return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c, s), !0)
      }, _createAnimProxy:function() {
        var a=this._proxy=gt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(a), this.on("zoomanim", function(s) {
          var c=yc, h=this._proxy.style[c];
          $i(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
      }, _destroyAnimProxy:function() {
        Ut(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
      }, _animMoveEnd:function() {
        var a=this.getCenter(), s=this.getZoom();
        $i(this._proxy, this.project(a, s), this.getZoomScale(s, 1))
      }, _catchTransitionEnd:function(a) {
        this._animatingZoom&&a.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()
      }, _nothingToAnimate:function() {
        return!this._container.getElementsByClassName("leaflet-zoom-animated").length
      }, _tryAnimatedZoom:function(a, s, c) {
        if(this._animatingZoom)return!0;
        if(c=c|| {
        }, !this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;
        var h=this.getZoomScale(s), v=this._getCenterOffset(a)._divideBy(1-1/h);
        return c.animate!==!0&&!this.getSize().contains(v)?!1:(H(function() {
          this._moveStart(!0, c.noMoveStart||!1)._animateZoom(a, s, !0)
        }, this), !0)
      }, _animateZoom:function(a, s, c, h) {
        this._mapPane&&(c&&(this._animatingZoom=!0, this._animateToCenter=a, this._animateToZoom=s, ot(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim",  {
          center:a, zoom:s, noUpdate:h
        }), this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(l(this._onZoomTransitionEnd, this), 250))
      }, _onZoomTransitionEnd:function() {
        this._animatingZoom&&(this._mapPane&&Ft(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom=!1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent&&this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0))
      }
    });
    function Cw(a, s) {
      return new mt(a, s)
    }var fn=X.extend( {
      options: {
        position:"topright"
      }, initialize:function(a) {
        E(this, a)
      }, getPosition:function() {
        return this.options.position
      }, setPosition:function(a) {
        var s=this._map;
        return s&&s.removeControl(this), this.options.position=a, s&&s.addControl(this), this
      }, getContainer:function() {
        return this._container
      }, addTo:function(a) {
        this.remove(), this._map=a;
        var s=this._container=this.onAdd(a), c=this.getPosition(), h=a._controlCorners[c];
        return ot(s, "leaflet-control"), c.indexOf("bottom")!==-1?h.insertBefore(s, h.firstChild):h.appendChild(s), this._map.on("unload", this.remove, this), this
      }, remove:function() {
        return this._map?(Ut(this._container), this.onRemove&&this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map=null, this):this
      }, _refocusOnMap:function(a) {
        this._map&&a&&a.screenX>0&&a.screenY>0&&this._map.getContainer().focus()
      }
    }), nr=function(a) {
      return new fn(a)
    };
    mt.include( {
      addControl:function(a) {
        return a.addTo(this), this
      }, removeControl:function(a) {
        return a.remove(), this
      }, _initControlPos:function() {
        var a=this._controlCorners= {
        }, s="leaflet-", c=this._controlContainer=gt("div", s+"control-container", this._container);
        function h(v, x) {
          var R=s+v+" "+s+x;
          a[v+x]=gt("div", R, c)
        }h("top", "left"), h("top", "right"), h("bottom", "left"), h("bottom", "right")
      }, _clearControlPos:function() {
        for(var a in this._controlCorners)Ut(this._controlCorners[a]);
        Ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer
      }
    });
    var Yp=fn.extend( {
      options: {
        collapsed:!0, position:"topright", autoZIndex:!0, hideSingleBase:!1, sortLayers:!1, sortFunction:function(a, s, c, h) {
          return c<h?-1:h<c?1:0
        }
      }, initialize:function(a, s, c) {
        E(this, c), this._layerControlInputs=[], this._layers=[], this._lastZIndex=0, this._handlingClick=!1, this._preventClick=!1;
        for(var h in a)this._addLayer(a[h], h);
        for(h in s)this._addLayer(s[h], h, !0)
      }, onAdd:function(a) {
        this._initLayout(), this._update(), this._map=a, a.on("zoomend", this._checkDisabledLayers, this);
        for(var s=0;
        s<this._layers.length;
        s++)this._layers[s].layer.on("add remove", this._onLayerChange, this);
        return this._container
      }, addTo:function(a) {
        return fn.prototype.addTo.call(this, a), this._expandIfNotCollapsed()
      }, onRemove:function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for(var a=0;
        a<this._layers.length;
        a++)this._layers[a].layer.off("add remove", this._onLayerChange, this)
      }, addBaseLayer:function(a, s) {
        return this._addLayer(a, s), this._map?this._update():this
      }, addOverlay:function(a, s) {
        return this._addLayer(a, s, !0), this._map?this._update():this
      }, removeLayer:function(a) {
        a.off("add remove", this._onLayerChange, this);
        var s=this._getLayer(f(a));
        return s&&this._layers.splice(this._layers.indexOf(s), 1), this._map?this._update():this
      }, expand:function() {
        ot(this._container, "leaflet-control-layers-expanded"), this._section.style.height=null;
        var a=this._map.getSize().y-(this._container.offsetTop+50);
        return a<this._section.clientHeight?(ot(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height=a+"px"):Ft(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
      }, collapse:function() {
        return Ft(this._container, "leaflet-control-layers-expanded"), this
      }, _initLayout:function() {
        var a="leaflet-control-layers", s=this._container=gt("div", a), c=this.options.collapsed;
        s.setAttribute("aria-haspopup", !0), er(s), Rc(s);
        var h=this._section=gt("section", a+"-list");
        c&&(this._map.on("click", this.collapse, this), et(s,  {
          mouseenter:this._expandSafely, mouseleave:this.collapse
        }, this));
        var v=this._layersLink=gt("a", a+"-toggle", s);
        v.href="#", v.title="Layers", v.setAttribute("role", "button"), et(v,  {
          keydown:function(x) {
            x.keyCode===13&&this._expandSafely()
          }, click:function(x) {
            ue(x), this._expandSafely()
          }
        }, this), c||this.expand(), this._baseLayersList=gt("div", a+"-base", h), this._separator=gt("div", a+"-separator", h), this._overlaysList=gt("div", a+"-overlays", h), s.appendChild(h)
      }, _getLayer:function(a) {
        for(var s=0;
        s<this._layers.length;
        s++)if(this._layers[s]&&f(this._layers[s].layer)===a)return this._layers[s]
      }, _addLayer:function(a, s, c) {
        this._map&&a.on("add remove", this._onLayerChange, this), this._layers.push( {
          layer:a, name:s, overlay:c
        }), this.options.sortLayers&&this._layers.sort(l(function(h, v) {
          return this.options.sortFunction(h.layer, v.layer, h.name, v.name)
        }, this)), this.options.autoZIndex&&a.setZIndex&&(this._lastZIndex++, a.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
      }, _update:function() {
        if(!this._container)return this;
        Bs(this._baseLayersList), Bs(this._overlaysList), this._layerControlInputs=[];
        var a, s, c, h, v=0;
        for(c=0;
        c<this._layers.length;
        c++)h=this._layers[c], this._addItem(h), s=s||h.overlay, a=a||!h.overlay, v+=h.overlay?0:1;
        return this.options.hideSingleBase&&(a=a&&v>1, this._baseLayersList.style.display=a?"":"none"), this._separator.style.display=s&&a?"":"none", this
      }, _onLayerChange:function(a) {
        this._handlingClick||this._update();
        var s=this._getLayer(f(a.target)), c=s.overlay?a.type==="add"?"overlayadd":"overlayremove":a.type==="add"?"baselayerchange":null;
        c&&this._map.fire(c, s)
      }, _createRadioElement:function(a, s) {
        var c='<input type="radio" class="leaflet-control-layers-selector" name="'+a+'"'+(s?' checked="checked"':"")+"/>", h=document.createElement("div");
        return h.innerHTML=c, h.firstChild
      }, _addItem:function(a) {
        var s=document.createElement("label"), c=this._map.hasLayer(a.layer), h;
        a.overlay?(h=document.createElement("input"), h.type="checkbox", h.className="leaflet-control-layers-selector", h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+f(this), c), this._layerControlInputs.push(h), h.layerId=f(a.layer), et(h, "click", this._onInputClick, this);
        var v=document.createElement("span");
        v.innerHTML=" "+a.name;
        var x=document.createElement("span");
        s.appendChild(x), x.appendChild(h), x.appendChild(v);
        var R=a.overlay?this._overlaysList:this._baseLayersList;
        return R.appendChild(s), this._checkDisabledLayers(), s
      }, _onInputClick:function() {
        if(!this._preventClick) {
          var a=this._layerControlInputs, s, c, h=[], v=[];
          this._handlingClick=!0;
          for(var x=a.length-1;
          x>=0;
          x--)s=a[x], c=this._getLayer(s.layerId).layer, s.checked?h.push(c):s.checked||v.push(c);
          for(x=0;
          x<v.length;
          x++)this._map.hasLayer(v[x])&&this._map.removeLayer(v[x]);
          for(x=0;
          x<h.length;
          x++)this._map.hasLayer(h[x])||this._map.addLayer(h[x]);
          this._handlingClick=!1, this._refocusOnMap()
        }
      }, _checkDisabledLayers:function() {
        for(var a=this._layerControlInputs, s, c, h=this._map.getZoom(), v=a.length-1;
        v>=0;
        v--)s=a[v], c=this._getLayer(s.layerId).layer, s.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom
      }, _expandIfNotCollapsed:function() {
        return this._map&&!this.options.collapsed&&this.expand(), this
      }, _expandSafely:function() {
        var a=this._section;
        this._preventClick=!0, et(a, "click", ue), this.expand();
        var s=this;
        setTimeout(function() {
          Ct(a, "click", ue), s._preventClick=!1
        })
      }
    }), Aw=function(a, s, c) {
      return new Yp(a, s, c)
    }, Nc=fn.extend( {
      options: {
        position:"topleft", zoomInText:'<span aria-hidden="true">+</span>', zoomInTitle:"Zoom in", zoomOutText:'<span aria-hidden="true">&#x2212;</span>', zoomOutTitle:"Zoom out"
      }, onAdd:function(a) {
        var s="leaflet-control-zoom", c=gt("div", s+" leaflet-bar"), h=this.options;
        return this._zoomInButton=this._createButton(h.zoomInText, h.zoomInTitle, s+"-in", c, this._zoomIn), this._zoomOutButton=this._createButton(h.zoomOutText, h.zoomOutTitle, s+"-out", c, this._zoomOut), this._updateDisabled(), a.on("zoomend zoomlevelschange", this._updateDisabled, this), c
      }, onRemove:function(a) {
        a.off("zoomend zoomlevelschange", this._updateDisabled, this)
      }, disable:function() {
        return this._disabled=!0, this._updateDisabled(), this
      }, enable:function() {
        return this._disabled=!1, this._updateDisabled(), this
      }, _zoomIn:function(a) {
        !this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(a.shiftKey?3:1))
      }, _zoomOut:function(a) {
        !this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(a.shiftKey?3:1))
      }, _createButton:function(a, s, c, h, v) {
        var x=gt("a", c, h);
        return x.innerHTML=a, x.href="#", x.title=s, x.setAttribute("role", "button"), x.setAttribute("aria-label", s), er(x), et(x, "click", ta), et(x, "click", v, this), et(x, "click", this._refocusOnMap, this), x
      }, _updateDisabled:function() {
        var a=this._map, s="leaflet-disabled";
        Ft(this._zoomInButton, s), Ft(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled||a._zoom===a.getMinZoom())&&(ot(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled||a._zoom===a.getMaxZoom())&&(ot(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"))
      }
    });
    mt.mergeOptions( {
      zoomControl:!0
    }), mt.addInitHook(function() {
      this.options.zoomControl&&(this.zoomControl=new Nc, this.addControl(this.zoomControl))
    });
    var Mw=function(a) {
      return new Nc(a)
    }, Fp=fn.extend( {
      options: {
        position:"bottomleft", maxWidth:100, metric:!0, imperial:!0
      }, onAdd:function(a) {
        var s="leaflet-control-scale", c=gt("div", s), h=this.options;
        return this._addScales(h, s+"-line", c), a.on(h.updateWhenIdle?"moveend":"move", this._update, this), a.whenReady(this._update, this), c
      }, onRemove:function(a) {
        a.off(this.options.updateWhenIdle?"moveend":"move", this._update, this)
      }, _addScales:function(a, s, c) {
        a.metric&&(this._mScale=gt("div", s, c)), a.imperial&&(this._iScale=gt("div", s, c))
      }, _update:function() {
        var a=this._map, s=a.getSize().y/2, c=a.distance(a.containerPointToLatLng([0, s]), a.containerPointToLatLng([this.options.maxWidth, s]));
        this._updateScales(c)
      }, _updateScales:function(a) {
        this.options.metric&&a&&this._updateMetric(a), this.options.imperial&&a&&this._updateImperial(a)
      }, _updateMetric:function(a) {
        var s=this._getRoundNum(a), c=s<1e3?s+" m":s/1e3+" km";
        this._updateScale(this._mScale, c, s/a)
      }, _updateImperial:function(a) {
        var s=a*3.2808399, c, h, v;
        s>5280?(c=s/5280, h=this._getRoundNum(c), this._updateScale(this._iScale, h+" mi", h/c)):(v=this._getRoundNum(s), this._updateScale(this._iScale, v+" ft", v/s))
      }, _updateScale:function(a, s, c) {
        a.style.width=Math.round(this.options.maxWidth*c)+"px", a.innerHTML=s
      }, _getRoundNum:function(a) {
        var s=Math.pow(10, (Math.floor(a)+"").length-1), c=a/s;
        return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1, s*c
      }
    }), Lw=function(a) {
      return new Fp(a)
    }, Rw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', zc=fn.extend( {
      options: {
        position:"bottomright", prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(K.inlineSvg?Rw+" ":"")+"Leaflet</a>"
      }, initialize:function(a) {
        E(this, a), this._attributions= {
        }
      }, onAdd:function(a) {
        a.attributionControl=this, this._container=gt("div", "leaflet-control-attribution"), er(this._container);
        for(var s in a._layers)a._layers[s].getAttribution&&this.addAttribution(a._layers[s].getAttribution());
        return this._update(), a.on("layeradd", this._addAttribution, this), this._container
      }, onRemove:function(a) {
        a.off("layeradd", this._addAttribution, this)
      }, _addAttribution:function(a) {
        a.layer.getAttribution&&(this.addAttribution(a.layer.getAttribution()), a.layer.once("remove", function() {
          this.removeAttribution(a.layer.getAttribution())
        }, this))
      }, setPrefix:function(a) {
        return this.options.prefix=a, this._update(), this
      }, addAttribution:function(a) {
        return a?(this._attributions[a]||(this._attributions[a]=0), this._attributions[a]++, this._update(), this):this
      }, removeAttribution:function(a) {
        return a?(this._attributions[a]&&(this._attributions[a]--, this._update()), this):this
      }, _update:function() {
        if(this._map) {
          var a=[];
          for(var s in this._attributions)this._attributions[s]&&a.push(s);
          var c=[];
          this.options.prefix&&c.push(this.options.prefix), a.length&&c.push(a.join(", ")), this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')
        }
      }
    });
    mt.mergeOptions( {
      attributionControl:!0
    }), mt.addInitHook(function() {
      this.options.attributionControl&&new zc().addTo(this)
    });
    var Ow=function(a) {
      return new zc(a)
    };
    fn.Layers=Yp, fn.Zoom=Nc, fn.Scale=Fp, fn.Attribution=zc, nr.layers=Aw, nr.zoom=Mw, nr.scale=Lw, nr.attribution=Ow;
    var Tn=X.extend( {
      initialize:function(a) {
        this._map=a
      }, enable:function() {
        return this._enabled?this:(this._enabled=!0, this.addHooks(), this)
      }, disable:function() {
        return this._enabled?(this._enabled=!1, this.removeHooks(), this):this
      }, enabled:function() {
        return!!this._enabled
      }
    });
    Tn.addTo=function(a, s) {
      return a.addHandler(s, this), this
    };
    var Nw= {
      Events:V
    }, Xp=K.touch?"touchstart mousedown":"mousedown", mi=F.extend( {
      options: {
        clickTolerance:3
      }, initialize:function(a, s, c, h) {
        E(this, h), this._element=a, this._dragStartTarget=s||a, this._preventOutline=c
      }, enable:function() {
        this._enabled||(et(this._dragStartTarget, Xp, this._onDown, this), this._enabled=!0)
      }, disable:function() {
        this._enabled&&(mi._dragging===this&&this.finishDrag(!0), Ct(this._dragStartTarget, Xp, this._onDown, this), this._enabled=!1, this._moved=!1)
      }, _onDown:function(a) {
        if(this._enabled&&(this._moved=!1, !_c(this._element, "leaflet-zoom-anim"))) {
          if(a.touches&&a.touches.length!==1) {
            mi._dragging===this&&this.finishDrag();
            return
          }if(!(mi._dragging||a.shiftKey||a.which!==1&&a.button!==1&&!a.touches)&&(mi._dragging=this, this._preventOutline&&Ec(this._element), Tc(), Wo(), !this._moving)) {
            this.fire("down");
            var s=a.touches?a.touches[0]:a, c=Up(this._element);
            this._startPoint=new U(s.clientX, s.clientY), this._startPos=Wi(this._element), this._parentScale=Cc(c);
            var h=a.type==="mousedown";
            et(document, h?"mousemove":"touchmove", this._onMove, this), et(document, h?"mouseup":"touchend touchcancel", this._onUp, this)
          }
        }
      }, _onMove:function(a) {
        if(this._enabled) {
          if(a.touches&&a.touches.length>1) {
            this._moved=!0;
            return
          }var s=a.touches&&a.touches.length===1?a.touches[0]:a, c=new U(s.clientX, s.clientY)._subtract(this._startPoint);
          !c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x, c.y/=this._parentScale.y, ue(a), this._moved||(this.fire("dragstart"), this._moved=!0, ot(document.body, "leaflet-dragging"), this._lastTarget=a.target||a.srcElement, window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement), ot(this._lastTarget, "leaflet-drag-target")), this._newPos=this._startPos.add(c), this._moving=!0, this._lastEvent=a, this._updatePosition())
        }
      }, _updatePosition:function() {
        var a= {
          originalEvent:this._lastEvent
        };
        this.fire("predrag", a), $t(this._element, this._newPos), this.fire("drag", a)
      }, _onUp:function() {
        this._enabled&&this.finishDrag()
      }, finishDrag:function(a) {
        Ft(document.body, "leaflet-dragging"), this._lastTarget&&(Ft(this._lastTarget, "leaflet-drag-target"), this._lastTarget=null), Ct(document, "mousemove touchmove", this._onMove, this), Ct(document, "mouseup touchend touchcancel", this._onUp, this), Sc(), Jo();
        var s=this._moved&&this._moving;
        this._moving=!1, mi._dragging=!1, s&&this.fire("dragend",  {
          noInertia:a, distance:this._newPos.distanceTo(this._startPos)
        })
      }
    });
    function Kp(a, s, c) {
      var h, v=[1, 4, 2, 8], x, R, N, z, k, Y, $, st;
      for(x=0, Y=a.length;
      x<Y;
      x++)a[x]._code=ea(a[x], s);
      for(N=0;
      N<4;
      N++) {
        for($=v[N], h=[], x=0, Y=a.length, R=Y-1;
        x<Y;
        R=x++)z=a[x], k=a[R], z._code&$?k._code&$||(st=Zs(k, z, $, s, c), st._code=ea(st, s), h.push(st)):(k._code&$&&(st=Zs(k, z, $, s, c), st._code=ea(st, s), h.push(st)), h.push(z));
        a=h
      }return a
    }function Qp(a, s) {
      var c, h, v, x, R, N, z, k, Y;
      if(!a||a.length===0)throw new Error("latlngs not passed");
      Xe(a)||(console.warn("latlngs are not flat! Only the first ring will be used"), a=a[0]);
      var $=ht([0, 0]), st=vt(a), ye=st.getNorthWest().distanceTo(st.getSouthWest())*st.getNorthEast().distanceTo(st.getNorthWest());
      ye<1700&&($=Dc(a));
      var oe=a.length, Ke=[];
      for(c=0;
      c<oe;
      c++) {
        var we=ht(a[c]);
        Ke.push(s.project(ht([we.lat-$.lat, we.lng-$.lng])))
      }for(N=z=k=0, c=0, h=oe-1;
      c<oe;
      h=c++)v=Ke[c], x=Ke[h], R=v.y*x.x-x.y*v.x, z+=(v.x+x.x)*R, k+=(v.y+x.y)*R, N+=R*3;
      N===0?Y=Ke[0]:Y=[z/N, k/N];
      var Va=s.unproject(G(Y));
      return ht([Va.lat+$.lat, Va.lng+$.lng])
    }function Dc(a) {
      for(var s=0, c=0, h=0, v=0;
      v<a.length;
      v++) {
        var x=ht(a[v]);
        s+=x.lat, c+=x.lng, h++
      }return ht([s/h, c/h])
    }var zw= {
      __proto__:null, clipPolygon:Kp, polygonCenter:Qp, centroid:Dc
    };
    function $p(a, s) {
      if(!s||!a.length)return a.slice();
      var c=s*s;
      return a=jw(a, c), a=Pw(a, c), a
    }function Wp(a, s, c) {
      return Math.sqrt(ir(a, s, c, !0))
    }function Dw(a, s, c) {
      return ir(a, s, c)
    }function Pw(a, s) {
      var c=a.length, h=typeof Uint8Array!=void 0+""?Uint8Array:Array, v=new h(c);
      v[0]=v[c-1]=1, Pc(a, v, s, 0, c-1);
      var x, R=[];
      for(x=0;
      x<c;
      x++)v[x]&&R.push(a[x]);
      return R
    }function Pc(a, s, c, h, v) {
      var x=0, R, N, z;
      for(N=h+1;
      N<=v-1;
      N++)z=ir(a[N], a[h], a[v], !0), z>x&&(R=N, x=z);
      x>c&&(s[R]=1, Pc(a, s, c, h, R), Pc(a, s, c, R, v))
    }function jw(a, s) {
      for(var c=[a[0]], h=1, v=0, x=a.length;
      h<x;
      h++)Bw(a[h], a[v])>s&&(c.push(a[h]), v=h);
      return v<x-1&&c.push(a[x-1]), c
    }var Jp;
    function tg(a, s, c, h, v) {
      var x=h?Jp:ea(a, c), R=ea(s, c), N, z, k;
      for(Jp=R;
      ) {
        if(!(x|R))return[a, s];
        if(x&R)return!1;
        N=x||R, z=Zs(a, s, N, c, v), k=ea(z, c), N===x?(a=z, x=k):(s=z, R=k)
      }
    }function Zs(a, s, c, h, v) {
      var x=s.x-a.x, R=s.y-a.y, N=h.min, z=h.max, k, Y;
      return c&8?(k=a.x+x*(z.y-a.y)/R, Y=z.y):c&4?(k=a.x+x*(N.y-a.y)/R, Y=N.y):c&2?(k=z.x, Y=a.y+R*(z.x-a.x)/x):c&1&&(k=N.x, Y=a.y+R*(N.x-a.x)/x), new U(k, Y, v)
    }function ea(a, s) {
      var c=0;
      return a.x<s.min.x?c|=1:a.x>s.max.x&&(c|=2), a.y<s.min.y?c|=4:a.y>s.max.y&&(c|=8), c
    }function Bw(a, s) {
      var c=s.x-a.x, h=s.y-a.y;
      return c*c+h*h
    }function ir(a, s, c, h) {
      var v=s.x, x=s.y, R=c.x-v, N=c.y-x, z=R*R+N*N, k;
      return z>0&&(k=((a.x-v)*R+(a.y-x)*N)/z, k>1?(v=c.x, x=c.y):k>0&&(v+=R*k, x+=N*k)), R=a.x-v, N=a.y-x, h?R*R+N*N:new U(v, x)
    }function Xe(a) {
      return!S(a[0])||typeof a[0][0]!="object"&&typeof a[0][0]<"u"
    }function eg(a) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Xe(a)
    }function ng(a, s) {
      var c, h, v, x, R, N, z, k;
      if(!a||a.length===0)throw new Error("latlngs not passed");
      Xe(a)||(console.warn("latlngs are not flat! Only the first ring will be used"), a=a[0]);
      var Y=ht([0, 0]), $=vt(a), st=$.getNorthWest().distanceTo($.getSouthWest())*$.getNorthEast().distanceTo($.getNorthWest());
      st<1700&&(Y=Dc(a));
      var ye=a.length, oe=[];
      for(c=0;
      c<ye;
      c++) {
        var Ke=ht(a[c]);
        oe.push(s.project(ht([Ke.lat-Y.lat, Ke.lng-Y.lng])))
      }for(c=0, h=0;
      c<ye-1;
      c++)h+=oe[c].distanceTo(oe[c+1])/2;
      if(h===0)k=oe[0];
      else for(c=0, x=0;
      c<ye-1;
      c++)if(R=oe[c], N=oe[c+1], v=R.distanceTo(N), x+=v, x>h) {
        z=(x-h)/v, k=[N.x-z*(N.x-R.x), N.y-z*(N.y-R.y)];
        break
      }var we=s.unproject(G(k));
      return ht([we.lat+Y.lat, we.lng+Y.lng])
    }var kw= {
      __proto__:null, simplify:$p, pointToSegmentDistance:Wp, closestPointOnSegment:Dw, clipSegment:tg, _getEdgeIntersection:Zs, _getBitCode:ea, _sqClosestPointOnSegment:ir, isFlat:Xe, _flat:eg, polylineCenter:ng
    }, jc= {
      project:function(a) {
        return new U(a.lng, a.lat)
      }, unproject:function(a) {
        return new pt(a.y, a.x)
      }, bounds:new at([-180, -90], [180, 90])
    }, Bc= {
      R:6378137, R_MINOR:6356752314245179e-9, bounds:new at([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project:function(a) {
        var s=Math.PI/180, c=this.R, h=a.lat*s, v=this.R_MINOR/c, x=Math.sqrt(1-v*v), R=x*Math.sin(h), N=Math.tan(Math.PI/4-h/2)/Math.pow((1-R)/(1+R), x/2);
        return h=-c*Math.log(Math.max(N, 1e-10)), new U(a.lng*s*c, h)
      }, unproject:function(a) {
        for(var s=180/Math.PI, c=this.R, h=this.R_MINOR/c, v=Math.sqrt(1-h*h), x=Math.exp(-a.y/c), R=Math.PI/2-2*Math.atan(x), N=0, z=.1, k;
        N<15&&Math.abs(z)>1e-7;
        N++)k=v*Math.sin(R), k=Math.pow((1-k)/(1+k), v/2), z=Math.PI/2-2*Math.atan(x*k)-R, R+=z;
        return new pt(R*s, a.x*s/c)
      }
    }, Vw= {
      __proto__:null, LonLat:jc, Mercator:Bc, SphericalMercator:uc
    }, Uw=o( {
    }, hi,  {
      code:"EPSG:3395", projection:Bc, transformation:function() {
        var a=.5/(Math.PI*Bc.R);
        return Xo(a, .5, -a, .5)
      }()
    }), ig=o( {
    }, hi,  {
      code:"EPSG:4326", projection:jc, transformation:Xo(1/180, 1, -1/180, .5)
    }), Hw=o( {
    }, zn,  {
      projection:jc, transformation:Xo(1, 0, -1, 0), scale:function(a) {
        return Math.pow(2, a)
      }, zoom:function(a) {
        return Math.log(a)/Math.LN2
      }, distance:function(a, s) {
        var c=s.lng-a.lng, h=s.lat-a.lat;
        return Math.sqrt(c*c+h*h)
      }, infinite:!0
    });
    zn.Earth=hi, zn.EPSG3395=Uw, zn.EPSG3857=fc, zn.EPSG900913=FS, zn.EPSG4326=ig, zn.Simple=Hw;
    var dn=F.extend( {
      options: {
        pane:"overlayPane", attribution:null, bubblingMouseEvents:!0
      }, addTo:function(a) {
        return a.addLayer(this), this
      }, remove:function() {
        return this.removeFrom(this._map||this._mapToAdd)
      }, removeFrom:function(a) {
        return a&&a.removeLayer(this), this
      }, getPane:function(a) {
        return this._map.getPane(a?this.options[a]||a:this.options.pane)
      }, addInteractiveTarget:function(a) {
        return this._map._targets[f(a)]=this, this
      }, removeInteractiveTarget:function(a) {
        return delete this._map._targets[f(a)], this
      }, getAttribution:function() {
        return this.options.attribution
      }, _layerAdd:function(a) {
        var s=a.target;
        if(s.hasLayer(this)) {
          if(this._map=s, this._zoomAnimated=s._zoomAnimated, this.getEvents) {
            var c=this.getEvents();
            s.on(c, this), this.once("remove", function() {
              s.off(c, this)
            }, this)
          }this.onAdd(s), this.fire("add"), s.fire("layeradd",  {
            layer:this
          })
        }
      }
    });
    mt.include( {
      addLayer:function(a) {
        if(!a._layerAdd)throw new Error("The provided object is not a Layer.");
        var s=f(a);
        return this._layers[s]?this:(this._layers[s]=a, a._mapToAdd=this, a.beforeAdd&&a.beforeAdd(this), this.whenReady(a._layerAdd, a), this)
      }, removeLayer:function(a) {
        var s=f(a);
        return this._layers[s]?(this._loaded&&a.onRemove(this), delete this._layers[s], this._loaded&&(this.fire("layerremove",  {
          layer:a
        }), a.fire("remove")), a._map=a._mapToAdd=null, this):this
      }, hasLayer:function(a) {
        return f(a)in this._layers
      }, eachLayer:function(a, s) {
        for(var c in this._layers)a.call(s, this._layers[c]);
        return this
      }, _addLayers:function(a) {
        a=a?S(a)?a:[a]:[];
        for(var s=0, c=a.length;
        s<c;
        s++)this.addLayer(a[s])
      }, _addZoomLimit:function(a) {
        (!isNaN(a.options.maxZoom)||!isNaN(a.options.minZoom))&&(this._zoomBoundLayers[f(a)]=a, this._updateZoomLevels())
      }, _removeZoomLimit:function(a) {
        var s=f(a);
        this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s], this._updateZoomLevels())
      }, _updateZoomLevels:function() {
        var a=1/0, s=-1/0, c=this._getZoomSpan();
        for(var h in this._zoomBoundLayers) {
          var v=this._zoomBoundLayers[h].options;
          a=v.minZoom===void 0?a:Math.min(a, v.minZoom), s=v.maxZoom===void 0?s:Math.max(s, v.maxZoom)
        }this._layersMaxZoom=s===-1/0?void 0:s, this._layersMinZoom=a===1/0?void 0:a, c!==this._getZoomSpan()&&this.fire("zoomlevelschange"), this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom), this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)
      }
    });
    var Da=dn.extend( {
      initialize:function(a, s) {
        E(this, s), this._layers= {
        };
        var c, h;
        if(a)for(c=0, h=a.length;
        c<h;
        c++)this.addLayer(a[c])
      }, addLayer:function(a) {
        var s=this.getLayerId(a);
        return this._layers[s]=a, this._map&&this._map.addLayer(a), this
      }, removeLayer:function(a) {
        var s=a in this._layers?a:this.getLayerId(a);
        return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]), delete this._layers[s], this
      }, hasLayer:function(a) {
        var s=typeof a=="number"?a:this.getLayerId(a);
        return s in this._layers
      }, clearLayers:function() {
        return this.eachLayer(this.removeLayer, this)
      }, invoke:function(a) {
        var s=Array.prototype.slice.call(arguments, 1), c, h;
        for(c in this._layers)h=this._layers[c], h[a]&&h[a].apply(h, s);
        return this
      }, onAdd:function(a) {
        this.eachLayer(a.addLayer, a)
      }, onRemove:function(a) {
        this.eachLayer(a.removeLayer, a)
      }, eachLayer:function(a, s) {
        for(var c in this._layers)a.call(s, this._layers[c]);
        return this
      }, getLayer:function(a) {
        return this._layers[a]
      }, getLayers:function() {
        var a=[];
        return this.eachLayer(a.push, a), a
      }, setZIndex:function(a) {
        return this.invoke("setZIndex", a)
      }, getLayerId:function(a) {
        return f(a)
      }
    }), Zw=function(a, s) {
      return new Da(a, s)
    }, Dn=Da.extend( {
      addLayer:function(a) {
        return this.hasLayer(a)?this:(a.addEventParent(this), Da.prototype.addLayer.call(this, a), this.fire("layeradd",  {
          layer:a
        }))
      }, removeLayer:function(a) {
        return this.hasLayer(a)?(a in this._layers&&(a=this._layers[a]), a.removeEventParent(this), Da.prototype.removeLayer.call(this, a), this.fire("layerremove",  {
          layer:a
        })):this
      }, setStyle:function(a) {
        return this.invoke("setStyle", a)
      }, bringToFront:function() {
        return this.invoke("bringToFront")
      }, bringToBack:function() {
        return this.invoke("bringToBack")
      }, getBounds:function() {
        var a=new Vt;
        for(var s in this._layers) {
          var c=this._layers[s];
          a.extend(c.getBounds?c.getBounds():c.getLatLng())
        }return a
      }
    }), qw=function(a, s) {
      return new Dn(a, s)
    }, Pa=X.extend( {
      options: {
        popupAnchor:[0, 0], tooltipAnchor:[0, 0], crossOrigin:!1
      }, initialize:function(a) {
        E(this, a)
      }, createIcon:function(a) {
        return this._createIcon("icon", a)
      }, createShadow:function(a) {
        return this._createIcon("shadow", a)
      }, _createIcon:function(a, s) {
        var c=this._getIconUrl(a);
        if(!c) {
          if(a==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");
          return null
        }var h=this._createImg(c, s&&s.tagName==="IMG"?s:null);
        return this._setIconStyles(h, a), (this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin), h
      }, _setIconStyles:function(a, s) {
        var c=this.options, h=c[s+"Size"];
        typeof h=="number"&&(h=[h, h]);
        var v=G(h), x=G(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2, !0));
        a.className="leaflet-marker-"+s+" "+(c.className||""), x&&(a.style.marginLeft=-x.x+"px", a.style.marginTop=-x.y+"px"), v&&(a.style.width=v.x+"px", a.style.height=v.y+"px")
      }, _createImg:function(a, s) {
        return s=s||document.createElement("img"), s.src=a, s
      }, _getIconUrl:function(a) {
        return K.retina&&this.options[a+"RetinaUrl"]||this.options[a+"Url"]
      }
    });
    function Gw(a) {
      return new Pa(a)
    }var ar=Pa.extend( {
      options: {
        iconUrl:"marker-icon.png", iconRetinaUrl:"marker-icon-2x.png", shadowUrl:"marker-shadow.png", iconSize:[25, 41], iconAnchor:[12, 41], popupAnchor:[1, -34], tooltipAnchor:[16, -28], shadowSize:[41, 41]
      }, _getIconUrl:function(a) {
        return typeof ar.imagePath!="string"&&(ar.imagePath=this._detectIconPath()), (this.options.imagePath||ar.imagePath)+Pa.prototype._getIconUrl.call(this, a)
      }, _stripUrl:function(a) {
        var s=function(c, h, v) {
          var x=h.exec(c);
          return x&&x[v]
        };
        return a=s(a, /^url\((['"])?(.+)\1\)$/,2),a&&s(a,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var a=gt("div","leaflet-default-icon-path",document.body),s=$o(a,"background-image")||$o(a,"backgroundImage");if(document.body.removeChild(a),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),ag=Tn.extend({initialize:function(a){this._marker=a},addHooks:function(){var a=this._marker._icon;this._draggable||(this._draggable=new mi(a,a,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ot(a,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ft(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(a){var s=this._marker,c=s._map,h=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,x=Wi(s._icon),R=c.getPixelBounds(),N=c.getPixelOrigin(),z=kt(R.min._subtract(N).add(v),R.max._subtract(N).subtract(v));if(!z.contains(x)){var k=G((Math.max(z.max.x,x.x)-z.max.x)/(R.max.x-z.max.x)-(Math.min(z.min.x,x.x)-z.min.x)/(R.min.x-z.min.x),(Math.max(z.max.y,x.y)-z.max.y)/(R.max.y-z.max.y)-(Math.min(z.min.y,x.y)-z.min.y)/(R.min.y-z.min.y)).multiplyBy(h);c.panBy(k,{animate:!1}),this._draggable._newPos._add(k),this._draggable._startPos._add(k),$t(s._icon,this._draggable._newPos),this._onDrag(a),this._panRequest=H(this._adjustPan.bind(this,a))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(a){this._marker.options.autoPan&&(q(this._panRequest),this._panRequest=H(this._adjustPan.bind(this,a)))},_onDrag:function(a){var s=this._marker,c=s._shadow,h=Wi(s._icon),v=s._map.layerPointToLatLng(h);c&&$t(c,h),s._latlng=v,a.latlng=v,a.oldLatLng=this._oldLatLng,s.fire("move",a).fire("drag",a)},_onDragEnd:function(a){q(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",a)}}),qs=dn.extend({options:{icon:new ar,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(a,s){E(this,s),this._latlng=ht(a)},onAdd:function(a){this._zoomAnimated=this._zoomAnimated&&a.options.markerZoomAnimation,this._zoomAnimated&&a.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(a){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&a.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(a){var s=this._latlng;return this._latlng=ht(a),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(a){return this.options.zIndexOffset=a,this.update()},getIcon:function(){return this.options.icon},setIcon:function(a){return this.options.icon=a,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var a=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(a)}return this},_initIcon:function(){var a=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=a.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,a.title&&(c.title=a.title),c.tagName==="IMG"&&(c.alt=a.alt||"")),ot(c,s),a.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,a.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&et(c,"focus",this._panOnFocus,this);var v=a.icon.createShadow(this._shadow),x=!1;v!==this._shadow&&(this._removeShadow(),x=!0),v&&(ot(v,s),v.alt=""),this._shadow=v,a.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&x&&this.getPane(a.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ct(this._icon,"focus",this._panOnFocus,this),Ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ut(this._shadow),this._shadow=null},_setPos:function(a){this._icon&&$t(this._icon,a),this._shadow&&$t(this._shadow,a),this._zIndex=a.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(a){this._icon&&(this._icon.style.zIndex=this._zIndex+a)},_animateZoom:function(a){var s=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(ot(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ag)){var a=this.options.draggable;this.dragging&&(a=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ag(this),a&&this.dragging.enable()}},setOpacity:function(a){return this.options.opacity=a,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var a=this.options.opacity;this._icon&&Fe(this._icon,a),this._shadow&&Fe(this._shadow,a)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var a=this._map;if(a){var s=this.options.icon.options,c=s.iconSize?G(s.iconSize):G(0,0),h=s.iconAnchor?G(s.iconAnchor):G(0,0);a.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Iw(a,s){return new qs(a,s)}var pi=dn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(a){this._renderer=a.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(a){return E(this,a),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&a&&Object.prototype.hasOwnProperty.call(a,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Gs=pi.extend({options:{fill:!0,radius:10},initialize:function(a,s){E(this,s),this._latlng=ht(a),this._radius=this.options.radius},setLatLng:function(a){var s=this._latlng;return this._latlng=ht(a),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(a){return this.options.radius=this._radius=a,this.redraw()},getRadius:function(){return this._radius},setStyle:function(a){var s=a&&a.radius||this._radius;return pi.prototype.setStyle.call(this,a),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var a=this._radius,s=this._radiusY||a,c=this._clickTolerance(),h=[a+c,s+c];this._pxBounds=new at(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(a){return a.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Yw(a,s){return new Gs(a,s)}var kc=Gs.extend({initialize:function(a,s,c){if(typeof s=="number"&&(s=o({},c,{radius:s})),E(this,s),this._latlng=ht(a),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(a){return this._mRadius=a,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var a=[this._radius,this._radiusY||this._radius];return new Vt(this._map.layerPointToLatLng(this._point.subtract(a)),this._map.layerPointToLatLng(this._point.add(a)))},setStyle:pi.prototype.setStyle,_project:function(){var a=this._latlng.lng,s=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===hi.distance){var v=Math.PI/180,x=this._mRadius/hi.R/v,R=c.project([s+x,a]),N=c.project([s-x,a]),z=R.add(N).divideBy(2),k=c.unproject(z).lat,Y=Math.acos((Math.cos(x*v)-Math.sin(s*v)*Math.sin(k*v))/(Math.cos(s*v)*Math.cos(k*v)))/v;(isNaN(Y)||Y===0)&&(Y=x/Math.cos(Math.PI/180*s)),this._point=z.subtract(c.getPixelOrigin()),this._radius=isNaN(Y)?0:z.x-c.project([k,a-Y]).x,this._radiusY=z.y-R.y}else{var $=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint($).x}this._updateBounds()}});function Fw(a,s,c){return new kc(a,s,c)}var Pn=pi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(a,s){E(this,s),this._setLatLngs(a)},getLatLngs:function(){return this._latlngs},setLatLngs:function(a){return this._setLatLngs(a),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(a){for(var s=1/0,c=null,h=ir,v,x,R=0,N=this._parts.length;R<N;R++)for(var z=this._parts[R],k=1,Y=z.length;k<Y;k++){v=z[k-1],x=z[k];var $=h(a,v,x,!0);$<s&&(s=$,c=h(a,v,x))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ng(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(a,s){return s=s||this._defaultShape(),a=ht(a),s.push(a),this._bounds.extend(a),this.redraw()},_setLatLngs:function(a){this._bounds=new Vt,this._latlngs=this._convertLatLngs(a)},_defaultShape:function(){return Xe(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(a){for(var s=[],c=Xe(a),h=0,v=a.length;h<v;h++)c?(s[h]=ht(a[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(a[h]);return s},_project:function(){var a=new at;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,a),this._bounds.isValid()&&a.isValid()&&(this._rawPxBounds=a,this._updateBounds())},_updateBounds:function(){var a=this._clickTolerance(),s=new U(a,a);this._rawPxBounds&&(this._pxBounds=new at([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(a,s,c){var h=a[0]instanceof pt,v=a.length,x,R;if(h){for(R=[],x=0;x<v;x++)R[x]=this._map.latLngToLayerPoint(a[x]),c.extend(R[x]);s.push(R)}else for(x=0;x<v;x++)this._projectLatlngs(a[x],s,c)},_clipPoints:function(){var a=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,h,v,x,R,N,z;for(c=0,v=0,x=this._rings.length;c<x;c++)for(z=this._rings[c],h=0,R=z.length;h<R-1;h++)N=tg(z[h],z[h+1],a,h,!0),N&&(s[v]=s[v]||[],s[v].push(N[0]),(N[1]!==z[h+1]||h===R-2)&&(s[v].push(N[1]),v++))}},_simplifyPoints:function(){for(var a=this._parts,s=this.options.smoothFactor,c=0,h=a.length;c<h;c++)a[c]=$p(a[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(a,s){var c,h,v,x,R,N,z=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(c=0,x=this._parts.length;c<x;c++)for(N=this._parts[c],h=0,R=N.length,v=R-1;h<R;v=h++)if(!(!s&&h===0)&&Wp(a,N[v],N[h])<=z)return!0;return!1}});function Xw(a,s){return new Pn(a,s)}Pn._flat=eg;var ja=Pn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Qp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(a){var s=Pn.prototype._convertLatLngs.call(this,a),c=s.length;return c>=2&&s[0]instanceof pt&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(a){Pn.prototype._setLatLngs.call(this,a),Xe(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Xe(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var a=this._renderer._bounds,s=this.options.weight,c=new U(s,s);if(a=new at(a.min.subtract(c),a.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(a))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,v=this._rings.length,x;h<v;h++)x=Kp(this._rings[h],a,!0),x.length&&this._parts.push(x)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(a){var s=!1,c,h,v,x,R,N,z,k;if(!this._pxBounds||!this._pxBounds.contains(a))return!1;for(x=0,z=this._parts.length;x<z;x++)for(c=this._parts[x],R=0,k=c.length,N=k-1;R<k;N=R++)h=c[R],v=c[N],h.y>a.y!=v.y>a.y&&a.x<(v.x-h.x)*(a.y-h.y)/(v.y-h.y)+h.x&&(s=!s);return s||Pn.prototype._containsPoint.call(this,a,!0)}});function Kw(a,s){return new ja(a,s)}var jn=Dn.extend({initialize:function(a,s){E(this,s),this._layers={},a&&this.addData(a)},addData:function(a){var s=S(a)?a:a.features,c,h,v;if(s){for(c=0,h=s.length;c<h;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var x=this.options;if(x.filter&&!x.filter(a))return this;var R=Is(a,x);return R?(R.feature=Xs(a),R.defaultOptions=R.options,this.resetStyle(R),x.onEachFeature&&x.onEachFeature(a,R),this.addLayer(R)):this},resetStyle:function(a){return a===void 0?this.eachLayer(this.resetStyle,this):(a.options=o({},a.defaultOptions),this._setLayerStyle(a,this.options.style),this)},setStyle:function(a){return this.eachLayer(function(s){this._setLayerStyle(s,a)},this)},_setLayerStyle:function(a,s){a.setStyle&&(typeof s=="function"&&(s=s(a.feature)),a.setStyle(s))}});function Is(a,s){var c=a.type==="Feature"?a.geometry:a,h=c?c.coordinates:null,v=[],x=s&&s.pointToLayer,R=s&&s.coordsToLatLng||Vc,N,z,k,Y;if(!h&&!c)return null;switch(c.type){case"Point":return N=R(h),og(x,a,N,s);case"MultiPoint":for(k=0,Y=h.length;k<Y;k++)N=R(h[k]),v.push(og(x,a,N,s));return new Dn(v);case"LineString":case"MultiLineString":return z=Ys(h,c.type==="LineString"?0:1,R),new Pn(z,s);case"Polygon":case"MultiPolygon":return z=Ys(h,c.type==="Polygon"?1:2,R),new ja(z,s);case"GeometryCollection":for(k=0,Y=c.geometries.length;k<Y;k++){var $=Is({geometry:c.geometries[k],type:"Feature",properties:a.properties},s);$&&v.push($)}return new Dn(v);case"FeatureCollection":for(k=0,Y=c.features.length;k<Y;k++){var st=Is(c.features[k],s);st&&v.push(st)}return new Dn(v);default:throw new Error("Invalid GeoJSON object.")}}function og(a,s,c,h){return a?a(s,c):new qs(c,h&&h.markersInheritOptions&&h)}function Vc(a){return new pt(a[1],a[0],a[2])}function Ys(a,s,c){for(var h=[],v=0,x=a.length,R;v<x;v++)R=s?Ys(a[v],s-1,c):(c||Vc)(a[v]),h.push(R);return h}function Uc(a,s){return a=ht(a),a.alt!==void 0?[g(a.lng,s),g(a.lat,s),g(a.alt,s)]:[g(a.lng,s),g(a.lat,s)]}function Fs(a,s,c,h){for(var v=[],x=0,R=a.length;x<R;x++)v.push(s?Fs(a[x],Xe(a[x])?0:s-1,c,h):Uc(a[x],h));return!s&&c&&v.length>0&&v.push(v[0].slice()),v}function Ba(a,s){return a.feature?o({},a.feature,{geometry:s}):Xs(s)}function Xs(a){return a.type==="Feature"||a.type==="FeatureCollection"?a:{type:"Feature",properties:{},geometry:a}}var Hc={toGeoJSON:function(a){return Ba(this,{type:"Point",coordinates:Uc(this.getLatLng(),a)})}};qs.include(Hc),kc.include(Hc),Gs.include(Hc),Pn.include({toGeoJSON:function(a){var s=!Xe(this._latlngs),c=Fs(this._latlngs,s?1:0,!1,a);return Ba(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ja.include({toGeoJSON:function(a){var s=!Xe(this._latlngs),c=s&&!Xe(this._latlngs[0]),h=Fs(this._latlngs,c?2:s?1:0,!0,a);return s||(h=[h]),Ba(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),Da.include({toMultiPoint:function(a){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(a).geometry.coordinates)}),Ba(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(a){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(a);var c=s==="GeometryCollection",h=[];return this.eachLayer(function(v){if(v.toGeoJSON){var x=v.toGeoJSON(a);if(c)h.push(x.geometry);else{var R=Xs(x);R.type==="FeatureCollection"?h.push.apply(h,R.features):h.push(R)}}}),c?Ba(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function rg(a,s){return new jn(a,s)}var Qw=rg,Ks=dn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(a,s,c){this._url=a,this._bounds=vt(s),E(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ot(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(a){return this.options.opacity=a,this._image&&this._updateOpacity(),this},setStyle:function(a){return a.opacity&&this.setOpacity(a.opacity),this},bringToFront:function(){return this._map&&Na(this._image),this},bringToBack:function(){return this._map&&za(this._image),this},setUrl:function(a){return this._url=a,this._image&&(this._image.src=a),this},setBounds:function(a){return this._bounds=vt(a),this._map&&this._reset(),this},getEvents:function(){var a={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var a=this._url.tagName==="IMG",s=this._image=a?this._url:gt("img");if(ot(s,"leaflet-image-layer"),this._zoomAnimated&&ot(s,"leaflet-zoom-animated"),this.options.className&&ot(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),a){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(a){var s=this._map.getZoomScale(a.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,a.zoom,a.center).min;$i(this._image,c,s)},_reset:function(){var a=this._image,s=new at(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();$t(a,s.min),a.style.width=c.x+"px",a.style.height=c.y+"px"},_updateOpacity:function(){Fe(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var a=this.options.errorOverlayUrl;a&&this._url!==a&&(this._url=a,this._image.src=a)},getCenter:function(){return this._bounds.getCenter()}}),$w=function(a,s,c){return new Ks(a,s,c)},sg=Ks.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var a=this._url.tagName==="VIDEO",s=this._image=a?this._url:gt("video");if(ot(s,"leaflet-image-layer"),this._zoomAnimated&&ot(s,"leaflet-zoom-animated"),this.options.className&&ot(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onloadeddata=l(this.fire,this,"load"),a){for(var c=s.getElementsByTagName("source"),h=[],v=0;v<c.length;v++)h.push(c[v].src);this._url=c.length>0?h:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var x=0;x<this._url.length;x++){var R=gt("source");R.src=this._url[x],s.appendChild(R)}}});function Ww(a,s,c){return new sg(a,s,c)}var lg=Ks.extend({_initImage:function(){var a=this._image=this._url;ot(a,"leaflet-image-layer"),this._zoomAnimated&&ot(a,"leaflet-zoom-animated"),this.options.className&&ot(a,this.options.className),a.onselectstart=m,a.onmousemove=m}});function Jw(a,s,c){return new lg(a,s,c)}var Sn=dn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(a,s){a&&(a instanceof pt||S(a))?(this._latlng=ht(a),E(this,s)):(E(this,a),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(a){return a=arguments.length?a:this._source._map,a.hasLayer(this)||a.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(a){return this._map?this.close():(arguments.length?this._source=a:a=this._source,this._prepareOpen(),this.openOn(a._map)),this},onAdd:function(a){this._zoomAnimated=a._zoomAnimated,this._container||this._initLayout(),a._fadeAnimated&&Fe(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),a._fadeAnimated&&Fe(this._container,1),this.bringToFront(),this.options.interactive&&(ot(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(a){a._fadeAnimated?(Fe(this._container,0),this._removeTimeout=setTimeout(l(Ut,void 0,this._container),200)):Ut(this._container),this.options.interactive&&(Ft(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(a){return this._latlng=ht(a),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(a){return this._content=a,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var a={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Na(this._container),this},bringToBack:function(){return this._map&&za(this._container),this},_prepareOpen:function(a){var s=this._source;if(!s._map)return!1;if(s instanceof Dn){s=null;var c=this._source._layers;for(var h in c)if(c[h]._map){s=c[h];break}if(!s)return!1;this._source=s}if(!a)if(s.getCenter)a=s.getCenter();else if(s.getLatLng)a=s.getLatLng();else if(s.getBounds)a=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(a),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var a=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")a.innerHTML=s;else{for(;a.hasChildNodes();)a.removeChild(a.firstChild);a.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var a=this._map.latLngToLayerPoint(this._latlng),s=G(this.options.offset),c=this._getAnchor();this._zoomAnimated?$t(this._container,a.add(c)):s=s.add(a).add(c);var h=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});mt.include({_initOverlay:function(a,s,c,h){var v=s;return v instanceof a||(v=new a(h).setContent(s)),c&&v.setLatLng(c),v}}),dn.include({_initOverlay:function(a,s,c,h){var v=c;return v instanceof a?(E(v,h),v._source=this):(v=s&&!h?s:new a(h,this),v.setContent(c)),v}});var Qs=Sn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(a){return a=arguments.length?a:this._source._map,!a.hasLayer(this)&&a._popup&&a._popup.options.autoClose&&a.removeLayer(a._popup),a._popup=this,Sn.prototype.openOn.call(this,a)},onAdd:function(a){Sn.prototype.onAdd.call(this,a),a.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof pi||this._source.on("preclick",Ji))},onRemove:function(a){Sn.prototype.onRemove.call(this,a),a.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof pi||this._source.off("preclick",Ji))},getEvents:function(){var a=Sn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(a.preclick=this.close),this.options.keepInView&&(a.moveend=this._adjustPan),a},_initLayout:function(){var a="leaflet-popup",s=this._container=gt("div",a+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=gt("div",a+"-content-wrapper",s);if(this._contentNode=gt("div",a+"-content",c),er(s),Rc(this._contentNode),et(s,"contextmenu",Ji),this._tipContainer=gt("div",a+"-tip-container",s),this._tip=gt("div",a+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=gt("a",a+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;
        </span>',et(h,"click",function(v){ue(v),this.close()},this)}},_updateLayout:function(){var a=this._contentNode,s=a.style;s.width="",s.whiteSpace="nowrap";var c=a.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var h=a.offsetHeight,v=this.options.maxHeight,x="leaflet-popup-scrolled";v&&h>v?(s.height=v+"px",ot(a,x)):Ft(a,x),this._containerWidth=this._container.offsetWidth},_animateZoom:function(a){var s=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center),c=this._getAnchor();$t(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var a=this._map,s=parseInt($o(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,h=this._containerWidth,v=new U(this._containerLeft,-c-this._containerBottom);v._add(Wi(this._container));var x=a.layerPointToContainerPoint(v),R=G(this.options.autoPanPadding),N=G(this.options.autoPanPaddingTopLeft||R),z=G(this.options.autoPanPaddingBottomRight||R),k=a.getSize(),Y=0,$=0;x.x+h+z.x>k.x&&(Y=x.x+h-k.x+z.x),x.x-Y-N.x<0&&(Y=x.x-N.x),x.y+c+z.y>k.y&&($=x.y+c-k.y+z.y),x.y-$-N.y<0&&($=x.y-N.y),(Y||$)&&(this.options.keepInView&&(this._autopanning=!0),a.fire("autopanstart").panBy([Y,$]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),tE=function(a,s){return new Qs(a,s)};mt.mergeOptions({closePopupOnClick:!0}),mt.include({openPopup:function(a,s,c){return this._initOverlay(Qs,a,s,c).openOn(this),this},closePopup:function(a){return a=arguments.length?a:this._popup,a&&a.close(),this}}),dn.include({bindPopup:function(a,s){return this._popup=this._initOverlay(Qs,this._popup,a,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(a){return this._popup&&(this instanceof Dn||(this._popup._source=this),this._popup._prepareOpen(a||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(a){return this._popup&&this._popup.setContent(a),this},getPopup:function(){return this._popup},_openPopup:function(a){if(!(!this._popup||!this._map)){ta(a);var s=a.layer||a.target;if(this._popup._source===s&&!(s instanceof pi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(a.latlng);return}this._popup._source=s,this.openPopup(a.latlng)}},_movePopup:function(a){this._popup.setLatLng(a.latlng)},_onKeyPress:function(a){a.originalEvent.keyCode===13&&this._openPopup(a)}});var $s=Sn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(a){Sn.prototype.onAdd.call(this,a),this.setOpacity(this.options.opacity),a.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(a){Sn.prototype.onRemove.call(this,a),a.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var a=Sn.prototype.getEvents.call(this);return this.options.permanent||(a.preclick=this.close),a},_initLayout:function(){var a="leaflet-tooltip",s=a+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=gt("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(a){var s,c,h=this._map,v=this._container,x=h.latLngToContainerPoint(h.getCenter()),R=h.layerPointToContainerPoint(a),N=this.options.direction,z=v.offsetWidth,k=v.offsetHeight,Y=G(this.options.offset),$=this._getAnchor();N==="top"?(s=z/2,c=k):N==="bottom"?(s=z/2,c=0):N==="center"?(s=z/2,c=k/2):N==="right"?(s=0,c=k/2):N==="left"?(s=z,c=k/2):R.x<x.x?(N="right",s=0,c=k/2):(N="left",s=z+(Y.x+$.x)*2,c=k/2),a=a.subtract(G(s,c,!0)).add(Y).add($),Ft(v,"leaflet-tooltip-right"),Ft(v,"leaflet-tooltip-left"),Ft(v,"leaflet-tooltip-top"),Ft(v,"leaflet-tooltip-bottom"),ot(v,"leaflet-tooltip-"+N),$t(v,a)},_updatePosition:function(){var a=this._map.latLngToLayerPoint(this._latlng);this._setPosition(a)},setOpacity:function(a){this.options.opacity=a,this._container&&Fe(this._container,a)},_animateZoom:function(a){var s=this._map._latLngToNewLayerPoint(this._latlng,a.zoom,a.center);this._setPosition(s)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),eE=function(a,s){return new $s(a,s)};mt.include({openTooltip:function(a,s,c){return this._initOverlay($s,a,s,c).openOn(this),this},closeTooltip:function(a){return a.close(),this}}),dn.include({bindTooltip:function(a,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay($s,this._tooltip,a,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(a){if(!(!a&&this._tooltipHandlersAdded)){var s=a?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!a}},openTooltip:function(a){return this._tooltip&&(this instanceof Dn||(this._tooltip._source=this),this._tooltip._prepareOpen(a)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(a){return this._tooltip&&this._tooltip.setContent(a),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(a){var s=typeof a.getElement=="function"&&a.getElement();s&&(et(s,"focus",function(){this._tooltip._source=a,this.openTooltip()},this),et(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(a){var s=typeof a.getElement=="function"&&a.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(a){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(a)});return}this._tooltip._source=a.layer||a.target,this.openTooltip(this._tooltip.options.sticky?a.latlng:void 0)}},_moveTooltip:function(a){var s=a.latlng,c,h;this._tooltip.options.sticky&&a.originalEvent&&(c=this._map.mouseEventToContainerPoint(a.originalEvent),h=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var ug=Pa.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(a){var s=a&&a.tagName==="DIV"?a:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Bs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=G(c.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function nE(a){return new ug(a)}Pa.Default=ar;var or=dn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:K.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(a){E(this,a)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(a){a._addZoomLimit(this)},onRemove:function(a){this._removeAllTiles(),Ut(this._container),a._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Na(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(za(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(a){return this.options.opacity=a,this._updateOpacity(),this},setZIndex:function(a){return this.options.zIndex=a,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var a=this._clampZoom(this._map.getZoom());a!==this._tileZoom&&(this._tileZoom=a,this._updateLevels()),this._update()}return this},getEvents:function(){var a={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),a.move=this._onMove),this._zoomAnimated&&(a.zoomanim=this._animateZoom),a},createTile:function(){return document.createElement("div")},getTileSize:function(){var a=this.options.tileSize;return a instanceof U?a:new U(a,a)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(a){for(var s=this.getPane().children,c=-a(-1/0,1/0),h=0,v=s.length,x;h<v;h++)x=s[h].style.zIndex,s[h]!==this._container&&x&&(c=a(c,+x));isFinite(c)&&(this.options.zIndex=c+a(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!K.ielt9){Fe(this._container,this.options.opacity);var a=+new Date,s=!1,c=!1;for(var h in this._tiles){var v=this._tiles[h];if(!(!v.current||!v.loaded)){var x=Math.min(1,(a-v.loaded)/200);Fe(v.el,x),x<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(q(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=gt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var a=this._tileZoom,s=this.options.maxZoom;if(a!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===a?(this._levels[c].el.style.zIndex=s-Math.abs(a-c),this._onUpdateLevel(c)):(Ut(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[a],v=this._map;return h||(h=this._levels[a]={},h.el=gt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=v.project(v.unproject(v.getPixelOrigin()),a).round(),h.zoom=a,this._setZoomTransform(h,v.getCenter(),v.getZoom()),m(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var a,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(a in this._tiles)s=this._tiles[a],s.retain=s.current;for(a in this._tiles)if(s=this._tiles[a],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(a in this._tiles)this._tiles[a].retain||this._removeTile(a)}},_removeTilesAtZoom:function(a){for(var s in this._tiles)this._tiles[s].coords.z===a&&this._removeTile(s)},_removeAllTiles:function(){for(var a in this._tiles)this._removeTile(a)},_invalidateAll:function(){for(var a in this._levels)Ut(this._levels[a].el),this._onRemoveLevel(Number(a)),delete this._levels[a];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(a,s,c,h){var v=Math.floor(a/2),x=Math.floor(s/2),R=c-1,N=new U(+v,+x);N.z=+R;var z=this._tileCoordsToKey(N),k=this._tiles[z];return k&&k.active?(k.retain=!0,!0):(k&&k.loaded&&(k.retain=!0),R>h?this._retainParent(v,x,R,h):!1)},_retainChildren:function(a,s,c,h){for(var v=2*a;v<2*a+2;v++)for(var x=2*s;x<2*s+2;x++){var R=new U(v,x);R.z=c+1;var N=this._tileCoordsToKey(R),z=this._tiles[N];if(z&&z.active){z.retain=!0;continue}else z&&z.loaded&&(z.retain=!0);c+1<h&&this._retainChildren(v,x,c+1,h)}},_resetView:function(a){var s=a&&(a.pinch||a.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(a){this._setView(a.center,a.zoom,!0,a.noUpdate)},_clampZoom:function(a){var s=this.options;return s.minNativeZoom!==void 0&&a<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<a?s.maxNativeZoom:a},_setView:function(a,s,c,h){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var x=this.options.updateWhenZooming&&v!==this._tileZoom;(!h||x)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(a),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(a,s)},_setZoomTransforms:function(a,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],a,s)},_setZoomTransform:function(a,s,c){var h=this._map.getZoomScale(c,a.zoom),v=a.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,c)).round();K.any3d?$i(a.el,v,h):$t(a.el,v)},_resetGrid:function(){var a=this._map,s=a.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(a.project([0,s.wrapLng[0]],h).x/c.x),Math.ceil(a.project([0,s.wrapLng[1]],h).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(a.project([s.wrapLat[0],0],h).y/c.x),Math.ceil(a.project([s.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(a){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(c,this._tileZoom),v=s.project(a,this._tileZoom).floor(),x=s.getSize().divideBy(h*2);return new at(v.subtract(x),v.add(x))},_update:function(a){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(a===void 0&&(a=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(a),v=this._pxBoundsToTileRange(h),x=v.getCenter(),R=[],N=this.options.keepBuffer,z=new at(v.getBottomLeft().subtract([N,-N]),v.getTopRight().add([N,-N]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var k in this._tiles){var Y=this._tiles[k].coords;(Y.z!==this._tileZoom||!z.contains(new U(Y.x,Y.y)))&&(this._tiles[k].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(a,c);return}for(var $=v.min.y;$<=v.max.y;$++)for(var st=v.min.x;st<=v.max.x;st++){var ye=new U(st,$);if(ye.z=this._tileZoom,!!this._isValidTile(ye)){var oe=this._tiles[this._tileCoordsToKey(ye)];oe?oe.current=!0:R.push(ye)}}if(R.sort(function(we,Va){return we.distanceTo(x)-Va.distanceTo(x)}),R.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ke=document.createDocumentFragment();for(st=0;st<R.length;st++)this._addTile(R[st],Ke);this._level.el.appendChild(Ke)}}}},_isValidTile:function(a){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(a.x<c.min.x||a.x>c.max.x)||!s.wrapLat&&(a.y<c.min.y||a.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(a);return vt(this.options.bounds).overlaps(h)},_keyToBounds:function(a){return this._tileCoordsToBounds(this._keyToTileCoords(a))},_tileCoordsToNwSe:function(a){var s=this._map,c=this.getTileSize(),h=a.scaleBy(c),v=h.add(c),x=s.unproject(h,a.z),R=s.unproject(v,a.z);return[x,R]},_tileCoordsToBounds:function(a){var s=this._tileCoordsToNwSe(a),c=new Vt(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(a){return a.x+":"+a.y+":"+a.z},_keyToTileCoords:function(a){var s=a.split(":"),c=new U(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(a){var s=this._tiles[a];s&&(Ut(s.el),delete this._tiles[a],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(a)}))},_initTile:function(a){ot(a,"leaflet-tile");var s=this.getTileSize();a.style.width=s.x+"px",a.style.height=s.y+"px",a.onselectstart=m,a.onmousemove=m,K.ielt9&&this.options.opacity<1&&Fe(a,this.options.opacity)},_addTile:function(a,s){var c=this._getTilePos(a),h=this._tileCoordsToKey(a),v=this.createTile(this._wrapCoords(a),l(this._tileReady,this,a));this._initTile(v),this.createTile.length<2&&H(l(this._tileReady,this,a,null,v)),$t(v,c),this._tiles[h]={el:v,coords:a,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:a})},_tileReady:function(a,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:a});var h=this._tileCoordsToKey(a);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(Fe(c.el,0),q(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(ot(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:a})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),K.ielt9||!this._map._fadeAnimated?H(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(a){return a.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(a){var s=new U(this._wrapX?p(a.x,this._wrapX):a.x,this._wrapY?p(a.y,this._wrapY):a.y);return s.z=a.z,s},_pxBoundsToTileRange:function(a){var s=this.getTileSize();return new at(a.min.unscaleBy(s).floor(),a.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var a in this._tiles)if(!this._tiles[a].loaded)return!1;return!0}});function iE(a){return new or(a)}var ka=or.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(a,s){this._url=a,s=E(this,s),s.detectRetina&&K.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(a,s){return this._url===a&&s===void 0&&(s=!0),this._url=a,s||this.redraw(),this},createTile:function(a,s){var c=document.createElement("img");return et(c,"load",l(this._tileOnLoad,this,s,c)),et(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(a),c},getTileUrl:function(a){var s={r:K.retina?"@2x":"",s:this._getSubdomain(a),x:a.x,y:a.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-a.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,o(s,this.options))},_tileOnLoad:function(a,s){K.ielt9?setTimeout(l(a,this,null,s),0):a(null,s)},_tileOnError:function(a,s,c){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),a(c,s)},_onTileRemove:function(a){a.tile.onload=null},_getZoomForUrl:function(){var a=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(a=s-a),a+h},_getSubdomain:function(a){var s=Math.abs(a.x+a.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var a,s;for(a in this._tiles)if(this._tiles[a].coords.z!==this._tileZoom&&(s=this._tiles[a].el,s.onload=m,s.onerror=m,!s.complete)){s.src=O;var c=this._tiles[a].coords;Ut(s),delete this._tiles[a],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(a){var s=this._tiles[a];if(s)return s.el.setAttribute("src",O),or.prototype._removeTile.call(this,a)},_tileReady:function(a,s,c){if(!(!this._map||c&&c.getAttribute("src")===O))return or.prototype._tileReady.call(this,a,s,c)}});function cg(a,s){return new ka(a,s)}var fg=ka.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(a,s){this._url=a;var c=o({},this.defaultWmsParams);for(var h in s)h in this.options||(c[h]=s[h]);s=E(this,s);var v=s.detectRetina&&K.retina?2:1,x=this.getTileSize();c.width=x.x*v,c.height=x.y*v,this.wmsParams=c},onAdd:function(a){this._crs=this.options.crs||a.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,ka.prototype.onAdd.call(this,a)},getTileUrl:function(a){var s=this._tileCoordsToNwSe(a),c=this._crs,h=kt(c.project(s[0]),c.project(s[1])),v=h.min,x=h.max,R=(this._wmsVersion>=1.3&&this._crs===ig?[v.y,v.x,x.y,x.x]:[v.x,v.y,x.x,x.y]).join(","),N=ka.prototype.getTileUrl.call(this,a);return N+A(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+R},setParams:function(a,s){return o(this.wmsParams,a),s||this.redraw(),this}});function aE(a,s){return new fg(a,s)}ka.WMS=fg,cg.wms=aE;var Bn=dn.extend({options:{padding:.1},initialize:function(a){E(this,a),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ot(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var a={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(a.zoomanim=this._onAnimZoom),a},_onAnimZoom:function(a){this._updateTransform(a.center,a.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(a,s){var c=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),x=h.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(a,s));K.any3d?$i(this._container,x,c):$t(this._container,x)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var a in this._layers)this._layers[a]._reset()},_onZoomEnd:function(){for(var a in this._layers)this._layers[a]._project()},_updatePaths:function(){for(var a in this._layers)this._layers[a]._update()},_update:function(){var a=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-a)).round();this._bounds=new at(c,c.add(s.multiplyBy(1+a*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),dg=Bn.extend({options:{tolerance:0},getEvents:function(){var a=Bn.prototype.getEvents.call(this);return a.viewprereset=this._onViewPreReset,a},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Bn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var a=this._container=document.createElement("canvas");et(a,"mousemove",this._onMouseMove,this),et(a,"click dblclick mousedown mouseup contextmenu",this._onClick,this),et(a,"mouseout",this._handleMouseOut,this),a._leaflet_disable_events=!0,this._ctx=a.getContext("2d")},_destroyContainer:function(){q(this._redrawRequest),delete this._ctx,Ut(this._container),Ct(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var a;this._redrawBounds=null;for(var s in this._layers)a=this._layers[s],a._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bn.prototype._update.call(this);var a=this._bounds,s=this._container,c=a.getSize(),h=K.retina?2:1;$t(s,a.min),s.width=h*c.x,s.height=h*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",K.retina&&this._ctx.scale(2,2),this._ctx.translate(-a.min.x,-a.min.y),this.fire("update")}},_reset:function(){Bn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(a){this._updateDashArray(a),this._layers[f(a)]=a;var s=a._order={layer:a,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(a){this._requestRedraw(a)},_removePath:function(a){var s=a._order,c=s.next,h=s.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete a._order,delete this._layers[f(a)],this._requestRedraw(a)},_updatePath:function(a){this._extendRedrawBounds(a),a._project(),a._update(),this._requestRedraw(a)},_updateStyle:function(a){this._updateDashArray(a),this._requestRedraw(a)},_updateDashArray:function(a){if(typeof a.options.dashArray=="string"){var s=a.options.dashArray.split(/[, ]+/),c=[],h,v;for(v=0;v<s.length;v++){if(h=Number(s[v]),isNaN(h))return;c.push(h)}a.options._dashArray=c}else a.options._dashArray=a.options.dashArray},_requestRedraw:function(a){this._map&&(this._extendRedrawBounds(a),this._redrawRequest=this._redrawRequest||H(this._redraw,this))},_extendRedrawBounds:function(a){if(a._pxBounds){var s=(a.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new at,this._redrawBounds.extend(a._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(a._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var a=this._redrawBounds;if(a){var s=a.getSize();this._ctx.clearRect(a.min.x,a.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var a,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)a=h.layer,(!s||a._pxBounds&&a._pxBounds.intersects(s))&&a._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(a,s){if(this._drawing){var c,h,v,x,R=a._parts,N=R.length,z=this._ctx;if(N){for(z.beginPath(),c=0;c<N;c++){for(h=0,v=R[c].length;h<v;h++)x=R[c][h],z[h?"lineTo":"moveTo"](x.x,x.y);s&&z.closePath()}this._fillStroke(z,a)}}},_updateCircle:function(a){if(!(!this._drawing||a._empty())){var s=a._point,c=this._ctx,h=Math.max(Math.round(a._radius),1),v=(Math.max(Math.round(a._radiusY),1)||h)/h;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,h,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,a)}},_fillStroke:function(a,s){var c=s.options;c.fill&&(a.globalAlpha=c.fillOpacity,a.fillStyle=c.fillColor||c.color,a.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(a.setLineDash&&a.setLineDash(s.options&&s.options._dashArray||[]),a.globalAlpha=c.opacity,a.lineWidth=c.weight,a.strokeStyle=c.color,a.lineCap=c.lineCap,a.lineJoin=c.lineJoin,a.stroke())},_onClick:function(a){for(var s=this._map.mouseEventToLayerPoint(a),c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(a.type==="click"||a.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,a)},_onMouseMove:function(a){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(a);this._handleMouseHover(a,s)}},_handleMouseOut:function(a){var s=this._hoveredLayer;s&&(Ft(this._container,"leaflet-interactive"),this._fireEvent([s],a,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(a,s){if(!this._mouseHoverThrottled){for(var c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(a),h&&(ot(this._container,"leaflet-interactive"),this._fireEvent([h],a,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,a),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(a,s,c){this._map._fireDOMEvent(s,c||s.type,a)},_bringToFront:function(a){var s=a._order;if(s){var c=s.next,h=s.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(a)}},_bringToBack:function(a){var s=a._order;if(s){var c=s.next,h=s.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(a)}}});function hg(a){return K.canvas?new dg(a):null}var rr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<lvml:"+a+' class="lvml">')}}catch{}return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),oE={_initContainer:function(){this._container=gt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Bn.prototype._update.call(this),this.fire("update"))},_initPath:function(a){var s=a._container=rr("shape");ot(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",a._path=rr("path"),s.appendChild(a._path),this._updateStyle(a),this._layers[f(a)]=a},_addPath:function(a){var s=a._container;this._container.appendChild(s),a.options.interactive&&a.addInteractiveTarget(s)},_removePath:function(a){var s=a._container;Ut(s),a.removeInteractiveTarget(s),delete this._layers[f(a)]},_updateStyle:function(a){var s=a._stroke,c=a._fill,h=a.options,v=a._container;v.stroked=!!h.stroke,v.filled=!!h.fill,h.stroke?(s||(s=a._stroke=rr("stroke")),v.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=S(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(v.removeChild(s),a._stroke=null),h.fill?(c||(c=a._fill=rr("fill")),v.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(v.removeChild(c),a._fill=null)},_updateCircle:function(a){var s=a._point.round(),c=Math.round(a._radius),h=Math.round(a._radiusY||c);this._setPath(a,a._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(a,s){a._path.v=s},_bringToFront:function(a){Na(a._container)},_bringToBack:function(a){za(a._container)}},Ws=K.vml?rr:vp,sr=Bn.extend({_initContainer:function(){this._container=Ws("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ws("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ut(this._container),Ct(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Bn.prototype._update.call(this);var a=this._bounds,s=a.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),$t(c,a.min),c.setAttribute("viewBox",[a.min.x,a.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(a){var s=a._path=Ws("path");a.options.className&&ot(s,a.options.className),a.options.interactive&&ot(s,"leaflet-interactive"),this._updateStyle(a),this._layers[f(a)]=a},_addPath:function(a){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(a._path),a.addInteractiveTarget(a._path)},_removePath:function(a){Ut(a._path),a.removeInteractiveTarget(a._path),delete this._layers[f(a)]},_updatePath:function(a){a._project(),a._update()},_updateStyle:function(a){var s=a._path,c=a.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(a,s){this._setPath(a,yp(a._parts,s))},_updateCircle:function(a){var s=a._point,c=Math.max(Math.round(a._radius),1),h=Math.max(Math.round(a._radiusY),1)||c,v="a"+c+","+h+" 0 1,0 ",x=a._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(a,x)},_setPath:function(a,s){a._path.setAttribute("d",s)},_bringToFront:function(a){Na(a._path)},_bringToBack:function(a){za(a._path)}});K.vml&&sr.include(oE);function mg(a){return K.svg||K.vml?new sr(a):null}mt.include({getRenderer:function(a){var s=a.options.renderer||this._getPaneRenderer(a.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(a){if(a==="overlayPane"||a===void 0)return!1;var s=this._paneRenderers[a];return s===void 0&&(s=this._createRenderer({pane:a}),this._paneRenderers[a]=s),s},_createRenderer:function(a){return this.options.preferCanvas&&hg(a)||mg(a)}});var pg=ja.extend({initialize:function(a,s){ja.prototype.initialize.call(this,this._boundsToLatLngs(a),s)},setBounds:function(a){return this.setLatLngs(this._boundsToLatLngs(a))},_boundsToLatLngs:function(a){return a=vt(a),[a.getSouthWest(),a.getNorthWest(),a.getNorthEast(),a.getSouthEast()]}});function rE(a,s){return new pg(a,s)}sr.create=Ws,sr.pointsToPath=yp,jn.geometryToLayer=Is,jn.coordsToLatLng=Vc,jn.coordsToLatLngs=Ys,jn.latLngToCoords=Uc,jn.latLngsToCoords=Fs,jn.getFeature=Ba,jn.asFeature=Xs,mt.mergeOptions({boxZoom:!0});var gg=Tn.extend({initialize:function(a){this._map=a,this._container=a._container,this._pane=a._panes.overlayPane,this._resetStateTimeout=0,a.on("unload",this._destroy,this)},addHooks:function(){et(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ct(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(a){if(!a.shiftKey||a.which!==1&&a.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Wo(),Tc(),this._startPoint=this._map.mouseEventToContainerPoint(a),et(document,{contextmenu:ta,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(a){this._moved||(this._moved=!0,this._box=gt("div","leaflet-zoom-box",this._container),ot(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(a);var s=new at(this._point,this._startPoint),c=s.getSize();$t(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ut(this._box),Ft(this._container,"leaflet-crosshair")),Jo(),Sc(),Ct(document,{contextmenu:ta,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(a){if(!(a.which!==1&&a.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new Vt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(a){a.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});mt.addInitHook("addHandler","boxZoom",gg),mt.mergeOptions({doubleClickZoom:!0});var vg=Tn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(a){var s=this._map,c=s.getZoom(),h=s.options.zoomDelta,v=a.originalEvent.shiftKey?c-h:c+h;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(a.containerPoint,v)}});mt.addInitHook("addHandler","doubleClickZoom",vg),mt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var yg=Tn.extend({addHooks:function(){if(!this._draggable){var a=this._map;this._draggable=new mi(a._mapPane,a._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),a.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),a.on("zoomend",this._onZoomEnd,this),a.whenReady(this._onZoomEnd,this))}ot(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ft(this._map._container,"leaflet-grab"),Ft(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var a=this._map;if(a._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=vt(this._map.options.maxBounds);this._offsetLimit=kt(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;a.fire("movestart").fire("dragstart"),a.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(a){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",a).fire("drag",a)},_prunePositions:function(a){for(;this._positions.length>1&&a-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var a=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(a).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(a,s){return a-(a-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var a=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;a.x<s.min.x&&(a.x=this._viscousLimit(a.x,s.min.x)),a.y<s.min.y&&(a.y=this._viscousLimit(a.y,s.min.y)),a.x>s.max.x&&(a.x=this._viscousLimit(a.x,s.max.x)),a.y>s.max.y&&(a.y=this._viscousLimit(a.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(a)}},_onPreDragWrap:function(){var a=this._worldWidth,s=Math.round(a/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,v=(h-s+c)%a+s-c,x=(h+s+c)%a-s-c,R=Math.abs(v+c)<Math.abs(x+c)?v:x;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=R},_onDragEnd:function(a){var s=this._map,c=s.options,h=!c.inertia||a.noInertia||this._times.length<2;if(s.fire("dragend",a),h)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),x=(this._lastTime-this._times[0])/1e3,R=c.easeLinearity,N=v.multiplyBy(R/x),z=N.distanceTo([0,0]),k=Math.min(c.inertiaMaxSpeed,z),Y=N.multiplyBy(k/z),$=k/(c.inertiaDeceleration*R),st=Y.multiplyBy(-$/2).round();!st.x&&!st.y?s.fire("moveend"):(st=s._limitOffset(st,s.options.maxBounds),H(function(){s.panBy(st,{duration:$,easeLinearity:R,noMoveStart:!0,animate:!0})}))}}});mt.addInitHook("addHandler","dragging",yg),mt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var _g=Tn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(a){this._map=a,this._setPanDelta(a.options.keyboardPanDelta),this._setZoomDelta(a.options.zoomDelta)},addHooks:function(){var a=this._map._container;a.tabIndex<=0&&(a.tabIndex="0"),et(a,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ct(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var a=document.body,s=document.documentElement,c=a.scrollTop||s.scrollTop,h=a.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(a){var s=this._panKeys={},c=this.keyCodes,h,v;for(h=0,v=c.left.length;h<v;h++)s[c.left[h]]=[-1*a,0];for(h=0,v=c.right.length;h<v;h++)s[c.right[h]]=[a,0];for(h=0,v=c.down.length;h<v;h++)s[c.down[h]]=[0,a];for(h=0,v=c.up.length;h<v;h++)s[c.up[h]]=[0,-1*a]},_setZoomDelta:function(a){var s=this._zoomKeys={},c=this.keyCodes,h,v;for(h=0,v=c.zoomIn.length;h<v;h++)s[c.zoomIn[h]]=a;for(h=0,v=c.zoomOut.length;h<v;h++)s[c.zoomOut[h]]=-a},_addHooks:function(){et(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ct(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(a){if(!(a.altKey||a.ctrlKey||a.metaKey)){var s=a.keyCode,c=this._map,h;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[s],a.shiftKey&&(h=G(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(G(h),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(v)}else c.panBy(h)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(a.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;ta(a)}}});mt.addInitHook("addHandler","keyboard",_g),mt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var bg=Tn.extend({addHooks:function(){et(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ct(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(a){var s=Gp(a),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(a),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),h),ta(a)},_performZoom:function(){var a=this._map,s=a.getZoom(),c=this._map.options.zoomSnap||0;a._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,x=c?Math.ceil(v/c)*c:v,R=a._limitZoom(s+(this._delta>0?x:-x))-s;this._delta=0,this._startTime=null,R&&(a.options.scrollWheelZoom==="center"?a.setZoom(s+R):a.setZoomAround(this._lastMousePos,s+R))}});mt.addInitHook("addHandler","scrollWheelZoom",bg);var sE=600;mt.mergeOptions({tapHold:K.touchNative&&K.safari&&K.mobile,tapTolerance:15});var xg=Tn.extend({addHooks:function(){et(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ct(this._map._container,"touchstart",this._onDown,this)},_onDown:function(a){if(clearTimeout(this._holdTimeout),a.touches.length===1){var s=a.touches[0];this._startPos=this._newPos=new U(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(et(document,"touchend",ue),et(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),sE),et(document,"touchend touchcancel contextmenu",this._cancel,this),et(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function a(){Ct(document,"touchend",ue),Ct(document,"touchend touchcancel",a)},_cancel:function(){clearTimeout(this._holdTimeout),Ct(document,"touchend touchcancel contextmenu",this._cancel,this),Ct(document,"touchmove",this._onMove,this)},_onMove:function(a){var s=a.touches[0];this._newPos=new U(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(a,s){var c=new MouseEvent(a,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});mt.addInitHook("addHandler","tapHold",xg),mt.mergeOptions({touchZoom:K.touch,bounceAtZoomLimits:!0});var Tg=Tn.extend({addHooks:function(){ot(this._map._container,"leaflet-touch-zoom"),et(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ft(this._map._container,"leaflet-touch-zoom"),Ct(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(a){var s=this._map;if(!(!a.touches||a.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(a.touches[0]),h=s.mouseEventToContainerPoint(a.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),et(document,"touchmove",this._onTouchMove,this),et(document,"touchend touchcancel",this._onTouchEnd,this),ue(a)}},_onTouchMove:function(a){if(!(!a.touches||a.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(a.touches[0]),h=s.mouseEventToContainerPoint(a.touches[1]),v=c.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var x=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(v===1&&x.x===0&&x.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(x),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),q(this._animRequest);var R=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=H(R,this,!0),ue(a)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,q(this._animRequest),Ct(document,"touchmove",this._onTouchMove,this),Ct(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});mt.addInitHook("addHandler","touchZoom",Tg),mt.BoxZoom=gg,mt.DoubleClickZoom=vg,mt.Drag=yg,mt.Keyboard=_g,mt.ScrollWheelZoom=bg,mt.TapHold=xg,mt.TouchZoom=Tg,n.Bounds=at,n.Browser=K,n.CRS=zn,n.Canvas=dg,n.Circle=kc,n.CircleMarker=Gs,n.Class=X,n.Control=fn,n.DivIcon=ug,n.DivOverlay=Sn,n.DomEvent=Ew,n.DomUtil=Sw,n.Draggable=mi,n.Evented=F,n.FeatureGroup=Dn,n.GeoJSON=jn,n.GridLayer=or,n.Handler=Tn,n.Icon=Pa,n.ImageOverlay=Ks,n.LatLng=pt,n.LatLngBounds=Vt,n.Layer=dn,n.LayerGroup=Da,n.LineUtil=kw,n.Map=mt,n.Marker=qs,n.Mixin=Nw,n.Path=pi,n.Point=U,n.PolyUtil=zw,n.Polygon=ja,n.Polyline=Pn,n.Popup=Qs,n.PosAnimation=Ip,n.Projection=Vw,n.Rectangle=pg,n.Renderer=Bn,n.SVG=sr,n.SVGOverlay=lg,n.TileLayer=ka,n.Tooltip=$s,n.Transformation=cc,n.Util=bt,n.VideoOverlay=sg,n.bind=l,n.bounds=kt,n.canvas=hg,n.circle=Fw,n.circleMarker=Yw,n.control=nr,n.divIcon=nE,n.extend=o,n.featureGroup=qw,n.geoJSON=rg,n.geoJson=Qw,n.gridLayer=iE,n.icon=Gw,n.imageOverlay=$w,n.latLng=ht,n.latLngBounds=vt,n.layerGroup=Zw,n.map=Cw,n.marker=Iw,n.point=G,n.polygon=Kw,n.polyline=Xw,n.popup=tE,n.rectangle=rE,n.setOptions=E,n.stamp=f,n.svg=mg,n.svgOverlay=Jw,n.tileLayer=cg,n.tooltip=eE,n.transformation=Xo,n.version=i,n.videoOverlay=Ww;var lE=window.L;n.noConflict=function(){return window.L=lE,this},window.L=n})})(dh,dh.exports);var kD=dh.exports;const ze=Fi(kD);const FT=(t,e,n,i)=>{const r=xl(n-t),l=xl(i-e),u=Math.sin(r/2)*Math.sin(r/2)+Math.cos(xl(t))*Math.cos(xl(n))*Math.sin(l/2)*Math.sin(l/2);return 6371*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))},xl=t=>t*(Math.PI/180),XT=(t,e)=>{const n=[],i=new Set;return t.forEach(o=>{if(i.has(o.id))return;const r=[o];i.add(o.id);const l=[o];for(;l.length>0;){const u=l.shift();t.forEach(f=>{i.has(f.id)||FT(u.latitude,u.longitude,f.latitude,f.longitude)<=e&&(i.add(f.id),r.push(f),l.push(f))})}r.length>=3&&n.push(r)}),n},KT=t=>{if(t.length<3)return t;const e=t.slice().sort((r,l)=>r.latitude===l.latitude?r.longitude-l.longitude:r.latitude-l.latitude),n=(r,l,u)=>(l.longitude-r.longitude)*(u.latitude-r.latitude)-(l.latitude-r.latitude)*(u.longitude-r.longitude),i=[];for(let r=0;r<e.length;r++){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],e[r])<=0;)i.pop();i.push(e[r])}const o=[];for(let r=e.length-1;r>=0;r--){for(;o.length>=2&&n(o[o.length-2],o[o.length-1],e[r])<=0;)o.pop();o.push(e[r])}return o.pop(),i.pop(),i.concat(o)},VD=({markers:t,onMapClick:e,onCancelMarker:n,tempIcon:i="📍",onUpdateTempIcon:o})=>{const r=T.useRef(null),l=T.useRef(null),u=T.useRef(null),f=T.useRef(null),d=[[-33.9,-72],[-32,-70]],p=m=>`
      <div style="
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: pulse 1.5s ease-in-out infinite;
        overflow: hidden;
      ">
        ${typeof m=="string"&&(m.startsWith("/")||m.startsWith("http")||m.includes("assets"))?`<img src="${m}" style="
              width: 22px;
              height: 22px;
              object-fit: cover;
              border-radius: 50%;
              transform: rotate(45deg);
            " />`:`<span style="
              transform: rotate(45deg);
              font-size: 20px;
              filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
            ">${m}</span>`}
      </div>
    `;return T.useEffect(()=>{if(console.log("🗺️ InteractiveMap: Initialization useEffect triggered"),l.current||!r.current){console.log("🗺️ InteractiveMap: Map already initialized or ref not ready, skipping");return}const m=ze.map(r.current,{center:[-33.0472,-71.6127],zoom:9,minZoom:8,maxBounds:[[-34.5,-72.5],[-31.5,-69.5]],maxBoundsViscosity:1,zoomControl:!1});l.current=m,ze.control.zoom({position:"bottomright"}).addTo(m),ze.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy;
         <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
         <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:20}).addTo(m),ze.rectangle(d,{color:"#059669",weight:3,fillColor:"#34d399",fillOpacity:.1,dashArray:"10, 10",lineCap:"round"}).addTo(m),m.on("contextmenu",y=>{f.current&&m.removeLayer(f.current);const C=p("📍"),E=ze.divIcon({html:C,className:"temp-marker",iconSize:[40,40],iconAnchor:[20,40]}),A=ze.marker([y.latlng.lat,y.latlng.lng],{icon:E});A.addTo(m),f.current=A,e&&e(y.latlng)});const g=ze.layerGroup().addTo(m);return u.current=g,()=>{m.remove(),l.current=null}},[]),T.useEffect(()=>{if(console.log("🔍 InteractiveMap: Markers useEffect triggered",{markersCount:t.length}),!u.current){console.log("🔍 InteractiveMap: markersLayerRef not ready, skipping");return}console.log("🧹 InteractiveMap: Clearing markers layer"),u.current.clearLayers(),XT(t,5).forEach(g=>{if(g.length>=3)try{const C=KT(g).map(E=>[E.latitude,E.longitude]);ze.polygon(C,{color:"#3b82f6",weight:3,fillColor:"#60a5fa",fillOpacity:.2,lineCap:"round",lineJoin:"round",dashArray:"5, 10"}).addTo(u.current);for(let E=0;E<C.length;E++){const A=C[E],_=C[(E+1)%C.length],b=FT(A[0],A[1],_[0],_[1]);ze.polyline([A,_],{color:"transparent",weight:20,opacity:0}).bindTooltip(`${b.toFixed(2)} km`,{sticky:!0,direction:"center",className:"custom-distance-tooltip",opacity:1}).addTo(u.current)}}catch(y){console.error("Error calculating convex hull for cluster:",y)}}),t.forEach(g=>{const y=typeof g.icon=="string"&&(g.icon.startsWith("/")||g.icon.startsWith("http")||g.icon.includes("assets")),C=`
        <div style="
          background: linear-gradient(135deg, #34d399 0%, #06b6d4 100%);
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        ">
          ${y?`<img src="${g.icon}" style="
                width: 22px;
                height: 22px;
                object-fit: cover;
                border-radius: 50%;
                transform: rotate(45deg);
              " />`:`<span style="
                transform: rotate(45deg);
                font-size: 20px;
                filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
              ">${g.icon||"📍"}</span>`}
        </div>
      `,E=ze.divIcon({html:C,className:"custom-marker",iconSize:[40,40],iconAnchor:[20,40],popupAnchor:[0,-40]}),A=ze.marker([g.latitude,g.longitude],{icon:E}),b=`
        <div style="
          background: #ffffff;
          border: 2px solid #34d399;
          border-radius: 12px;
          padding: 16px;
          min-width: 200px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          position: relative;
        ">
          <button 
            onclick="this.closest('.leaflet-popup').querySelector('.leaflet-popup-close-button').click()"
            style="
              position: absolute;
              top: 8px;
              right: 8px;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              border: 2px solid #ffffff;
              color: white;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.2s ease;
              padding: 0;
              line-height: 1;
            "
            onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 8px rgba(0,  0,  0,  0.3)';"
            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 4px rgba(0,  0,  0,  0.2)';"
          >×</button>
          <div style="
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            padding-right: 24px;
          ">
            ${y?`<img src="${g.icon}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px;" />`:`<span style="font-size: 32px;">${g.icon||"📍"}</span>`}
            <h3 style="
              margin: 0;
              font-size: 18px;
              font-weight: bold;
              color: #059669;
            ">${g.name}</h3>
          </div>
          <p style="
            margin: 0;
            color: #475569;
            font-size: 14px;
            line-height: 1.5;
          ">${g.description}</p>
          <div style="
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            gap: 8px;
            font-size: 12px;
            color: #64748b;
          ">
            <span>📍 ${g.latitude.toFixed(2)}, ${g.longitude.toFixed(2)}</span>
          </div>
        </div>
      `;A.bindPopup(b,{maxWidth:300,className:"custom-popup",closeButton:!0}),A.addTo(u.current)})},[t]),T.useEffect(()=>{t.length>0&&f.current&&l.current&&(l.current.removeLayer(f.current),f.current=null)},[t]),T.useEffect(()=>{n&&(n.current=()=>{f.current&&l.current&&(l.current.removeLayer(f.current),f.current=null)})},[n]),T.useEffect(()=>{if(f.current&&l.current&&i){const m=p(i),g=ze.divIcon({html:m,className:"temp-marker",iconSize:[40,40],iconAnchor:[20,40]});f.current.setIcon(g)}},[i]),T.useEffect(()=>{o&&(o.current=m=>{if(f.current&&l.current){const g=p(m),y=ze.divIcon({html:g,className:"temp-marker",iconSize:[40,40],iconAnchor:[20,40]});f.current.setIcon(y)}})},[o]),w.jsxs(Rn.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"relative w-full h-[600px] rounded-2xl overflow-hidden border-4 border-white shadow-xl",children:[w.jsx("div",{ref:r,className:"w-full h-full z-10"}),w.jsx("style",{children:`
        .leaflet-container {
          background: #f0fdf4 !important; /* Light green background */
          font-family: 'DM Sans', sans-serif !important;
        }
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #34d399 !important;
        }
        .custom-marker, .temp-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-control-zoom {
          border: 2px solid #ffffff !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          margin-bottom: 20px !important;
          margin-right: 20px !important;
        }
        .leaflet-control-zoom a {
          background: #ffffff !important;
          color: #059669 !important;
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          font-size: 18px !important;
          font-weight: bold !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom a:hover {
          background: #ecfdf5 !important;
          color: #047857 !important;
        }
        .leaflet-control-zoom a:last-child {
          border-bottom: none !important;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(-45deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1) rotate(-45deg);
          }
        }
        .custom-distance-tooltip {
          background: rgba(255, 255, 255, 0.95) !important;
          border: 1px solid #3b82f6 !important;
          border-radius: 12px !important;
          color: #2563eb !important;
          font-weight: bold !important;
          font-size: 12px !important;
          padding: 4px 8px !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }
        .leaflet-popup-close-button {
          display: none !important;
        }
      `})]})};function QT(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=QT(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function $T(){for(var t,e,n=0,i="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=QT(t))&&(i&&(i+=" "),i+=e);return i}const ap="-",UD=t=>{const e=ZD(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:l=>{const u=l.split(ap);return u[0]===""&&u.length!==1&&u.shift(),WT(u,e)||HD(l)},getConflictingClassGroupIds:(l,u)=>{const f=n[l]||[];return u&&i[l]?[...f,...i[l]]:f}}},WT=(t,e)=>{var l;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),o=i?WT(t.slice(1),i):void 0;if(o)return o;if(e.validators.length===0)return;const r=t.join(ap);return(l=e.validators.find(({validator:u})=>u(r)))==null?void 0:l.classGroupId},M0=/^\[(.+)\]$/,HD=t=>{if(M0.test(t)){const e=M0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},ZD=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return GD(Object.entries(t.classGroups),n).forEach(([r,l])=>{hh(l,i,r,e)}),i},hh=(t,e,n,i)=>{t.forEach(o=>{if(typeof o=="string"){const r=o===""?e:L0(e,o);r.classGroupId=n;return}if(typeof o=="function"){if(qD(o)){hh(o(i),e,n,i);return}e.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([r,l])=>{hh(l,L0(e,r),n,i)})})},L0=(t,e)=>{let n=t;return e.split(ap).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},qD=t=>t.isThemeGetter,GD=(t,e)=>e?t.map(([n,i])=>{const o=i.map(r=>typeof r=="string"?e+r:typeof r=="object"?Object.fromEntries(Object.entries(r).map(([l,u])=>[e+l,u])):r);return[n,o]}):t,ID=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const o=(r,l)=>{n.set(r,l),e++,e>t&&(e=0,i=n,n=new Map)};return{get(r){let l=n.get(r);if(l!==void 0)return l;if((l=i.get(r))!==void 0)return o(r,l),l},set(r,l){n.has(r)?n.set(r,l):o(r,l)}}},JT="!",YD=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,o=e[0],r=e.length,l=u=>{const f=[];let d=0,p=0,m;for(let A=0;A<u.length;A++){let _=u[A];if(d===0){if(_===o&&(i||u.slice(A,A+r)===e)){f.push(u.slice(p,A)),p=A+r;continue}if(_==="/"){m=A;continue}}_==="["?d++:_==="]"&&d--}const g=f.length===0?u:u.substring(p),y=g.startsWith(JT),C=y?g.substring(1):g,E=m&&m>p?m-p:void 0;return{modifiers:f,hasImportantModifier:y,baseClassName:C,maybePostfixModifierPosition:E}};return n?u=>n({className:u,parseClassName:l}):l},FD=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},XD=t=>({cache:ID(t.cacheSize),parseClassName:YD(t),...UD(t)}),KD=/\s+/,QD=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:o}=e,r=[],l=t.trim().split(KD);let u="";for(let f=l.length-1;f>=0;f-=1){const d=l[f],{modifiers:p,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:y}=n(d);let C=!!y,E=i(C?g.substring(0,y):g);if(!E){if(!C){u=d+(u.length>0?" "+u:u);continue}if(E=i(g),!E){u=d+(u.length>0?" "+u:u);continue}C=!1}const A=FD(p).join(":"),_=m?A+JT:A,b=_+E;if(r.includes(b))continue;r.push(b);const S=o(E,C);for(let M=0;M<S.length;++M){const O=S[M];r.push(_+O)}u=d+(u.length>0?" "+u:u)}return u};function $D(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=tS(e))&&(i&&(i+=" "),i+=n);return i}const tS=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=tS(t[i]))&&(n&&(n+=" "),n+=e);return n};function WD(t,...e){let n,i,o,r=l;function l(f){const d=e.reduce((p,m)=>m(p),t());return n=XD(d),i=n.cache.get,o=n.cache.set,r=u,u(f)}function u(f){const d=i(f);if(d)return d;const p=QD(f,n);return o(f,p),p}return function(){return r($D.apply(null,arguments))}}const Lt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},eS=/^\[(?:([a-z-]+):)?(.+)\]$/i,JD=/^\d+\/\d+$/,tP=new Set(["px","full","screen"]),eP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,aP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,oP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,qn=t=>_o(t)||tP.has(t)||JD.test(t),vi=t=>Fo(t,"length",hP),_o=t=>!!t&&!Number.isNaN(Number(t)),Gf=t=>Fo(t,"number",_o),_r=t=>!!t&&Number.isInteger(Number(t)),rP=t=>t.endsWith("%")&&_o(t.slice(0,-1)),it=t=>eS.test(t),yi=t=>eP.test(t),sP=new Set(["length","size","percentage"]),lP=t=>Fo(t,sP,nS),uP=t=>Fo(t,"position",nS),cP=new Set(["image","url"]),fP=t=>Fo(t,cP,pP),dP=t=>Fo(t,"",mP),br=()=>!0,Fo=(t,e,n)=>{const i=eS.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},hP=t=>nP.test(t)&&!iP.test(t),nS=()=>!1,mP=t=>aP.test(t),pP=t=>oP.test(t),gP=()=>{const t=Lt("colors"),e=Lt("spacing"),n=Lt("blur"),i=Lt("brightness"),o=Lt("borderColor"),r=Lt("borderRadius"),l=Lt("borderSpacing"),u=Lt("borderWidth"),f=Lt("contrast"),d=Lt("grayscale"),p=Lt("hueRotate"),m=Lt("invert"),g=Lt("gap"),y=Lt("gradientColorStops"),C=Lt("gradientColorStopPositions"),E=Lt("inset"),A=Lt("margin"),_=Lt("opacity"),b=Lt("padding"),S=Lt("saturate"),M=Lt("scale"),O=Lt("sepia"),P=Lt("skew"),D=Lt("space"),B=Lt("translate"),Z=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],H=()=>["auto",it,e],q=()=>[it,e],bt=()=>["",qn,vi],X=()=>["auto",_o,it],ft=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],F=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],rt=()=>["","0",it],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],at=()=>[_o,it];return{cacheSize:500,separator:":",theme:{colors:[br],spacing:[qn,vi],blur:["none","",yi,it],brightness:at(),borderColor:[t],borderRadius:["none","","full",yi,it],borderSpacing:q(),borderWidth:bt(),contrast:at(),grayscale:rt(),hueRotate:at(),invert:rt(),gap:q(),gradientColorStops:[t],gradientColorStopPositions:[rP,vi],inset:H(),margin:H(),opacity:at(),padding:q(),saturate:at(),scale:at(),sepia:rt(),skew:at(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",it]}],container:["container"],columns:[{columns:[yi]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ft(),it]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[E]}],"inset-x":[{"inset-x":[E]}],"inset-y":[{"inset-y":[E]}],start:[{start:[E]}],end:[{end:[E]}],top:[{top:[E]}],right:[{right:[E]}],bottom:[{bottom:[E]}],left:[{left:[E]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_r,it]}],basis:[{basis:H()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",it]}],grow:[{grow:rt()}],shrink:[{shrink:rt()}],order:[{order:["first","last","none",_r,it]}],"grid-cols":[{"grid-cols":[br]}],"col-start-end":[{col:["auto",{span:["full",_r,it]},it]}],"col-start":[{"col-start":X()}],"col-end":[{"col-end":X()}],"grid-rows":[{"grid-rows":[br]}],"row-start-end":[{row:["auto",{span:[_r,it]},it]}],"row-start":[{"row-start":X()}],"row-end":[{"row-end":X()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",it]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",it]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[b]}],px:[{px:[b]}],py:[{py:[b]}],ps:[{ps:[b]}],pe:[{pe:[b]}],pt:[{pt:[b]}],pr:[{pr:[b]}],pb:[{pb:[b]}],pl:[{pl:[b]}],m:[{m:[A]}],mx:[{mx:[A]}],my:[{my:[A]}],ms:[{ms:[A]}],me:[{me:[A]}],mt:[{mt:[A]}],mr:[{mr:[A]}],mb:[{mb:[A]}],ml:[{ml:[A]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",it,e]}],"min-w":[{"min-w":[it,e,"min","max","fit"]}],"max-w":[{"max-w":[it,e,"none","full","min","max","fit","prose",{screen:[yi]},yi]}],h:[{h:[it,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[it,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[it,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[it,e,"auto","min","max","fit"]}],"font-size":[{text:["base",yi,vi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Gf]}],"font-family":[{font:[br]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",it]}],"line-clamp":[{"line-clamp":["none",_o,Gf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",qn,it]}],"list-image":[{"list-image":["none",it]}],"list-style-type":[{list:["none","disc","decimal",it]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",qn,vi]}],"underline-offset":[{"underline-offset":["auto",qn,it]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",it]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",it]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ft(),uP]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",lP]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},fP]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[r]}],"rounded-s":[{"rounded-s":[r]}],"rounded-e":[{"rounded-e":[r]}],"rounded-t":[{"rounded-t":[r]}],"rounded-r":[{"rounded-r":[r]}],"rounded-b":[{"rounded-b":[r]}],"rounded-l":[{"rounded-l":[r]}],"rounded-ss":[{"rounded-ss":[r]}],"rounded-se":[{"rounded-se":[r]}],"rounded-ee":[{"rounded-ee":[r]}],"rounded-es":[{"rounded-es":[r]}],"rounded-tl":[{"rounded-tl":[r]}],"rounded-tr":[{"rounded-tr":[r]}],"rounded-br":[{"rounded-br":[r]}],"rounded-bl":[{"rounded-bl":[r]}],"border-w":[{border:[u]}],"border-w-x":[{"border-x":[u]}],"border-w-y":[{"border-y":[u]}],"border-w-s":[{"border-s":[u]}],"border-w-e":[{"border-e":[u]}],"border-w-t":[{"border-t":[u]}],"border-w-r":[{"border-r":[u]}],"border-w-b":[{"border-b":[u]}],"border-w-l":[{"border-l":[u]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[u]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[u]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:V()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[qn,it]}],"outline-w":[{outline:[qn,vi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:bt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[qn,vi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",yi,dP]}],"shadow-color":[{shadow:[br]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...F(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",yi,it]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[S]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",it]}],duration:[{duration:at()}],ease:[{ease:["linear","in","out","in-out",it]}],delay:[{delay:at()}],animate:[{animate:["none","spin","ping","pulse","bounce",it]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[_r,it]}],"translate-x":[{"translate-x":[B]}],"translate-y":[{"translate-y":[B]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",it]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",it]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",it]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[qn,vi,Gf]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vP=WD(gP);function un(...t){return vP($T(t))}function R0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function rc(...t){return e=>{let n=!1;const i=t.map(o=>{const r=R0(o,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let o=0;o<i.length;o++){const r=i[o];typeof r=="function"?r():R0(t[o],null)}}}}function ci(...t){return T.useCallback(rc(...t),t)}var yP=Symbol.for("react.lazy"),Ou=Y0[" use ".trim().toString()];function _P(t){return typeof t=="object"&&t!==null&&"then"in t}function iS(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===yP&&"_payload"in t&&_P(t._payload)}function aS(t){const e=xP(t),n=T.forwardRef((i,o)=>{let{children:r,...l}=i;iS(r)&&typeof Ou=="function"&&(r=Ou(r._payload));const u=T.Children.toArray(r),f=u.find(SP);if(f){const d=f.props.children,p=u.map(m=>m===f?T.Children.count(d)>1?T.Children.only(null):T.isValidElement(d)?d.props.children:null:m);return w.jsx(e,{...l,ref:o,children:T.isValidElement(d)?T.cloneElement(d,void 0,p):null})}return w.jsx(e,{...l,ref:o,children:r})});return n.displayName=`${t}.Slot`,n}var bP=aS("Slot");function xP(t){const e=T.forwardRef((n,i)=>{let{children:o,...r}=n;if(iS(o)&&typeof Ou=="function"&&(o=Ou(o._payload)),T.isValidElement(o)){const l=EP(o),u=wP(r,o.props);return o.type!==T.Fragment&&(u.ref=i?rc(i,l):l),T.cloneElement(o,u)}return T.Children.count(o)>1?T.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var TP=Symbol("radix.slottable");function SP(t){return T.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===TP}function wP(t,e){const n={...e};for(const i in e){const o=t[i],r=e[i];/^on[A-Z]/.test(i)?o&&r?n[i]=(...u)=>{const f=r(...u);return o(...u),f}:o&&(n[i]=o):i==="style"?n[i]={...o,...r}:i==="className"&&(n[i]=[o,r].filter(Boolean).join(" "))}return{...t,...n}}function EP(t){var i,o;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(o=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}const O0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,N0=$T,op=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return N0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:r}=e,l=Object.keys(o).map(d=>{const p=n==null?void 0:n[d],m=r==null?void 0:r[d];if(p===null)return null;const g=O0(p)||O0(m);return o[d][g]}),u=n&&Object.entries(n).reduce((d,p)=>{let[m,g]=p;return g===void 0||(d[m]=g),d},{}),f=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((d,p)=>{let{class:m,className:g,...y}=p;return Object.entries(y).every(C=>{let[E,A]=C;return Array.isArray(A)?A.includes({...r,...u}[E]):{...r,...u}[E]===A})?[...d,m,g]:d},[]);return N0(t,l,f,n==null?void 0:n.class,n==null?void 0:n.className)},CP=op("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Fr=Bt.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...o},r)=>{const l=i?bP:"button";return w.jsx(l,{className:un(CP({variant:e,size:n,className:t})),ref:r,...o})});Fr.displayName="Button";const Ya=Bt.forwardRef(({className:t,type:e,...n},i)=>w.jsx("input",{type:e,className:un("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",t),ref:i,...n}));Ya.displayName="Input";var AP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],MP=AP.reduce((t,e)=>{const n=aS(`Primitive.${e}`),i=T.forwardRef((o,r)=>{const{asChild:l,...u}=o,f=l?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(f,{...u,ref:r})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{}),LP="Label",oS=T.forwardRef((t,e)=>w.jsx(MP.label,{...t,ref:e,onMouseDown:n=>{var o;n.target.closest("button, input, select, textarea")||((o=t.onMouseDown)==null||o.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));oS.displayName=LP;var rS=oS;const RP=op("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),In=Bt.forwardRef(({className:t,...e},n)=>w.jsx(rS,{ref:n,className:un(RP(),t),...e}));In.displayName=rS.displayName;const sS=Bt.forwardRef(({className:t,...e},n)=>w.jsx("textarea",{className:un("flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",t),ref:n,...e}));sS.displayName="Textarea";const OP=1;let If=0;function NP(){return If=(If+1)%Number.MAX_VALUE,If.toString()}const be={state:{toasts:[]},listeners:[],getState:()=>be.state,setState:t=>{typeof t=="function"?be.state=t(be.state):be.state={...be.state,...t},be.listeners.forEach(e=>e(be.state))},subscribe:t=>(be.listeners.push(t),()=>{be.listeners=be.listeners.filter(e=>e!==t)})},zP=({...t})=>{const e=NP(),n=o=>be.setState(r=>({...r,toasts:r.toasts.map(l=>l.id===e?{...l,...o}:l)})),i=()=>be.setState(o=>({...o,toasts:o.toasts.filter(r=>r.id!==e)}));return be.setState(o=>({...o,toasts:[{...t,id:e,dismiss:i},...o.toasts].slice(0,OP)})),{id:e,dismiss:i,update:n}};function rp(){const[t,e]=T.useState(be.getState());return T.useEffect(()=>be.subscribe(i=>{e(i)}),[]),T.useEffect(()=>{const n=[];return t.toasts.forEach(i=>{if(i.duration===1/0)return;const o=setTimeout(()=>{i.dismiss()},i.duration||5e3);n.push(o)}),()=>{n.forEach(i=>clearTimeout(i))}},[t.toasts]),{toast:zP,toasts:t.toasts}}function sp(t,e=[]){let n=[];function i(r,l){const u=T.createContext(l),f=n.length;n=[...n,l];const d=m=>{var _;const{scope:g,children:y,...C}=m,E=((_=g==null?void 0:g[t])==null?void 0:_[f])||u,A=T.useMemo(()=>C,Object.values(C));return w.jsx(E.Provider,{value:A,children:y})};d.displayName=r+"Provider";function p(m,g){var E;const y=((E=g==null?void 0:g[t])==null?void 0:E[f])||u,C=T.useContext(y);if(C)return C;if(l!==void 0)return l;throw new Error(`\`${m}\` must be used within \`${r}\``)}return[d,p]}const o=()=>{const r=n.map(l=>T.createContext(l));return function(u){const f=(u==null?void 0:u[t])||r;return T.useMemo(()=>({[`__scope${t}`]:{...u,[t]:f}}),[u,f])}};return o.scopeName=t,[i,DP(o,...e)]}function DP(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(r){const l=i.reduce((u,{useScope:f,scopeName:d})=>{const m=f(r)[`__scope${d}`];return{...u,...m}},{});return T.useMemo(()=>({[`__scope${e.scopeName}`]:l}),[l])}};return n.scopeName=e.scopeName,n}function xe(t,e,{checkForDefaultPrevented:n=!0}={}){return function(o){if(t==null||t(o),n===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}var Do=globalThis!=null&&globalThis.document?T.useLayoutEffect:()=>{},PP=Y0[" useInsertionEffect ".trim().toString()]||Do;function lS({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[o,r,l]=jP({defaultProp:e,onChange:n}),u=t!==void 0,f=u?t:o;{const p=T.useRef(t!==void 0);T.useEffect(()=>{const m=p.current;m!==u&&console.warn(`${i} is changing from ${m?"controlled":"uncontrolled"} to ${u?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),p.current=u},[u,i])}const d=T.useCallback(p=>{var m;if(u){const g=BP(p)?p(t):p;g!==t&&((m=l.current)==null||m.call(l,g))}else r(p)},[u,t,r,l]);return[f,d]}function jP({defaultProp:t,onChange:e}){const[n,i]=T.useState(t),o=T.useRef(n),r=T.useRef(e);return PP(()=>{r.current=e},[e]),T.useEffect(()=>{var l;o.current!==n&&((l=r.current)==null||l.call(r,n),o.current=n)},[n,o]),[n,i,r]}function BP(t){return typeof t=="function"}function kP(t){const e=T.useRef({value:t,previous:t});return T.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}function VP(t){const[e,n]=T.useState(void 0);return Do(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const r=o[0];let l,u;if("borderBoxSize"in r){const f=r.borderBoxSize,d=Array.isArray(f)?f[0]:f;l=d.inlineSize,u=d.blockSize}else l=t.offsetWidth,u=t.offsetHeight;n({width:l,height:u})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}function UP(t,e){return T.useReducer((n,i)=>e[n][i]??n,t)}var lp=t=>{const{present:e,children:n}=t,i=HP(e),o=typeof n=="function"?n({present:i.isPresent}):T.Children.only(n),r=ci(i.ref,ZP(o));return typeof n=="function"||i.isPresent?T.cloneElement(o,{ref:r}):null};lp.displayName="Presence";function HP(t){const[e,n]=T.useState(),i=T.useRef(null),o=T.useRef(t),r=T.useRef("none"),l=t?"mounted":"unmounted",[u,f]=UP(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return T.useEffect(()=>{const d=Tl(i.current);r.current=u==="mounted"?d:"none"},[u]),Do(()=>{const d=i.current,p=o.current;if(p!==t){const g=r.current,y=Tl(d);t?f("MOUNT"):y==="none"||(d==null?void 0:d.display)==="none"?f("UNMOUNT"):f(p&&g!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=t}},[t,f]),Do(()=>{if(e){let d;const p=e.ownerDocument.defaultView??window,m=y=>{const E=Tl(i.current).includes(CSS.escape(y.animationName));if(y.target===e&&E&&(f("ANIMATION_END"),!o.current)){const A=e.style.animationFillMode;e.style.animationFillMode="forwards",d=p.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=A)})}},g=y=>{y.target===e&&(r.current=Tl(i.current))};return e.addEventListener("animationstart",g),e.addEventListener("animationcancel",m),e.addEventListener("animationend",m),()=>{p.clearTimeout(d),e.removeEventListener("animationstart",g),e.removeEventListener("animationcancel",m),e.removeEventListener("animationend",m)}}else f("ANIMATION_END")},[e,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:T.useCallback(d=>{i.current=d?getComputedStyle(d):null,n(d)},[])}}function Tl(t){return(t==null?void 0:t.animationName)||"none"}function ZP(t){var i,o;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(o=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function qP(t){const e=GP(t),n=T.forwardRef((i,o)=>{const{children:r,...l}=i,u=T.Children.toArray(r),f=u.find(YP);if(f){const d=f.props.children,p=u.map(m=>m===f?T.Children.count(d)>1?T.Children.only(null):T.isValidElement(d)?d.props.children:null:m);return w.jsx(e,{...l,ref:o,children:T.isValidElement(d)?T.cloneElement(d,void 0,p):null})}return w.jsx(e,{...l,ref:o,children:r})});return n.displayName=`${t}.Slot`,n}function GP(t){const e=T.forwardRef((n,i)=>{const{children:o,...r}=n;if(T.isValidElement(o)){const l=XP(o),u=FP(r,o.props);return o.type!==T.Fragment&&(u.ref=i?rc(i,l):l),T.cloneElement(o,u)}return T.Children.count(o)>1?T.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var IP=Symbol("radix.slottable");function YP(t){return T.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===IP}function FP(t,e){const n={...e};for(const i in e){const o=t[i],r=e[i];/^on[A-Z]/.test(i)?o&&r?n[i]=(...u)=>{const f=r(...u);return o(...u),f}:o&&(n[i]=o):i==="style"?n[i]={...o,...r}:i==="className"&&(n[i]=[o,r].filter(Boolean).join(" "))}return{...t,...n}}function XP(t){var i,o;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(o=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var KP=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ye=KP.reduce((t,e)=>{const n=qP(`Primitive.${e}`),i=T.forwardRef((o,r)=>{const{asChild:l,...u}=o,f=l?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(f,{...u,ref:r})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function uS(t,e){t&&Pu.flushSync(()=>t.dispatchEvent(e))}var sc="Checkbox",[QP,a5]=sp(sc),[$P,up]=QP(sc);function WP(t){const{__scopeCheckbox:e,checked:n,children:i,defaultChecked:o,disabled:r,form:l,name:u,onCheckedChange:f,required:d,value:p="on",internal_do_not_use_render:m}=t,[g,y]=lS({prop:n,defaultProp:o??!1,onChange:f,caller:sc}),[C,E]=T.useState(null),[A,_]=T.useState(null),b=T.useRef(!1),S=C?!!l||!!C.closest("form"):!0,M={checked:g,disabled:r,setChecked:y,control:C,setControl:E,name:u,form:l,value:p,hasConsumerStoppedPropagationRef:b,required:d,defaultChecked:Ui(o)?!1:o,isFormControl:S,bubbleInput:A,setBubbleInput:_};return w.jsx($P,{scope:e,...M,children:JP(m)?m(M):i})}var cS="CheckboxTrigger",fS=T.forwardRef(({__scopeCheckbox:t,onKeyDown:e,onClick:n,...i},o)=>{const{control:r,value:l,disabled:u,checked:f,required:d,setControl:p,setChecked:m,hasConsumerStoppedPropagationRef:g,isFormControl:y,bubbleInput:C}=up(cS,t),E=ci(o,p),A=T.useRef(f);return T.useEffect(()=>{const _=r==null?void 0:r.form;if(_){const b=()=>m(A.current);return _.addEventListener("reset",b),()=>_.removeEventListener("reset",b)}},[r,m]),w.jsx(Ye.button,{type:"button",role:"checkbox","aria-checked":Ui(f)?"mixed":f,"aria-required":d,"data-state":gS(f),"data-disabled":u?"":void 0,disabled:u,value:l,...i,ref:E,onKeyDown:xe(e,_=>{_.key==="Enter"&&_.preventDefault()}),onClick:xe(n,_=>{m(b=>Ui(b)?!0:!b),C&&y&&(g.current=_.isPropagationStopped(),g.current||_.stopPropagation())})})});fS.displayName=cS;var cp=T.forwardRef((t,e)=>{const{__scopeCheckbox:n,name:i,checked:o,defaultChecked:r,required:l,disabled:u,value:f,onCheckedChange:d,form:p,...m}=t;return w.jsx(WP,{__scopeCheckbox:n,checked:o,defaultChecked:r,disabled:u,required:l,onCheckedChange:d,name:i,form:p,value:f,internal_do_not_use_render:({isFormControl:g})=>w.jsxs(w.Fragment,{children:[w.jsx(fS,{...m,ref:e,__scopeCheckbox:n}),g&&w.jsx(pS,{__scopeCheckbox:n})]})})});cp.displayName=sc;var dS="CheckboxIndicator",hS=T.forwardRef((t,e)=>{const{__scopeCheckbox:n,forceMount:i,...o}=t,r=up(dS,n);return w.jsx(lp,{present:i||Ui(r.checked)||r.checked===!0,children:w.jsx(Ye.span,{"data-state":gS(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:e,style:{pointerEvents:"none",...t.style}})})});hS.displayName=dS;var mS="CheckboxBubbleInput",pS=T.forwardRef(({__scopeCheckbox:t,...e},n)=>{const{control:i,hasConsumerStoppedPropagationRef:o,checked:r,defaultChecked:l,required:u,disabled:f,name:d,value:p,form:m,bubbleInput:g,setBubbleInput:y}=up(mS,t),C=ci(n,y),E=kP(r),A=VP(i);T.useEffect(()=>{const b=g;if(!b)return;const S=window.HTMLInputElement.prototype,O=Object.getOwnPropertyDescriptor(S,"checked").set,P=!o.current;if(E!==r&&O){const D=new Event("click",{bubbles:P});b.indeterminate=Ui(r),O.call(b,Ui(r)?!1:r),b.dispatchEvent(D)}},[g,E,r,o]);const _=T.useRef(Ui(r)?!1:r);return w.jsx(Ye.input,{type:"checkbox","aria-hidden":!0,defaultChecked:l??_.current,required:u,disabled:f,name:d,value:p,form:m,...e,tabIndex:-1,ref:C,style:{...e.style,...A,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});pS.displayName=mS;function JP(t){return typeof t=="function"}function Ui(t){return t==="indeterminate"}function gS(t){return Ui(t)?"indeterminate":t?"checked":"unchecked"}const vS=T.forwardRef(({className:t,...e},n)=>w.jsx(cp,{ref:n,className:un("peer h-4 w-4 shrink-0 rounded-sm border border-emerald-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white",t),...e,children:w.jsx(hS,{className:un("flex items-center justify-center text-current"),children:w.jsx(ED,{className:"h-4 w-4"})})}));vS.displayName=cp.displayName;const fp="/assets/icono (1)-abd9cd31.jpg",t3="/assets/icono (2)-3c64d489.jpg",e3="/assets/icono (3)-8fb2a11d.jpg",n3="/assets/icono (4)-bb4a57e0.jpg",i3="/assets/icono (5)-cddd47de.jpg",a3="/assets/icono (6)-aeadbde6.jpg",o3="/assets/icono (7)-0deaab41.jpg",r3="/assets/icono (8)-b9d36d53.jpg",s3="/assets/icono (9)-5aaef5b7.jpg",l3="/assets/icono (10)-a91733d3.jpg",u3=[fp,t3,e3,n3,i3,a3,o3,r3,s3,l3],c3=({onSubmit:t,onCancel:e,initialData:n,editingMarker:i,tempIcon:o,onIconChange:r})=>{const[l,u]=T.useState({name:"",description:"",latitude:"",longitude:"",icon:fp,hasExpiration:!1,expirationDate:"",expirationTime:""}),{toast:f}=rp();T.useEffect(()=>{if(i){const m=i.expirationTimestamp?new Date(i.expirationTimestamp).toISOString().split("T")[0]:"",g=i.expirationTimestamp?new Date(i.expirationTimestamp).toTimeString().slice(0,5):"";u({name:i.name,description:i.description,latitude:i.latitude,longitude:i.longitude,icon:i.icon,hasExpiration:!!i.expirationTimestamp,expirationDate:m,expirationTime:g})}else n&&u(m=>({...m,latitude:n.latitude,longitude:n.longitude}))},[n,i]),T.useEffect(()=>{o&&o!=="👁️"&&u(m=>({...m,icon:o}))},[o]);const d=m=>{if(m.preventDefault(),!l.name||!l.latitude||!l.longitude){f({variant:"destructive",title:"Información Faltante",description:"Por favor completa todos los campos requeridos."});return}const g=parseFloat(l.latitude),y=parseFloat(l.longitude);if(isNaN(g)||isNaN(y)){f({variant:"destructive",title:"Coordenadas Inválidas",description:"La latitud y longitud deben ser números válidos."});return}if(l.hasExpiration&&(!l.expirationDate||!l.expirationTime)){f({variant:"destructive",title:"Fecha de Expiración Incompleta",description:"Por favor completa la fecha y hora de expiración."});return}let C=null;if(l.hasExpiration){const E=new Date(`${l.expirationDate}T${l.expirationTime}`);if(E<=new Date){f({variant:"destructive",title:"Fecha Inválida",description:"La fecha de expiración debe ser en el futuro."});return}C=E.getTime()}t({name:l.name,description:l.description,latitude:g,longitude:y,icon:l.icon,expirationTimestamp:C})},p=m=>{u({...l,icon:m}),r&&r(m)};return w.jsxs(Rn.form,{initial:{opacity:0},animate:{opacity:1},className:"space-y-6",onSubmit:d,children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-md shadow-emerald-500/20",children:w.jsx(PD,{className:"w-5 h-5 text-white"})}),w.jsx("h2",{className:"text-xl font-bold text-emerald-900",children:i?"Editar Marcador":"Agregar Nuevo Marcador"})]}),w.jsx(Fr,{type:"button",variant:"ghost",size:"icon",onClick:e,className:"text-slate-400 hover:text-slate-600 hover:bg-slate-100",children:w.jsx(YT,{className:"w-5 h-5"})})]}),w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"name",className:"text-emerald-900 font-medium flex items-center gap-2",children:[w.jsx(IT,{className:"w-4 h-4 text-emerald-500"}),"Nombre del Lugar"]}),w.jsx(Ya,{id:"name",placeholder:"ej., Puerto de Valparaíso",value:l.name,onChange:m=>u({...l,name:m.target.value}),className:"bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"description",className:"text-emerald-900 font-medium flex items-center gap-2",children:[w.jsx(LD,{className:"w-4 h-4 text-emerald-500"}),"Descripción"]}),w.jsx(sS,{id:"description",placeholder:"Cuéntanos sobre este lugar...",value:l.description,onChange:m=>u({...l,description:m.target.value}),className:"bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400 min-h-[100px]"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"latitude",className:"text-emerald-900 font-medium flex items-center gap-2",children:[w.jsx(A0,{className:"w-4 h-4 text-emerald-500"}),"Latitud"]}),w.jsx(Ya,{id:"latitude",placeholder:"-33.0472",value:l.latitude,onChange:m=>u({...l,latitude:m.target.value}),className:"bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"longitude",className:"text-emerald-900 font-medium flex items-center gap-2",children:[w.jsx(A0,{className:"w-4 h-4 text-emerald-500"}),"Longitud"]}),w.jsx(Ya,{id:"longitude",placeholder:"-71.6127",value:l.longitude,onChange:m=>u({...l,longitude:m.target.value}),className:"bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"})]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx(In,{className:"text-emerald-900 font-medium",children:"Selecciona un Ícono"}),w.jsx("div",{className:"grid grid-cols-5 gap-2 p-2 bg-emerald-50/50 rounded-lg border border-emerald-100",children:u3.map((m,g)=>w.jsx("button",{type:"button",onClick:()=>p(m),className:`p-1 rounded-md transition-all hover:scale-110 ${l.icon===m?"bg-white shadow-md shadow-emerald-500/10 scale-110 ring-2 ring-emerald-400":"hover:bg-white/50"}`,children:w.jsx("img",{src:m,alt:`Icono ${g+1}`,className:"w-full h-12 object-cover rounded"})},g))})]}),w.jsxs("div",{className:"space-y-3 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 shadow-sm",children:[w.jsxs("div",{className:"flex items-center space-x-3",children:[w.jsx(vS,{id:"hasExpiration",checked:l.hasExpiration,onCheckedChange:m=>u({...l,hasExpiration:m}),className:"border-amber-400 data-[state=checked]:bg-amber-500"}),w.jsxs(In,{htmlFor:"hasExpiration",className:"text-emerald-900 font-semibold flex items-center gap-2 cursor-pointer",children:[w.jsx(fh,{className:"w-5 h-5 text-amber-600"}),"Marcador Temporal (Opcional)"]})]}),l.hasExpiration&&w.jsxs(Rn.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"space-y-3 pt-2",children:[w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"expirationDate",className:"text-sm font-semibold text-emerald-900 flex items-center gap-2",children:[w.jsx(wD,{className:"w-4 h-4 text-amber-600"}),"Fecha de Expiración"]}),w.jsx("div",{className:"relative",children:w.jsx(Ya,{id:"expirationDate",type:"date",value:l.expirationDate,onChange:m=>u({...l,expirationDate:m.target.value}),className:"bg-white border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 text-emerald-900 font-medium pl-3 pr-3 py-2.5 rounded-lg shadow-sm"})})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsxs(In,{htmlFor:"expirationTime",className:"text-sm font-semibold text-emerald-900 flex items-center gap-2",children:[w.jsx(fh,{className:"w-4 h-4 text-amber-600"}),"Hora de Expiración"]}),w.jsx("div",{className:"relative",children:w.jsx(Ya,{id:"expirationTime",type:"time",value:l.expirationTime,onChange:m=>u({...l,expirationTime:m.target.value}),className:"bg-white border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 text-emerald-900 font-medium pl-3 pr-3 py-2.5 rounded-lg shadow-sm"})})]})]}),l.hasExpiration&&w.jsxs("div",{className:"flex items-start gap-2 p-3 bg-amber-100/60 border border-amber-300 rounded-lg mt-3",children:[w.jsx("span",{className:"text-lg",children:"⏰"}),w.jsx("p",{className:"text-xs text-amber-800 font-medium leading-relaxed",children:"Este marcador se eliminará automáticamente en la fecha y hora especificada."})]})]}),w.jsxs("div",{className:"flex gap-3 pt-4",children:[w.jsx(Fr,{type:"button",variant:"outline",onClick:e,className:"flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800",children:"Cancelar"}),w.jsx(Fr,{type:"submit",className:"flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white shadow-lg shadow-emerald-500/20 border-0",children:i?"Actualizar Marcador":"Agregar Marcador"})]})]})]})},f3=()=>{const[t,e]=T.useState([]),[n,i]=T.useState([]),[o,r]=T.useState(!1),[l,u]=T.useState(null),[f,d]=T.useState("👁️"),[p,m]=T.useState(null),[g,y]=T.useState(0),C=T.useRef(null),E=T.useRef(null),{toast:A}=rp();T.useEffect(()=>{_(),b()},[]),T.useEffect(()=>{if(t.length<3){i([]);return}const q=XT(t,5).map(bt=>KT(bt).map(ft=>[ft.latitude,ft.longitude]));i(q)},[t]),T.useEffect(()=>{const H=()=>{const bt=Date.now(),X=t.filter(ft=>ft.expirationTimestamp&&ft.expirationTimestamp<=bt);if(X.length>0){const ft=t.filter(V=>!V.expirationTimestamp||V.expirationTimestamp>bt);e(ft),localStorage.setItem("mapMarkers",JSON.stringify(ft)),X.forEach(V=>{A({title:"Marcador Expirado",description:`El marcador "${V.name}" ha sido eliminado automáticamente.`,className:"bg-amber-50 border-amber-200 text-amber-900"})})}};H();const q=setInterval(H,6e4);return()=>clearInterval(q)},[t,A]);const _=()=>{const H=localStorage.getItem("mapMarkers");H&&e(JSON.parse(H))},b=()=>{const H=localStorage.getItem("mapClicks");H&&y(parseInt(H,10))},S=H=>{let q;p?(q=t.map(bt=>bt.id===p.id?{...H,id:p.id}:bt),A({title:"¡Marcador Actualizado!",description:"El marcador ha sido actualizado exitosamente.",className:"bg-blue-50 border-blue-200 text-blue-900"})):(q=[...t,{...H,id:Date.now()}],A({title:"¡Marcador Agregado!",description:"Tu nueva ubicación ha sido guardada en el mapa.",className:"bg-emerald-50 border-emerald-200 text-emerald-900"})),e(q),localStorage.setItem("mapMarkers",JSON.stringify(q)),r(!1),u(null),m(null)},M=H=>{const q=t.filter(bt=>bt.id!==H);e(q),localStorage.setItem("mapMarkers",JSON.stringify(q)),A({title:"Marcador Eliminado",description:"El marcador ha sido eliminado del mapa.",className:"bg-red-50 border-red-200 text-red-900"})},O=H=>{m(H),u({latitude:H.latitude,longitude:H.longitude}),d(H.icon),r(!0)},P=H=>{const q=g+1;y(q),localStorage.setItem("mapClicks",q.toString()),u({latitude:H.lat,longitude:H.lng}),d(fp),r(!0),A({title:"Ubicación Seleccionada",description:"Completa el formulario para agregar un marcador en esta ubicación.",className:"bg-emerald-50 border-emerald-200 text-emerald-900"})},D=()=>{r(!1),u(null),m(null),d("👁️"),C.current&&C.current()},B=H=>{d(H),E.current&&E.current(H)},Z=H=>typeof H=="string"&&(H.startsWith("/")||H.startsWith("http")||H.includes("assets")),I=H=>{if(!H)return null;const q=Date.now(),bt=H-q;if(bt<=0)return"Expirado";const X=Math.floor(bt/(1e3*60*60*24)),ft=Math.floor(bt%(1e3*60*60*24)/(1e3*60*60)),V=Math.floor(bt%(1e3*60*60)/(1e3*60));return X>0?`${X}d ${ft}h`:ft>0?`${ft}h ${V}m`:`${V}m`};return w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50",children:[w.jsx("nav",{className:"bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm",children:w.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:"flex items-center justify-between h-16",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-lg shadow-emerald-500/20",children:w.jsx(Ru,{className:"w-6 h-6 text-white"})}),w.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent",children:"Explorador de Valparaíso"})]}),w.jsxs(gn,{to:"/",className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200",children:[w.jsx(GT,{className:"w-4 h-4"}),"Volver al Inicio"]})]})})}),w.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[w.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[w.jsx(VD,{markers:t,onMapClick:P,onCancelMarker:C,tempIcon:f,onUpdateTempIcon:E}),w.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-lg shadow-emerald-900/5",children:[w.jsx("div",{className:"flex items-center justify-between mb-4",children:w.jsxs("h2",{className:"text-xl font-semibold text-emerald-900 flex items-center gap-2",children:[w.jsx(IT,{className:"w-5 h-5 text-emerald-500"}),"Marcadores Activos"]})}),w.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.map(H=>w.jsxs(Rn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.9},className:"p-4 rounded-lg bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 transition-colors relative group",children:[w.jsxs("div",{className:"absolute top-2 right-2 flex gap-1",children:[w.jsx("button",{onClick:()=>O(H),className:"p-1.5 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 shadow-md",title:"Editar marcador",children:w.jsx(DD,{className:"w-4 h-4"})}),w.jsx("button",{onClick:()=>M(H.id),className:"p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md",title:"Eliminar marcador",children:w.jsx(jD,{className:"w-4 h-4"})})]}),w.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[Z(H.icon)?w.jsx("img",{src:H.icon,alt:"Icono",className:"w-8 h-8 object-cover rounded"}):w.jsx("span",{className:"text-2xl",children:H.icon}),w.jsx("h3",{className:"font-medium text-emerald-900 pr-16",children:H.name})]}),w.jsx("p",{className:"text-sm text-slate-600 line-clamp-2",children:H.description}),H.expirationTimestamp&&w.jsxs("div",{className:"mt-2 flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded",children:[w.jsx(fh,{className:"w-3 h-3"}),w.jsxs("span",{children:["Expira en: ",I(H.expirationTimestamp)]})]})]},H.id)),t.length===0&&w.jsx("p",{className:"text-slate-500 col-span-2 text-center py-8",children:'No hay marcadores aún. ¡Haz clic en "Agregar Marcador" o clic derecho en el mapa para crear uno!'})]})]})]}),w.jsx("div",{className:"lg:col-span-1",children:w.jsx(Rn.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"sticky top-24",children:o?w.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-xl shadow-emerald-900/5",children:w.jsx(c3,{onSubmit:S,onCancel:D,initialData:l,editingMarker:p,tempIcon:f,onIconChange:B})}):w.jsxs("div",{className:"bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl p-8 text-white shadow-xl shadow-emerald-500/20 text-center",children:[w.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Explora la Región"}),w.jsx("p",{className:"text-emerald-50 mb-6",children:"Descubre joyas ocultas, sitios históricos y hermosos paisajes en la región de Valparaíso."}),w.jsx(Fr,{variant:"secondary",className:"bg-white text-emerald-600 hover:bg-emerald-50 border-0 w-full",onClick:()=>r(!0),children:"Comenzar a Mapear"})]})})})]})})]})},d3=()=>w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans text-slate-800",children:[w.jsx("nav",{className:"bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm",children:w.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:"flex items-center justify-between h-20",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-lg shadow-emerald-500/20",children:w.jsx(Ru,{className:"w-6 h-6 text-white"})}),w.jsxs("div",{className:"flex flex-col",children:[w.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent leading-none",children:"Nuestra Quinta Costa"}),w.jsx("span",{className:"text-xs text-emerald-600 font-medium tracking-wider uppercase",children:"Memorias Bioculturales"})]})]}),w.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[w.jsx(gn,{to:"/about",className:"text-slate-600 hover:text-emerald-600 font-medium transition-colors",children:"Sobre Nosotros"}),w.jsx(gn,{to:"#",className:"text-slate-600 hover:text-emerald-600 font-medium transition-colors",children:"Comunidad"}),w.jsxs(gn,{to:"/map",className:"px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2",children:[w.jsx(MD,{size:18}),"Espacios Bioculturales"]})]})]})})}),w.jsxs("header",{className:"relative w-full overflow-hidden",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-white/50 z-10"}),w.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-3xl -z-10 animate-pulse"}),w.jsx("div",{className:"absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl -z-10"}),w.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20",children:w.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[w.jsxs(Rn.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},children:[w.jsx("span",{className:"inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide mb-6",children:"🌿 Conectando Naturaleza y Cultura"}),w.jsxs("h1",{className:"text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6",children:["Descubre la ",w.jsx("br",{}),w.jsx("span",{className:"bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent",children:"Riqueza Biocultural"})]}),w.jsx("p",{className:"text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg",children:"Un viaje por las memorias vivas de Valparaíso, donde las tradiciones ancestrales se entrelazan con la biodiversidad de nuestra costa."}),w.jsxs("div",{className:"flex flex-wrap gap-4",children:[w.jsxs(gn,{to:"/map",className:"px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all flex items-center gap-2",children:["Explorar Mapa ",w.jsx(SD,{size:20})]}),w.jsx(gn,{to:"/about",className:"px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-100 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all",children:"Saber Más"})]})]}),w.jsx(Rn.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2},className:"relative",children:w.jsxs("div",{className:"relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 rotate-2 hover:rotate-0 transition-transform duration-500 group",children:[w.jsx("img",{src:"https://images.unsplash.com/photo-1595231776515-dd48c07f32B8?q=80&w=2670&auto=format&fit=crop",alt:"Costa de Valparaíso",className:"w-full h-[500px] object-cover"}),w.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"}),w.jsxs("div",{className:"absolute bottom-6 left-6 text-white",children:[w.jsx("p",{className:"font-bold text-xl",children:"Valparaíso"}),w.jsx("p",{className:"text-emerald-100",children:"Patrimonio Natural y Cultural"})]})]})})]})})]}),w.jsx("section",{className:"py-20 bg-white/60 backdrop-blur-sm",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[w.jsx("h2",{className:"text-3xl font-bold text-slate-800 mb-16",children:"Nuestros Pilares"}),w.jsx("div",{className:"grid md:grid-cols-3 gap-10",children:[{icon:OD,title:"Naturaleza",desc:"Biodiversidad única de la zona central de Chile.",color:"bg-emerald-100 text-emerald-600"},{icon:TD,title:"Historia",desc:"Tradiciones pesqueras y portuarias centenarias.",color:"bg-cyan-100 text-cyan-600"},{icon:BD,title:"Comunidad",desc:"Saberes compartidos por las personas del territorio.",color:"bg-orange-100 text-orange-600"}].map((t,e)=>w.jsxs(Rn.div,{whileHover:{y:-10},className:"bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100",children:[w.jsx("div",{className:`w-16 h-16 ${t.color} rounded-2xl flex items-center justify-center mx-auto mb-6`,children:w.jsx(t.icon,{size:32})}),w.jsx("h3",{className:"text-xl font-bold mb-3 text-slate-700",children:t.title}),w.jsx("p",{className:"text-slate-500 leading-relaxed",children:t.desc})]},e))})]})}),w.jsx("section",{className:"py-20",children:w.jsx("div",{className:"max-w-5xl mx-auto px-4",children:w.jsxs("div",{className:"bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl",children:[w.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"}),w.jsxs("div",{className:"relative z-10",children:[w.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"¿Listo para explorar?"}),w.jsx("p",{className:"text-emerald-100 text-lg mb-8 max-w-2xl mx-auto",children:"Sumérgete en el mapa interactivo y colabora agregando tus propios hallazgos y memorias."}),w.jsxs(gn,{to:"/map",className:"inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg",children:[w.jsx(Ru,{size:20}),"Ir al Mapa Interactivo"]})]})]})})}),w.jsx("footer",{className:"bg-white border-t border-slate-100 py-12 text-center text-slate-400",children:w.jsx("p",{children:"© 2025 Nuestra Quinta Costa - UPLA / DGI"})})]}),h3=()=>{const t=[{id:1,name:"Felipe Vergara Zárate",role:"Desarrollador Full Stack & Coordinador TI",description:"Desarrollador y coordinador principal de la infraestructura tecnológica y el desarrollo de la aplicación web.",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",social:{github:"#",linkedin:"#"}},{id:2,name:"Equipo BioMemorias",role:"Investigación y Contenido",description:"Grupo multidisciplinario dedicado al rescate y preservación de las memorias bioculturales de la Quinta Costa.",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",social:{mail:"contacto@biomemorias.cl"}}],[e,n]=T.useState(0),i=()=>{n(r=>(r+1)%t.length)},o=()=>{n(r=>(r-1+t.length)%t.length)};return w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 font-sans text-slate-800",children:[w.jsx("nav",{className:"bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm",children:w.jsx("div",{className:"max-w-7xl mx-auto px-4",children:w.jsxs("div",{className:"flex items-center justify-between h-20",children:[w.jsxs(gn,{to:"/",className:"flex items-center gap-3 group",children:[w.jsx("div",{className:"p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform",children:w.jsx(Ru,{className:"w-6 h-6 text-white"})}),w.jsx("div",{className:"flex flex-col",children:w.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent leading-none",children:"Nuestra Quinta Costa"})})]}),w.jsxs(gn,{to:"/",className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200",children:[w.jsx(GT,{size:16})," Volver"]})]})})}),w.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]",children:[w.jsxs(Rn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-16",children:[w.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-slate-800 mb-4",children:"Colaboran"}),w.jsx("div",{className:"w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"}),w.jsx("p",{className:"mt-6 text-slate-600 max-w-2xl mx-auto text-lg",children:"Conoce a las personas que hacen posible este proyecto de rescate y valoración biocultural."})]}),w.jsxs("div",{className:"relative w-full max-w-4xl mx-auto",children:[w.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/contour-line.png')] opacity-10 pointer-events-none"}),w.jsxs("div",{className:"relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-16 flex flex-col items-center",children:[w.jsx(QL,{mode:"wait",children:w.jsxs(Rn.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"flex flex-col items-center text-center",children:[w.jsxs("div",{className:"relative mb-8 group",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),w.jsx("img",{src:t[e].image,alt:t[e].name,className:"relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl"})]}),w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-2",children:t[e].name}),w.jsx("p",{className:"text-emerald-600 font-bold uppercase tracking-wider text-sm mb-6",children:t[e].role}),w.jsxs("blockquote",{className:"text-xl md:text-2xl italic text-slate-600 max-w-2xl leading-relaxed mb-8 relative",children:[w.jsx("span",{className:"text-6xl text-emerald-200 absolute -top-8 -left-8 font-serif",children:'"'}),t[e].description,w.jsx("span",{className:"text-6xl text-emerald-200 absolute -bottom-12 -right-4 font-serif",children:'"'})]}),w.jsxs("div",{className:"flex gap-4 mt-4",children:[t[e].social.github&&w.jsx("a",{href:t[e].social.github,className:"p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all",children:w.jsx(RD,{size:24})}),t[e].social.linkedin&&w.jsx("a",{href:t[e].social.linkedin,className:"p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all",children:w.jsx(ND,{size:24})}),t[e].social.mail&&w.jsx("a",{href:`mailto:${t[e].social.mail}`,className:"p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all",children:w.jsx(zD,{size:24})})]})]},e)}),w.jsx("button",{onClick:o,className:"absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 rounded-full shadow-lg border border-slate-100 transition-all hover:scale-110",children:w.jsx(CD,{size:32})}),w.jsx("button",{onClick:i,className:"absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 rounded-full shadow-lg border border-slate-100 transition-all hover:scale-110",children:w.jsx(AD,{size:32})}),w.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2",children:t.map((r,l)=>w.jsx("button",{onClick:()=>n(l),className:`w-3 h-3 rounded-full transition-all ${l===e?"bg-emerald-500 w-8":"bg-slate-300 hover:bg-emerald-300"}`},l))})]})]})]})]})};function z0(t){const e=m3(t),n=T.forwardRef((i,o)=>{const{children:r,...l}=i,u=T.Children.toArray(r),f=u.find(g3);if(f){const d=f.props.children,p=u.map(m=>m===f?T.Children.count(d)>1?T.Children.only(null):T.isValidElement(d)?d.props.children:null:m);return w.jsx(e,{...l,ref:o,children:T.isValidElement(d)?T.cloneElement(d,void 0,p):null})}return w.jsx(e,{...l,ref:o,children:r})});return n.displayName=`${t}.Slot`,n}function m3(t){const e=T.forwardRef((n,i)=>{const{children:o,...r}=n;if(T.isValidElement(o)){const l=y3(o),u=v3(r,o.props);return o.type!==T.Fragment&&(u.ref=i?rc(i,l):l),T.cloneElement(o,u)}return T.Children.count(o)>1?T.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var p3=Symbol("radix.slottable");function g3(t){return T.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===p3}function v3(t,e){const n={...e};for(const i in e){const o=t[i],r=e[i];/^on[A-Z]/.test(i)?o&&r?n[i]=(...u)=>{const f=r(...u);return o(...u),f}:o&&(n[i]=o):i==="style"?n[i]={...o,...r}:i==="className"&&(n[i]=[o,r].filter(Boolean).join(" "))}return{...t,...n}}function y3(t){var i,o;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(o=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function _3(t){const e=t+"CollectionProvider",[n,i]=sp(e),[o,r]=n(e,{collectionRef:{current:null},itemMap:new Map}),l=E=>{const{scope:A,children:_}=E,b=Bt.useRef(null),S=Bt.useRef(new Map).current;return w.jsx(o,{scope:A,itemMap:S,collectionRef:b,children:_})};l.displayName=e;const u=t+"CollectionSlot",f=z0(u),d=Bt.forwardRef((E,A)=>{const{scope:_,children:b}=E,S=r(u,_),M=ci(A,S.collectionRef);return w.jsx(f,{ref:M,children:b})});d.displayName=u;const p=t+"CollectionItemSlot",m="data-radix-collection-item",g=z0(p),y=Bt.forwardRef((E,A)=>{const{scope:_,children:b,...S}=E,M=Bt.useRef(null),O=ci(A,M),P=r(p,_);return Bt.useEffect(()=>(P.itemMap.set(M,{ref:M,...S}),()=>void P.itemMap.delete(M))),w.jsx(g,{[m]:"",ref:O,children:b})});y.displayName=p;function C(E){const A=r(t+"CollectionConsumer",E);return Bt.useCallback(()=>{const b=A.collectionRef.current;if(!b)return[];const S=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(A.itemMap.values()).sort((P,D)=>S.indexOf(P.ref.current)-S.indexOf(D.ref.current))},[A.collectionRef,A.itemMap])}return[{Provider:l,Slot:d,ItemSlot:y},C,i]}function Sa(t){const e=T.useRef(t);return T.useEffect(()=>{e.current=t}),T.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function b3(t,e=globalThis==null?void 0:globalThis.document){const n=Sa(t);T.useEffect(()=>{const i=o=>{o.key==="Escape"&&n(o)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var x3="DismissableLayer",mh="dismissableLayer.update",T3="dismissableLayer.pointerDownOutside",S3="dismissableLayer.focusOutside",D0,yS=T.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),_S=T.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:r,onInteractOutside:l,onDismiss:u,...f}=t,d=T.useContext(yS),[p,m]=T.useState(null),g=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=T.useState({}),C=ci(e,D=>m(D)),E=Array.from(d.layers),[A]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),_=E.indexOf(A),b=p?E.indexOf(p):-1,S=d.layersWithOutsidePointerEventsDisabled.size>0,M=b>=_,O=E3(D=>{const B=D.target,Z=[...d.branches].some(I=>I.contains(B));!M||Z||(o==null||o(D),l==null||l(D),D.defaultPrevented||u==null||u())},g),P=C3(D=>{const B=D.target;[...d.branches].some(I=>I.contains(B))||(r==null||r(D),l==null||l(D),D.defaultPrevented||u==null||u())},g);return b3(D=>{b===d.layers.size-1&&(i==null||i(D),!D.defaultPrevented&&u&&(D.preventDefault(),u()))},g),T.useEffect(()=>{if(p)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(D0=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(p)),d.layers.add(p),P0(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=D0)}},[p,g,n,d]),T.useEffect(()=>()=>{p&&(d.layers.delete(p),d.layersWithOutsidePointerEventsDisabled.delete(p),P0())},[p,d]),T.useEffect(()=>{const D=()=>y({});return document.addEventListener(mh,D),()=>document.removeEventListener(mh,D)},[]),w.jsx(Ye.div,{...f,ref:C,style:{pointerEvents:S?M?"auto":"none":void 0,...t.style},onFocusCapture:xe(t.onFocusCapture,P.onFocusCapture),onBlurCapture:xe(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:xe(t.onPointerDownCapture,O.onPointerDownCapture)})});_S.displayName=x3;var w3="DismissableLayerBranch",bS=T.forwardRef((t,e)=>{const n=T.useContext(yS),i=T.useRef(null),o=ci(e,i);return T.useEffect(()=>{const r=i.current;if(r)return n.branches.add(r),()=>{n.branches.delete(r)}},[n.branches]),w.jsx(Ye.div,{...t,ref:o})});bS.displayName=w3;function E3(t,e=globalThis==null?void 0:globalThis.document){const n=Sa(t),i=T.useRef(!1),o=T.useRef(()=>{});return T.useEffect(()=>{const r=u=>{if(u.target&&!i.current){let f=function(){xS(T3,n,d,{discrete:!0})};const d={originalEvent:u};u.pointerType==="touch"?(e.removeEventListener("click",o.current),o.current=f,e.addEventListener("click",o.current,{once:!0})):f()}else e.removeEventListener("click",o.current);i.current=!1},l=window.setTimeout(()=>{e.addEventListener("pointerdown",r)},0);return()=>{window.clearTimeout(l),e.removeEventListener("pointerdown",r),e.removeEventListener("click",o.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function C3(t,e=globalThis==null?void 0:globalThis.document){const n=Sa(t),i=T.useRef(!1);return T.useEffect(()=>{const o=r=>{r.target&&!i.current&&xS(S3,n,{originalEvent:r},{discrete:!1})};return e.addEventListener("focusin",o),()=>e.removeEventListener("focusin",o)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function P0(){const t=new CustomEvent(mh);document.dispatchEvent(t)}function xS(t,e,n,{discrete:i}){const o=n.originalEvent.target,r=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&o.addEventListener(t,e,{once:!0}),i?uS(o,r):o.dispatchEvent(r)}var A3=_S,M3=bS,L3="Portal",TS=T.forwardRef((t,e)=>{var u;const{container:n,...i}=t,[o,r]=T.useState(!1);Do(()=>r(!0),[]);const l=n||o&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return l?HE.createPortal(w.jsx(Ye.div,{...i,ref:e}),l):null});TS.displayName=L3;var R3=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),O3="VisuallyHidden",dp=T.forwardRef((t,e)=>w.jsx(Ye.span,{...t,ref:e,style:{...R3,...t.style}}));dp.displayName=O3;var hp="ToastProvider",[mp,N3,z3]=_3("Toast"),[SS,o5]=sp("Toast",[z3]),[D3,lc]=SS(hp),wS=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:o="right",swipeThreshold:r=50,children:l}=t,[u,f]=T.useState(null),[d,p]=T.useState(0),m=T.useRef(!1),g=T.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${hp}\`. Expected non-empty \`string\`.`),w.jsx(mp.Provider,{scope:e,children:w.jsx(D3,{scope:e,label:n,duration:i,swipeDirection:o,swipeThreshold:r,toastCount:d,viewport:u,onViewportChange:f,onToastAdd:T.useCallback(()=>p(y=>y+1),[]),onToastRemove:T.useCallback(()=>p(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:g,children:l})})};wS.displayName=hp;var ES="ToastViewport",P3=["F8"],ph="toast.viewportPause",gh="toast.viewportResume",CS=T.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=P3,label:o="Notifications ({hotkey})",...r}=t,l=lc(ES,n),u=N3(n),f=T.useRef(null),d=T.useRef(null),p=T.useRef(null),m=T.useRef(null),g=ci(e,m,l.onViewportChange),y=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=l.toastCount>0;T.useEffect(()=>{const A=_=>{var S;i.length!==0&&i.every(M=>_[M]||_.code===M)&&((S=m.current)==null||S.focus())};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[i]),T.useEffect(()=>{const A=f.current,_=m.current;if(C&&A&&_){const b=()=>{if(!l.isClosePausedRef.current){const P=new CustomEvent(ph);_.dispatchEvent(P),l.isClosePausedRef.current=!0}},S=()=>{if(l.isClosePausedRef.current){const P=new CustomEvent(gh);_.dispatchEvent(P),l.isClosePausedRef.current=!1}},M=P=>{!A.contains(P.relatedTarget)&&S()},O=()=>{A.contains(document.activeElement)||S()};return A.addEventListener("focusin",b),A.addEventListener("focusout",M),A.addEventListener("pointermove",b),A.addEventListener("pointerleave",O),window.addEventListener("blur",b),window.addEventListener("focus",S),()=>{A.removeEventListener("focusin",b),A.removeEventListener("focusout",M),A.removeEventListener("pointermove",b),A.removeEventListener("pointerleave",O),window.removeEventListener("blur",b),window.removeEventListener("focus",S)}}},[C,l.isClosePausedRef]);const E=T.useCallback(({tabbingDirection:A})=>{const b=u().map(S=>{const M=S.ref.current,O=[M,...X3(M)];return A==="forwards"?O:O.reverse()});return(A==="forwards"?b.reverse():b).flat()},[u]);return T.useEffect(()=>{const A=m.current;if(A){const _=b=>{var O,P,D;const S=b.altKey||b.ctrlKey||b.metaKey;if(b.key==="Tab"&&!S){const B=document.activeElement,Z=b.shiftKey;if(b.target===A&&Z){(O=d.current)==null||O.focus();return}const q=E({tabbingDirection:Z?"backwards":"forwards"}),bt=q.findIndex(X=>X===B);Yf(q.slice(bt+1))?b.preventDefault():Z?(P=d.current)==null||P.focus():(D=p.current)==null||D.focus()}};return A.addEventListener("keydown",_),()=>A.removeEventListener("keydown",_)}},[u,E]),w.jsxs(M3,{ref:f,role:"region","aria-label":o.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:C?void 0:"none"},children:[C&&w.jsx(vh,{ref:d,onFocusFromOutsideViewport:()=>{const A=E({tabbingDirection:"forwards"});Yf(A)}}),w.jsx(mp.Slot,{scope:n,children:w.jsx(Ye.ol,{tabIndex:-1,...r,ref:g})}),C&&w.jsx(vh,{ref:p,onFocusFromOutsideViewport:()=>{const A=E({tabbingDirection:"backwards"});Yf(A)}})]})});CS.displayName=ES;var AS="ToastFocusProxy",vh=T.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...o}=t,r=lc(AS,n);return w.jsx(dp,{tabIndex:0,...o,ref:e,style:{position:"fixed"},onFocus:l=>{var d;const u=l.relatedTarget;!((d=r.viewport)!=null&&d.contains(u))&&i()}})});vh.displayName=AS;var Ds="Toast",j3="toast.swipeStart",B3="toast.swipeMove",k3="toast.swipeCancel",V3="toast.swipeEnd",MS=T.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:o,onOpenChange:r,...l}=t,[u,f]=lS({prop:i,defaultProp:o??!0,onChange:r,caller:Ds});return w.jsx(lp,{present:n||u,children:w.jsx(Z3,{open:u,...l,ref:e,onClose:()=>f(!1),onPause:Sa(t.onPause),onResume:Sa(t.onResume),onSwipeStart:xe(t.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:xe(t.onSwipeMove,d=>{const{x:p,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:xe(t.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:xe(t.onSwipeEnd,d=>{const{x:p,y:m}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),f(!1)})})})});MS.displayName=Ds;var[U3,H3]=SS(Ds,{onClose(){}}),Z3=T.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:o,open:r,onClose:l,onEscapeKeyDown:u,onPause:f,onResume:d,onSwipeStart:p,onSwipeMove:m,onSwipeCancel:g,onSwipeEnd:y,...C}=t,E=lc(Ds,n),[A,_]=T.useState(null),b=ci(e,X=>_(X)),S=T.useRef(null),M=T.useRef(null),O=o||E.duration,P=T.useRef(0),D=T.useRef(O),B=T.useRef(0),{onToastAdd:Z,onToastRemove:I}=E,H=Sa(()=>{var ft;(A==null?void 0:A.contains(document.activeElement))&&((ft=E.viewport)==null||ft.focus()),l()}),q=T.useCallback(X=>{!X||X===1/0||(window.clearTimeout(B.current),P.current=new Date().getTime(),B.current=window.setTimeout(H,X))},[H]);T.useEffect(()=>{const X=E.viewport;if(X){const ft=()=>{q(D.current),d==null||d()},V=()=>{const F=new Date().getTime()-P.current;D.current=D.current-F,window.clearTimeout(B.current),f==null||f()};return X.addEventListener(ph,V),X.addEventListener(gh,ft),()=>{X.removeEventListener(ph,V),X.removeEventListener(gh,ft)}}},[E.viewport,O,f,d,q]),T.useEffect(()=>{r&&!E.isClosePausedRef.current&&q(O)},[r,O,E.isClosePausedRef,q]),T.useEffect(()=>(Z(),()=>I()),[Z,I]);const bt=T.useMemo(()=>A?PS(A):null,[A]);return E.viewport?w.jsxs(w.Fragment,{children:[bt&&w.jsx(q3,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite",children:bt}),w.jsx(U3,{scope:n,onClose:H,children:Pu.createPortal(w.jsx(mp.ItemSlot,{scope:n,children:w.jsx(A3,{asChild:!0,onEscapeKeyDown:xe(u,()=>{E.isFocusedToastEscapeKeyDownRef.current||H(),E.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Ye.li,{tabIndex:0,"data-state":r?"open":"closed","data-swipe-direction":E.swipeDirection,...C,ref:b,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:xe(t.onKeyDown,X=>{X.key==="Escape"&&(u==null||u(X.nativeEvent),X.nativeEvent.defaultPrevented||(E.isFocusedToastEscapeKeyDownRef.current=!0,H()))}),onPointerDown:xe(t.onPointerDown,X=>{X.button===0&&(S.current={x:X.clientX,y:X.clientY})}),onPointerMove:xe(t.onPointerMove,X=>{if(!S.current)return;const ft=X.clientX-S.current.x,V=X.clientY-S.current.y,F=!!M.current,U=["left","right"].includes(E.swipeDirection),rt=["left","up"].includes(E.swipeDirection)?Math.min:Math.max,G=U?rt(0,ft):0,at=U?0:rt(0,V),kt=X.pointerType==="touch"?10:2,Vt={x:G,y:at},vt={originalEvent:X,delta:Vt};F?(M.current=Vt,Sl(B3,m,vt,{discrete:!1})):j0(Vt,E.swipeDirection,kt)?(M.current=Vt,Sl(j3,p,vt,{discrete:!1}),X.target.setPointerCapture(X.pointerId)):(Math.abs(ft)>kt||Math.abs(V)>kt)&&(S.current=null)}),onPointerUp:xe(t.onPointerUp,X=>{const ft=M.current,V=X.target;if(V.hasPointerCapture(X.pointerId)&&V.releasePointerCapture(X.pointerId),M.current=null,S.current=null,ft){const F=X.currentTarget,U={originalEvent:X,delta:ft};j0(ft,E.swipeDirection,E.swipeThreshold)?Sl(V3,y,U,{discrete:!0}):Sl(k3,g,U,{discrete:!0}),F.addEventListener("click",rt=>rt.preventDefault(),{once:!0})}})})})}),E.viewport)})]}):null}),q3=t=>{const{__scopeToast:e,children:n,...i}=t,o=lc(Ds,e),[r,l]=T.useState(!1),[u,f]=T.useState(!1);return Y3(()=>l(!0)),T.useEffect(()=>{const d=window.setTimeout(()=>f(!0),1e3);return()=>window.clearTimeout(d)},[]),u?null:w.jsx(TS,{asChild:!0,children:w.jsx(dp,{...i,children:r&&w.jsxs(w.Fragment,{children:[o.label," ",n]})})})},G3="ToastTitle",LS=T.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ye.div,{...i,ref:e})});LS.displayName=G3;var I3="ToastDescription",RS=T.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ye.div,{...i,ref:e})});RS.displayName=I3;var OS="ToastAction",NS=T.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?w.jsx(DS,{altText:n,asChild:!0,children:w.jsx(pp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${OS}\`. Expected non-empty \`string\`.`),null)});NS.displayName=OS;var zS="ToastClose",pp=T.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,o=H3(zS,n);return w.jsx(DS,{asChild:!0,children:w.jsx(Ye.button,{type:"button",...i,ref:e,onClick:xe(t.onClick,o.onClose)})})});pp.displayName=zS;var DS=T.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...o}=t;return w.jsx(Ye.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...o,ref:e})});function PS(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),F3(i)){const o=i.ariaHidden||i.hidden||i.style.display==="none",r=i.dataset.radixToastAnnounceExclude==="";if(!o)if(r){const l=i.dataset.radixToastAnnounceAlt;l&&e.push(l)}else e.push(...PS(i))}}),e}function Sl(t,e,n,{discrete:i}){const o=n.originalEvent.currentTarget,r=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&o.addEventListener(t,e,{once:!0}),i?uS(o,r):o.dispatchEvent(r)}var j0=(t,e,n=0)=>{const i=Math.abs(t.x),o=Math.abs(t.y),r=i>o;return e==="left"||e==="right"?r&&i>n:!r&&o>n};function Y3(t=()=>{}){const e=Sa(t);Do(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function F3(t){return t.nodeType===t.ELEMENT_NODE}function X3(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const o=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||o?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Yf(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var K3=wS,jS=CS,BS=MS,kS=LS,VS=RS,US=NS,HS=pp;const Q3=K3,ZS=Bt.forwardRef(({className:t,...e},n)=>w.jsx(jS,{ref:n,className:un("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));ZS.displayName=jS.displayName;const $3=op("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",{variants:{variant:{default:"bg-background border",destructive:"group destructive border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),qS=Bt.forwardRef(({className:t,variant:e,...n},i)=>w.jsx(BS,{ref:i,className:un($3({variant:e}),t),...n}));qS.displayName=BS.displayName;const W3=Bt.forwardRef(({className:t,...e},n)=>w.jsx(US,{ref:n,className:un("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));W3.displayName=US.displayName;const GS=Bt.forwardRef(({className:t,...e},n)=>w.jsx(HS,{ref:n,className:un("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:w.jsx(YT,{className:"h-4 w-4"})}));GS.displayName=HS.displayName;const IS=Bt.forwardRef(({className:t,...e},n)=>w.jsx(kS,{ref:n,className:un("text-sm font-semibold",t),...e}));IS.displayName=kS.displayName;const YS=Bt.forwardRef(({className:t,...e},n)=>w.jsx(VS,{ref:n,className:un("text-sm opacity-90",t),...e}));YS.displayName=VS.displayName;function J3(){const{toasts:t}=rp();return w.jsxs(Q3,{children:[t.map(({id:e,title:n,description:i,action:o,...r})=>w.jsxs(qS,{...r,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(IS,{children:n}),i&&w.jsx(YS,{children:i})]}),o,w.jsx(GS,{})]},e)),w.jsx(ZS,{})]})}class t5 extends Bt.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){this.setState({error:e,errorInfo:n}),console.error("Uncaught error:",e,n)}render(){return this.state.hasError?w.jsxs("div",{className:"p-8 bg-red-50 text-red-900 min-h-screen",children:[w.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Something went wrong."}),w.jsxs("details",{className:"whitespace-pre-wrap",children:[this.state.error&&this.state.error.toString(),w.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}function e5(){return w.jsxs(ZM,{children:[w.jsxs(Xd,{children:[w.jsx("title",{children:"Nuestra Quinta Costa - Memorias Bioculturales"}),w.jsx("meta",{name:"description",content:"Explora las memorias bioculturales de Valparaíso y la Quinta Costa."})]}),w.jsxs("div",{className:"min-h-screen bg-slate-950",children:[w.jsx(t5,{children:w.jsxs(vM,{children:[w.jsx(Vl,{path:"/",element:w.jsx(d3,{})}),w.jsx(Vl,{path:"/about",element:w.jsx(h3,{})}),w.jsx(Vl,{path:"/map",element:w.jsx(f3,{})})]})}),w.jsx(J3,{})]})]})}gA.createRoot(document.getElementById("root")).render(w.jsx(e5,{}));