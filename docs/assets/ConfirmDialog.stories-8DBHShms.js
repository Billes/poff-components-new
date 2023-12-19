import{C as m}from"./index-gJTXK8Ty.js";import"./jsx-runtime-eD_iBAx7.js";import"./index-y4MHPZnw.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-HVUWyudK.js";/* empty css              */import"./classNames-pTwYsIK_.js";import"./transition-7SLoD2DB.js";import"./keyboard-kdWbnbsd.js";import"./index-ftFKxBio.js";import"./description-UU_reO0B.js";const C={title:"Overlay/ConfirmDialog",component:m,parameters:{backgrounds:{disable:!0},layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"}}},e={args:{open:!0,title:"Är du säker?",message:"Om du trycker på OK kommer allt att explodera",onClose:()=>{console.log("closing")},onOpen:()=>{console.log("opening")}}},o={args:{...e.args,cancelLabel:"Stäng den här",confirmLabel:"Klart jag godkänner"}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Är du säker?',
    message: 'Om du trycker på OK kommer allt att explodera',
    onClose: () => {
      console.log('closing');
    },
    onOpen: () => {
      console.log('opening');
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    cancelLabel: 'Stäng den här',
    confirmLabel: 'Klart jag godkänner'
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const E=["Default","AlternativeButtons"];export{o as AlternativeButtons,e as Default,E as __namedExportsOrder,C as default};
