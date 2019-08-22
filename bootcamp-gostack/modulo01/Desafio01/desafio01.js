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

// POST /projects

server.post('/projects', (req, res) => {
  const { project } = req.body;
  
  projects.push(project);

  console.log('post rodou');

  return res.json(projects);

});


// GET /projects

server.get("/projects", (req, res) => {
  
  console.log('get all rodou');

  return res.json(projects);

});

// PUT /projects/:id

// DELETE /projects/:id

// POST /projects/:id/tasks

server.post('/projects/:id/tasks', (req, res) => {
  const { id, tasks } = req.params;
  const { title } = req.body;

  
  projects[projectId] = {
    id: projectId,
    title: title,
    tasks: projectTask
  }

  console.log('post task rodou');

  return res.json(projects);

});

server.listen(3000);