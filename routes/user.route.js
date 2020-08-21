var express = require('express');

var router = express.Router();

const controller = require('../controllers/user.controller');

const validate = require('../validate/user.validate');


router.get('/', controller.home);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view)

router.post('/create',validate.postCreate, controller.postCreate)

module.exports = router;