import AuthForm from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './AuthPage.css';

export default function LoginPage({ onLogin }) {

    return (
        <div className='auth'>
            <div className='auth__container'>
                <Link to='/'>
                    <img src={logo} alt='Логотип' className='auth__logo' />
                </Link>
                <h1 className='auth__title'>Рады видеть!</h1>
                <AuthForm
                    formName='login'
                    onSubmit={onLogin}
                    button='Войти' />
                <p className='auth__note'>
                    Ещё не зарегистрированы? <Link className='auth__link' to='/signup'>Регистрация</Link>
                </p>
            </div>
        </div>
    )
}
