const mongoose = require("mongoose")
const validator=require("validator")
const url = "mongodb://127.0.0.1:27017"
mongoose.connect(url + "/users", { useNewUrlParser: "true" },
    (err) => {if(err){console.log(err)}
     console.log("Database connection established for " + url + "/users") })
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
            if (!validator.isEmail(data)){throw new Error("Invalid Email")}
        }    },
    matric:{type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
        trim:true
    },
    level:{
        type:Number,
        enum:[100,200,300,400,500],
        required: true},
    role:{
            type:String,
            enum: ["user", "publisher", "admin"],
            default:"user"
        },
    password:{
        type:String,
        required:true}
},
{timestamps:true}
)

const usersModel=mongoose.model("User", usersSchema)

module.exports=usersModel