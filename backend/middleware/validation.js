const { body, validationResult } = require("express-validator");
exports.RegisterValidation = [
    body("name", "name must be valid"),
    body("email", "please add a valid email").isEmail(),
    body("password", "password must be at least 8 caracters").isLength({
        min: 8, max: 10
    }),
];

exports.loginValidation = [
    body("email", "please add a valid email").isEmail(),
    body("password", "password must be at least 8 caracters").isLength({
        min: 8, max: 10
    }),
];
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};