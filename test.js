const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('./productos.json');

contenedor.save({
    nombre: 'algo',
    precio: 123,
    imagen: 'imagen'
});