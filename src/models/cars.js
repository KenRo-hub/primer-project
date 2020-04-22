const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const carSchema = new Schema({

});

module.exports=mongooose.model('car', carSchema);