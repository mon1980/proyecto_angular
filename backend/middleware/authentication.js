const jwt = require('jsonwebtoken');
const { User, Token, Sequelize } = require('../models/index');
const {Op}=Sequelize;
const env = process.env.NODE_ENV || 'development';
const {  jwt_secret } = require('../config/config.json')[env];
const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization; //sacamos el token de los headers
        const payload = jwt.verify(token, jwt_secret); //sacamos el payload del token
        const user = await User.findByPk(payload.id); //buscamos el usuario en la base de datos con el id del payload
        const tokenFound = await Token.findOne({
            where:{ 
                
                [Op.and]: [{
                    
                    token:token
                
                }, {UserId:payload.id
                
                }]
               
            }
        
        })
        if(!user || !tokenFound){
            res.status(401).send({
                message: 'No estas autorizado',
                error
            })
        }
        req.user = user; //aquí seteamos el usuario en el objeto request
        next(); //pasamos a la función controladora o al siguiente middleware
    } catch (error) {
        res.status(401).send({
            message: 'No estas autorizado',
            error
        })
    }
}
const isAdmin = async (req, res, next) => {
    const admins =['admin'];
    // if (req.user.role!=='admin' || req.user.role!=='superAdmin'|| req.user.role!=='dios') {
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'No tienes permisos para ver esta sección'
        });
    }
    next();
}
module.exports = {
    authentication,
    isAdmin
};