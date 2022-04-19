import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ cardList, likeMovie, dislikeMovie }) {

    return (
        <ul className='movies'>
            {cardList.map((m) => <Card
                key={m.id || m._id}
                movie={m}
                likeMovie={likeMovie}
                dislikeMovie={dislikeMovie} />)}
        </ul>
    )
}
