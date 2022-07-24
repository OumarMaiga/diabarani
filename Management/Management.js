
/* function to initialize the Service */
export async function initService(data) 
{
    if (global.debug >= GLOBAL.LOG.DEBUG) {
        console.log('Management::initService()');
    }

    /* update local data */
    global.currentUser.id               = data.id;
    global.currentUser.username         = data.username;
    global.currentUser.firstname        = data.firstname;
    global.currentUser.lastname         = data.lastname;
    global.currentUser.email            = data.email;
    global.currentUser.phone            = data.phone;
    global.currentUser.gender           = data.gender;
    global.currentUser.token            = data.token;
    global.currentUser.state            = data.state;
    global.currentUser.category         = data.category;
}