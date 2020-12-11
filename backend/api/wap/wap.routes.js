const express = require('express')
const { requireAuth } = require('../../middleware/requireAuth.middleware')
const { getWaps, getWapById, deleteWap, updateWap, addWap } = require('./wap.controller')
    // const { getWaps, getWapById, updateWap, addWap, deleteWap } = require('./wap.controller')

const router = express.Router()

router.get('/', getWaps)
router.get('/:id', getWapById)
router.delete('/:id', requireAuth, deleteWap)
router.put('/:id', requireAuth, updateWap)
router.post('/', requireAuth, addWap)

module.exports = router