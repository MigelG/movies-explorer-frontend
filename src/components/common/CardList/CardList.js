import Card from '../Card/Card';
import './CardList.css';

export default function CardList({ cardList }) {

    return (
        <ul className='movies'>
            {cardList.map((m) => <Card
                key={m.id}
                image={m.image.url}
                title={m.nameRU}
                duration={m.duration} />)}
        </ul>
    )
}
