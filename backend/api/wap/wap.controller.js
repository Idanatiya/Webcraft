const wapService = require('./wap.service');

async function getWaps(req, res) {
    try {
        const waps = await wapService.query(req.query);
        res.json(waps)
    } catch (error) {}
}

async function getWapById(req, res) {
    try {
        const wap = await wapService.getById(req.params.id)
        res.json(wap)
    } catch (error) {

    }

}
async function deleteWap(req, res) {
    try {
        const id = req.params.id
        await wapService.remove(id)
        res.json('DELETE A WAP!')

    } catch (error) {}
}

async function addWap(req, res) {
    try {
        const wap = req.body
        if (req.session.user) {
            wap.userId = req.session.user._id;
        }
        await wapService.add(wap)
        res.json(wap)

    } catch (error) {}
}

async function updateWap(req, res) {
    try {
        const wap = req.body;
        await wapService.update(wap)
        res.json(wap);

    } catch (error) {}
}

async function deleteReviews(req, res) {
    try {
        const wap = req.body;
        await wapService.deleteReviews
    } catch (error) {

    }
}

module.exports = {
    getWaps,
    getWapById,
    addWap,
    updateWap,
    deleteWap,
    deleteReviews
}