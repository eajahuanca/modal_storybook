var p=Object.defineProperty;var o=(a,t)=>p(a,"name",{value:t,configurable:!0});import{j as e,r as c,a as r}from"./jsx-runtime.2f92170d.js";import"./iframe.76a134c6.js";const m=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",children:e("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})}),"closeTag"),l=o(({title:a="Modal Template",paragraph:t="\xBFEstas seguro de cerrar el modal?",btnLabel:d="Close Modal",showModal:s={display:"block"},...y})=>{const[g,i]=c.exports.useState(!0);return e("div",{className:"modal",style:s,children:r("div",{className:"modal-window",children:[r("div",{className:"modal-window__header",children:[e("h3",{className:"title",children:a}),e(m,{})]}),r("div",{className:"modal-window__body",children:[e("p",{children:t}),e("button",{className:"btn",onClick:o(()=>{i(!1)},"btnAction"),children:d})]})]})})},"Modal"),n=l;try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:{value:"Modal Template"},description:"",name:"title",required:!1,type:{name:"string"}},paragraph:{defaultValue:{value:"\xBFEstas seguro de cerrar el modal?"},description:"",name:"paragraph",required:!1,type:{name:"string"}},btnLabel:{defaultValue:{value:"Close Modal"},description:"",name:"btnLabel",required:!1,type:{name:"string"}},showModal:{defaultValue:{value:`{
    display:'block'
  }`},description:"",name:"showModal",required:!1,type:{name:"{ display: string; }"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/Modal.tsx#Modal"]={docgenInfo:l.__docgenInfo,name:"Modal",path:"src/Modal.tsx#Modal"})}catch{}const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import Modal from '../Modal'

export default {
    title:'Modal personalizado',
    component: Modal,
    argTypes:{
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args): JSX.Element => <Modal {...args} />

export const templateModal = Template.bind({})
templateModal.args={
    title:'Primer Template Modal',
    paragraph: '\xBFQuieres Cerrar el Modal?',
    btnLabel: 'Cerrar Modal',
    showModal : {
        display:'block'
    }
}`,locationsMap:{"template-modal":{startLoc:{col:47,line:13},endLoc:{col:89,line:13},startBody:{col:47,line:13},endBody:{col:89,line:13}}}}},title:"Modal personalizado",component:n,argTypes:{backgroundColor:{control:"color"}}},M=o(a=>e(n,{...a}),"Template"),u=M.bind({});u.args={title:"Primer Template Modal",paragraph:"\xBFQuieres Cerrar el Modal?",btnLabel:"Cerrar Modal",showModal:{display:"block"}};const L=["templateModal"];export{L as __namedExportsOrder,_ as default,u as templateModal};
//# sourceMappingURL=Modal.stories.86af91ca.js.map
