const BASE_URL = 'https://api.migel.nomoredomains.work';

const headers = (token) => {
    return {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}

//Запрос на регистрацию
export const signup = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {
            return checkResponse(res);
        });
};

//Вход в систему
export const signin = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            return checkResponse(res);
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            return data;
        });
}

//Получение информации о пользователе
export const getUserInfo = token => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            return checkResponse(res);
        });
}

//Изменение информации о пользователе
export const saveUserInfo = (data, token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: headers(token),
        body: JSON.stringify(data),
    })
        .then(checkResponse);
}

export const getSavedMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        headers: headers(token),
    })
        .then(checkResponse);
}

export const saveMovie = (data, token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({
            country: data.country || 'unknown',
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN || 'unknown'
        }),
    })
        .then(checkResponse);
}

export const deleteMovie = (id, token) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        headers: headers(token),
    })
        .then(checkResponse);
}

function checkResponse(res) {
    if (res.ok) { return res.json() }
    return Promise.reject(res.status);
}