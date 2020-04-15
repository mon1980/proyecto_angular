const router = require('express').Router();
const TematicaController = require('../controllers/TematicaController.js');

router.get('/',TematicaController.getAll);
router.get('/name/:name',TematicaController.getOneByName);
router.post('/',TematicaController.insert);
router.put('/:id',TematicaController.update);
router.delete('/:id',TematicaController.delete)
module.exports = router;