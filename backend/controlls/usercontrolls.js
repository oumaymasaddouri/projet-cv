const res = require("express/lib/response")
const user = require("../models/user")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jsonwebtoken")


// API: /adduser

exports.AddUser = async (req, res) => {
    try {
        const { role, password, confirmPassword } = req.body
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword, saltRounds);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newuser = new user({
            ...req.body, password: hashedPassword, confirmPassword: hashedConfirmPassword

        })
        if (password === confirmPassword && role) {
            console.log(role, password, confirmPassword)


            await newuser.save()


            return res.status(200).json({ msg: "user added", newuser })

        }



        return res.status(400).json({ msg: "watch out man" })







    } catch (error) {
        res.status(500).json({ msg: "could not add user" })

    }
}









exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await user.findOne({ email });
        //console.log(userLogin)
        if (!userLogin) {
            return res.status(400).json({ error: "bad credentials" });
        } else {
            const match = await bcrypt.compare(password, userLogin.password);
            //console.log(match)
            if (!match) {
                return res.status(400).json({ error: "bad credentials" });
            } else {
                var token = jwt.sign({ id: userLogin._id }, process.env.privateKey);
                return res.status(200).json({
                    message: "user loggedIn successfully",
                    userLogin: userLogin,
                    token
                })
            }
        }
    } catch (error) {
        res.status(500).send({ msg: "could not login user" })


    }

}










// API: /current/:id
exports.getoneuser = async (req, res) => {
    try {
        const oneuser = await user.findById(req.params.id).populate("cvId")
        res.status(200).send({ msg: "this is user", oneuser })
    } catch (error) {
        res.status(500).send({ msg: "could not get user" })

    }
}



exports.deleteuser = async (req, res) => {
    try {
        const deleteduser = await user.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: "deleted user" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete user" })

    }

}
exports.updateuser = async (req, res) => {
    try {
        const updateduser = await user.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).send({ msg: "updated user" })


    } catch (error) {
        res.status(500).send({ msg: "could not update user" })


    }
}
