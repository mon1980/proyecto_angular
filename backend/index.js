
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const productsRouter = require('./routes/products.js');
const tematicasRouter = require('./routes/tematicas.js');
const ordersRouter = require('./routes/orders.js');
const usersRouter = require('./routes/users.js');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(morgan('dev'));
//para evitar req.body sea undefined
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas de tematicas
app.use('/tematicas',tematicasRouter);
//añadimos las rutas de products
app.use('/products',productsRouter);
//añadimos las rutas de orders
app.use('/orders',ordersRouter);
//añadimos las rutas de users
app.use('/users',usersRouter)

app.listen(PORT,()=>console.log('server running on '+PORT));





