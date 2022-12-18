const mongoose = require('mongoose');

//this line is to suppress mongoose depreciation warnings
mongoose.set("strictQuery", false)

mongoose.connect('mongodb://127.0.0.1:27017/flights');

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`);
});