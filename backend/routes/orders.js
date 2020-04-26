const router = require('express').Router();
const OrderController = require('../controllers/OrderController.js');
const {authentication,isAdmin} = require('../middleware/authentication.js');

router.get('/', authentication, isAdmin, OrderController.getAll);
router.get('/:id', authentication, isAdmin, OrderController.getOne);
router.post('/', authentication, OrderController.insert);
router.delete('/:id', authentication, OrderController.delete);
router.put('/:id',authentication, isAdmin, OrderController.put);

module.exports = router;