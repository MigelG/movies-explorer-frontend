import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout({ loggedIn }) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
