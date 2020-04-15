const router = require('express').Router();
const ProductController =require('../controllers/ProductController.js');
router.get('/',ProductController.getAll);
router.get('/:id',ProductController.getOne);
router.get('/name/:name',ProductController.getOneByName);
router.post('/',ProductController.insert);
router.put('/:id',ProductController.update);
router.delete('/:id',ProductController.delete)
module.exports=router;

