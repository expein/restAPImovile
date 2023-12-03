const express = require("express");
const citasSchema = require("../models/citas");

const router = express.Router();

// create user
router.post("/citas", (req, res) => {
  const cita = citasSchema(req.body);
  cita
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/citas", (req, res) => {
  citasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/citas/:id", (req, res) => {
  const { id } = req.params;
  citasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/citas/:id", (req, res) => {
  const { id } = req.params;
  citasSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/citas/:id", (req, res) => {
  const { id } = req.params;
  const { fechaRegistro, costoTotal, servicio, fechaCita, horaCita, estado } =
    req.body;
  citasSchema
    .updateOne(
      { _id: id },
      { $set: { fechaRegistro, costoTotal, servicio, fechaCita, horaCita, estado } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
