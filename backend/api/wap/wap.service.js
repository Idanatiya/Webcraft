//get access to db service
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId
const userService = require('../user/user.service');

async function query(filterBy) {
    const collection = await dbService.getCollection('wap')
    try {
        const waps = await collection.find(filterBy).toArray();
        return waps;
    } catch (error) {
        throw error;
    }
}

async function getById(wapId) {
    //connect to db
    const collection = await dbService.getCollection('wap')
    try {
        const wap = await collection.findOne({ '_id': ObjectId(wapId) })
        return wap;
    } catch (error) {
        throw err;
    }
}



async function add(wap) {
    const collection = await dbService.getCollection('wap')
    try {
        wap.createdAt = Date.now();
        await collection.insertOne(wap);
        return wap;
    } catch (err) {
        throw err;
    }
}

async function remove(wapId) {
    const collection = await dbService.getCollection('wap')
    try {
        //delete the user with this specific id
        await collection.deleteOne({ '_id': ObjectId(wapId) })
    } catch (err) {
        throw err;
    }
}




async function update(wap) {
    const collection = await dbService.getCollection('wap')
        //convert the id which is a string to an objectId in order to update it in the db
    wap._id = ObjectId(wap._id);
    try {
        wap.updatedAt = Date.now()
            //replace a user with the user id and set in the db the new user
        if (!wap.reviews) await collection.updateOne({ _id: wap._id }, { $set: wap })

        return wap
    } catch (err) {
        throw err;
    }
}

async function deleteReviews() {
    const collection = await dbService.getCollection('wap')
    wap._id = ObjectId(wap._id);
    try {
        console.log('go into delete ereviews');
        db.getCollection('userData').update({}, { $unset: { pi: 1 } })
        await collection.updateOne({}, { $unset: { reviews: 1 } });
    } catch (error) {
        throw error;
    }
}


// function _buildCriteria(filterBy) {
//     const criteria = {};
//     if (filterBy.name) {
//         criteria.name = { $regex: filterBy.name, $options: "$i" }
//     }

//     if (filterBy.type) {
//         criteria.type = filterBy.type
//     }
//     if (filterBy.inStock && filterBy.inStock !== 'all') {
//         criteria.inStock = JSON.parse(filterBy.inStock)
//     }

//     return criteria;
// }

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}