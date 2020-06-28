var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var Registration = new Schema({
    school: String,
    address: String ,
    pincode: String,
    fee: Number,
    rank: Number,
  
});




var Reg = mongoose.model('Reg',Registration);



module.exports = Reg;