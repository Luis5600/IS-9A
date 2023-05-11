const { Router } = require("express");

module.exports = function ({ EncuestaController }) {
  const router = Router();
  router.post("/crearEncuesta", EncuestaController.crearEncuesta);
  router.get("/listarEncuesta", EncuestaController.listarEncuesta);
  router.delete("/eliminarEncuesta/:id", EncuestaController.eliminarEncuesta);
  return router;
};
