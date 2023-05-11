const mongoose = require("mongoose");
const { Schema } = mongoose;

const PersonaSchema = new Schema({
  nombre: { type: String },
  identificacion: { type: String },
});

module.exports = mongoose.model("Persona", PersonaSchema);
