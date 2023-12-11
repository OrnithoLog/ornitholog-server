const router = require("express").Router();
const mongoose = require("mongoose");

const Observation = require("../models/Observation.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { isOwner } = require("../middleware/isOwner.middleware");

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
  const { id } = req.params;
  Observation.findById(id)
    .populate("birdId")
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("Error getting observation...", err);
      res.status(500).json({ message: `Error getting observation ${id}...` });
    });
});

router.post("/observations", isAuthenticated, (req, res, next) => {
  const {
    title,
    date,
    location,
    habitat,
    vegetation,
    age,
    photo,
    sound,
    temperature,
    birdId,
    notes,
  } = req.body;

  Observation.create({
    creator: req.payload._id,
    title,
    date,
    location,
    habitat,
    vegetation,
    age,
    photo,
    sound,
    temperature,
    birdId,
    notes,
  })
    .then((response) => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log("Error creating Observation", err);
      res.status(500).json({ message: "Error creating project..." });
    });
});

router.put(
  "/observations/:observationId",
  isAuthenticated,
  isOwner,
  (req, res, next) => {
    const { observationId } = req.params;
    const {
      title,
      date,
      location,
      habitat,
      vegetation,
      age,
      photo,
      sound,
      temperature,
      birdId,
      notes,
    } = req.body;

    Observation.findByIdAndUpdate(
      observationId,
      {
        title,
        date,
        location,
        habitat,
        vegetation,
        age,
        photo,
        sound,
        temperature,
        birdId,
        notes,
      },
      { new: true }
    )
      .then((updatedObservation) => {
        res.json(updatedObservation);
      })
      .catch((err) => {
        console.log("Error updating an project", err);
        res.status(500).json({ message: "Error updating observation..." });
      });
  }
);

router.delete(
  "/observations/:observationId",
  isAuthenticated,
  isOwner,
  (req, res, next) => {
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
  }
);

module.exports = router;
