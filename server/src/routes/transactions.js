const express = require('express')
const router = express.Router()
const {trans} = require('../controller/transactions')
const {transactions} = require('../controller/transactions')
const {updateReceiver} = require('../controller/transactions')
const {updateSender} =   require('../controller/transactions')


router.post('/transfer', trans);
router.get('/transactions', transactions);
router.post('/update', updateReceiver);
router.post('/updates', updateSender);


module.exports = router