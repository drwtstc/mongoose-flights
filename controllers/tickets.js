const Ticket = require('../models/ticket');

module.exports = {
	new: newTicket,
	create,
	delete: deleteTicket
};

function newTicket(req, res) {
	res.render('tickets/new')
}


function create(req, res) {
	const flightId = req.params.id;
	req.body.flight = flightId;
	Ticket.create(req.body, function(err, ticket) {
		res.redirect(`/flights/${flightId}`);
	});
}


function deleteTicket(req, res) {
	Ticket.findById(req.params.id).populate('flight').exec(function(err, ticket) {
		Ticket.findByIdAndDelete(req.params.id, function(err) {
			console.log(`deleting: ${ticket}`);
			res.redirect(`/flights/${ticket.flight._id}`);
		});
	});
}