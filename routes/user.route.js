var express = require('express');
var multer  = require('multer')

var router = express.Router();

const controller = require('../controllers/user.controller');

const validate = require('../validate/user.validate');

var upload = multer({ dest: './public/uploads/' })

router.get('/', controller.home);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view)

router.post('/create',upload.single('avatar'), validate.postCreate, controller.postCreate)

module.exports = router;