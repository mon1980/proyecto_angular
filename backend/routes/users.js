const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const {authentication,isAdmin} = require('../middleware/authentication.js');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/info',authentication, UserController.getInfo);
router.get('/',authentication, isAdmin, UserController.getAll);
router.get('/name/:name',authentication, isAdmin, UserController.getAllByName);
router.get('/email/:email',authentication, isAdmin, UserController.getOneByemail);
router.get('/:id',authentication, isAdmin, UserController.getOne);
router.delete('/:id',authentication, isAdmin, UserController.delete);
router.put('/:id',authentication, isAdmin, UserController.put);


module.exports = router












