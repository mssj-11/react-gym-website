import React from 'react';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

const Header = () => {
  return <header>
    <div className='container'>
        <div className='nav_wrapper'>
            {/* LOGO */}
            <div className='logo'>
                <div className='logo_img'>
                    <img src={logo} alt='' />
                </div>
                <h2>FiFi</h2>
            </div>
            {/* MENU */}
            <div className='navigation'>
                ul.menu
            </div>
        </div>
    </div>
  </header>
}

export default Header