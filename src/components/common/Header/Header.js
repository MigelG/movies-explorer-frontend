import './Header.css';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ loggedIn }) {
    const location = useLocation();
    return (
        <header className={location.pathname === '/' ? 'header header_main' : 'header'}>
            <div className='header__container content'>
                <Link to='/'>
                    <img src={logo} alt='Логотип' className='header__logo' />
                </Link>
                <Navigation loggedIn={loggedIn} />
            </div>
        </header>
    )
}
