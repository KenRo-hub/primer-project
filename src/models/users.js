const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const UserSchema = new Schema({
    fisrtName: String,
    lastName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
});
module.exports=mongooose.model('user', UserSchema);