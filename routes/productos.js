const express = require("express");
const productosSchema = require("../models/productos");

const router = express.Router();

// get all users
router.get("/productos", (req, res) => {
  productosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
