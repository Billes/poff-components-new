import{r as u,R as g}from"./index-CWWLs2mj.js";import{s as be,u as F,d as L,l as k,e as z,p as le,S as ge,D as Q,y as ie,j as C,f as ue,o as y,t as re,X as oe}from"./keyboard-etslnfwq.js";function we(e){return be.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let B=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Fe=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Fe||{}),Te=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Te||{}),xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(xe||{});function ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(B)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ae=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ae||{});function Ne(e,t=0){var r;return e===((r=we(e))==null?void 0:r.body)?!1:F(t,{0(){return e.matches(B)},1(){let n=e;for(;n!==null;){if(n.matches(B))return!0;n=n.parentElement}return!1}})}var Se=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Se||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Qe(e){e==null||e.focus({preventScroll:!0})}let Ce=["textarea","input"].join(",");function Le(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ce))!=null?r:!1}function Pe(e,t=r=>r){return e.slice().sort((r,n)=>{let c=t(r),d=t(n);if(c===null||d===null)return 0;let l=c.compareDocumentPosition(d);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Je(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:c=[]}={}){let d=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?r?Pe(e):e:ye(e);c.length>0&&l.length>1&&(l=l.filter(v=>!c.includes(v))),n=n??d.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(n))-1;if(t&4)return Math.max(0,l.indexOf(n))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),o=t&32?{preventScroll:!0}:{},a=0,m=l.length,E;do{if(a>=m||a+m<=0)return 0;let v=i+a;if(t&16)v=(v+m)%m;else{if(v<0)return 3;if(v>=m)return 1}E=l[v],E==null||E.focus(o),a+=f}while(E!==d.activeElement);return t&6&&Le(E)&&E.select(),2}function H(e,t,r){let n=L(t);u.useEffect(()=>{function c(d){n.current(d)}return document.addEventListener(e,c,r),()=>document.removeEventListener(e,c,r)},[e,r])}function Oe(e,t,r){let n=L(t);u.useEffect(()=>{function c(d){n.current(d)}return window.addEventListener(e,c,r),()=>window.removeEventListener(e,c,r)},[e,r])}function Ye(e,t,r=!0){let n=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function c(l,f){if(!n.current||l.defaultPrevented)return;let i=f(l);if(i===null||!i.getRootNode().contains(i)||!i.isConnected)return;let o=function a(m){return typeof m=="function"?a(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let a of o){if(a===null)continue;let m=a instanceof HTMLElement?a:a.current;if(m!=null&&m.contains(i)||l.composed&&l.composedPath().includes(m))return}return!Ne(i,ae.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let d=u.useRef(null);H("pointerdown",l=>{var f,i;n.current&&(d.current=((i=(f=l.composedPath)==null?void 0:f.call(l))==null?void 0:i[0])||l.target)},!0),H("mousedown",l=>{var f,i;n.current&&(d.current=((i=(f=l.composedPath)==null?void 0:f.call(l))==null?void 0:i[0])||l.target)},!0),H("click",l=>{d.current&&(c(l,()=>d.current),d.current=null)},!0),H("touchend",l=>c(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Oe("blur",l=>c(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let J=u.createContext(null);J.displayName="OpenClosedContext";var w=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(w||{});function se(){return u.useContext(J)}function Re({value:e,children:t}){return g.createElement(J.Provider,{value:e},t)}function Y(){let e=u.useRef(!1);return k(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $e(e=0){let[t,r]=u.useState(e),n=Y(),c=u.useCallback(i=>{n.current&&r(o=>o|i)},[t,n]),d=u.useCallback(i=>!!(t&i),[t]),l=u.useCallback(i=>{n.current&&r(o=>o&~i)},[r,n]),f=u.useCallback(i=>{n.current&&r(o=>o^i)},[r]);return{flags:t,addFlag:c,hasFlag:d,removeFlag:l,toggleFlag:f}}function Me(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function W(e,...t){e&&t.length>0&&e.classList.add(...t)}function q(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ae(e,t){let r=z();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:c}=getComputedStyle(e),[d,l]=[n,c].map(i=>{let[o=0]=i.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):parseFloat(a)*1e3).sort((a,m)=>m-a);return o}),f=d+l;if(f!==0){r.group(o=>{o.setTimeout(()=>{t(),o.dispose()},f),o.addEventListener(e,"transitionrun",a=>{a.target===a.currentTarget&&o.dispose()})});let i=r.addEventListener(e,"transitionend",o=>{o.target===o.currentTarget&&(t(),i())})}else t();return r.add(()=>t()),r.dispose}function De(e,t,r,n){let c=r?"enter":"leave",d=z(),l=n!==void 0?Me(n):()=>{};c==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let f=F(c,{enter:()=>t.enter,leave:()=>t.leave}),i=F(c,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),o=F(c,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return q(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),W(e,...t.base,...f,...o),d.nextFrame(()=>{q(e,...t.base,...f,...o),W(e,...t.base,...f,...i),Ae(e,()=>(q(e,...t.base,...f),W(e,...t.base,...t.entered),l()))}),d.dispose}function Ie({immediate:e,container:t,direction:r,classes:n,onStart:c,onStop:d}){let l=Y(),f=le(),i=L(r);k(()=>{e&&(i.current="enter")},[e]),k(()=>{let o=z();f.add(o.dispose);let a=t.current;if(a&&i.current!=="idle"&&l.current)return o.dispose(),c.current(i.current),o.add(De(a,n.current,i.current==="enter",()=>{o.dispose(),d.current(i.current)})),o.dispose},[r])}function x(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let _=u.createContext(null);_.displayName="TransitionContext";var He=(e=>(e.Visible="visible",e.Hidden="hidden",e))(He||{});function ke(){let e=u.useContext(_);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function _e(){let e=u.useContext(U);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let U=u.createContext(null);U.displayName="NestingContext";function K(e){return"children"in e?K(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ce(e,t){let r=L(e),n=u.useRef([]),c=Y(),d=le(),l=y((v,p=C.Hidden)=>{let h=n.current.findIndex(({el:s})=>s===v);h!==-1&&(F(p,{[C.Unmount](){n.current.splice(h,1)},[C.Hidden](){n.current[h].state="hidden"}}),d.microTask(()=>{var s;!K(n)&&c.current&&((s=r.current)==null||s.call(r))}))}),f=y(v=>{let p=n.current.find(({el:h})=>h===v);return p?p.state!=="visible"&&(p.state="visible"):n.current.push({el:v,state:"visible"}),()=>l(v,C.Unmount)}),i=u.useRef([]),o=u.useRef(Promise.resolve()),a=u.useRef({enter:[],leave:[],idle:[]}),m=y((v,p,h)=>{i.current.splice(0),t&&(t.chains.current[p]=t.chains.current[p].filter(([s])=>s!==v)),t==null||t.chains.current[p].push([v,new Promise(s=>{i.current.push(s)})]),t==null||t.chains.current[p].push([v,new Promise(s=>{Promise.all(a.current[p].map(([P,O])=>O)).then(()=>s())})]),p==="enter"?o.current=o.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(p)):h(p)}),E=y((v,p,h)=>{Promise.all(a.current[p].splice(0).map(([s,P])=>P)).then(()=>{var s;(s=i.current.shift())==null||s()}).then(()=>h(p))});return u.useMemo(()=>({children:n,register:f,unregister:l,onStart:m,onStop:E,wait:o,chains:a}),[f,l,n,m,E,a,o])}function Ue(){}let Ke=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ne(e){var t;let r={};for(let n of Ke)r[n]=(t=e[n])!=null?t:Ue;return r}function je(e){let t=u.useRef(ne(e));return u.useEffect(()=>{t.current=ne(e)},[e]),t}let Ge="div",de=ge.RenderStrategy;function Ve(e,t){var r,n;let{beforeEnter:c,afterEnter:d,beforeLeave:l,afterLeave:f,enter:i,enterFrom:o,enterTo:a,entered:m,leave:E,leaveFrom:v,leaveTo:p,...h}=e,s=u.useRef(null),P=ie(s,t),O=(r=h.unmount)==null||r?C.Unmount:C.Hidden,{show:b,appear:N,initial:Z}=ke(),[S,j]=u.useState(b?"visible":"hidden"),ee=_e(),{register:M,unregister:A}=ee;u.useEffect(()=>M(s),[M,s]),u.useEffect(()=>{if(O===C.Hidden&&s.current){if(b&&S!=="visible"){j("visible");return}return F(S,{hidden:()=>A(s),visible:()=>M(s)})}},[S,s,M,A,b,O]);let G=L({base:x(h.className),enter:x(i),enterFrom:x(o),enterTo:x(a),entered:x(m),leave:x(E),leaveFrom:x(v),leaveTo:x(p)}),D=je({beforeEnter:c,afterEnter:d,beforeLeave:l,afterLeave:f}),V=ue();u.useEffect(()=>{if(V&&S==="visible"&&s.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[s,S,V]);let me=Z&&!N,te=N&&b&&Z,ve=!V||me?"idle":b?"enter":"leave",$=$e(0),pe=y(T=>F(T,{enter:()=>{$.addFlag(w.Opening),D.current.beforeEnter()},leave:()=>{$.addFlag(w.Closing),D.current.beforeLeave()},idle:()=>{}})),he=y(T=>F(T,{enter:()=>{$.removeFlag(w.Opening),D.current.afterEnter()},leave:()=>{$.removeFlag(w.Closing),D.current.afterLeave()},idle:()=>{}})),I=ce(()=>{j("hidden"),A(s)},ee);Ie({immediate:te,container:s,classes:G,direction:ve,onStart:L(T=>{I.onStart(s,T,pe)}),onStop:L(T=>{I.onStop(s,T,he),T==="leave"&&!K(I)&&(j("hidden"),A(s))})});let R=h,Ee={ref:P};return te?R={...R,className:re(h.className,...G.current.enter,...G.current.enterFrom)}:(R.className=re(h.className,(n=s.current)==null?void 0:n.className),R.className===""&&delete R.className),g.createElement(U.Provider,{value:I},g.createElement(Re,{value:F(S,{visible:w.Open,hidden:w.Closed})|$.flags},oe({ourProps:Ee,theirProps:R,defaultTag:Ge,features:de,visible:S==="visible",name:"Transition.Child"})))}function We(e,t){let{show:r,appear:n=!1,unmount:c=!0,...d}=e,l=u.useRef(null),f=ie(l,t);ue();let i=se();if(r===void 0&&i!==null&&(r=(i&w.Open)===w.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[o,a]=u.useState(r?"visible":"hidden"),m=ce(()=>{a("hidden")}),[E,v]=u.useState(!0),p=u.useRef([r]);k(()=>{E!==!1&&p.current[p.current.length-1]!==r&&(p.current.push(r),v(!1))},[p,r]);let h=u.useMemo(()=>({show:r,appear:n,initial:E}),[r,n,E]);u.useEffect(()=>{if(r)a("visible");else if(!K(m))a("hidden");else{let b=l.current;if(!b)return;let N=b.getBoundingClientRect();N.x===0&&N.y===0&&N.width===0&&N.height===0&&a("hidden")}},[r,m]);let s={unmount:c},P=y(()=>{var b;E&&v(!1),(b=e.beforeEnter)==null||b.call(e)}),O=y(()=>{var b;E&&v(!1),(b=e.beforeLeave)==null||b.call(e)});return g.createElement(U.Provider,{value:m},g.createElement(_.Provider,{value:h},oe({ourProps:{...s,as:u.Fragment,children:g.createElement(fe,{ref:f,...s,...d,beforeEnter:P,beforeLeave:O})},theirProps:{},defaultTag:u.Fragment,features:de,visible:o==="visible",name:"Transition"})))}function qe(e,t){let r=u.useContext(_)!==null,n=se()!==null;return g.createElement(g.Fragment,null,!r&&n?g.createElement(X,{ref:t,...e}):g.createElement(fe,{ref:t,...e}))}let X=Q(We),fe=Q(Ve),Be=Q(qe),Ze=Object.assign(X,{Child:Be,Root:X});export{se as C,Pe as I,Fe as M,Te as N,Je as O,ae as T,Ne as a,Re as c,w as d,we as e,Y as f,Ye as h,Oe as s,Ze as t,Qe as y};
