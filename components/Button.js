import buttonStyle from './Button.module.css'
import React from 'react'

const Button = React.forwardRef(({ text, href, onClick, navBar }, ref) => {
    return (
        <button onClick={onClick} href={href} ref={ref} className={navBar ? buttonStyle.navBarBtn : buttonStyle.btn}>
            {text}
        </button>
    )
})

export default Button
