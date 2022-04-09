import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Tech from './Tech/Tech';

export default function AboutPage() {
    return (
        <>
            <Promo />
            <AboutProject />
            <Tech />
            <AboutMe />
        </>
    )
}
