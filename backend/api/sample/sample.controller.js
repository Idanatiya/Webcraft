const sampleService = require('./sample.service')

async function getSamples(req, res) {
    try {
        const samples = await sampleService.query(req.query);
        res.json(samples)
    } catch (error) {}
}

async function addSample(req, res) {
    try {
        const sample = req.body
        await sampleService.add(sample)
        res.json(sample)

    } catch (error) {}
}

async function updateSample(req, res) {
    try {
        const sample = req.body;
        await sampleService.update(sample)
        res.json(sample);

    } catch (error) {}
}


module.exports = {
    getSamples,
    addSample,
    updateSample
}