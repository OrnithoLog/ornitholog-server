const Observation = require("../models/Observation.model");

async function isOwner(req, res, next) {
  const { observationId } = req.params;
  const { creator } = await Observation.findById(observationId);

  try {
    if (!creator) {
      return res.status(404).json({ message: "Entry not found" });
    }
    if (req.payload._id.toString() === creator.toString()) {
      console.log("Updating worked!");
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Unauthorized - User is not the owner" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  isOwner,
};
