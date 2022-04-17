import { useState, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

export default function Profile({ onLogout, handleUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateUser({ name, email });
    }

    return (
        <div className='profile'>
            <div className='profile__container'>
                <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
                <form className='profile__form' onSubmit={handleSubmit}>
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
                    <button className='profile__submit-button' type='submit'>Редактировать</button>
                </form>
                <button className='profile__logout-button' type='button' onClick={onLogout}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}
