import { useState } from 'react';
import './MyCheckbox.css';

export default function MyCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheck() {
        setIsChecked(!isChecked);
    }

    return (
        <div className='checkbox' onClick={handleCheck}>
            <label className='checkbox__label'>
                Короткометражки
                <input className='checkbox__input' type='checkbox' />
            </label>
        </div>
    )
}
