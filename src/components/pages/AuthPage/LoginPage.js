import { useState } from 'react';
import AuthForm from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './AuthPage.css';

export default function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin();
    }

    return (
        <div className='auth'>
            <div className='auth__container'>
                <img src={logo} alt='Логотип' className='auth__logo' />
                <h1 className='auth__title'>Рады видеть!</h1>
                <AuthForm
                    formName='login'
                    handleSubmit={handleSubmit}
                    email={email}
                    handleChangeEmail={handleChangeEmail}
                    password={password}
                    handleChangePassword={handleChangePassword}
                    button='Войти' />
                <p className='auth__note'>
                    Ещё не зарегистрированы? <Link className='auth__link' to='/signup'>Регистрация</Link>
                </p>
            </div>
        </div>
    )
}
