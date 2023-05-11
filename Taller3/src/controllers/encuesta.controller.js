let _encuestaservice = null;
class EncuestaController {
  constructor({ EncuestaService }) {
    _encuestaservice = EncuestaService;
  }
  crearEncuesta(req, res) {
    return _encuestaservice.crear(req, res);
  }
  listarEncuesta(req, res) {
    return _encuestaservice.listar(req, res);
  }
  eliminarEncuesta(req, res) {
    return _encuestaservice.eliminar(req, res);
  }
}

module.exports = EncuestaController;
