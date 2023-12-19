import{A as R,a as r}from"./index-RIex85JY.js";import"./jsx-runtime-eD_iBAx7.js";import"./index-y4MHPZnw.js";import"./_commonjsHelpers-4gQjN7DL.js";/* empty css              */import"./classNames-pTwYsIK_.js";const w={title:"Elements/Alert",component:R,parameters:{backgrounds:{disable:!0},layout:"centered"},tags:["autodocs"],argTypes:{closable:{control:"boolean"},icon:{control:"boolean"}}},e={args:{closable:!0,type:r.SUCCESS,headline:"Success!",body:"Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.",icon:!1}},s={args:{...e.args,type:r.INFO,headline:"Information",icon:!0}},a={args:{...e.args,type:r.WARNING,headline:"Warning!",closable:!0}},n={args:{...e.args,type:r.ERROR,headline:"Error!",closable:!0}},o={args:{...e.args,type:r.SUCCESS,headline:"Error!",closable:!0,icon:!0,body:void 0}},t={args:{...e.args,type:r.SUCCESS,headline:"Self destroying!",closable:!0,body:"This alert will self destroy after 3 seconds. (set duration in ms)",duration:3e3}};var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    closable: true,
    type: AlertType.SUCCESS,
    headline: 'Success!',
    body: 'Est magna ex deserunt irure. Eiusmod in ex tempor velit minim voluptate do reprehenderit veniam.',
    icon: false
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: AlertType.INFO,
    headline: 'Information',
    icon: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: AlertType.WARNING,
    headline: 'Warning!',
    closable: true
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,b,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: AlertType.ERROR,
    headline: 'Error!',
    closable: true
  }
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var f,h,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: AlertType.SUCCESS,
    headline: 'Error!',
    closable: true,
    icon: true,
    body: undefined
  }
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var C,T,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Success.args,
    type: AlertType.SUCCESS,
    headline: 'Self destroying!',
    closable: true,
    body: 'This alert will self destroy after 3 seconds. (set duration in ms)',
    duration: 3000
  }
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const D=["Success","Info","Warning","Error","OnlyHeadline","SelfDestroying"];export{n as Error,s as Info,o as OnlyHeadline,t as SelfDestroying,e as Success,a as Warning,D as __namedExportsOrder,w as default};
