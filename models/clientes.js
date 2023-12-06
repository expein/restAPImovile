const mongoose = require("mongoose");

const clientesSchema = mongoose.Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model("clientes", clientesSchema);
