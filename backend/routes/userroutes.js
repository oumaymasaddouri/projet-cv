const express = require("express");
const { AddUser, getoneuser, deleteuser, updateuser, login } = require("../controlls/usercontrolls");
const {isAuth}=require ("../middleware/auth")
const userroutes = express.Router()

userroutes.post("/adduser", AddUser)
userroutes.post("/login", login)
userroutes.get("/current/:id", getoneuser)
userroutes.delete("/deleteuser/:id",isAuth , deleteuser)

userroutes.put("/edit/:id",isAuth, updateuser)
module.exports = userroutes 