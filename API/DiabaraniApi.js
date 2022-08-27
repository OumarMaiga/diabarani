/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const login = async (value) => {
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("API:login()");

    let url = `${global.SERVER_ADDRESS}`+'index.php?action=login';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: value.username,
            password: value.password
        })
    });

    const data = await res.json();

    if (global.debug >= GLOBAL.LOG.TRACE) 
    {
        console.log("API:login()::code", data.code);
    }
    return data;
}

export const logout = () => async (dispatch) => {
    if (global.debug >= GLOBAL.LOG.INFO) console.log("API:logout()");
    return dispatch({
        type: "LOGOUT",
        payload: null,
    });
};

export const register = (value) => {
    if (global.debug >= GLOBAL.LOG.INFO) console.log("API::register()");

        url = `${global.SERVER_ADDRESS}`+'index.php?action=register';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: value.prenom,
            last_name: value.nom,
            phone: value.phone,
            email: value.email,
            password: value.password,
            password_confirm: value.passwordConfirm
        })
    })
    .then((response) => response.json())
    .then((data) => {
        return data
        
    })
    .catch((error) => console.log(error))
}

export const getUser = (token, id) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("Api::getUser()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=get-user&id='+id;
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export function updateUser(token, id, value) {
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("Api::getUser()");
    
    url = `${global.SERVER_ADDRESS}`+'index.php?action=update-user&id='+id;
    return fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export const getFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("Api::getFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=films';
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export const getFilm = (idFilm) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("Api::getFilm()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=film&id='+idFilm;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export const getNewFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("Api::getNewFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=new-film';
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}
