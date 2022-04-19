import { useLocation } from 'react-router-dom';
import './Card.css';
import { formatDuration } from '../../../utils/utils';
import { useEffect, useState } from 'react';

export default function Card({ movie, likeMovie, dislikeMovie, savedMovies }) {
    const location = useLocation();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsLiked(savedMovies?.some(i => i.movieId === movie.id));
    }, [movie.id, savedMovies]);

    function handleLike() {
        setIsLiked(true);
        likeMovie(movie);
    }

    function handleDislike() {
        setIsLiked(false);
        dislikeMovie(movie);
    }

    function openTrailer() {
        window.open(movie.trailerLink);
    }

    return (
        <li className='card'>
            <figure className='card__figure'>
                <div className='card__image-container'>
                    <img
                        className='card__image'
                        src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
                        alt={movie.nameRU}
                        onClick={openTrailer} />
                </div>
                <figcaption className='card__image-caption'>
                    <h2 className='card__title'>{movie.nameRU}</h2>

                    {location.pathname === '/movies' &&
                        <button
                            className={`card__button card__button_type_like${isLiked ? ' card__button_isliked' : ''}`}
                            onClick={isLiked ? handleDislike : handleLike} />}

                    {location.pathname === '/saved-movies' &&
                        <button
                            className='card__button card__button_type_delete'
                            onClick={handleDislike} />}

                </figcaption>
            </figure>
            <p className='card__duration'>{formatDuration(movie.duration)}</p>
        </li>
    )
}
