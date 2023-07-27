import React from 'react';
import logo from '../assets/logo-00002.png'
import loginlogo from '../assets/basil-login-solid.svg';
import '../styles/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <img src={logo} alt='logo icon' className='logo' />
        <div className='nav-btns'>
            <button className='btn'>
                About
            </button>
            <button className='btn'>
                Why AiCanSell
            </button>
            <button className='btn'>
                Services
            </button>
        </div>
        <button className='btn-login'>
            <img src={loginlogo} alt='log icon' className='login-icon' />
            Login
        </button>
    </div>
  )
}

export default Nav