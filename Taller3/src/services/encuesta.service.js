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

  listar(req, res) {
    try {
      Encuesta.findOne(function (err, encuestaEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar las encuestas",
          });
        }
        if (!encuestaEncontrado) {
          return res.status(400).json({
            message: "No hay encuesta",
          });
        }
        Encuesta.find(
          {
            encuesta_id: encuestaEncontrado.encuesta_id,
          },
          function (err, encuesta) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar las encuestas",
              });
            } else {
              return res.status(202).json({
                message: "Lista de encuestas",
                encuesta: encuesta,
              });
            }
          }
        );
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de listar",
      });
    }
  }

  eliminar(req, res) {
    var id = req.params.id;
    try {
      Encuesta.updateOne(
        { _id: mongo.ObjectId(id) },
        { eliminado: true },
        function (err, result) {
          if (err) {
            return res
              .status(500)
              .send({ message: "Error al eliminar encuesta" });
          }
          if (result.n == 0) {
            return res.status(404).send({ message: "encuesta no encontrada" });
          } else {
            return res.status(200).send({ message: "encuesta eliminada" });
          }
        }
      );
    } catch (err) {
      return res.status(500).send({ message: "Error al eliminar la encuesta" });
    }
  }
}

module.exports = EncuestaService;
