const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

try {
    app.listen(port, () => {
        console.log('Servidor rodando na porta: ' + port);    
    })
} catch (error) {
   return console.log('Servidor não iniciado, erro: ' + error)
}

module.exports = app;