import React from 'react'
import './css/Header.css'
import image from '../images/image.png'

function Header() {
  return (
    <div className='header'>
        <img src={image} alt="logo" />
    </div>
  )
}

export default Header