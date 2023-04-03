/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getGenres = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getGenres()");

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

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SerieService::getGenre()");

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