const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getById,
    update,
    add,
    query,
    getByEmail
}


async function query(filterBy = {}) {
    //connect to the user db 
    const collection = await dbService.getCollection('user')
    try {
        //get all users from the db and delete the password property from each of them
        const users = await collection.find({}).toArray();
        users.forEach(user => delete user.password);
        return users
    } catch (err) {
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        delete user.password

        return user
    } catch (err) {
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user');
    user._id = ObjectId(user._id);
    try {
        await collection.updateOne({ _id: user._id }, { $set: user })
        return user
    } catch (err) {
        throw err;
    }
}


//get user by email
async function getByEmail(email) {
    //connect to the collection 
    const collection = await dbService.getCollection('user')
    try {
        //find a user with the spefific email
        const user = await collection.findOne({ email })
        return user
    } catch (err) {
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        user.createdAt = Date.now();
        user.isAdmin = false;
        user.imgUrl = ''
        await collection.insertOne(user);
        return user;
    } catch (err) {
        throw err;
    }
}