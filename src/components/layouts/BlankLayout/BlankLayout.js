import { Outlet } from 'react-router-dom';

export default function BlankLayout() {
    return (
        <main className='main'>
            <Outlet />
        </main>
    )
}
