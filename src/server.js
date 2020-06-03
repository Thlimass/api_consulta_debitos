const express = require('express');

const app = express();
const port = process.env.PORT || 4000;


//Iniciando o servidor.
app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
});
