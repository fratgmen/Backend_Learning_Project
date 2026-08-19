const mongoose = require("mongoose");

const schema = mongoose.Schema({
    isActive: {type: Boolean,default: true},
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
},
    {
        versionKey: false,
        timestamps: true
    });

class Categories extends mongoose.Model {

}
schema.loadClass(Users);
module.exports = mongoose.model("categories", schema) 