const express = require("express");
const { Addcv, getcv, deletecv, updatecv } = require("../controlls/cvcontrolls");
const cvroutes = express.Router()
cvroutes.post("/addcv/:id", Addcv)
cvroutes.get("/current/:id", getcv)
cvroutes.put("/edit/:id", updatecv)
cvroutes.delete("/deletecv/:id", deletecv)
module.exports = cvroutes 