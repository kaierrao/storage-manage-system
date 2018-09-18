
let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let settlementSchema = new Schema({
    createInstance: Date,
    userId: String,
    userName: String,
    settlementAmount: Number,
	products: Array,
	userId: String
});


/*settlementSchema.statics.findByOrderId=function(orderId, cb){
    return this.find({_id:orderId}, cb);
};*/

module.exports = mongoose.model('Settlement', settlementSchema);