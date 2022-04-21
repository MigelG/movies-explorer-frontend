import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import './SavedMovies.css';
import { useEffect, useState } from 'react';

export default function SavedMovies({ savedMovies, likeMovie, dislikeMovie }) {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [error, setError] = useState('');
    const [request, setRequest] = useState({ query: '', checkbox: false });

    function searchMovies(request) {
        setRequest(request);
    }

    useEffect(() => {
        const searchedMovies = savedMovies.filter(movie => {
            return movie.nameRU.toLowerCase().includes(request.query.toLowerCase()) &&
                (request.checkbox ? movie.duration <= 40 : true);
        });
        setSearchedMovies(searchedMovies);
        if (searchedMovies.length === 0) {
            setError('Ничего не найдено');
        } else {
            setError('');
        }
    }, [request, savedMovies])

    useEffect(() => {
        if (localStorage.getItem('searchedMovies')) {
            setSearchedMovies((JSON.parse(localStorage.getItem('searchedMovies'))));
        }
        if (localStorage.getItem('request')) {
            setRequest((JSON.parse(localStorage.getItem('request'))));
        }
    }, [])

    return (
        <div className='saved-movies-page'>
            <div className='saved-movies-page__container content'>
                <Search handleSearch={searchMovies} />
                {error ?
                    <p className='movies-page__error'>{error}</p> :
                    <CardList
                        cardList={searchedMovies}
                        likeMovie={likeMovie}
                        dislikeMovie={dislikeMovie} />}
            </div>
        </div>
    )
}
