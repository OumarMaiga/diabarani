/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getFilms = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("FilmService::getFilms()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=films', {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=film&id='+idFilm, {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=new-films', {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=upcoming-film', {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genres-films', {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genre-films&genre_id=' + genre_id, {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=some-genres-films&genre_ids=' + genre_ids, {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genres', {
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

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genre&id=' + id, {
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