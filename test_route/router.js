const express = require('express')
const router = express.Router();
const acc = require('./account')
const usr = require('./user')

router.use('/account',acc)
router.use('/user',usr)

module.exports = router;