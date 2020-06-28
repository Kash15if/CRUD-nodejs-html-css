var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var SchDet = new Schema({
    school: String,
    address: String ,
    pincode: String,
    fee: Number,
    rank: Number,
    website: String
  
});




var School = mongoose.model('School',SchDet);



module.exports = School;