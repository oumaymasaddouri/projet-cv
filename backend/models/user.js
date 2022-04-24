const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    telephoneNumber: { type: Number, required: true },
    role: { type: String, enum: ["user ", "admin"] }
})
module.exports = mongoose.model("user", userschema)