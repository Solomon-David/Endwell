const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017"
mongoose.connect(url + users, { useNewUrlParser: "true", useCreateIndex: "true" },
    () => { console.log("Database connection established for" + url + users) })
const usersSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(data) {
            if ()
        }

    }
})