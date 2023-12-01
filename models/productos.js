const mongoose = require("mongoose");

const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fechaCaducidad: {
    type: String,
    required: true,
  },
  SaldoInventario: {
    type: Number,
    required: true,
  },
  precioVenta: {
    type: Number,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("productos", productosSchema);
