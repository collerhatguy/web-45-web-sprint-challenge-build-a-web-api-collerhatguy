const express = require('express');
const server = express();
const actionEndpoints = require("./actions/actions-router")
const projectEndpoints = require("./projects/projects-router")

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use("/api/actions", actionEndpoints)
server.use("/api/projects", projectEndpoints)



module.exports = server;
