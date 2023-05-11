let _personaservice = null;
class PersonaController {
  constructor({ PersonaService }) {
    _personaservice = PersonaService;
  }
  crearPersona(req, res) {
    return _personaservice.crear(req, res);
  }
  listarPersona(req, res) {
    return _personaservice.listar(req, res);
  }
  eliminarPersona(req, res) {
    return _personaservice.eliminar(req, res);
  }
}

module.exports = PersonaController;
