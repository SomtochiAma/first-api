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

module.exports.createArtisan= (newArtisan, callback) => {
    newArtisan.save(callback)
}

module.exports.findArtisan = (userId, callback) => {
    Artisan.findById(userId, callback)
}

module.exports.checkId= (userId) => {
    if(mongoose.Types.ObjectId.isValid(userId)) {
        return true;
    } else {
        return false;
    }
}

module.exports.updateArtisan = (userId,updateInfo, callback) => {
    Artisan.findByIdAndUpdate(userId, updateInfo, callback)
}

module.exports.deleteArtisan = (userId, callback) => {
    Artisan.findByIdAndDelete(id, callback)
}