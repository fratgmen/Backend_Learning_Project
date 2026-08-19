const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    is_active: {type: Boolean,default: true},
    firstName: String,
    lastName: String,
    phoneNumber: String,

},
    {  
        timestamps: true
    });

class Users extends mongoose.Model{

}
schema.loadClass(Users);
module.exports = mongoose.model("users",schema)