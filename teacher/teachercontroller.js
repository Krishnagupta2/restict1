const teacher = require("./teachermodel")
const user = require("../user/usermodel")
let bcrypt = require("bcrypt")
saltrounds = 10



exports.registertec = (req, res) => {
     teacher.findOne({email:req.body.email})
     .then(data=>{
        if(data!=null){
            res.json({
                status:401,success:false,message:`tecaher ${req.body.email} alredy registered`
            })
        }else{
        let tecobj = teacher()
        tecobj.name = req.body.name
        tecobj.email = req.body.email
        tecobj.phone = req.body.phone
        tecobj.city = req.body.city
        tecobj.save()
        .then(tdata => {
            let uobj = user()
            uobj.name = tdata.name
            uobj.email = tdata.email
            uobj.usertype = 3
            uobj.password =bcrypt.hashSync(req.body.password,saltrounds)
            uobj.teacherId = tdata._id
            uobj.save()
            .then(udata => {
                res.json({
                    status: 200, success: true, message: "teacher registered",
                    tdata: tdata,
                    udata: udata
                })
                    })
                })
            
            }
        })
                .catch(err=>{
                    res.json({
                        status:404,success:false,message:"err in registration",
                        err
                    })
                })
        }
