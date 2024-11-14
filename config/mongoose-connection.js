const  mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bagProject")
.then(()=>{
    console.log("Database Connect Sucessfully");
    
})
.catch((err)=>{
   console.log(err);
   
})

module.exports = mongoose.connection;