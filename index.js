// Ponto de entrada da aplicação

const express = require('express'); // express exporta uma função

const server = express();
server.use(express.json()); // Permite a leitura de arquivo json
                            // quando receber o dado através de body
/* PARÂMETROS 

-> Query params = ?teste=1
-> Routes params = /users/:id
-> Request body = {"name":"Miro"}

*/

const users = ['Diego','Cláudio','Victor','Miro','Papacu']




// req -> busca informações
// res -> retorna as informações




// Lista o usuário passado pela URL, atráves de query params
server.get('/query', (req,res) =>{
  // http://localhost:3000/query?nome=miroswd

  const {nome} = req.query
  return res.json({nome:`${nome}`})
})

// Lista o usuário passado pela URL, atráves de params
server.get('/params/:index', (req,res) => { 
  // http://localhost:3000/params/miro
  const {index} = req.params
  return res.json(users[index])
});

// Listando todos os usuários
server.get('/users', (req,res) => {
  return res.json(users)
})


/* Criando usuário */
server.post('/users',(req,res) => {
  // Preciso pegar o nome do usuário que será criado, pelo body
  const {name} = req.body;
  users.push(name)
  return res.json(users)
})


/* Atualizando usuário */
server.put('/users/:index',(req,res) => {
  const {index} = req.params
  users[index] = req.body.name
  return res.json(users)
})


/* Deletando usuário */
server.delete('/users/:index',(req,res) => {
  const {index} = req.params;
  users.splice(index,1) // remove uma posição, baseado no index passado
  return res.json(users)
})



// Porta que o servidor está rodando
server.listen(3000);

