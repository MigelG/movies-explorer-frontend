import { useState } from 'react';
import AuthForm from './AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './AuthPage.css';

export default function RegisterPage({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onLogin();
    }

    return (
        <div className='auth'>
            <div className='auth__container'>
                <img src={logo} alt='Логотип' className='auth__logo' />
                <h1 className='auth__title'>Добро пожаловать!</h1>
                <AuthForm
                    formName='register'
                    handleSubmit={handleSubmit}
                    email={email}
                    handleChangeEmail={handleChangeEmail}
                    password={password}
                    handleChangePassword={handleChangePassword}
                    name={name}
                    handleChangeName={handleChangeName}
                    button='Зарегестрироваться' />
                <p className='auth__note'>
                    Уже зарегистрированы? <Link className='auth__link' to='/signin'>Войти</Link>
                </p>
            </div>
        </div>
    )
}
