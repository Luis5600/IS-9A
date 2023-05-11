const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegistroSchema = new Schema({
  persona_id: { type: Schema.Types.ObjectId, ref: "Persona" },
  encuesta_id: { type: Schema.Types.ObjectId, ref: "Encuesta" },
  fecha: { type: Date },
  hora: { type: Date },
  ubicacion: { type: String },
});

module.exports = mongoose.model("Registro", RegistroSchema);
