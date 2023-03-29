import buttonStyle from './Button.module.css'
import React from 'react'

const Button = React.forwardRef(({ text, href, onClick }, ref) => {
    return (
        <button onClick={onClick} href={href} ref={ref} className={buttonStyle.btn}>
            {text}
        </button>
    )
})

export default Button
