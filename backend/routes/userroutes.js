const express = require("express");
const { AddUser, getoneuser, deleteuser, updateuser } = require("../controlls/usercontrolls");
const userroutes = express.Router()
userroutes.post("/adduser", AddUser)
userroutes.get("/current/:id", getoneuser)
userroutes.delete("/deleteuser/:id", deleteuser)
userroutes.put("/edit/:id", updateuser)
module.exports = userroutes 