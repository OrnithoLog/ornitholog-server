const router = require("express").Router();
const mongoose = require("mongoose");
const Bird = require("../models/Bird.model");

//  POST /birds
router.post("/", (req, res) => {
    const {name, sciName, family, order, status, image, region, lengthMax, wingspanMin, wingspanMax} = req.body
    const newBird = {name, sciName, family, order, status, image, region, lengthMax, wingspanMin, wingspanMax}
    
    Bird
        .create(newBird)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log("Error creating bird...", err);
            res.status(500).json({ message: "Error creating bird..." });
        })
})

// GET /birds
router.get("/", (req, res,) => {
    Bird
        .find()
        .then(birdsArray => res.status(200).json(birdsArray) )
        .catch(err => {
            console.log("Error getting birds...", err);
            res.status(500).json({ message: "Error getting birds..." });
        })
})

// GET /birds/:id
router.get('/birds/:birdId', (req, res) => {
    const { birdId } = req.params;

    Bird.findById(birdId)
        .then(bird => res.status(200).json(bird))
        .catch(err => {
            console.log("Error getting bird details...", err);
            res.status(500).json({ message: "Error getting bird details..." });
        });
});

// PUT /birds/:id
router.put('/birds/:birdId', (req, res) => {
    const { birdId } = req.params;

    Bird.findByIdAndUpdate(birdId, req.body, { new: true })
        .then(updatedProject => res.status(204).json(updatedProject))
        .catch(err => {
            console.log("Error updating bird...", err);
            res.status(500).json({ message: "Error updating bird..." });
        });
});

// DELETE /birds/:id
router.delete('/birds/:birdId', (req, res) => {
    const { birdId } = req.params;

    Bird.findByIdAndDelete(birdId)
        .then(() => res.status(204).json({ message: `Bird ${birdId} is removed successfully.` }))
        .catch(err => {
            console.log("Error deleting bird...", err);
            res.status(500).json({ message: "Error deleting bird..." });
        });
});

module.exports = router;