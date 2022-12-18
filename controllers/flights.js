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
    // // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // // remove any whitespace at start and end of cast
    // req.body.cast = req.body.cast.trim();
    // // split cast into an array if it's not an empty string - using a regular expression as a separator
    // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights/new');
    });
    };