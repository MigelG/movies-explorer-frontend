import promoImage from '../../../../images/promo.svg';
import './Promo.css';

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container content'>
                <div className='promo__left'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a href='#about-project' className='promo__link'>Узнать больше</a>
                </div>
                <div className='promo__rigth'>
                    <img className='promo__image' src={promoImage} alt='Земной шар, опутанный всемирной паутиной.' />
                </div>
            </div>
        </section>
    )
}
