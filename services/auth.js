/* SETTINGS */
import '../data/global.js';
import * as GLOBAL from "../data/global.js";

//const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export const login = async (value) => {
    
    if (global.debug >= GLOBAL.LOG.INFO) console.log("AuthService:login()");

    try {
        const res = await fetch(`${global.SERVER_ADDRESS}`+'index.php?action=login', {
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
            console.log("AuthService:login()::code", data.code);

        return data;

    } catch(error) {
        if (global.debug >= GLOBAL.LOG.TRACE)
            console.log("AuthService:login()::catch", error);

        console.error(error);
    }
}

export const logout = () => async (dispatch) => {
    if (global.debug >= GLOBAL.LOG.INFO) console.log("AuthService:logout()");
    return dispatch({
        type: "LOGOUT",
        payload: null,
    });
};

export const register = (value) => {
    if (global.debug >= GLOBAL.LOG.INFO) console.log("AuthService::register()");

    return fetch(`${global.SERVER_ADDRESS}`+'index.php?action=register', {
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