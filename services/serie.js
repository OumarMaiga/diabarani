/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getSeries = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=series', {
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

export const getSerie = (idSerie) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getSerie()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=serie&id='+idSerie, {
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

export const getNewSeries = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getNewSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=new-series', {
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

export const getUpcomingSeries = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getUpcomingSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=upcoming-series', {
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

export const getGenresSeries = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getGenresSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genres-series', {
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

export const getGenreSeries = (genre_id) => {    
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getGenreSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=genre-series&genre_id=' + genre_id, {
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

export const getSomeGenresSeries = (genre_ids) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getSomeGenresSeries()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=some-genres-series&genre_ids=' + genre_ids, {
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
