import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
import { useState, useEffect } from 'react';
import * as api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../hoc/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  //Проверка токена и авторизация пользователя при монтировании
  useEffect(() => {
    getUserInfo();
  }, []);

  //Получение информации о пользователе по токену
  function getUserInfo() {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      api.getUserInfo(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res.data);
          }
        })
        .catch((res) => {
          console.log(`Что-то пошло не так: ${res.statusText}`);
        });
    }
  }

  //Запрос на авторизацию
  function onLogin(email, password) {
    api.signin(email, password)
      .then(() => {
        getUserInfo();
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(err => {
        console.log(err)
      });
  }

  function onLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/');
  }

  //Запрос на регистрацию
  function onRegister(name, email, password) {
    api.signup(name, email, password)
      .then(res => {
        onLogin(email, password);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //Обновление информации о пользователе
  function handleUpdateUser(user) {
    api.saveUserInfo(user, token)
      .then(data => {
        setCurrentUser(data.data);
      })
      .catch((res) => {
        console.log(`Что-то пошло не так: ${res.statusText}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>

          <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
            <Route index element={<AboutPage />} />
          </Route>

          <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
            <Route path='movies' element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            } />

            <Route path='saved-movies' element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            } />
          </Route>

          <Route path='/' element={<OnlyHeaderLayout loggedIn={loggedIn} />}>
            <Route
              path='profile'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile onLogout={onLogout} handleUpdateUser={handleUpdateUser} />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path='/' element={<BlankLayout />}>
            <Route path='signin'
              element={!loggedIn ?
                <LoginPage onLogin={onLogin} /> :
                <Navigate to='/movies' />}
            />

            <Route path='signup'
              element={!loggedIn ?
                <RegisterPage onRegister={onRegister} /> :
                <Navigate to='/movies' />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
