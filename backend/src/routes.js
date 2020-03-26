
const express = require('express');
const routes = express.Router();
const OngController =  require('./controllers/OngController');
const IncidentController =  require('./controllers/IncidentController');
const ProfileController =  require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

// rota da sessão, verificar  ong ao logar 
routes.post('/session',SessionController.create)

// rotas das ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.get('/ongs/:id', OngController.getOng);

//rotas dos incidentes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.get('/incidents/:id', IncidentController.getIncident);
routes.delete('/incidents/:id', IncidentController.delete);

// rotas incidentes, traz todos os incidentes referente aquela ong
routes.get('/profile',ProfileController.index);
module.exports = routes;