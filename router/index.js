const Router = require('express').Router
const userControllers = require('../controllers/user-controllers')
const router = new Router();

router.post('/registration',userControllers.registrations);
router.post('/login',userControllers.login);
router.post('/logout',userControllers.logout);
router.get('/activate/:link',userControllers.activation);
router.get('/refresh',userControllers.refresh);
router.get('/users',userControllers.getUsers);

module.exports = router