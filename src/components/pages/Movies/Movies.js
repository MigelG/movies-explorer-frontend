import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import './Movies.css';
import { getMovies } from '../../../utils/MoviesApi';
import { useState } from 'react';

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    function search(request) {
        getMovies()
            .then((res) => {
                const searchedMovies = res.filter(movie => {
                    return movie.nameRU.toLowerCase().includes(request.query.toLowerCase());
                });
                setMovies(searchedMovies);
                if (searchedMovies.length === 0) {
                    setError('Ничего не найдено');
                } else {
                    setError('');
                }
            });
    }

    return (
        <div className='movies-page'>
            <div className='movies-page__container content'>
                <Search handleSearch={search} />
                {error ?
                    <p className='movies-page__error'>{error}</p> :
                    <CardList cardList={movies} />}
                <button className='movies-page__button'>Ещё</button>
            </div>
        </div>
    )
}
