import CardList from '../../common/CardList/CardList';
import Search from '../../common/Search/Search';
import { initialArray } from '../../../constants/initialArray';
import './Movies.css';

export default function Movies() {
    return (
        <div className='movies-page'>
            <div className='movies-page__container content'>
                <Search />
                <CardList cardList={initialArray} />
                <button className='movies-page__button'>Ещё</button>
            </div>
        </div>
    )
}
