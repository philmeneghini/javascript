const express = require("express");

const server = express();

//localhost:3000/

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Diego", "email": "diego@rocketseat.com.br" }

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.json({
    message: `Searching for user ${id}`
  });
});

server.listen(3000);
