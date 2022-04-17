import { useLocation } from 'react-router-dom';
import './Card.css';
import { formatDuration } from '../../../utils/utils';

export default function Card({ image, title, duration, isLiked }) {
    const location = useLocation();
    let buttonClasses = 'card__button';
    if (location.pathname === '/movies') {
        buttonClasses += ' card__button_type_like';
        if (isLiked) {
            buttonClasses += ' card__button_isliked';
        }
    } else {
        buttonClasses += ' card__button_type_delete';
    }

    return (
        <li className='card'>
            <figure className='card__figure'>
                <div className='card__image-container'>
                    <img className='card__image' src={`https://api.nomoreparties.co${image}`} alt={title} />
                </div>
                <figcaption className='card__image-caption'>
                    <h2 className='card__title'>{title}</h2>
                    <button className={buttonClasses} />
                </figcaption>
            </figure>
            <p className='card__duration'>{formatDuration(duration)}</p>
        </li>
    )
}
