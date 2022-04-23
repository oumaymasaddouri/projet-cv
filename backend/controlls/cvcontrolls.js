
const cv = require("../models/cv")
exports.Addcv = async (req, res) => {
    try {
        const newcv = new cv(req.body)
        await newcv.save()
        res.status(200).send({ msg: "cv added", newcv })




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
        res.status(200).send({ msg: "deleted cv" })
    } catch (error) {
        res.status(500).send({ msg: "could not delete cv" })

    }

}
exports.updatecv = async (req, res) => {
    try {
        const updatedcv = await cv.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).send({ msg: "updated cv" })


    } catch (error) {
        res.status(500).send({ msg: "could not update cv" })


    }
}
