import { ComponentStory, ComponentMeta } from '@storybook/react'
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
    paragraph: '¿Quieres Cerrar el Modal?',
    btnLabel: 'Cerrar Modal',
    showModal : {
        display:'block'
    }
}