const mongoose = require("mongoose");

const schema = mongoose.Schema({
level: String,
email: String,
location:String,
procType: String,
log: String,


createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
},
    {
        versionKey: false,
        timestamps: true
    });

class AuditLogs extends mongoose.Model {

}
schema.loadClass(Users);
module.exports = mongoose.model("auditlogs", schema) 