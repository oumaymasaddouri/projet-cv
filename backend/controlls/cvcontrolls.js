
const cv = require("../models/cv")
const user = require("../models/user")
exports.Addcv = async (req, res) => {
    try {
        const newcv = new cv(req.body)
        await newcv.save()
        console.log(newcv)
        await user.findByIdAndUpdate(req.body.id, { $push: { cvId: newcv } })
        return res.status(200).json({ msg: "cv added", newcv })




    } catch (error) {
        res.status(500).send({ msg: "could not add cv" })

    }
}
exports.getcv = async (req, res) => {
    try {
        const onecv = await cv.findById(req.params.id)
        res.status(200).send({ msg: "this is cv", onecv })

    }
    catch (error) {
        res.status(500).send({ msg: "could not get cv" })

    }
}

exports.deletecv = async (req, res) => {
    try {
        const deletecv = await cv.findByIdAndDelete(req.params.id)
        await user.findByIdAndDelete(req.body.id, { $pop: { cvId } })

        return res.status(200).send({ msg: "deleted cv" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete cv" })

    }

}
exports.updatecv = async (req, res) => {
    try {
        const updatedcv = await cv.findByIdAndUpdate(req.params.id, { $set: { ...req.body }, new: true })

        console.log(updatedcv)
        return res.status(200).json({ msg: "updated cv", updatedcv })


    } catch (error) {
        res.status(500).send({ msg: "could not update cv" })


    }
}
