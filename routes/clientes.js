const express = require("express");
const clientesSchema = require("../models/clientes");

const router = express.Router();

// create user
router.post("/clientes", (req, res) => {
  const cliente = clientesSchema(req.body);
  cliente
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/clientes", (req, res) => {
  clientesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/clientes/:id", (req, res) => {
  const { id } = req.params;
  clientesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/clientes/:id", (req, res) => {
  const { id } = req.params;
  clientesSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/clientes/:id", (req, res) => {
  const { id } = req.params;
  const {
    nombres,
    apellidos,
    telefono,
    direccion,
    ciudad,
    correo,
    contraseña,
    estado,
  } = req.body;
  clientesSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          nombres,
          apellidos,
          telefono,
          direccion,
          ciudad,
          correo,
          contraseña,
          estado,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
