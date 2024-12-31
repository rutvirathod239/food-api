const express = require('express')
const router = express.Router();
const { getAllFood } = require('../controller/foodController')

router.get('/food', getAllFood)

module.exports =  router 