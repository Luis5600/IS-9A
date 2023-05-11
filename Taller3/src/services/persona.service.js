const { Persona } = require("../models");
const { mongo } = require("mongoose");

class PersonaService {
  crear(req, res) {
    var datos = req.body;
    try {
      const persona = {
        nombre: datos.nombre,
        identificacion: datos.identificacion,
      };
      Persona.create(persona, function (err, persona) {
        if (err) {
          return res.status(400).json({
            message: "Error al agregar la persona",
          });
        } else {
          return res.status(200).json({
            message: "Se agrego la persona",
            datos: persona,
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
      Persona.findOne(function (err, personaBuscado) {
        if (err) {
          return res.status(500).json({
            message: "Error al listar los usuarios",
          });
        }
        if (!personaBuscado) {
          return res.status(404).json({
            message: "Usuario no encontrado para realizar la busqueda",
          });
        }
        Persona.find(
          { persona_id: personaBuscado.persona_id },
          function (err, persona) {
            if (!persona) {
              return res.status(500).json({
                message: "Error al buscar usuarios",
              });
            }
            return res.status(200).json({ persona: persona });
          }
        );
      });
    } catch (err) {
      return res.status(500).json({ message: "Error al listar usuarios" });
    }
  }

  eliminar(req, res) {
    var id = req.params.id;
    try {
      Persona.updateOne(
        { _id: mongo.ObjectId(id) },
        { eliminado: true },
        function (err, result) {
          if (err) {
            return res
              .status(500)
              .send({ message: "Error al eliminar persona" });
          }
          if (result.n == 0) {
            return res.status(404).send({ message: "persona no encontrada" });
          } else {
            return res.status(200).send({ message: "persona eliminada" });
          }
        }
      );
    } catch (err) {
      return res.status(500).send({ message: "Error al eliminar la persona" });
    }
  }
}
module.exports = PersonaService;
