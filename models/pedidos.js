const mongoose = require("mongoose");

const detallePedidoSchema = mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  cantidadProducto: {
    type: Number,
    required: true,
  },
  precioUnitario: {
    type: Number,
    required: true,
  }
});

const pedidosSchema = mongoose.Schema({
  cliente: {
    type: String,
    required: true,
  },
  fechaPedido: {
    type: String,
    required: true,
  },
  precioTotalPedido: {
    type: Number,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
  detallePedido: [detallePedidoSchema],
});

module.exports = mongoose.model("pedidos", pedidosSchema);
