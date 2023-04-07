const { Encuesta } = require("../models");
const { mongo } = require("mongoose");

class EncuestaService {
  crear(req, res) {
    var datos = req.body;
    try {
      const encuesta = {
        descripcion: datos.descripcion,
        detalleencuesta: datos.detalleencuesta,
      };
      Encuesta.create(encuesta, function (err, encuesta) {
        if (err) {
          return res.status(400).json({
            message: "Error al agregar la encuesta",
          });
        } else {
          return res.status(200).json({
            message: "Se agrego la encuesta",
            datos: encuesta,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de crear",
      });
    }
  }
}

module.exports = EncuestaService;
