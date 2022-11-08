var l=Object.defineProperty;var t=(n,e)=>l(n,"name",{value:e,configurable:!0});import{r as c,j as r}from"./jsx-runtime.2f92170d.js";import{a as p}from"./index.c8b50b42.js";import"./iframe.76a134c6.js";import"./make-decorator.bc5558ab.js";const o=t(({backgroundColor:n="#f42",labelBtn:e="Open Modal",...i})=>{const[u,s]=c.exports.useState(!0);return r("button",{className:"btn",onClick:t(()=>{s(!0)},"openHandler"),children:"Open Modal"})},"Button"),a=o;try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{backgroundColor:{defaultValue:{value:"#f42"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},labelBtn:{defaultValue:{value:"Open Modal"},description:"",name:"labelBtn",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch{}const y={parameters:{storySource:{source:`import Button from './Button'
import { action } from '@storybook/addon-actions'
export default {
    title:'Open button',
    component: Button
}

const Template = ()=>{
    
    return (
        <Button {...action}/> 
    )
}

export const openModal = Template.bind({})`,locationsMap:{"open-modal":{startLoc:{col:17,line:8},endLoc:{col:1,line:13},startBody:{col:17,line:8},endBody:{col:1,line:13}}}}},title:"Open button",component:a},d=t(()=>r(a,{...p}),"Template"),S=d.bind({}),g=["openModal"];export{g as __namedExportsOrder,y as default,S as openModal};
//# sourceMappingURL=Button.stories.5c793aa8.js.map
