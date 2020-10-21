const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes')

const {json, urlencoded} = express;
const app = express();
const port = process.env.PORT || 8080;


app.use(json());
app.use(urlencoded({ extended: false}));

const corsOptions = {
    origin: '*',
    optionSuccesStatus: 200
}

app.use(cors(corsOptions));

app.use(router);

app.use('/ver', (req, res) => {
    res.send("Microservicio version 1.0.0");
})

app.listen( port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})