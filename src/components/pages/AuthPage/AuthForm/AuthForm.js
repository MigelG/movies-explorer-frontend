import './AuthForm.css';

export default function AuthForm({
    formName,
    handleSubmit,
    email,
    handleChangeEmail,
    password,
    handleChangePassword,
    name,
    handleChangeName,
    button
}) {
    return (
        <form name={formName} className='auth-form' onSubmit={handleSubmit} noValidate>
            {formName === 'register' &&
                <label className='auth-form__label'>
                    Имя
                    <input type='name' name='name'
                        className='auth-form__input' value={name} onChange={handleChangeName} required />
                </label>
            }

            <label className='auth-form__label'>
                E-mail
                <input type='email' name='email'
                    className='auth-form__input' value={email} onChange={handleChangeEmail} required />
            </label>

            <label className='auth-form__label'>
                Пароль
                <input type='password' name='password'
                    className='auth-form__input' value={password} onChange={handleChangePassword} required />
            </label>

            <button type='submit' className='auth-form__submit-button'>{button}</button>
        </form>
    )
}
