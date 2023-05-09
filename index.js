const express = require("express")
const db = require("./config/db")
const app = express()
const route = require("./routes/routes")
app.use(express.urlencoded({extended:true}))




app.use("/student",route)


app.listen(3000,()=>{
    console.log("my api")
})