const mongoose = require("mongoose")
const peacockSchema = mongoose.Schema({
    peacock_species: String,
    feather_color: String,
    age: Number
})
module.exports = mongoose.model("peacock",
peacockSchema)