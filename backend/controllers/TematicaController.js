const { Tematica, Product } = require('../models/index.js')
const TematicaController = {
    getAll(req,res){
        Tematica.findAll({
            include:[Product]
        })
     
        .then(tematicas=>res.send(tematicas))
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



    insert(req,res){
        Tematica.create({name:req.body.name})
        .then(tematica=>res.send(tematica))
    },

    async delete(req, res) {
        await Tematica.destroy({
            where: {
                id: req.params.id
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