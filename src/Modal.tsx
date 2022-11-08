import { useState } from 'react'
import './App.css'
import CloseTag from './stories/assets/close'

interface ModalProps {
  backgroundColor:string,
  display:null,
  title:string,
  paragraph:string,
  btnLabel:string,
  shoModal:{},
  btnAction:()=>void
}

const Modal = ({
  title = 'Modal Template',
  paragraph = '¿Estas seguro de cerrar el modal?',
  btnLabel = 'Close Modal',
  showModal = {
    display:'block'
  },
  ...props  
}): JSX.Element =>{
  const [isOpen, setIsOpen] = useState(true)
  const btnAction = () =>{
    setIsOpen(false)
  }
  return (
    <div className="modal" style={showModal}>
      <div className='modal-window'>
        <div className="modal-window__header">
          <h3 className='title'>{title}</h3>
          <CloseTag />
        </div>
        <div className="modal-window__body">
          <p>{paragraph}</p>
          <button className='btn' onClick={btnAction}>{btnLabel}</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
