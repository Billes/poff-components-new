import{j as a}from"./jsx-runtime-eD_iBAx7.js";import{r as l}from"./index-y4MHPZnw.js";import{c as k}from"./classNames-pTwYsIK_.js";function A({title:e,titleId:t,...n},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z",clipRule:"evenodd"}),l.createElement("path",{d:"m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"}))}const C=l.forwardRef(A),M=C;function T({title:e,titleId:t,...n},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{d:"M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),l.createElement("path",{fillRule:"evenodd",d:"M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",clipRule:"evenodd"}))}const D=l.forwardRef(T),O=D;var r=(e=>(e.TEXT="text",e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.URL="url",e.DATE="date",e.TIME="time",e.SEARCH="search",e))(r||{});const g=({id:e,type:t=r.TEXT,disabled:n=!1,required:s=!1,readonly:h=!1,autoComplete:v="off",placeholder:x,error:d,onChange:m,icon:i,name:y,value:E,ref:b,step:w,maxLength:u,description:f,...R})=>{const[q,V]=l.useState(""),[o,c]=l.useState(r.TEXT),j=()=>{o===r.PASSWORD?c(r.TEXT):c(r.PASSWORD)};l.useEffect(()=>{c(t)},[t]);const S=p=>{const N=p.target;V(N.value),m&&m(p)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"relative rounded-md shadow-sm",children:[i&&a.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2",children:i}),a.jsx("input",{id:e,ref:b,className:k("block w-full rounded-md","border","font-roboto font-light text-gray-900 sm:text-sm","focus:outline-none","disabled:cursor-not-allowed disabled:opacity-75","focus:ring-1","dark:border-slate-600/20 dark:bg-slate-700 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white dark:placeholder-slate-400",i?"pl-9":"",d?"border-red-700 text-red-700 focus:ring-red-700":"border-gray-300 focus:border-sky-600 focus:ring-sky-600"),type:o,disabled:n,required:s,readOnly:h,placeholder:x,name:y,value:E,onChange:S,autoComplete:v,step:w,maxLength:u,...R}),t===r.PASSWORD&&a.jsx("div",{className:"cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3",onClick:j,children:o===r.PASSWORD?a.jsx(O,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}):a.jsx(M,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),a.jsxs("div",{className:"mx-2 flex justify-between text-xs text-gray-500 dark:text-slate-400",children:[a.jsxs("div",{className:"grow",children:[!!d&&a.jsx("span",{className:"text-red-500",children:d}),f&&!d&&a.jsx("span",{children:f})]}),u&&a.jsxs("div",{children:[q.toString().length|0,"/",u]})]})]})};try{g.displayName="Input",g.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"InputType.TEXT"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"hidden"'},{value:'"number"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'},{value:'"date"'},{value:'"time"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}}}}}catch{}export{g as I,r as a};