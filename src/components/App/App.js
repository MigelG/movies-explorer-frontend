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
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../hoc/ProtectedRoute';
import Popup from '../common/Popup/Popup';

function App() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);
    const [token, setToken] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [savedMovies, setSavedMovies] = useState([]);
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    const [popupStatus, setPopupStatus] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        getUserInfo();
    }, []);

    function getUserInfo() {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            mainApi.getUserInfo(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        setCurrentUser(res.data);
                    }
                })
                .catch(() => {
                    setPopupMessage('При подключении к серверу произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                    setPopupStatus(false);
                    setPopupIsOpen(true);
                })
                .finally(() => {
                    setIsCheckingToken(false);
                });
        } else {
            setIsCheckingToken(false);
        }
    }

    function onLogin(email, password) {
        mainApi.signin(email, password)
            .then(() => {
                getUserInfo();
                setLoggedIn(true);
                navigate('/movies');
            })
            .catch((err) => {
                if (err === 401) {
                    setPopupMessage('Неправильные почта или пароль');
                } else if (err === 400) {
                    setPopupMessage('Введены некорректные данные');
                } else {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                }
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function onLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('request');
        localStorage.removeItem('searchedMovies');
        localStorage.removeItem('savedMovies');
        setLoggedIn(false);
        navigate('/');
    }

    function onRegister(name, email, password) {
        mainApi.signup(name, email, password)
            .then(res => {
                onLogin(email, password);
            })
            .catch((err) => {
                if (err === 409) {
                    setPopupMessage('Пользователь с таким e-mail уже зарегистрирован');
                } else if (err === 400) {
                    setPopupMessage('Введены некорректные данные');
                } else {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                }
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function handleUpdateUser(user) {
        mainApi.saveUserInfo(user, token)
            .then(data => {
                setPopupStatus(true);
                setPopupMessage('Информация успешно обновлена');
                setPopupIsOpen(true);
                setCurrentUser(data.data);
            })
            .catch((err) => {
                if (err === 404) {
                    setPopupMessage('Пользователь с указанным id не найден');
                } else if (err === 400) {
                    setPopupMessage('Введены некорректные данные');
                } else {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                }
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function likeMovie(movie) {
        mainApi.saveMovie(movie, token)
            .then((newMovie) => {
                updateSavedMovies([newMovie.data, ...savedMovies])
            })
            .catch((err) => {
                if (err === 400) {
                    setPopupMessage('Переданы некорректные данные');
                } else {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                }
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function dislikeMovie(movie) {
        let id;
        if (!movie._id) {
            const deletedMovie = savedMovies.find((m) => {
                return m.movieId === movie.id;
            });
            id = deletedMovie._id;
        } else {
            id = movie._id;
        }

        mainApi.deleteMovie(id, token)
            .then((res) => {
                updateSavedMovies(savedMovies.filter(m => m._id !== id));
            })
            .catch((err) => {
                if (err === 404) {
                    setPopupMessage('Фильм с указанным id не найден');
                } else if (err === 403) {
                    setPopupMessage('Доступ запрещен');
                } else if (err === 400) {
                    setPopupMessage('Переданы некорректные данные');
                } else {
                    setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                }
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function getSavedMovies() {
        mainApi.getSavedMovies(token)
            .then(data => {
                updateSavedMovies(data.data);
            })
            .catch(() => {
                setPopupMessage('Произошла ошибка на сервере. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
                setPopupStatus(false);
                setPopupIsOpen(true);
            });
    }

    function updateSavedMovies(savedMovies) {
        setSavedMovies(savedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }

    function closePopup() {
        setPopupIsOpen(false);
    }

    useEffect(() => {
        if (loggedIn) {
            getSavedMovies();
        }
    }, [loggedIn])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {!isCheckingToken &&
                <div className="App">
                    <Routes>

                        <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
                            <Route index element={<AboutPage />} />
                        </Route>

                        <Route path='/' element={<MainLayout loggedIn={loggedIn} />}>
                            <Route path='movies' element={
                                <ProtectedRoute loggedIn={loggedIn}>
                                    <Movies
                                        likeMovie={likeMovie}
                                        dislikeMovie={dislikeMovie}
                                        savedMovies={savedMovies}
                                        setPopupMessage={setPopupMessage}
                                        setPopupIsOpen={setPopupIsOpen} />
                                </ProtectedRoute>
                            } />

                            <Route path='saved-movies' element={
                                <ProtectedRoute loggedIn={loggedIn}>
                                    <SavedMovies
                                        savedMovies={savedMovies}
                                        likeMovie={likeMovie}
                                        dislikeMovie={dislikeMovie} />
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

                    <Popup
                        isOpen={popupIsOpen}
                        message={popupMessage}
                        onClose={closePopup}
                        status={popupStatus} />
                </div>
            }

        </CurrentUserContext.Provider>
    );
}

export default App;
