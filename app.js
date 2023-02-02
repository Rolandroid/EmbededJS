const express = require("express");
const app = express();
const path = require('path')
const index = path.join(__dirname, '/views/index.html')
const producto = {
    tipoProducto : null,
    precio : null, 
    cantidad : null
    }
app.use(express.static('public'))

app.get("/producto/", (req,res) => {res.send(producto)
    })


app.get('/',(req, res) => {res.send('!Hola Mundo!')})
app.get('/404',(req, res) => {res.send('Error página no encontrada')})
app.get('/index',(req, res) => {res.sendFile(index)})


app.listen(3000,() => console.log('Servidor corriendo en http://localhost:3000' ))