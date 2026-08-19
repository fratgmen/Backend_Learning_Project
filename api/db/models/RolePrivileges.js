const mongoose = require("mongoose");

const schema = mongoose.Schema({
    roleId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    permission: {type: String},
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
},
    {
        versionKey: false,
        timestamps: true
    });

class RolesPrivileges extends mongoose.Model {

}
schema.loadClass(RolesPrivileges);
module.exports = mongoose.model("rolesprivileges", schema) 