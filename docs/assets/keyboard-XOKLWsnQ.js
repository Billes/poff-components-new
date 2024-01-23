import{r as i,R as w,e as S}from"./index-y4MHPZnw.js";var k=Object.defineProperty,P=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>(P(e,typeof t!="symbol"?t+"":t,n),n);let R=class{constructor(){b(this,"current",this.detect()),b(this,"handoffState","pending"),b(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},h=new R,A=(e,t)=>{h.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function x(e){let t=i.useRef(e);return A(()=>{t.current=e},[e]),t}let L=function(e){let t=x(e);return w.useCallback((...n)=>t.current(...n),[t])};function I(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function N(){let e=[],t={addEventListener(n,r,o,s){return n.addEventListener(r,o,s),t.add(()=>n.removeEventListener(r,o,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return I(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=N();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function X(){let[e]=i.useState(N);return i.useEffect(()=>()=>e.dispose(),[e]),e}function U(){let e=typeof document>"u";return"useSyncExternalStore"in S?(t=>t.useSyncExternalStore)(S)(()=>()=>{},()=>!1,()=>!e):!1}function q(){let e=U(),[t,n]=i.useState(h.isHandoffComplete);return t&&h.isHandoffComplete===!1&&n(!1),i.useEffect(()=>{t!==!0&&n(!0)},[t]),i.useEffect(()=>h.handoff(),[]),e?!1:t}var j;let Z=(j=w.useId)!=null?j:function(){let e=q(),[t,n]=w.useState(e?()=>h.nextId():null);return A(()=>{t===null&&n(h.nextId())},[t]),t!=null?""+t:void 0};function $(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}let F=Symbol();function _(e,t=!0){return Object.assign(e,{[F]:t})}function ee(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=L(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[F]))?void 0:n}function O(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),D=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(D||{});function M({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:s=!0,name:f,mergeRefs:u}){u=u??B;let a=H(t,e);if(s)return y(a,n,r,f,u);let m=o??0;if(m&2){let{static:l=!1,...p}=a;if(l)return y(p,n,r,f,u)}if(m&1){let{unmount:l=!0,...p}=a;return $(l?0:1,{0(){return null},1(){return y({...p,hidden:!0,style:{display:"none"}},n,r,f,u)}})}return y(a,n,r,f,u)}function y(e,t={},n,r,o){let{as:s=n,children:f,refName:u="ref",...a}=E(e,["unmount","static"]),m=e.ref!==void 0?{[u]:e.ref}:{},l=typeof f=="function"?f(t):f;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t));let p={};if(t){let c=!1,g=[];for(let[v,d]of Object.entries(t))typeof d=="boolean"&&(c=!0),d===!0&&g.push(v);c&&(p["data-headlessui-state"]=g.join(" "))}if(s===i.Fragment&&Object.keys(T(a)).length>0){if(!i.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let c=l.props,g=typeof(c==null?void 0:c.className)=="function"?(...d)=>O(c==null?void 0:c.className(...d),a.className):O(c==null?void 0:c.className,a.className),v=g?{className:g}:{};return i.cloneElement(l,Object.assign({},H(l.props,T(E(a,["ref"]))),p,m,{ref:o(l.ref,m.ref)},v))}return i.createElement(s,Object.assign({},E(a,["ref"]),s!==i.Fragment&&m,s!==i.Fragment&&p),l)}function B(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function H(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...s){let f=n[r];for(let u of f){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;u(o,...s)}}});return t}function V(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function T(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function E(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let W="div";var Y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Y||{});function z(e,t){var n;let{features:r=1,...o}=e,s={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return M({ourProps:s,theirProps:o,slot:{},defaultTag:W,name:"Hidden"})}let te=V(z);function ne(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&G(n)?!1:r}function G(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var J=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(J||{});export{M as C,Z as I,C as O,_ as T,V as U,J as a,h as b,x as c,N as d,q as e,te as f,I as g,A as l,L as o,X as p,ne as r,Y as s,O as t,$ as u,D as v,T as x,ee as y};