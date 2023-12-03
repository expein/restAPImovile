const mongoose = require("mongoose");

// const detalleCitaSchema = mongoose.Schema({
//     empleado: {
//       type: String,
//       required: true
//     },
//     servicio:{
//       type: String,
//       required: true
//     },
//     fechaCita: {
//       type: String,
//       required: true,
//     },
//     horaCita: {
//       type: String,
//       required: true,
//     },
//     descuento: {
//       type: Number,
//       required: true,
//     },
//     costoServicio: {
//         type: Number,
//         required: true,
//     },
//     estado: {
//         type: Number,
//         required: true,
//     }
// })

const citasSchema = mongoose.Schema({
  cliente: {
    type: String,
    required: true,
  },
  fechaRegistro: {
    type: String,
    required: true,
  },
  costoTotal: {
    type: Number,
    required: true,
  },
  servicio: {
    type: String,
    required: true
  },
  fechaCita:{
    type: String,
    required: true
  },
  horaCita:{
    type: String,
  },
  estado: {
    type: Number,
    required: true,
  },
  // detalleCitas: [detalleCitaSchema],
});

module.exports = mongoose.model("citas", citasSchema);