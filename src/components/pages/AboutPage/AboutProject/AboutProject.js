import SectionTitle from '../common/SectionTitle/SectionTitle';
import './AboutProject.css';

export default function AboutProject() {
    return (
        <section className='about' id='about-project'>
            <div className='about__container content'>
                <SectionTitle>О проекте</SectionTitle>
                <div className='about__description'>
                    <article className='description'>
                        <h3 className='description__title'>Дипломный проект включал 5 этапов</h3>
                        <p className='description__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article className='description'>
                        <h3 className='description__title'>На выполнение диплома ушло 5 недель</h3>
                        <p className='description__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                </div>
                <div className='about__timeline'>
                    <div className='about__timeline-stage'>
                        <div className='about__timeline-time about__timeline-time_accent'>1 неделя</div>
                        <div className='about__timeline-text'>Back-end</div>
                    </div>
                    <div className='about__timeline-stage'>
                        <div className='about__timeline-time'>4 недели</div>
                        <div className='about__timeline-text'>Front-end</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
