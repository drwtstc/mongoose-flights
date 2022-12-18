const flight = require('../models/flight')
const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index, 
    create,
}

function newFlight(req,res) {
    res.render('flights/new')
};

function index(req,res){
    flight.find({}, function(err, flights){
        res.render('flights/index', {flights:flights})
    })
};

function create(req,res){
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights');
    });
    };