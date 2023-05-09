const user = require("./usermodel")
const student = require("../student/studentmodel")
const teacher = require("../teacher/teachermodel")
let bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken')
var secret = 'krishnagupta'

exports.loginstu = (req,res)=>{
    user.findOne({email:req.body.email})
    .then(uObj=>{
        if(uObj!=null){
            if(bcrypt.compareSync(req.body.password,uObj.password)){
                let payload = {
                    email:uObj.email,
                    name:uObj.name,
                    usertype:uObj.usertype
                }
                let token = jwt.sign(payload,secret,{ expiresIn: 60 * 60*24*365 })
                res.json({
                    status:200,success:true,message:"Login Successfully",
                    token:token,
                })
            }
            else{
                res.json({
                    status:400,success:false,message:"Email Password not Match"
                })
            }
        }else{
            res.json({
                status:400,success:false,message:"Email Password not Match"
            })
        }
    })
}
    