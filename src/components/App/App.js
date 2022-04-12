import { Routes, Route, useNavigate } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout/BlankLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Movies from '../pages/Movies/Movies';
import AboutPage from '../pages/AboutPage/AboutPage';
import LoginPage from '../pages/AuthPage/LoginPage';
import RegisterPage from '../pages/AuthPage/RegisterPage';
import Profile from '../pages/Profile/Profile';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import './App.css';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import OnlyHeaderLayout from '../layouts/OnlyHeaderLayout/OnlyHeaderLayout';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function onLogin() {
    setLoggedIn(true);
    navigate('/movies');
  }

  function onLogout() {
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
          <Route index element={<AboutPage />} />
        </Route>

        <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
        </Route>

        <Route path='/' element={<OnlyHeaderLayout loggedIn={loggedIn} />}>
          <Route path='profile' element={<Profile onLogout={onLogout} />} />
        </Route>

        <Route path='/' element={<BlankLayout />}>
          <Route path='signin' element={<LoginPage onLogin={onLogin} />} />
          <Route path='signup' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
