import Card from '../Card/Card';
import './CardList.css';
import { useResize } from '../../../hook/useResize';
import { useState, useEffect } from 'react';

export default function CardList({ cardList, likeMovie, dislikeMovie, savedMovies }) {

    const [moreMoviesButton, setMoreMoviesButton] = useState(false);
    const [moviesArray, getMoreMovies] = useResize(cardList);

    useEffect(() => {
        if (cardList.length === 0 || cardList.length <= moviesArray.length) {
            setMoreMoviesButton(false);
        } else {
            setMoreMoviesButton(true);
        }
    }, [cardList, moviesArray]);

    return (
        <>
            <ul className='movies'>
                {moviesArray.map((m) => <Card
                    key={m.id || m._id}
                    movie={m}
                    likeMovie={likeMovie}
                    dislikeMovie={dislikeMovie}
                    savedMovies={savedMovies} />)}
            </ul>
            <button
                className={`movies-page__button${moreMoviesButton ? '' : ' movies-page__button_hide'}`}
                onClick={getMoreMovies}>
                Ещё
            </button>
        </>
    )
}
