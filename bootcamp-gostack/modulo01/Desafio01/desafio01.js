const express = require("express");

const server = express();

server.use(express.json());

const projects = [{
  id: "1",
  title: "Projeto 1",
  tasks: []
},
{
  id: "2",
  title: "Projeto 2",
  tasks: []
}];

var contReq=0;

server.use((req, res, next) => {
  contReq++;

  console.log(`Requests: ${contReq}`);
  
  return next();
});

function checkID(req, res, next) {
  const { id } = req.params;

  if (!projects.find(p => p.id == id)){
    return res.status(400).json({ error: 'ID is invalid.' });
  }
  
  return next();
}
// POST /projects

server.post('/projects', (req, res) => {
  const project = req.body;
  
  projects.push( project );

  console.log('post rodou');

  return res.json(projects);

});


// GET /projects

server.get("/projects", (req, res) => {
  
  console.log('get all rodou');

  return res.json(projects);

});

// PUT /projects/:id

server.put("/projects/:id", checkID, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  console.log('put rodou');

  return res.json(project);
});

// DELETE /projects/:id
server.delete("/projects/:id", checkID,  (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(proj => proj.id == id);

  projects.splice(project, 1);

  console.log('delete rodou');

  return res.json(projects);
});

// POST /projects/:id/tasks

server.post('/projects/:id/tasks', checkID,  (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  console.log('post task rodou');

  return res.json(project);

});

server.listen(3000);