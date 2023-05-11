const { Router } = require("express");

module.exports = function ({ EncuestaController }) {
  const router = Router();
  router.post("/crearEncuesta", EncuestaController.crearEncuesta);
  return router;
};
