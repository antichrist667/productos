const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2001;

app.use(bodyParser.json());

let productos = [
  { nombre: "Arroz", precio: 2.50 },
  { nombre: "Azúcar", precio: 1.80 }
];


app.post('/registro-producto', (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || precio == null) {
    return res.status(400).send({ mensaje: 'Nombre y precio son requeridos' });
  }

  const nuevoProducto = { nombre, precio };
  productos.push(nuevoProducto);
  res.status(201).send(nuevoProducto);
});


app.get('/productos', (req, res) => {
  res.send(productos);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
