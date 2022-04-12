import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container content'>
                <p className='footer__patrons'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__navigation'>
                    <p className='footer__copyright'>&copy; 2020</p>
                    <ul className='footer__list'>
                        <li className='footer__list-item'>
                            <a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__link' href='https://github.com/MigelG/' target='blank'>Github</a>
                        </li>
                        <li className='footer__list-item'>
                            <a className='footer__link' href='https://ru-ru.facebook.com/' target='blank'>Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
