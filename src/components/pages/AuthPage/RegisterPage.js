import AuthForm from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './AuthPage.css';

export default function RegisterPage({ onRegister }) {

    return (
        <div className='auth'>
            <div className='auth__container'>
                <Link to='/'>
                    <img src={logo} alt='Логотип' className='auth__logo' />
                </Link>
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <AuthForm
                    formName='register'
                    onSubmit={onRegister}
                    button='Зарегестрироваться' />
                <p className='auth__note'>
                    Уже зарегистрированы? <Link className='auth__link' to='/signin'>Войти</Link>
                </p>
            </div>
        </div>
    )
}
