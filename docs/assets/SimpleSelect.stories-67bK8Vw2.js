import{S as h}from"./index-FreGQrAd.js";import"./jsx-runtime-EN2LmfEx.js";import"./index-CWWLs2mj.js";import"./_commonjsHelpers-5-cIlDoe.js";const R={title:"Form/SimpleSelect",component:h,parameters:{backgrounds:{disable:!0},layout:"centered"},tags:["autodocs"],argTypes:{}},y=[{id:"1",name:"Durward Reynolds",mobile:"0123456789",mail:"test@example.com"},{id:"2",name:"Kenton Towne",mobile:"0123456789",mail:"test@example.com"},{id:"3",name:"Therese Wunsch",mobile:"0123456789",mail:"test@example.com"},{id:"4",name:"Benedict Kessler",mobile:"0123456789",mail:"test@example.com"},{id:"5",name:"Katelyn Rohan",mobile:"0123456789",mail:"test@example.com"}],K=[{id:"1",name:"Durward Reynolds",mobile:"0123456789",mail:"test@example.com"},{id:"2",name:"Kenton Towne",mobile:"0123456789",mail:"test@example.com",unavailable:!0},{id:"3",name:"Therese Wunsch",mobile:"0123456789",mail:"test@example.com"},{id:"4",name:"Benedict Kessler",mobile:"0123456789",mail:"test@example.com",unavailable:!0},{id:"5",name:"Katelyn Rohan",mobile:"0123456789",mail:"test@example.com"}],e={args:{name:"people",options:y,selected:null,keyIdentifier:"id",valueIdentifier:"name",disabled:!1}},a={args:{...e.args,selected:y[2]}},s={args:{...e.args,disabled:!0}},r={args:{...e.args,options:K}},o={args:{...e.args,options:[]}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'people',
    options: people,
    selected: null,
    keyIdentifier: 'id',
    valueIdentifier: 'name',
    disabled: false
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,i,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selected: people[2]
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: people2
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,D,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: []
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const k=["Default","Selected","Disabled","DisabledOptions","Empty"];export{e as Default,s as Disabled,r as DisabledOptions,o as Empty,a as Selected,k as __namedExportsOrder,R as default};
