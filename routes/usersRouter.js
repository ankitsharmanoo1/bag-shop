const express = require("express");
const userModels = require("../models/user-models");
const router = express.Router();




router.get("/", (req,res)=>{
     res.send("Owner is working")
})



router.post("/register", async(req,res)=>{
    try{
     let {email,password,fullname} = req.body;
     let user = await userModels.create({
          email,
          password,
          fullname
     })
     res.send(user)
    }
    catch(err){
     console.log(err.message);
     
    }
})


module.exports = router;