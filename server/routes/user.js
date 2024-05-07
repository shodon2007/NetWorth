const Router = require('express');
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
    '/registration',
    body('email').isEmail(), 
    body('password').isLength({min: 4, max:32}),
    body('name').isLength({min: 2, max:32}),
    body('surname').isLength({min: 2, max:32}),
    userController.registration
);

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/user-data', authMiddleware, userController.getUserData);
router.get('/userhello', (req, res) => {
    res.send('Hello, I`m here')
})
module.exports = router;
