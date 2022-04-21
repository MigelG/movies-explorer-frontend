import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, loggedIn }) {

    if (loggedIn) {
        return children;
    }

    return <Navigate to='/' />
}
