import { useLocation } from 'react-router-dom';
import './Card.css';
import { formatDuration } from '../../../utils/utils';

export default function Card({ movie, likeMovie, dislikeMovie, isLiked }) {
    const location = useLocation();
    let buttonClasses = 'card__button';
    let action = '';

    if (location.pathname === '/saved-movies') {
        buttonClasses += ' card__button_type_delete';
        action = 'delete';
    } else {
        buttonClasses += ' card__button_type_like';
        if (isLiked) {
            buttonClasses += ' card__button_isliked';
            action = 'delete';
        } else {
            action = 'save';
        }
    }

    function handleClick() {
        switch (action) {
            case 'save':
                likeMovie(movie);
                break;
            case 'delete':
                dislikeMovie(movie);
                break;
            default:
        }
    }

    return (
        <li className='card'>
            <figure className='card__figure'>
                <div className='card__image-container'>
                    <img
                        className='card__image'
                        src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
                        alt={movie.nameRU} />
                </div>
                <figcaption className='card__image-caption'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    <button className={buttonClasses} onClick={handleClick} />
                </figcaption>
            </figure>
            <p className='card__duration'>{formatDuration(movie.duration)}</p>
        </li>
    )
}
