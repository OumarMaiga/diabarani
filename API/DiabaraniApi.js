const TOKEN = "b2768876ee710b2e8476da4f1138403b";

export function login (login, password) {
    url = 'http://192.168.1.26/diabarani-api/index.php?action=login';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            password: password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export function register (first_name, last_name, phone, email, password, password_confirm) {
    url = 'http://192.168.1.26/diabarani-api/index.php?action=register';
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            password: password,
            password_confirm: password_confirm
        })
    })
    .then((response) => response.json())
    .then((json) => {
        return json
        
    })
    .catch((error) => console.log(error))
}
