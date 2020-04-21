const { Tematica, Product, ProductTematica, Sequelize } = require('../models/index.js');
const {Op} =Sequelize;
const TematicaController = {
    getAll(req,res){
        Tematica.findAll({
            include:[Product]
        })
     
        .then(tematicas=>res.send(tematicas))
    },


    getOne(req,res){
        Tematica.findByPk(req.params.id, {
            include: [Product]
        })
        .then(tematica => res.send(tematica))
        .catch(error=>{
            console.log(error);
            res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
        })

    },
    getOneByName(req,res){
        Tematica.findAll({
            where:{
                 name:{
                     [Op.like]: `%${req.params.name}%`
                 }
        },
        include:[Product]
    })
    .then(tematicas=>res.send(tematicas))

    },

    insert(req, res) {
        Tematica.create({
                ...req.body
            })
            .then(tematica => {
                tematica.addProduct(req.body.products);
                res.status(201).send(tematica)
            })
    },


    async delete(req, res) {
        await Tematica.destroy({
            where: {
                id: req.params.id
            }
        })

        await ProductTematica.destroy({
            where: {
                TematicaId: req.params.id
            }
        })
       
        res.send({
            message: 'Temtica eliminada correctamente'
        })
    },


    update(req,res){
        Tematica.update({...req.body},{
            where:{
                id:req.params.id
            }
        })
        .then(tematica=>res.send(tematica))
        .catch(error=>{
            console.log(error);
            res.status(500).send('ha habido un problema al tratar de actualizar la tematica')
        })
    }
}

module.exports = TematicaController;