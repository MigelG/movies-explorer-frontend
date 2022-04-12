import SectionTitle from '../common/SectionTitle/SectionTitle';
import photo from '../../../../images/photo.jpg';
import './AboutMe.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

export default function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__container content'>
                <SectionTitle>Студент</SectionTitle>
                <div className='introduce'>
                    <div className='introduce__texts'>
                        <h3 className='introduce__name'>Михаил</h3>
                        <p className='introduce__description'>Фронтенд-разработчик, 34 года</p>
                        <p className='introduce__story'>
                            Ранее я работал продавцом-консультантом в розничном магазине. Сейчас полностью перехожу в веб-разработку. Верстать и оживлять интерфейсы оказалось гораздо более интересным для меня занятием.
                        </p>
                        <ul className='introduce__social'>
                            <li>
                                <a className='introduce__social-link' href='https://ru-ru.facebook.com/' target='blank'>Facebook</a>
                            </li>
                            <li>
                                <a className='introduce__social-link' href='https://github.com/MigelG/' target='blank'>Github</a>
                            </li>
                        </ul>
                    </div>
                    <img className='introduce__photo' src={photo} alt='Михаил' />
                </div>
                <div className='portfolio'>
                    <h3 className='portfolio__title'>Портфолио</h3>
                    <ul className='portfolio__list'>
                        <PortfolioItem link='https://github.com/MigelG/how-to-learn'>Статичный сайт</PortfolioItem>
                        <PortfolioItem link='https://github.com/MigelG/russian-travel'>Адаптивный сайт</PortfolioItem>
                        <PortfolioItem link='https://github.com/MigelG/react-mesto-api-full'>Одностраничное приложение</PortfolioItem>
                    </ul>
                </div>
            </div>
        </section>
    )
}
