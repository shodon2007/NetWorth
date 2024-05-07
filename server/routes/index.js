const Router = require('express');
const authRouter = require('./user');
const translationRouter = require('./translation');

const router = new Router();

router.use('/auth', authRouter)
router.use('/translation', translationRouter)

module.exports = router;
