const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index, 
    create,
    show,
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {flight:flight})
    })
}

function newFlight(req,res) {
    res.render('flights/new')
};

function index(req,res){
    Flight.find({}, function(err, flights){
        res.render('flights/', {flights:flights})
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