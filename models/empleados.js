const mongoose = require("mongoose");

const empleadosSchema = mongoose.Schema({
  cedula: {
    type: String,
    required: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  fechaContrato: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("empleados", empleadosSchema);
