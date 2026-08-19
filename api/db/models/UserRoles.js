const mongoose = require("mongoose");

const schema = mongoose.Schema({
    roleID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },userID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
},
    {
        versionKey: false,
        timestamps: true
    });

class USerRoles extends mongoose.Model {

}
schema.loadClass(Users);
module.exports = mongoose.model("userroles", schema) 