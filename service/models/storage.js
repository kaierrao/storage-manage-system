
let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let storageSchema = new Schema({
	createInstance: Date,
	sequence: Number,
	noteNumber: String,
	supplierId: String,
	supplierName: String,
	totalAmount: Number,
	paymentAmount: Number,
	debtAmount: Number,
	mem: String,
	products: Array,
	userId: String
});


storageSchema.statics.findByStorageId=function(storageId, cb){
    return this.find({_id:storageId}, cb);
};

module.exports = mongoose.model('Storage', storageSchema);