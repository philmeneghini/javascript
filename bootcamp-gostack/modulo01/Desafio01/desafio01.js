const express = require("express");

const server = express();

server.use(express.json());

//array que armazena os projetos
const projects = [];

//contador de requests
var contRequests=0;

// middleware global para contagem de requests
server.use((req, res, next) => {
  contRequests++;

  console.log(`Requests: ${contRequests}`);
  
  return next();
});

//middleware para checar se projeto com a ID selecionada existe
function checkID(req, res, next) {
  const { id } = req.params;

  if (!projects.find(p => p.id == id)){
    return res.status(400).json({ error: 'ID is invalid.' });
  }
  
  return next();
}

// POST - Inserir Projeto

server.post('/projects', (req, res) => {
  const project = req.body;
  
  projects.push( project );

  console.log('post rodou');

  return res.json(projects);

});


// GET - Exibir Projetos

server.get("/projects", (req, res) => {
  
  console.log('get all rodou');

  return res.json(projects);

});

// PUT - Editar Titulo de um Projeto

server.put("/projects/:id", checkID, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  console.log('put rodou');

  return res.json(project);
});

// DELETE - Remover um Projeto
server.delete("/projects/:id", checkID,  (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(proj => proj.id == id);

  projects.splice(project, 1);

  console.log('delete rodou');

  return res.json(projects);
});

// POST - Inserir Task em um Projeto

server.post('/projects/:id/tasks', checkID,  (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  console.log('post task rodou');

  return res.json(project);

});

server.listen(3000);