import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import { initialArray } from '../../../constants/initialArray';
import './SavedMovies.css';

export default function SavedMovies() {
    const savedMovies = initialArray.filter((m) => {
        return m.isLiked;
    })
    return (
        <div className='saved-movies-page'>
            <div className='saved-movies-page__container content'>
                <Search />
                <CardList cardList={savedMovies} />
            </div>
        </div>
    )
}
