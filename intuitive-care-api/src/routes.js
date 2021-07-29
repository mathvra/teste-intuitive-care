const { Router } = require('express')
const dataController = require('./controllers/dataController')
const routes = Router()

routes.get('/', dataController.get)
routes.post('/', dataController.save)

module.exports = routes