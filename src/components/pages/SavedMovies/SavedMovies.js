import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import './SavedMovies.css';

export default function SavedMovies({ savedMovies, likeMovie, dislikeMovie }) {

    return (
        <div className='saved-movies-page'>
            <div className='saved-movies-page__container content'>
                <Search />
                <CardList
                    cardList={savedMovies}
                    likeMovie={likeMovie}
                    dislikeMovie={dislikeMovie} />
            </div>
        </div>
    )
}
