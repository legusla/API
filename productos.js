const express = require('express');

const Contenedor = require('./Contenedor');

const productosContenedor = new Contenedor('./productos.json');

const productosRouter = express.Router();

productosRouter.post('/', async(req, res) => {
    const nuevoProducto = req.body;

    const productoGuardado = await productosContenedor.save(nuevoProducto);
});

module.exports = productosRouter;

console.log(__dirname);