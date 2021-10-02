const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const roteador = require('./rotas/fornecedores')

app.use('/api/fornecedores', roteador)

app.use('/', (requisicao, resposta) => {
    resposta.send('Ok na raiz')
})

app.listen(config.get('api.porta'), () => console.log("A API está funcionando!"))

