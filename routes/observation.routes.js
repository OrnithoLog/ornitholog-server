const router = require("express").Router();
const mongoose = require("mongoose");

const Observation = require("../models/Observation.model");

router.get("/observations", (req, res, next) => {
  Observation.find()
    .populate("birdId")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("Error getting observations...", err);
      res.status(500).json({ message: "Error getting observations..." });
    });
});

router.get("/observations/:id", (req, res, next) => {
  const {id} = req.params
  Observation.findById(id)
    .populate("birdId")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("Error getting observation${id}...", err);
      res.status(500).json({ message: `Error getting observation ${id}...` });
    });
});

router.post("/observations", (req, res, next) => {
  const {
    name,
    date,
    location,
    habitat,
    vegetation,
    age,
    photo,
    sound,
    temperature,
    birdId,
  } = req.body;

  Observation.create({
    name,
    date,
    location,
    habitat,
    vegetation,
    age,
    photo,
    sound,
    temperature,
    birdId,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log("Error creating Observation");
      res.status(500).json({ message: "Error creating project..." });
    });
});

router.put("/observations/:observationId", (req, res, next) => {
  const { observationId } = req.params;
  const {
    name,
    date,
    location,
    habitat,
    vegetation,
    age,
    photo,
    sound,
    temperature,
    birdId,
  } = req.body;

  Observation.findByIdAndUpdate(
    observationId,
    {
      name,
      date,
      location,
      habitat,
      vegetation,
      age,
      photo,
      sound,
      temperature,
      birdId,
    },
    { new: true }
  )
    .then((updatedObservation) => {
      res.json(updatedObservation);
    })
    .catch((err) => {
      console.log("Error updating an project");
      res.status(500).json({ message: "Error updating observation..." });
    });
});

router.delete("/observations/:observationId", (req, res, next) => {
  const { observationId } = req.params;
  Observation.findByIdAndDelete(observationId)
    .then(() => {
      res.json({
        message: `Observation with ${observationId} has been successfully removed`,
      });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error updating observations..." })
    );
});

module.exports = router;
