const { Schema, model } = require("mongoose");

const birdSchema = new Schema({
  name: { type: String, unique: true, required: true },
  sciName: { type: String, unique: true, unique: true },
  family: { type: String, required: true },
  order: { type: String, required: true },
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
  lengthMin: Number,
  lengthMax: { type: Number },
  wingspanMin: { type: Number },
  wingspanMax: { type: Number },
  infoText: String,
});
const Bird = model("Bird", birdSchema);

module.exports = Bird;
