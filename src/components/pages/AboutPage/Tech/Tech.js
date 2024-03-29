import SectionTitle from '../common/SectionTitle/SectionTitle';
import './Tech.css';

export default function Tech() {
    return (
        <section className='tech'>
            <div className='tech__container content'>
                <SectionTitle>Технологии</SectionTitle>
                <h3 className='tech__title'>7 технологий</h3>
                <p className='tech__description'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className='tech__list'>
                    <li className='tech__item'>HTML</li>
                    <li className='tech__item'>CSS</li>
                    <li className='tech__item'>JS</li>
                    <li className='tech__item'>React</li>
                    <li className='tech__item'>Git</li>
                    <li className='tech__item'>Express.js</li>
                    <li className='tech__item'>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}
