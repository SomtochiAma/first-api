const express = require('express'),
        router = express.Router(),
        controller = require('../controllers/controller');


router.route('/')
        .get(controller.getData)
        .post(controller.postData)

router.route('/:id')
        .get(controller.retrieveArtisan)
        .patch(controller.updateData);


module.exports = router;