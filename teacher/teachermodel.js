const mongoose = require("mongoose")
let teacherSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:Number,default:""},
    city:{type:String,default:""},
    createdAt:{type:Date,default:Date.now},
    status:{type:Boolean,default:true}
})

module.exports = mongoose.model("teacher",teacherSchema)