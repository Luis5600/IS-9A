const mongoose = require("mongoose");
const { Schema } = mongoose;

const EncuestaSchema = new Schema({
  descripcion: { type: String },
  detalleencuesta: { type: String },
});

module.exports = mongoose.model("Encuestas", EncuestaSchema);
