const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const campaignsRouter = require('../campaigns/campaigns-router.js');

const server = express();

server.use(express.json());
server.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'Save An Animal API',
          description: 'Save An Animal API Information',
          contact: {
              name: 'John Watt'
          },
          servers: ["https://localhost:5000"]
      }
  },
  apis: ["./users/users-router.js", "./campaigns/campaigns-router.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/campaigns', campaignsRouter);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.get('/', (req, res) => {
    res.send('Its alive');
  });

module.exports = server;