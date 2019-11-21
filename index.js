// Ponto de entrada da aplicação

const express = require('express'); // express exporta uma função

const server = express();

server.get('/teste', (req,res) => {
  return res.json({message:'in a bottle'})
});

// req -> busca informações
// res -> retorna as informações

server.listen(3000);

