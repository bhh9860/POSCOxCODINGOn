const express = require('express');
const controller = require('../controller/controllerUser');
const router = express.Router();

//GET locallhost:8000/user
router.get('/register', controller.CgetUser);

module.exports = router;