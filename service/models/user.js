
let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    password: String,
    salt: String,
	admin: Boolean
});


userSchema.statics.findByUserName=function(username, cb){
    return this.find({username:new RegExp(username, 'i')}, cb);
};

module.exports = mongoose.model('User', userSchema);