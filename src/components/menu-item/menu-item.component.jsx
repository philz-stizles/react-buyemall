import React from 'react'
import './menu-item.styles.css'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`}>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
