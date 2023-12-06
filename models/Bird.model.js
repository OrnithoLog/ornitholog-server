const { Schema, model } = require("mongoose");

const birdSchema = new Schema({
  name: { type: String, unique, required },
  sciName: { type: String, unique, required },
  family: { type: String, required },
  order: { type: String, required },
  status: {
    type: String,
    enum: [
      "Critically Endangered",
      "Endangered",
      "Vulnerable",
      "Near Threatened",
      "Conservation Dependent",
      "Low concern",
      "Data deficient",
      "Not evaluated",
    ],
  },
  image: { type: String },
  region: { type: [String] },
  lengthMin: { type: Number },
  lengthMax: { type: Number },
  wingspanMin: { type: Number },
  wingspanMax: { type: Number },
});
const Bird = model("Bird", birdSchema);

module.exports = Bird;
