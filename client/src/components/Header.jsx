import React from 'react'
import './css/Header.css'
import image from '../images/image.png'

function Header() {
  return (
    <div className='header'>
        {/* <h1>My Book List</h1> */}
        <img src={image} alt="logo" />
    </div>
  )
}

export default Header