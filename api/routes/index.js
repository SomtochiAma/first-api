const express = require('express'),
        router = express.Router(),
        controller = require('../controllers/controller');


router.get('/', controller.getData)

module.exports = router;