const express = require('express')
const { requireAuth, requireAdmin } = require('../../middleware/requireAuth.middleware')
const { getUser, getUsers, deleteUser, updateUser } = require('./user.controller')
const router = express.Router()


router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', requireAuth, updateUser)
router.delete('/:id', requireAuth, requireAdmin, deleteUser)

module.exports = router