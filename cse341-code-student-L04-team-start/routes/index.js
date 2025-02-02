const routes = require('express').Router();
const temple = require('./temple');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/temples', temple);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
