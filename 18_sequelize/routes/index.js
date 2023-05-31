const express = require('express');
const controller = require('../controller/visitor')
const router = express.Router();

///localhost:PORT
router.get('/',controller.index);

module.exports = router;