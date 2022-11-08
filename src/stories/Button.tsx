import { useState } from 'react'
import './Button.css'
interface ButtonProps {
    backgroundColor:string,
    labelBtn:String,
    btnAction:()=>void
}
const Button = ({
    backgroundColor = '#f42',
    labelBtn = 'Open Modal',
    ...props
}):JSX.Element=>{
    const [isOpen, setIsOpen] = useState(true);
    const openHandler = ()=>{
        setIsOpen(true)
    }
    return(
        <button className='btn' onClick={openHandler}>Open Modal</button>
    )
}

export default Button