const { Router } = require("express");

module.exports = function ({ PersonaController }) {
  const router = Router();
  router.post("/crearPersona", PersonaController.crearPersona);
  router.get("/listarPersona", PersonaController.listarPersona);
  router.delete("/eliminarPersona/:id", PersonaController.eliminarPersona);
  return router;
};
