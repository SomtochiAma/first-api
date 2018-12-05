const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/artisan-search');
mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.on('connected', () => console.log('Successfully connected to the database'));
connection.on('err', () => console.log('Failed to connect to database'));

const artisanSchema = new Schema({
    firstName: String,
    lastName: String,
    occupation: String,
    phoneNumber: Number,
    location: String,
})

let Artisan = module.exports = mongoose.model('Artisan', artisanSchema)

