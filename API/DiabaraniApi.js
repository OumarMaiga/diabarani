/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const login = (value) => async(dispatch) => {
    if (global.debug >= GLOBAL.LOG.DEBUG) {
        console.log("API:login()");
    }
    let url = `${global.SERVER_ADDRESS}`+'index.php?action=login';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: value.login,
            password: value.password
        })
    });
    let sts = res.code;
    if(sts == 1) 
    {
        const data = await res.json();
        
        dispatch({
            type: "LOGIN",
            payload: data
        });
        
        console.log(data);
        if (global.debug >= GLOBAL.LOG.DEBUG) 
        {
            console.log("API:login()::sts", sts);
        }
    }
}

export const logOut = () => async (dispatch) => {
    if (global.debug >= GLOBAL.LOG.DEBUG) {
        console.log("API:logOut()");
    }
    return dispatch({
        type: "LOGOUT",
        payload: null,
    });
};

export const register = (value) => {
    url = `${global.SERVER_ADDRESS}`+'index.php?action=register';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: value.first_name,
            last_name: value.last_name,
            phone: value.phone,
            email: value.email,
            password: value.password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        return data
        
    })
    .catch((error) => console.log(error))
}

export const getUser = (id) => {
    /*if(global.debug){
        console.log("Api::getUser()");
    }*/
    url = `${global.SERVER_ADDRESS}`+'index.php?action=getUser&id='+id;
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export function updateUser(id, value) {
    url = `${global.SERVER_ADDRESS}`+'index.php?action=updateUser&id='+id+'';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
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