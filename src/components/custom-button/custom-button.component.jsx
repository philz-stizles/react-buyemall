import React, { Component } from 'react'
import './custom-button.styles.css'

const CustomButton = ({children, ...rest}) => {
    return (
        <button className={`${(rest.isGoogleSignIn ? 'google-sign-in' : '')} custom-button`} {...rest}>{children}</button>
    )
}

export default CustomButton
