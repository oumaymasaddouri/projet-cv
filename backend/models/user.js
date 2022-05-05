const mongoose = require("mongoose");
const { Schema } = mongoose;
const userschema = new mongoose.Schema({
    
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    telephoneNumber: { type: Number, required: true },
    role: ["user ", "admin"] ,
    cvId: { 
        type: mongoose.Schema.Types.ObjectId, ref: "cv"
    }
})
module.exports = mongoose.model("user", userschema)  