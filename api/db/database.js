const mongoose = require("mongoose");

let instance = null;
class Database {


    constructor() {
        if (!instance) { instance = this }
        this.mongoConnetion = null;
        return instance;
    }


    async connect(options) {
        try {
            console.log("db connecting...")
            let db = await mongoose.connect(options.CONNECTION_STRING)
            this.mongoConnetion = db;
            console.log("db connected!")
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = Database;