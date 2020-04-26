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
            UserId: req.user.id,
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

    async put(req, res) { 
        try{
            const order = await Order.update({...req.body}, 
                {
                    where: {
                        id: req.params.id  
                    }
                })
            await OrderProduct.destroy({ 
                    where: {
                        OrderId: req.params.id 
                    }    
            })
            req.body.products.forEach(product =>{  
                OrderProduct.create({  
                    OrderId: req.params.id,
                    ProductId: product.ProductId, // Aquí utilizo product.productId, para indicarle que me tiene que coger id en el objeto - Aquí, al hacer la peticion, tendré que decirle: "products": [{ProductId": 1},{"productUnits": 10}] para que me coja los ids de los productos y las unidades que quiera meter
                    productUnits: product.productUnits  // y aquí lo mismo.
                })    
            })
            res.send({message:'El pedido ha sido modificado.', order})
        } catch{(error=> {
                    console.log(error);
                     res.status(500).send({
                        message: 'Ha habido un error al intentar modificar el pedido.'
                    })
                })          
        }
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

