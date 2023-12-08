const express = require("express");
const clientesSchema = require("../models/clientes");
const mongoose = require("mongoose");
const {Types} = mongoose;

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
router.get("/clientes/:parametro", (req, res) => {
  const { parametro } = req.params;

  // Verificar si el parámetro es un ObjectId válido
  if (Types.ObjectId.isValid(parametro)) {
    // Si es un ObjectId, buscar por ID
    clientesSchema.findById(parametro)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.json(data);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  } else {
    // Si no es un ObjectId válido, buscar por nombre de usuario
    clientesSchema.findOne({ correo: parametro })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.json(data);
      })
      .catch((error) => res.status(500).json({ message: error.message }));
  }
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
