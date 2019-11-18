const express = require("express");
const cors = require("cors");

//Router below

const server = express();

server.use(express.json());
server.use(cors());

module.exports = server;