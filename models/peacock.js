const mongoose = require("mongoose")
const peacockSchema = mongoose.Schema({
    peacock_species: {
        type: String,
        required: true,
        unique: true,
        minLength: [6, "peacock specie is not valid"],
      },
    feather_color: {
        type: String,
        required: true,
        minLength: [9, "peacock color is not valid"],
      },
    age: {
        type: Number,
        required: true,
        min: [9, "peacock age  in Number is not valid"],
      },
})
module.exports = mongoose.model("peacock",
peacockSchema)