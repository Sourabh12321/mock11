const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    traveller:String,
    budget:String
})

const postModel = mongoose.model("post",postSchema)


module.exports = {
    postModel
}