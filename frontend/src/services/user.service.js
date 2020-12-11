import httpService from './http.service';



export const userService = {
    login,
    signup,
    getEmptyUser,
    logout,
    getById,
    getLoggedinUser,
    update,
    getUsers,
    remove
}

//login to app
async function login(userCreds) {
    try {
        const user = await httpService.post('auth/login', userCreds)
        return _handleLogin(user);
        // return _handleLogin(user);
    } catch (err) {
        const msg = err.response.data.msg;
        throw msg;
    }
}


//signup
async function signup(userCreds) {
    const user = await httpService.post('auth/signup', userCreds);
    return _handleLogin(user);
    // return _handleLogin(user);
}




function getUsers() {
    return httpService.get('user')
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}


async function logout() {
    await httpService.post('auth/logout');
    //clean session storage
    sessionStorage.clear();
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`);
    return user;
}


//add user to session storage
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

async function update(user) {
    const updatedUser = await httpService.put(`user/${user._id}`, user)
    return updatedUser;
}

function getLoggedinUser() {
    const user = sessionStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        email: ''
    }
}