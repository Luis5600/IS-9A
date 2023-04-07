let _encuestaservice = null;
class EncuestaController {
  constructor({ EncuestaService }) {
    _encuestaservice = EncuestaService;
  }
  crearEncuesta(req, res) {
    return _encuestaservice.crear(req, res);
  }
}

module.exports = EncuestaController;
