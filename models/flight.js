const mongoose = require('mongoose');

//Creating the shortcut to the mongoose.Schema class is optional but convenient when defining most schemas.
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {type:String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK'], default: 'DEN'},
    arrival: Date
},
{timestamps: true}
);

const flightSchema = new Schema({
    airline: {type:String, enum:['American', 'Southwest', 'United', 'Delta']}, //because I like Delta
    airport: {type:String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK'], default: 'DEN'},//because I like JFK
    flightNo: {type: Number, min:10, max:9999},
    departs: Date,//{type:Date, default: new Date(+new Date() + 365*24*60*60*1000)}
    destinations:[destinationSchema]
},
{timestamps: true}
);


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);