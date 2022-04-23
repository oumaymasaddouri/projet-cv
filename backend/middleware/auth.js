const req = require("express/lib/request");
const users = require("../models/users");
const jwt = require("jsonwebtoken");
exports.isAuth = async (req, res, next) => {
    const jwt = require("jsonwebtoken");
    const token = req.header("authentification");
    try {
        if (!token) {
            return res.status(400).send("you are not authorized");
        }
        const decoded = jwt.verify(token, process.env.secretOrKey);
        const user = await users.findById(decoded.id);
        req.user = user;
        next();
    } catch (error) {
        console.log("server error");
    }
};