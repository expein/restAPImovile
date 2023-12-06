const express = require("express");
const pedidosSchema = require("../models/pedidos");

const router = express.Router();

// create user
router.post("/pedidos", (req, res) => {
  const pedido = pedidosSchema(req.body);
  pedido
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/pedidos", (req, res) => {
  pedidosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/pedidos/:id", (req, res) => {
  const { id } = req.params;
  pedidosSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/pedidos/:id", (req, res) => {
  const { id } = req.params;
  pedidosSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/pedidos/:id", (req, res) => {
  const { id } = req.params;
  const { cliente, fechaPedido, precioTotalPedido, estado, detallePedido, producto, cantidadProducto, precioUnitario} = req.body;
  pedidosSchema
    .updateOne(
      { _id: id },
      { $set: { cliente, fechaPedido, precioTotalPedido, estado, detallePedido, producto, cantidadProducto, precioUnitario} }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
