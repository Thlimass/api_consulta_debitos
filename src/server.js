const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../src/controller/carController');

const app = express();
const port = process.env.PORT || 4001;
app.use(bodyParser.json());

app.get('/cars',controller.get);
app.get('/car/:placa',controller.getByPlateNumber);
app.get('/car/origem/:local', controller.getByPlaceOfOrigin);

//Iniciando o servidor.
app.listen(port, function () {
    console.log(`Server runing on port ${port}`)
});



//QUERY PARAMS - para fazer consulta pela URL
//ROUTE PARAMS - para fazer consulta, acessando pela ROTA.

