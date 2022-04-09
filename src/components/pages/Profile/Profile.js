import { useState } from 'react';
import './Profile.css';

export default function Profile({ onLogout }) {
    const [name, setName] = useState('Михаил');
    const [email, setEmail] = useState('qwerty@ya.ru');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='profile'>
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, Михаил!</h1>
                <form className='profile__form'>
                    <label className='profile__label'>
                        Имя
                        <input type='name' name='name'
                            className='profile__input' value={name} onChange={handleChangeName} required />
                    </label>
                    <label className='profile__label'>
                        E-mail
                        <input type='email' name='email'
                            className='profile__input' value={email} onChange={handleChangeEmail} required />
                    </label>
                    <button className='profile__submit-button' type='submit' onClick={handleSubmit}>Редактировать</button>
                </form>
                <button className='profile__logout-button' type='button' onClick={onLogout}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}
