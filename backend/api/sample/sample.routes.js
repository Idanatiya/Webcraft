const express = require('express')
const { getSamples, updateSample, addSample } = require('./sample.controller')

const router = express.Router()


router.get('/', getSamples)
router.put('/:id', updateSample)
router.post('/', addSample)


module.exports = router