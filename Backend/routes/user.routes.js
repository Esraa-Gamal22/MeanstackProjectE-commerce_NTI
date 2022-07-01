const multer  = require('multer')
const upload = multer({ dest: 'images/' })

const user = require("../controllers/user.controller")
const router = require("express").Router()
const { auth, adminAuth } = require("../middleware/auth.middleware")
//add user
router.post("/register", user.register)
router.post("/addAdmin",adminAuth, user.addAdmin)
//login user
router.post("/login", user.login)

//update password
router.patch("/updatePassword", auth, user.changePassword)
//remove account
router.delete("/delete", user.deleteUser)
//add Address to user
router.post("/addAddr", auth, user.addAddr)
router.patch('/profile',auth, upload.single('profile'),user.uploadImage)

module.exports=router