const express = require("express");
const {registeruser, loginUser,logout} = require("../controllers/authController")
const router = express.Router();




router.get("/", (req,res)=>{
     res.send("Owner is working")
})

router.post("/register",registeruser)

router.post("/login",loginUser)

router.get("/logout",logout)

module.exports = router;