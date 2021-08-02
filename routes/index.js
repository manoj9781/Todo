const express = require('express');

const router = express.Router();

const homeController = require('../controller/homeController');

router.get('/', homeController.home);

// router.post('/create-task', homeController.add);

module.exports = router;