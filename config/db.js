const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/bheem")
.then(obj=>{
console.log("DB CONNECTED")
})
.catch(err=>{console.log("err in db connection")})