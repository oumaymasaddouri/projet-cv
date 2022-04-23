const mongoose = require("mongoose");
const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://oumayma:7euoBYdyahmrcOen@cluster0.gszag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.log(error)

    }
}
module.exports = connectdb