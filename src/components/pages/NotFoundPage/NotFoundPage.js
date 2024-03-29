import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
    return (
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__text'>Страница не найдена</p>
            <Link className='not-found__link' to='/movies'>Назад</Link>
        </div>
    )
}
