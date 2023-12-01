const express = require("express");
const serviciosSchema = require("../models/servicios");

const router = express.Router();

// get all users
router.get("/servicios", (req, res) => {
  serviciosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
