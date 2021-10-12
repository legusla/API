const express = require('express');

const Contenedor = require('./Contenedor');

const productosContenedor = new Contenedor('./productos.json');

const productosRouter = express.Router();

productosRouter.post('/productos', async(req, res) => {
    const nuevoProducto = req.body;

    const productoGuardado = await productosContenedor.save(nuevoProducto);
    res.render('pages/list-productos');
    res.send(...nuevoProducto);
    console.log(nuevoProducto);
});

module.exports = productosRouter;

console.log(__dirname);