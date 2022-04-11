import MyCheckbox from '../../ui/MyCheckbox/MyCheckbox';
import './Search.css';

export default function Search() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='search'>
            <form className='search__form'>
                <input className='search__input' type='text' placeholder='Фильм' required></input>
                <button className='search__button' type='submit' onClick={handleSubmit} />
            </form>
            <MyCheckbox />
        </div>
    )
}
