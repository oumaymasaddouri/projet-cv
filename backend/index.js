const express = require("express");
const cors = require("cors");
require("dotenv").config()
const connectdb = require("./config/connectdb");
const userroutes = require("./routes/userroutes");
const cvroutes = require("./routes/cvroutes");
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5001;
connectdb()

app.use("/api/user", userroutes)
app.use("/api/cv", cvroutes)



app.listen(port, () => console.log("app is running"))

