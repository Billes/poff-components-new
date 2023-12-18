import{j as m}from"./jsx-runtime-EN2LmfEx.js";import{r as u,R as f,e as te}from"./index-CWWLs2mj.js";import{B as ve,a as he}from"./index-6_Ev-1-R.js";import{e as Ye,s as Ue,O as z,M as k,f as be,y as R,N as ze,C as Ge,d as U,h as Ke,t as J}from"./transition-4HlHLOJl.js";import{o as v,d as Xe,g as ue,D as T,y as C,f as se,u as j,p as Je,c as ne,a as re,X as L,T as Qe,s as $e,l as A,e as xe,S as ye,I as B,b as Ze,r as et}from"./keyboard-etslnfwq.js";import{r as tt}from"./index-SwhhowN2.js";import{b as nt,M as rt}from"./description-Lc4ylKoi.js";function ce(e,t){let n=u.useRef([]),r=v(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function ot(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function I(...e){return u.useMemo(()=>Ye(...e),[...e])}var O=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(O||{});function lt(){let e=u.useRef(0);return Ue("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Te(e,t,n,r){let l=Xe(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function at(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ce(e){let t=v(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,ue(()=>{n.current&&t()})}),[t])}function Le(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let it="div";var De=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(De||{});function ut(e,t){let n=u.useRef(null),r=C(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;se()||(o=1);let s=I(n);dt({ownerDocument:s},!!(o&16));let c=ft({ownerDocument:s,container:n,initialFocus:l},!!(o&2));mt({ownerDocument:s,container:n,containers:a,previousActiveElement:c},!!(o&8));let d=lt(),M=v(p=>{let E=n.current;E&&($=>$())(()=>{j(d.current,{[O.Forwards]:()=>{z(E,k.First,{skipElements:[p.relatedTarget]})},[O.Backwards]:()=>{z(E,k.Last,{skipElements:[p.relatedTarget]})}})})}),D=Je(),h=u.useRef(!1),K={ref:r,onKeyDown(p){p.key=="Tab"&&(h.current=!0,D.requestAnimationFrame(()=>{h.current=!1}))},onBlur(p){let E=Le(a);n.current instanceof HTMLElement&&E.add(n.current);let $=p.relatedTarget;$ instanceof HTMLElement&&$.dataset.headlessuiFocusGuard!=="true"&&(Se(E,$)||(h.current?z(n.current,j(d.current,{[O.Forwards]:()=>k.Next,[O.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&R(p.target)))}};return f.createElement(f.Fragment,null,!!(o&4)&&f.createElement(ne,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:M,features:re.Focusable}),L({ourProps:K,theirProps:i,defaultTag:it,name:"FocusTrap"}),!!(o&4)&&f.createElement(ne,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:M,features:re.Focusable}))}let st=T(ut),F=Object.assign(st,{features:De}),x=[];at(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&x[0]!==t.target&&(x.unshift(t.target),x=x.filter(n=>n!=null&&n.isConnected),x.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ct(e=!0){let t=u.useRef(x.slice());return ce(([n],[r])=>{r===!0&&n===!1&&ue(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=x.slice())},[e,x,t]),v(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function dt({ownerDocument:e},t){let n=ct(t);ce(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&R(n())},[t]),Ce(()=>{t&&R(n())})}function ft({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=be();return ce(()=>{if(!r)return;let o=t.current;o&&ue(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?R(n.current):z(o,k.First)===ze.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=be();Te(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Le(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=o.target;c&&c instanceof HTMLElement?Se(i,c)?(r.current=c,R(c)):(o.preventDefault(),o.stopPropagation(),R(s)):R(r.current)},!0)}function Se(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Re=u.createContext(!1);function pt(){return u.useContext(Re)}function oe(e){return f.createElement(Re.Provider,{value:e.force},e.children)}function gt(e){let t=pt(),n=u.useContext(Pe),r=I(e),[l,a]=u.useState(()=>{if(!t&&n!==null||$e.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let vt=u.Fragment;function ht(e,t){let n=e,r=u.useRef(null),l=C(Qe(d=>{r.current=d}),t),a=I(r),o=gt(r),[i]=u.useState(()=>{var d;return $e.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),s=u.useContext(le),c=se();return A(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),A(()=>{if(i&&s)return s.register(i)},[s,i]),Ce(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),c?!o||!i?null:tt.createPortal(L({ourProps:{ref:l},theirProps:n,defaultTag:vt,name:"Portal"}),i):null}let yt=u.Fragment,Pe=u.createContext(null);function wt(e,t){let{target:n,...r}=e,l={ref:C(t)};return f.createElement(Pe.Provider,{value:n},L({ourProps:l,theirProps:r,defaultTag:yt,name:"Popover.Group"}))}let le=u.createContext(null);function Et(){let e=u.useContext(le),t=u.useRef([]),n=v(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=v(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),l=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:a}){return f.createElement(le.Provider,{value:l},a)},[l])]}let bt=T(ht),$t=T(wt),ae=Object.assign(bt,{Group:$t}),de=u.createContext(()=>{});de.displayName="StackContext";var ie=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ie||{});function xt(){return u.useContext(de)}function Tt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=xt(),o=v((...i)=>{t==null||t(...i),a(...i)});return A(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),f.createElement(de.Provider,{value:o},e)}function Ct(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Lt=typeof Object.is=="function"?Object.is:Ct,{useState:Dt,useEffect:St,useLayoutEffect:Rt,useDebugValue:Pt}=te;function kt(e,t,n){const r=t(),[{inst:l},a]=Dt({inst:{value:r,getSnapshot:t}});return Rt(()=>{l.value=r,l.getSnapshot=t,Q(l)&&a({inst:l})},[e,r,t]),St(()=>(Q(l)&&a({inst:l}),e(()=>{Q(l)&&a({inst:l})})),[e]),Pt(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Lt(n,r)}catch{return!0}}function Mt(e,t,n){return t()}const Ft=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nt=!Ft,Ot=Nt?Mt:kt,jt="useSyncExternalStore"in te?(e=>e.useSyncExternalStore)(te):Ot;function At(e){return jt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Bt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function It(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function Ht(){if(!ot())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(o=>o()).some(o=>o.contains(a))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=xe();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!l(c)&&(a=c)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}}function _t(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Vt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let S=Bt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:xe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Vt(n)},l=[Ht(),It(),_t()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});S.subscribe(()=>{let e=S.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&S.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&S.dispatch("TEARDOWN",n)}});function qt(e,t,n){let r=At(S),l=e?r.get(e):void 0,a=l?l.count>0:!1;return A(()=>{if(!(!e||!t))return S.dispatch("PUSH",e,n),()=>S.dispatch("POP",e,n)},[t,e]),a}let Z=new Map,N=new Map;function we(e,t=!0){A(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=N.get(r))!=null?o:1;if(i===1?N.delete(r):N.set(r,i-1),i!==1)return;let s=Z.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Z.delete(r))}let a=(n=N.get(r))!=null?n:0;return N.set(r,a+1),a!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}function Wt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let l=u.useRef((r=n==null?void 0:n.current)!=null?r:null),a=I(l),o=v(()=>{var i;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(l.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:o,contains:v(i=>o().some(s=>s.contains(i))),mainTreeNodeRef:l,MainTreeNode:u.useMemo(()=>function(){return n!=null?null:f.createElement(ne,{features:re.Hidden,ref:l})},[l,n])}}var Yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Yt||{}),Ut=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ut||{});let zt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=u.createContext(null);G.displayName="DialogContext";function H(e){let t=u.useContext(G);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function Gt(e,t,n=()=>[document.body]){qt(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function Kt(e,t){return j(t.type,zt,e,t)}let Xt="div",Jt=ye.RenderStrategy|ye.Static;function Qt(e,t){var n;let r=B(),{id:l=`headlessui-dialog-${r}`,open:a,onClose:o,initialFocus:i,__demoMode:s=!1,...c}=e,[d,M]=u.useState(0),D=Ge();a===void 0&&D!==null&&(a=(D&U.Open)===U.Open);let h=u.useRef(null),K=C(h,t),p=I(h),E=e.hasOwnProperty("open")||D!==null,$=e.hasOwnProperty("onClose");if(!E&&!$)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!E)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!$)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let y=a?0:1,[_,ke]=u.useReducer(Kt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),P=v(()=>o(!1)),fe=v(g=>ke({type:0,id:g})),V=se()?s?!1:y===0:!1,q=d>1,me=u.useContext(G)!==null,[Me,Fe]=Et(),{resolveContainers:X,mainTreeNodeRef:W,MainTreeNode:Ne}=Wt({portals:Me,defaultContainers:[(n=_.panelRef.current)!=null?n:h.current]}),Oe=q?"parent":"leaf",pe=D!==null?(D&U.Closing)===U.Closing:!1,je=me||pe?!1:V,Ae=u.useCallback(()=>{var g,b;return(b=Array.from((g=p==null?void 0:p.querySelectorAll("body > *"))!=null?g:[]).find(w=>w.id==="headlessui-portal-root"?!1:w.contains(W.current)&&w instanceof HTMLElement))!=null?b:null},[W]);we(Ae,je);let Be=q?!0:V,Ie=u.useCallback(()=>{var g,b;return(b=Array.from((g=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(w=>w.contains(W.current)&&w instanceof HTMLElement))!=null?b:null},[W]);we(Ie,Be),Ke(X,P,!(!V||q));let He=!(q||y!==0);Te(p==null?void 0:p.defaultView,"keydown",g=>{He&&(g.defaultPrevented||g.key===Ze.Escape&&(g.preventDefault(),g.stopPropagation(),P()))}),Gt(p,!(pe||y!==0||me),X),u.useEffect(()=>{if(y!==0||!h.current)return;let g=new ResizeObserver(b=>{for(let w of b){let Y=w.target.getBoundingClientRect();Y.x===0&&Y.y===0&&Y.width===0&&Y.height===0&&P()}});return g.observe(h.current),()=>g.disconnect()},[y,h,P]);let[_e,Ve]=rt(),qe=u.useMemo(()=>[{dialogState:y,close:P,setTitleId:fe},_],[y,_,P,fe]),ge=u.useMemo(()=>({open:y===0}),[y]),We={ref:K,id:l,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":_e};return f.createElement(Tt,{type:"Dialog",enabled:y===0,element:h,onUpdate:v((g,b)=>{b==="Dialog"&&j(g,{[ie.Add]:()=>M(w=>w+1),[ie.Remove]:()=>M(w=>w-1)})})},f.createElement(oe,{force:!0},f.createElement(ae,null,f.createElement(G.Provider,{value:qe},f.createElement(ae.Group,{target:h},f.createElement(oe,{force:!1},f.createElement(Ve,{slot:ge,name:"Dialog.Description"},f.createElement(F,{initialFocus:i,containers:X,features:V?j(Oe,{parent:F.features.RestoreFocus,leaf:F.features.All&~F.features.FocusLock}):F.features.None},f.createElement(Fe,null,L({ourProps:We,theirProps:c,slot:ge,defaultTag:Xt,features:Jt,visible:y===0,name:"Dialog"}))))))))),f.createElement(Ne,null))}let Zt="div";function en(e,t){let n=B(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=H("Dialog.Overlay"),i=C(t),s=v(d=>{if(d.target===d.currentTarget){if(et(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),o()}}),c=u.useMemo(()=>({open:a===0}),[a]);return L({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:c,defaultTag:Zt,name:"Dialog.Overlay"})}let tn="div";function nn(e,t){let n=B(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=H("Dialog.Backdrop"),i=C(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return f.createElement(oe,{force:!0},f.createElement(ae,null,L({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:tn,name:"Dialog.Backdrop"})))}let rn="div";function on(e,t){let n=B(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=H("Dialog.Panel"),i=C(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),c=v(d=>{d.stopPropagation()});return L({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:s,defaultTag:rn,name:"Dialog.Panel"})}let ln="h2";function an(e,t){let n=B(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=H("Dialog.Title"),i=C(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return L({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:ln,name:"Dialog.Title"})}let un=T(Qt),sn=T(nn),cn=T(on),dn=T(en),fn=T(an),ee=Object.assign(un,{Backdrop:sn,Panel:cn,Overlay:dn,Title:fn,Description:nt});function mn({title:e,titleId:t,...n},r){return u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?u.createElement("title",{id:t},e):null,u.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}))}const pn=u.forwardRef(mn),gn=pn,Ee=({open:e,onClose:t,onConfirm:n,title:r,message:l,confirmLabel:a="OK",cancelLabel:o="Avbryt"})=>{const i=u.useRef(null);return m.jsx(J.Root,{show:e,as:u.Fragment,children:m.jsxs(ee,{as:"div",className:"relative z-10",initialFocus:i,onClose:t,children:[m.jsx(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:m.jsx("div",{className:"fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-slate-700/75"})}),m.jsx("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:m.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:m.jsx(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:m.jsxs(ee.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-slate-800",children:[m.jsxs("div",{className:"sm:flex sm:items-start",children:[m.jsx("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 dark:bg-red-600",children:m.jsx(gn,{className:"h-6 w-6 text-red-600 dark:text-red-100","aria-hidden":"true"})}),m.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:!text-left",children:[m.jsx(ee.Title,{as:"h3",className:"font-roboto text-lg font-medium leading-6 text-gray-900 dark:text-slate-200",children:r}),m.jsx("div",{className:"mt-2",children:m.jsx("p",{className:"font-roboto text-sm text-gray-500 dark:text-slate-300",children:l})})]})]}),m.jsxs("div",{className:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",children:[m.jsx(ve,{type:he.DANGER,onClick:n,extraClassNames:"w-full sm:ml-3 sm:!w-auto",text:a}),m.jsx(ve,{type:he.ACCENT,onClick:t,extraClassNames:"mt-3 w-full sm:mt-0 sm:!w-auto",text:o})]})]})})})})]})})};try{Ee.displayName="ConfirmDialog",Ee.__docgenInfo={description:"",displayName:"ConfirmDialog",props:{open:{defaultValue:null,description:"Is the dialog open?",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Close handler",name:"onClose",required:!0,type:{name:"() => void"}},onConfirm:{defaultValue:null,description:"Confirm handler",name:"onConfirm",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"Title of the dialog",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"Dialog contents",name:"message",required:!0,type:{name:"string | Element"}},confirmLabel:{defaultValue:{value:"OK"},description:"Optional confirm label. Default OK",name:"confirmLabel",required:!1,type:{name:"string"}},cancelLabel:{defaultValue:{value:"Avbryt"},description:"Optional cancel label. Default Avbryt",name:"cancelLabel",required:!1,type:{name:"string"}}}}}catch{}export{Ee as C,ee as _};
