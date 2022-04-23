const res = require("express/lib/response")
const user = require("../models/user")


// API: /adduser

exports.AddUser = async (req, res) => {
    try {
        const newuser = new user(req.body)
        console.log(newuser)
        await newuser.save()
        console.log("newuser")
        return res.status(200).json({ msg: "user added", newuser })




    } catch (error) {
        res.status(500).json({ msg: "could not add user" })

    }
}
// API: /current/:id
exports.getoneuser = async (req, res) => {
    try {
        const oneuser = await user.findById(req.params.id)
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
