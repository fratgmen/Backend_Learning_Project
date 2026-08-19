const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {type: String, required: true},
    isActive: {type: Boolean,default: true},
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    },
},
    {
        versionKey: false,
        timestamps: true
    });

class Categories extends mongoose.Model {

}
schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema) 