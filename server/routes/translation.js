const Router = require('express');
const translationController = require('../controllers/translation-controller');
const router = new Router();

router.get('/:lang', translationController.translation);

module.exports = router;
