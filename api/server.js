const express = require("express");
const cors = require("cors");

const suppsRouter = require('../supporters/supporter-router.js');
const orgsRouter = require('../orgs/orgs-router.js')

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/supporters", suppsRouter);
server.use("/api/organizations", orgsRouter);

server.get("/", (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;