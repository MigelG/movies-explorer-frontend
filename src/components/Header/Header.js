import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <img src={logo} alt='Логотип' className='header__logo' />
                <Navigation />
            </div>
        </header>
    )
}
