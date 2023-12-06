const { Schema, model } = require("mongoose");

const observationSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  habitat: {
    type: String,
    required: true,
    enum: [
      "forest",
      "grassland",
      "wetland",
      "coast",
      "urban",
      "mountain",
      "river",
    ],
  },
  vegetation: { type: String },
  age: { enum: ["juvenil", "adult"] },
  photo: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
  },
  sound: { type: String },
  temperature: { type: Number },
  birdId: { type: Schema.Types.ObjectId, ref: "Bird" },
});

const Observation = model("Observation", observationSchema);

module.exports = Observation;
