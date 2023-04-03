/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getSaisons = (idSerie) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SaisonService::getSaisons()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=saisons&serie_id='+idSerie, {
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

export const getSaison = (idSaison) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SaisonService::getSaison()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=saison&id='+idSaison, {
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

export const getNewSaisons = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SaisonService::getNewSaisons()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=new-saisons', {
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

export const getUpcomingSaisons = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("SaisonService::getUpcomingSaisons()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=upcoming-saisons', {
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