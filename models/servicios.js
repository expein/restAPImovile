const mongoose = require("mongoose");

const serviciosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  duracion:{
    type: Number,
    required: true,
  },
  precio:{
    type: Number,
    required: true,
  },
  descripcion:{
    type: String,
    required: true,
  },
  estado: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("servicios", serviciosSchema);
