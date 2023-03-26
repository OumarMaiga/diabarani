/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const getUser = (token, id) => {

    if (global.debug >= GLOBAL.LOG.INFO) console.log("UserService::getUser()");

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
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("UserService::getUser()");
    
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