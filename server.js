const express = require('express');
const app = express();

const productosRouter = require('./productos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index')
});

app.get('/form', function(req, res) {
    res.render('pages/form');
});

app.get('/productos', function (req,res){
    res.render('pages/list-productos')
});

app.post('/productos', function (req,res){
    res.render('pages/list-productos', productosRouter)
});

app.use('/api/productos', productosRouter);

app.use(function (err, req, res, next) {
    console.error(error.stack);
    res.status(500).send('Algo se rompio!');
})

app.listen(8080);
app.on('error', (error) => console.log('Error', error));
console.log('el puerto 8080 se esta ejecutando');