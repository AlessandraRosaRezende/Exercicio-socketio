const express = require('express');
const router = express.Router();
const muralController = require('../controllers/muralController');

router.get('/', muralController.getAll);

router.post('/', muralController.createPost)

module.exports = router;
