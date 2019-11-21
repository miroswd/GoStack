// Ponto de entrada da aplicação

const express = require('express'); // express exporta uma função

const server = express();

/* PARÂMETROS 

-> Query params = ?teste=1
-> Routes params = /users/:id
-> Request body = {"name":"Miro"}

*/

server.get('/query', (req,res) =>{
  // http://localhost:3000/query?nome=miroswd

  const {nome} = req.query
  return res.json({nome:`${nome}`})
})

server.get('/params/:id', (req,res) => { 
  // http://localhost:3000/params/miro
  const {id} = req.params
  return res.json({message:`${id}`})
});

// req -> busca informações
// res -> retorna as informações

server.listen(3000);

