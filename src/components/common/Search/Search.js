import { useEffect, useState } from 'react';
import MyCheckbox from '../../ui/MyCheckbox/MyCheckbox';
import './Search.css';

export default function Search({ handleSearch, parent }) {
    const [request, setRequest] = useState({ query: '', checkbox: false });
    const [error, setError] = useState('');

    useEffect(() => {
        if (parent === 'movies' && JSON.parse(localStorage.getItem('request'))) {
            setRequest(JSON.parse(localStorage.getItem('request')));
        }
    }, []);

    function handleChange(e) {
        setRequest({ ...request, query: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!request.query) {
            setError('Нужно ввести ключевое слово');
        } else {
            setError('');
            handleSearch(request);
        }
    }

    function handleCheckbox(e) {
        setRequest({ ...request, checkbox: e.target.checked });
    }

    return (
        <div className='search'>
            <form className='search__form' onSubmit={handleSubmit} noValidate>
                <input
                    className='search__input'
                    type='text'
                    placeholder='Фильм'
                    required
                    value={request.query}
                    onChange={handleChange}
                />
                <button className='search__button' type='submit' />
                {error && <p className='search__form-error'>{error}</p>}
            </form>
            <MyCheckbox onChange={handleCheckbox} checked={request.checkbox} />
        </div>
    )
}
