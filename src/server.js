const express = require('express');
const bodyParser = require('body-parser');
const database = require('../src/database/carDatabaseMock');

const app = express();
const port = process.env.PORT || 4000;



app.use(bodyParser.json());

app.post('/car', function (req, res) {

    res.json(database.Car)
})

//Iniciando o servidor.
app.listen(port, function () {
    console.log(`Server runing on port ${port}`)
});
