import './PortfolioItem.css';
import arrow from '../../../../../images/arrow.svg';

export default function PortfolioItem({ children, link }) {
    return (
        <li className='portfolio__item'>
            <a className='portfolio__item-link' href={link} target='blank'>
                {children}
                <img className='portfolio__item-icon' src={arrow}></img>
            </a>
        </li>
    )
}
