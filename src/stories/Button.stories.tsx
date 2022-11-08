import Button from './Button'
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

export const openModal = Template.bind({})