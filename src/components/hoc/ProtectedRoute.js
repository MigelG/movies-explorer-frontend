import { Navigate } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';

export default function ProtectedRoute({ children, loggedIn }) {

    if (loggedIn) {
        return children;
    }

    return <Navigate to='/signin' />
}
