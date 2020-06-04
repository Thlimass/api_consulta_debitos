const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../src/controller/carController');

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());

app.get('/',controller.get);

//Iniciando o servidor.
app.listen(port, function () {
    console.log(`Server runing on port ${port}`)
});
