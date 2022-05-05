const users = require("../models/user");
const jwt = require("jsonwebtoken");
exports.isAuth = async (req, res, next) => {
    
    try {
        const token = req.headers['auth'];
        if (!token) {
            return res.status(400).send("you are not authorized");
        }
        const decoded =await jwt.verify(token, process.env.privateKey);
        const user = await users.findById(decoded.id);
        if (!user){
            return res.status(400).send("you are not authorized");
        }
        next();
    } catch (error) {
        console.log("server error");
    }
};