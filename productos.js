const express = require('express');

const productosRouter = express.Router();

productosRouter.post('/productos', async(req, res) => {
    const nuevoProducto = req.body;

    const productoGuardado = await productosContenedor.save(nuevoProducto);
    res.render('pages/list-productos');
    res.send(...nuevoProducto);
    console.log(productoGuardado);
});

module.exports = productosRouter;