import { useState } from 'react';
import './MyCheckbox.css';

export default function MyCheckbox({ onChange, checked }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheck() {
        setIsChecked(!isChecked);
    }

    return (
        <div className='checkbox' onClick={handleCheck}>
            <label className='checkbox__label'>
                Короткометражки
                <input
                    onChange={onChange}
                    className='checkbox__input'
                    type='checkbox'
                    checked={checked} />
            </label>
        </div>
    )
}
