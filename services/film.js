/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getFilms()");

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

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getFilm()");

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

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getNewFilms()");

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

export const getUpcomingFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getUpcomingFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=upcoming-film';
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

export const getGenresFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getGenresFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=genres-films';
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

export const getGenreFilms = (genre_id) => {    
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getGenreFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=genre-films&genre_id=' + genre_id;
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

export const getSomeGenresFilms = (genre_ids) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getSomeGenresFilms()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=some-genres-films&genre_ids=' + genre_ids;
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

export const getGenres = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getGenres()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=genres';
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

export const getGenre = (id) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getGenre()");

    url = `${global.SERVER_ADDRESS}`+'index.php?action=genre&id=' + id;
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