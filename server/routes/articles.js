const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')

const articleController = require('../controllers/article')

router.get('/', articleController.getArticle)

router.post('/', auth, articleController.createArticle)

module.exports = router;