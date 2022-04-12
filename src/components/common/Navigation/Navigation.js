import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation({ loggedIn }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function toggleMenu() {
        setMenuIsOpen(!menuIsOpen);
    }

    if (loggedIn) {
        return (
            <>
                <nav className={`nav nav_mobile${menuIsOpen ? ' nav_mobile_active' : ''}`}>
                    <div className='nav__container nav__container_mobile'>
                        <NavLink className='nav__link nav__link_mobile' to='/' onClick={toggleMenu}>Главная</NavLink>
                        <NavLink className='nav__link nav__link_mobile' to='/movies' onClick={toggleMenu}>Фильмы</NavLink>
                        <NavLink className='nav__link nav__link_mobile' to='/saved-movies' onClick={toggleMenu}>Сохранённые фильмы</NavLink>
                        <Link className='nav__link nav__link_profile nav__link_mobile' to='/profile'>
                            Аккаунт
                            <span className='nav__profile-icon'></span>
                        </Link>
                        <button className='nav_mobile_close-button' type='button' onClick={toggleMenu} />
                    </div>
                </nav>
                <button className='nav__burger-button' type='button' onClick={toggleMenu}>
                    <span className='nav__burger-span' />
                </button>
            </>
        )
    }
    return (
        <nav className='nav'>
            <div className='nav__container'>
                <Link className='nav__link nav__link_signup' to='/signup'>Регистрация</Link>
                <Link className='nav__link nav__link_signin' to='/signin'>Войти</Link>
            </div>
        </nav>
    )
}
