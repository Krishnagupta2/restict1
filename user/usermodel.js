const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
        name:{type:String,default:""},
        email:{type:String,default:""},
        password:{type:String,default:""},
        usertype:{type:Number,default:1},// 1=user,2=student,3=teacher
        createdAt:{type:Date,default:Date.now},
        status:{type:Boolean,default:true},
        studentId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"student"},
        teacherId:{type:mongoose.Schema.Types.ObjectId,default:null},
})

module.exports = mongoose.model("user",userSchema)