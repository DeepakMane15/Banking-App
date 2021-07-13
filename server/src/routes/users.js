const express = require('express')
const router = express.Router()
const {signup} = require('../controller/users')
const {users} = require('../controller/users')


router.post('/signup', signup);
router.get('/users', users);


module.exports = router