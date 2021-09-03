const express = require('express');
const server = express();
const actionEndpoints = require("./actions/actions-router")

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use("/api/actions", actionEndpoints)



module.exports = server;
