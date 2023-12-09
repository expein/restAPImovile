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

router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    fechaCaducidad,
    saldoInventario,
    precioVenta,
    estado,
  } = req.body;
  citasSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          nombre,
          descripcion,
          fechaCaducidad,
          saldoInventario,
          precioVenta,
          estado,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
