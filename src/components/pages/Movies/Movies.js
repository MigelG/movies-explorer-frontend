import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import './Movies.css';
import { getMovies } from '../../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import Preloader from '../../ui/Preloader/Preloader';

export default function Movies({ likeMovie, dislikeMovie, savedMovies, setPopupMessage, setPopupIsOpen }) {

    const [allMovies, setAllMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [error, setError] = useState('');
    const [request, setRequest] = useState({ query: '', checkbox: false });
    const [loading, setLoading] = useState(false);

    function searchMovies(request) {
        if (!allMovies.length) {
            setLoading(true);
            getMovies()
                .then((res) => {
                    setAllMovies(res);
                })
                .catch(() => {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                    setPopupIsOpen(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
        localStorage.setItem('request', JSON.stringify(request));
        setRequest(request);
    }

    useEffect(() => {
        if (allMovies.length) {
            const searchedMovies = allMovies.filter(movie => {
                return movie.nameRU.toLowerCase().includes(request.query.toLowerCase()) &&
                    (request.checkbox ? movie.duration <= 40 : true);
            });
            localStorage.setItem('searchedMovies', JSON.stringify(searchedMovies));
            setSearchedMovies(searchedMovies);
            if (searchedMovies.length === 0) {
                setError('Ничего не найдено');
            } else {
                setError('');
            }
        }
    }, [allMovies, request])

    useEffect(() => {
        if (localStorage.getItem('searchedMovies')) {
            setSearchedMovies((JSON.parse(localStorage.getItem('searchedMovies'))));
        }
        if (localStorage.getItem('request')) {
            setRequest((JSON.parse(localStorage.getItem('request'))));
        }
    }, [])

    return (
        <div className='movies-page'>
            <div className='movies-page__container content'>
                <Search handleSearch={searchMovies} parent='movies' />
                {loading ?
                    <Preloader /> :
                    error ?
                        <p className='movies-page__error'>{error}</p> :
                        <CardList
                            cardList={searchedMovies}
                            likeMovie={likeMovie}
                            dislikeMovie={dislikeMovie}
                            savedMovies={savedMovies} />}
            </div>
        </div>
    )
}
