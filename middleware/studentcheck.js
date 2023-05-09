module.exports = (req,res,next)=>{
    let headers = req.header['authorization']

    if (headers == null || headers== undefined){
        res.json({
            status:401,success:false,
            message:"not allow to user"
        })
    }
    else{
        next()
    }
}