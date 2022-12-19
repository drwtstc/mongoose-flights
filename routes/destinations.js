const express =  require('express')
const router = express.Router()

//require the destination
const destinationsCtrl = require('../controllers/destinations')

//Define the route
router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router