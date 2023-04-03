/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getEpisodes = (idSerie, idSaison) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeService::getEpisodes()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=episodes&serie_id='+idSerie+'&saison_id='+idSaison, {
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

export const getEpisode = (idEpisode) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeService::getEpisode()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=episode&id='+idEpisode, {
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

export const getNewEpisodes = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeService::getNewEpisodes()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=new-episodes', {
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

export const getUpcomingEpisodes = () => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("EpisodeService::getUpcomingEpisodes()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=upcoming-episodes', {
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