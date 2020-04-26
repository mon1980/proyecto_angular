const {User, Token, Order} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const {jwt_secret} = require('../config/config.json')[env];


const UserController = {

    getAll(req,res){  
        User.findAll({
            include:[Order],
            order: [
                ['name', 'ASC']
            ]
        })
        .then(users=>res.status(200).send(users))
        .catch(error=>{
            console.log(error);
            res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
        })
    },

    getOne(req, res) { 
        User.findByPk(req.params.id, {
                include: [Order]
            })
            .then(user => res.send(user))
            .catch(error=>{
                console.log(error);
                res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
            })
    },

    getAllByName(req, res) { 
        User.findAll({  
                where: {  
                    name: {
                        [Op.like]: `%${req.params.name}%` 
                    }  
                },
                include: [Order],
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(user => res.send(user))
            .catch(error=>{
                console.log(error);
                res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
            })
    },

    getOneByemail(req, res) { // Función para buscar un usuario por su email de registro
        User.findOne({  
            where:{
                email:req.params.email
            },
            include: [Order],
            order: [
                ['name', 'ASC']
            ]
        })
        .then(user => res.send(user))
        .catch(error=>{
            console.log(error);
            res.status(500).send({message: 'Ha surgido un error al intentar tramitar la petición.', error})
        })
    },


    async register(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 9);
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password,
                role: 'customer'
            });
            res.status(201).send({
                user,
                message: 'User creado con éxito'
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de crear el usuario'
            });
        }
    },


    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectas'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectas'
                })
            }
            const token = jwt.sign({
                id: user.id
            }, jwt_secret);
            Token.create({
                token,
                UserId: user.id
            });
            //status es 200 by default
            res.send({
                message: 'Bienvenid@ '+ user.username,
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message: 'Hubo un problema al tratar de logearnos'
            });
        }
    },
  
    async getInfo(req,res){
        res.send(req.user.dataValues);
    },


    delete(req,res){   
        User.destroy({
            where:{
                id:req.params.id 
            }  
        }) 
        .then(()=>{
            Token.destroy({
                where:{
                    UserId:req.params.id 
                }  
            }) 
            Order.destroy({
                where:{
                    UserId:req.params.id 
                }  
            }) 
            res.status(200).send({
            message: "El usuario ha sido eliminado."
        })
    })
        .catch(error=> {
            console.log(error);
            res.status(500).send({
                message: 'Ha habido un error al intentar eliminar el usuario.'
            })
        })
    },


    async put(req,res){ // Función para modificar todos los datos del usuario menos el role
        try{
            const textPassword = req.body.password; 
            const hash = await bcrypt.hash(textPassword, 9);
            const user = await User.update({ 
                name: req.body.name,
                surnames: req.body.surnames,
                email: req.body.email,
                password: hash,
                dni: req.body.dni,
                address: req.body.address,
                phone: req.body.phone,
                observations: req.body.observations
            },{
                where: {id:req.params.id}
            })
            await User.findByPk(req.params.id)
            res.status(200).send({
                message: "Los datos del usuario han sido modificados correctamente.", user
            })
        } catch(error) {
            console.log(error);
            res.status(500).send({
                message:'Ha habido un error al intentar modificar los datos del usuario.'
            })
        }    
    },
    async putRole(req,res){ // Función para modificar el role de un usuario (solo para superadmin)
        try{
            const user = await User.update({
                role: req.body.role
            },{
                where: {id:req.params.id}
            })
            await User.findByPk(req.params.id)
            res.status(200).send({
                message: "Los permisos han sido modificados correctamente.", user
            })
        } catch(error) {
            console.log(error);
            res.status(500).send({
                message:'Ha habido un error al intentar modificar los permisos.'
            })
        }    
    },



}
module.exports = UserController;