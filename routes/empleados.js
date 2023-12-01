const express = require("express");
const empleadosSchema = require("../models/empleados");

const router = express.Router();

// get all users
router.get("/empleados", (req, res) => {
  empleadosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;