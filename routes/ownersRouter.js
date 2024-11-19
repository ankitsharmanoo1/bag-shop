const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV === "development"){
     router.post("/products/create", async(req,res)=>{
        let owners = await ownerModel.find();
        if(owners.length > 0) { return res
        .status(504)
        .send("You are not permission to create a new owner")
     }
      let {fullname, email, password} = req.body
      let createdOwner = await ownerModel.create({
             fullname,
             email,
             password,
             
     })
     res.status(201).send(createdOwner)
}
)
     
}

router.get("/admin", (req,res)=>{
     let success = req.flash("sucess");
     res.render("createproducts",{success});
})



module.exports = router;