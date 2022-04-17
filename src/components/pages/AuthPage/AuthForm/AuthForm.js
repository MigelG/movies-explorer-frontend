import { useEffect, useState } from 'react';
import './AuthForm.css';

export default function AuthForm({
    formName,
    onSubmit,
    button
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('Это поле не может быть пустым');
    const [emailError, setEmailError] = useState('Это поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Это поле не может быть пустым');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (formName === 'login') {
            setNameError('');
        }
    }, []);

    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, nameError]);

    function handleFocus(e) {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                console.log(e.target.name);
        }
    }

    function handleChangeName(e) {
        setName(e.target.value);
        if (e.target.value.length < 2) {
            if (e.target.value === '') {
                setNameError('Это поле не может быть пустым');
            } else {
                setNameError('Минимальная длина поля - 2 символа');
            }
        } else {
            setNameError('');
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexp.test(String(e.target.value).toLowerCase())) {
            if (e.target.value === '') {
                setEmailError('Это поле не может быть пустым');
            } else {
                setEmailError('Введен некорректный email');
            }
        } else {
            setEmailError('');
        }
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            if (e.target.value === '') {
                setPasswordError('Это поле не может быть пустым');
            } else {
                setPasswordError('Пароль должен быть больше 2 и меньше 9 символов');
            }
        } else {
            setPasswordError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formName === 'login') {
            onSubmit(email, password);
        } else {
            onSubmit(name, email, password);
        }
    }

    return (
        <form name={formName} className='auth-form' onSubmit={handleSubmit} noValidate>
            {formName === 'register' &&
                <label className='auth-form__label'>
                    Имя
                    <input
                        onFocus={handleFocus}
                        type='name'
                        name='name'
                        className={`auth-form__input${nameError ? ' auth-form__input_error' : ''}`}
                        value={name}
                        onChange={handleChangeName}
                        required
                    />
                    {(nameError && nameDirty) &&
                        <p className={`auth-form__error${nameError ? ' auth-form__error_active' : ''}`}>
                            {nameError}
                        </p>}
                </label>
            }

            <label className='auth-form__label'>
                E-mail
                <input
                    onFocus={handleFocus}
                    type='email'
                    name='email'
                    className={`auth-form__input${emailError ? ' auth-form__input_error' : ''}`}
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                {(emailError && emailDirty) &&
                    <p className={`auth-form__error${emailError ? ' auth-form__error_active' : ''}`}>
                        {emailError}
                    </p>}
            </label>

            <label className='auth-form__label'>
                Пароль
                <input
                    onFocus={handleFocus}
                    type='password'
                    name='password'
                    className={`auth-form__input${passwordError ? ' auth-form__input_error' : ''}`}
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                {(passwordError && passwordDirty) &&
                    <p className={`auth-form__error${passwordError ? ' auth-form__error_active' : ''}`}>
                        {passwordError}
                    </p>}
            </label>

            <button
                disabled={!formValid}
                type='submit'
                className='auth-form__submit-button'>
                {button}
            </button>
        </form>
    )
}
