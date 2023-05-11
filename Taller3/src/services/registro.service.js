const { Registro } = require("../models");
const { mongo } = require("mongoose");

class RegistroService {
  crear(req, res) {
    var datos = req.body;
    var archivos = req.file;
    if (
      !datos.persona_id ||
      !datos.encuesta_id ||
      !datos.fecha ||
      !datos.hora ||
      !datos.ubicacion
    ) {
      return res.status(400).json({ message: "Faltan campos" });
    }
    try {
      const registro = {
        persona_id: mongo.ObjectId(datos.persona_id),
        encuesta_id: mongo.ObjectId(datos.encuesta_id),
        fecha: datos.fecha,
        hora: datos.hora,
        ubicacion: datos.ubicacion,
      };
      Registro.create(registro, function (err, registro) {
        if (err) {
          return res
            .status(500)
            .json({ mensaje: "Error al buscar al crear reguistro" });
        } else {
          return res.status(200).json({ datos: registro });
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error al crear el registro" });
    }
  }

  listar(req, res) {
    try {
      Registro.findOne(function (err, registroEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar los registros",
          });
        }
        if (!registroEncontrado) {
          return res.status(400).json({
            message: "No hay registro",
          });
        }
        Registro.find(
          {
            registro_id: registroEncontrado.registro_id,
          },
          function (err, registro) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar los registros",
              });
            } else {
              return res.status(202).json({
                message: "Lista de registro",
                registro: registro,
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
      Registro.updateOne(
        { _id: mongo.ObjectId(id) },
        { eliminado: true },
        function (err, result) {
          if (err) {
            return res
              .status(500)
              .send({ message: "Error al eliminar registro" });
          }
          if (result.n == 0) {
            return res.status(404).send({ message: "registro no encontrado" });
          } else {
            return res.status(200).send({ message: "registro eliminado" });
          }
        }
      );
    } catch (err) {
      return res.status(500).send({ message: "Error al eliminar el registro" });
    }
  }
}

module.exports = RegistroService;
