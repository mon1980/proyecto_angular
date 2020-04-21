const { Product, Order, OrderProduct, Sequelize } = require('../models/index.js')
const {Op}=Sequelize;
const OrderController = {
    getAll(req,res){
        Order.findAll({
            include:[Product]
        })
        .then(orders=>res.send(orders))
    },


    getOne(req,res){
        Order.findByPk(req.params.id, {
            include: [Product]
        })
        .then(order => res.send(order))
        .catch(error=>{
            console.log(error);
            res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
        })

    },


    insert(req,res){
        Order.create({
            status:"pending",
            deliveryDate:req.body.deliveryDate
        })
        .then(order=>{
        for (let  product of req.body.productos) {//voy producto a product metiendo en la intermedia el producto.id y la cantidad del product en la columna unidades, utilizando en el argumento options through
                order.addProduct(product.id,{through:{unidades:product.cantidad}});
            }
            res.send(order);
        })
    },


    async delete(req, res) {
        await Order.destroy({
            where: {
                id: req.params.id
            }
        })

        await OrderProduct.destroy({
            where: {
                OrderId: req.params.id
            }
        })

        res.send({
            message: 'Pedido eliminado correctamente'
        })

    },


    
}
module.exports = OrderController;

