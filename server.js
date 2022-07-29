const express = require('express');
const app = express();

app,get('/mensaje', (req, res) => {
    res.send('Hola desde heroku');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', (err) => console.log(`Error en el servidor: ${err}`));