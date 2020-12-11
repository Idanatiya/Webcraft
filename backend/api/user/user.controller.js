const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.json(user)
}

async function getUsers(req, res) {
    const users = await userService.query(req.query)
    logger.debug(users);
    res.json(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    try {
        const user = req.body;
        await userService.update(user)
        res.json(user)

    } catch (error) {
        console.log('error?:', error);
    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser
}