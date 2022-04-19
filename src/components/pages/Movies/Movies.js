import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import './Movies.css';
import { getMovies } from '../../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import { useResize } from '../../../hook/useResize';

export default function Movies({ likeMovie, dislikeMovie }) {

    const [allMovies, setAllMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [error, setError] = useState('');
    const [request, setRequest] = useState({ query: '', checkbox: false });

    function searchMovies(request) {
        if (!allMovies.length) {
            getMovies()
                .then((res) => {
                    setAllMovies(res);
                })
        }
        localStorage.setItem('request', JSON.stringify(request));
        setRequest(request);
    }

    useEffect(() => {
        if (allMovies.length) {
            const searchedMovies = allMovies.filter(movie => {
                return movie.nameRU.toLowerCase().includes(request.query.toLowerCase()) &&
                    (request.checkbox ? movie.duration <= 15 : true);
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

    const [array, fun] = useResize(searchedMovies);

    return (
        <div className='movies-page'>
            <div className='movies-page__container content'>
                <Search handleSearch={searchMovies} parent='movies' />
                {error ?
                    <p className='movies-page__error'>{error}</p> :
                    <CardList
                        cardList={array}
                        likeMovie={likeMovie}
                        dislikeMovie={dislikeMovie} />}
                <button className='movies-page__button' onClick={fun}>Ещё</button>
            </div>
        </div>
    )
}
