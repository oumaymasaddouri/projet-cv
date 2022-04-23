const express = require("express");
const { Addcv, getcv, deletecv, updatecv } = require("../controlls/cvcontrolls");
const cvroutes = express.Router()
cvroutes.post("/addcv/:id", Addcv)
cvroutes.get("/current/:id", getcv)
cvroutes.delete("/deletecv/:id", deletecv)
cvroutes.put("/edit/:id", updatecv)
module.exports = cvroutes 