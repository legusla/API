const express = require('express');

const Contenedor = require('./Contenedor');

const productosContenedor = new Contenedor('./productos');

const productosRouter = express.Router();

productosRouter.get('/productos', async(req, res) => {
    const lista = await productosContenedor.getAll();
    res.send({
        data: lista
    });
    res.render('pages/list-productos');
})

productosRouter.post('/productos', async(req, res) => {
    const nuevoProducto = req.body;

    const productoGuardado = await productosContenedor.save(nuevoProducto);
    res.render('pages/list-productos');
    console.log(nuevoProducto);
});

module.exports = productosRouter;

console.log(__dirname);