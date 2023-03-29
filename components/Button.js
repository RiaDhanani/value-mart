import buttonStyle from './Button.module.css'
import React from 'react'

const Button = ({ text, navBar, onClick }) => {
    return (
        <button onClick={onClick} className={navBar ? buttonStyle.navBarBtn : buttonStyle.btn}>
            {text}
        </button>
    )
}

export default Button
