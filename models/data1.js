var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ColDet = new Schema({
    college: String,
    dept: String,
    course: String ,
    pincode: String,
    fee: Number,
    rank: Number
});




var College = mongoose.model('College',ColDet);



module.exports = College;