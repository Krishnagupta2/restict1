let student = require("./studentmodel")
let user = require("../user/usermodel")
let bcrypt = require("bcrypt")
let saltround = 10
exports.registerstu = (req,res)=>{
    student.findOne({email:req.body.email})
    .then(chdata=>{
        if(chdata!=null){
            res.json({
                status:401,success:false,message:`student ${req.body.email} already exists`
            })
        }else{
        let stuobj = student()
        stuobj.name = req.body.name
        stuobj.email = req.body.email
        stuobj.phone = req.body.phone
        stuobj.city = req.body.city
        stuobj.save()
        .then(data=>{
            let uobj= user()
            uobj.name = data.name
            uobj.email=data.email
            uobj.usertype = 1
            uobj.password = bcrypt.hashSync (req.body.password,saltround)
            uobj.studentId = data._id  
            uobj.save()
            .then(udata=>{
                res.json({
                    status:200,success:true,message:"register student",
                    data:data,
                    udata:udata,
                })
            })
        })
    }
    })
        .catch(err=>{
        res.json({
            status:404,success:false,message:"failed in registration",
            error:err
            
        })
    })
}

