import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './../../api/firebase/firebase.utils'
import './header.styles.css'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ loggedInUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                {
                    (loggedInUser)
                    ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to="/sign-in">SIGN IN</Link>
                }
                
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </div>
        
    )
}

export default Header
