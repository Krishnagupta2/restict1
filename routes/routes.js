const router = require("express").Router()
const studentcontroller = require("../student/studentcontroller")
const teachercontroller = require("../teacher/teachercontroller")
const usercontroller = require("../user/usercontroller")



router.post("/loginstu",usercontroller.loginstu)

//router.use(require("../middleware/studentcheck"))
router.post("/registerstu",studentcontroller.registerstu)
router.post("/registertec",teachercontroller.registertec)



module.exports = router