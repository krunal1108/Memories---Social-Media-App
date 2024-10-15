const express = require('express');
const controlToRoute = require('../controllers/controller');
const routes = express.Router();


routes.get('/',controlToRoute.defaultController);
routes.post('/addmemories', controlToRoute.memorRun);
routes.get('/editmemories/:id', controlToRoute.editMemorController);
routes.post('/updatememories/:id', controlToRoute.updateMemorController);
routes.get('/deletememories/:id', controlToRoute.deleteMemorController);



module.exports = routes;