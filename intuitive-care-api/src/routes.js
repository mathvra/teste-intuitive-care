const { Router } = require('express')
const dataController = require('./controllers/dataController')
const routes = Router()

routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.get('/', dataController.get)
routes.post('/', dataController.save)

module.exports = routes