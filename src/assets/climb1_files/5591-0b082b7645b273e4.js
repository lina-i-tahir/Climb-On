"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5591],{11753:function(e,t,n){n.d(t,{$l:function(){return c},BN:function(){return M},DY:function(){return o},J$:function(){return $},JN:function(){return w},LI:function(){return L},PM:function(){return d},W6:function(){return V},i_:function(){return a},ko:function(){return z},kw:function(){return k},mf:function(){return f},o8:function(){return l},qC:function(){return N},s6:function(){return Z},sj:function(){return A},u3:function(){return I},u_:function(){return j},w6:function(){return O},xD:function(){return G}});var r=n(67294);const o=new WeakMap,i={},u={},s=()=>{},a=s(),c=Object,l=e=>e===a,f=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),E="undefined",g=typeof window!=E,_=typeof document!=E,w=(e,t)=>{const n=o.get(e);return[()=>!l(t)&&e.get(t)||i,r=>{if(!l(t)){const o=e.get(t);t in u||(u[t]=o),n[5](t,d(o,r),o||i)}},n[6],()=>!l(t)&&t in u?u[t]:!l(t)&&e.get(t)||i]},h=new WeakMap;let p=0;const v=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(c(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=h.get(e),o)return o;if(o=++p+"~",h.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=v(e[i])+",";h.set(e,o)}if(n==c){o="#";const t=c.keys(e).sort();for(;!l(i=t.pop());)l(e[i])||(o+=i+":"+v(e[i])+",");h.set(e,o)}}return o};let y=!0;const[R,m]=g&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[s,s],T={isOnline:()=>y,isVisible:()=>{const e=_&&document.visibilityState;return l(e)||"hidden"!==e}},b={initFocus:e=>(_&&document.addEventListener("visibilitychange",e),R("focus",e),()=>{_&&document.removeEventListener("visibilitychange",e),m("focus",e)}),initReconnect:e=>{const t=()=>{y=!0,e()},n=()=>{y=!1};return R("online",t),R("offline",n),()=>{m("online",t),m("offline",n)}}},O=!r.useId,V=!g||"Deno"in window,k=e=>g&&typeof window.requestAnimationFrame!=E?window.requestAnimationFrame(e):setTimeout(e,1),L=V?r.useEffect:r.useLayoutEffect,S="undefined"!==typeof navigator&&navigator.connection,C=!V&&S&&(["slow-2g","2g"].includes(S.effectiveType)||S.saveData),N=e=>{if(f(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?v(e):"",t]};let D=0;const I=()=>++D;var A={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){const[t,n,r,i]=e,u=d({populateCache:!0,throwOnError:!0},"boolean"===typeof i?{revalidate:i}:i||{});let s=u.populateCache;const c=u.rollbackOnError;let E=u.optimisticData;const g=!1!==u.revalidate,_=u.throwOnError;if(f(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!/^\$(inf|sub)\$/.test(o)&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(h))}return h(n);async function h(n){const[i]=N(n);if(!i)return;const[u,d]=w(t,i),[h,p,v]=o.get(t),y=h[i],R=()=>g&&(delete v[i],y&&y[0])?y[0](2).then((()=>u().data)):u().data;if(e.length<3)return R();let m,T=r;const b=I();p[i]=[b,0];const O=!l(E),V=u(),k=V.data,L=V._c,S=l(L)?k:L;if(O&&(E=f(E)?E(S):E,d({data:E,_c:S})),f(T))try{T=T(S)}catch(D){m=D}if(T&&f(T.then)){if(T=await T.catch((e=>{m=e})),b!==p[i][0]){if(m)throw m;return T}m&&O&&(e=>"function"===typeof c?c(e):!1!==c)(m)&&(s=!0,T=S,d({data:T,_c:a}))}s&&(m||(f(s)&&(T=s(T,S)),d({data:T,_c:a}))),p[i][1]=I();const C=await R();if(d({_c:a}),!m)return s?C:T;if(_)throw m}}const P=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},x=(e,t)=>{if(!o.has(e)){const n=d(b,t),r={},i=M.bind(a,e);let u=s;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);const o=c[t];if(o)for(const e of o)e(n,r)},E=()=>{if(!o.has(e)&&(o.set(e,[r,{},{},{},i,f,l]),!V)){const t=n.initFocus(setTimeout.bind(a,P.bind(a,r,0))),i=n.initReconnect(setTimeout.bind(a,P.bind(a,r,1)));u=()=>{t&&t(),i&&i(),o.delete(e)}}};return E(),[e,i,E,u]}return[e,o.get(e)[4]]},[W,F]=x(new Map),j=d({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,u=o.retryCount,s=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;!l(i)&&u>i||setTimeout(r,s,o)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:(e,t)=>v(e)==v(t),isPaused:()=>!1,cache:W,mutate:F,fallback:{}},T),J=(e,t)=>{const n=d(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:u}=t;r&&i&&(n.use=r.concat(i)),o&&u&&(n.fallback=d(o,u))}return n},U=(0,r.createContext)({}),$=e=>{const{value:t}=e,n=(0,r.useContext)(U),o=f(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),u=(0,r.useMemo)((()=>o?i:J(n,i)),[o,n,i]),s=i&&i.provider,c=(0,r.useRef)(a);s&&!c.current&&(c.current=x(s(u.cache||W),i));const l=c.current;return l&&(u.cache=l[0],u.mutate=l[1]),L((()=>{if(l)return l[2]&&l[2](),l[3]}),[]),(0,r.createElement)(U.Provider,d(e,{value:u}))},q=g&&window.__SWR_DEVTOOLS_USE__,B=q?window.__SWR_DEVTOOLS_USE__:[],Y=e=>f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=B.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=N(t),[,,,i]=o.get(W),u=i[r];return u?(delete i[r],u):n(...e)}),r))),Z=e=>function(...t){const n=d(j,(0,r.useContext)(U)),[o,i,u]=Y(t),s=J(n,u);let a=e;const{use:c}=s,l=(c||[]).concat(H);for(let e=l.length;e--;)a=l[e](a);return a(o,i||s.fetcher||null,s)},z=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},G=(e,t)=>(...n)=>{const[r,o,i]=Y(n),u=(i.use||[]).concat(t);return e(r,o,{...i,use:u})};q&&(window.__SWR_DEVTOOLS_REACT__=r)},95591:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(67294),o=n(61688),i=n(11753);const u={dedupe:!0},s=(i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_}),(0,i.s6)(((e,t,n)=>{const{cache:s,compare:a,suspense:c,fallbackData:l,revalidateOnMount:f,revalidateIfStale:d,refreshInterval:E,refreshWhenHidden:g,refreshWhenOffline:_,keepPreviousData:w}=n,[h,p,v]=i.DY.get(s),[y,R]=(0,i.qC)(e),m=(0,r.useRef)(!1),T=(0,r.useRef)(!1),b=(0,r.useRef)(y),O=(0,r.useRef)(t),V=(0,r.useRef)(n),k=()=>V.current,L=()=>k().isVisible()&&k().isOnline(),[S,C,N,D]=(0,i.JN)(s,y),I=(0,r.useRef)({}).current,A=(0,i.o8)(l)?n.fallback[y]:l,M=(e,t)=>{for(const n in I){const r=n;if("data"===r){if(!a(e[r],t[r])){if(!(0,i.o8)(e[r]))return!1;if(!a(q,t[r]))return!1}}else if(t[r]!==e[r])return!1}return!0},P=(0,r.useMemo)((()=>{const e=!!y&&!!t&&((0,i.o8)(f)?!k().isPaused()&&!c&&(!!(0,i.o8)(d)||d):f),n=t=>{const n=(0,i.PM)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=S(),o=D(),u=n(r),s=r===o?u:n(o);let a=u;return[()=>{const e=n(S());return M(e,a)?(a.data=e.data,a.isLoading=e.isLoading,a.isValidating=e.isValidating,a.error=e.error,a):(a=e,e)},()=>s]}),[s,y]),x=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>N(y,((t,n)=>{M(n,t)||e()}))),[s,y]),P[0],P[1]),W=!m.current,F=h[y]&&h[y].length>0,j=x.data,J=(0,i.o8)(j)?A:j,U=x.error,$=(0,r.useRef)(J),q=w?(0,i.o8)(j)?$.current:j:J,B=!(F&&!(0,i.o8)(U))&&(W&&!(0,i.o8)(f)?f:!k().isPaused()&&(c?!(0,i.o8)(J)&&d:(0,i.o8)(J)||d)),Y=!!(y&&t&&W&&B),H=(0,i.o8)(x.isValidating)?Y:x.isValidating,Z=(0,i.o8)(x.isLoading)?Y:x.isLoading,z=(0,r.useCallback)((async e=>{const t=O.current;if(!y||!t||T.current||k().isPaused())return!1;let r,o,u=!0;const s=e||{},c=!v[y]||!s.dedupe,l=()=>i.w6?!T.current&&y===b.current&&m.current:y===b.current,f={isValidating:!1,isLoading:!1},d=()=>{C(f)},E=()=>{const e=v[y];e&&e[1]===o&&delete v[y]},g={isValidating:!0};(0,i.o8)(S().data)&&(g.isLoading=!0);try{if(c&&(C(g),n.loadingTimeout&&(0,i.o8)(S().data)&&setTimeout((()=>{u&&l()&&k().onLoadingSlow(y,n)}),n.loadingTimeout),v[y]=[t(R),(0,i.u3)()]),[r,o]=v[y],r=await r,c&&setTimeout(E,n.dedupingInterval),!v[y]||v[y][1]!==o)return c&&l()&&k().onDiscarded(y),!1;f.error=i.i_;const e=p[y];if(!(0,i.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return d(),c&&l()&&k().onDiscarded(y),!1;const s=S().data;f.data=a(s,r)?s:r,c&&l()&&k().onSuccess(r,y,n)}catch(_){E();const e=k(),{shouldRetryOnError:t}=e;e.isPaused()||(f.error=_,c&&l()&&(e.onError(_,y,e),(!0===t||(0,i.mf)(t)&&t(_))&&L()&&e.onErrorRetry(_,y,e,(e=>{const t=h[y];t&&t[0]&&t[0](i.sj.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return u=!1,d(),!0}),[y,s]),G=(0,r.useCallback)(((...e)=>(0,i.BN)(s,b.current,...e)),[]);if((0,i.LI)((()=>{O.current=t,V.current=n,(0,i.o8)(j)||($.current=j)})),(0,i.LI)((()=>{if(!y)return;const e=z.bind(i.i_,u);let t=0;const n=(0,i.ko)(y,h,((n,r={})=>{if(n==i.sj.FOCUS_EVENT){const n=Date.now();k().revalidateOnFocus&&n>t&&L()&&(t=n+k().focusThrottleInterval,e())}else if(n==i.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&L()&&e();else{if(n==i.sj.MUTATE_EVENT)return z();if(n==i.sj.ERROR_REVALIDATE_EVENT)return z(r)}}));return T.current=!1,b.current=y,m.current=!0,C({_k:R}),B&&((0,i.o8)(J)||i.W6?e():(0,i.kw)(e)),()=>{T.current=!0,n()}}),[y]),(0,i.LI)((()=>{let e;function t(){const t=(0,i.mf)(E)?E(S().data):E;t&&-1!==e&&(e=setTimeout(n,t))}function n(){S().error||!g&&!k().isVisible()||!_&&!k().isOnline()?t():z(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[E,g,_,y]),(0,r.useDebugValue)(q),c&&(0,i.o8)(J)&&y){if(!i.w6&&i.W6)throw new Error("Fallback data is required when using suspense in SSR.");throw O.current=t,V.current=n,T.current=!1,(0,i.o8)(U)?z(u):U}return{mutate:G,get data(){return I.data=!0,q},get error(){return I.error=!0,U},get isValidating(){return I.isValidating=!0,H},get isLoading(){return I.isLoading=!0,Z}}})))}}]);