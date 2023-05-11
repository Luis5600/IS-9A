const { createContainer, asClass, asFunction, asValue } = require("awilix");

const config = require("../config");
const app = require(".");

const {
  EncuestaService,
  PersonaService,
  RegistroService,
} = require("../services");

const {
  EncuestaController,
  PersonaController,
  RegistroController,
} = require("../controllers");

const {
  EncuestaRoutes,
  PersonaRoutes,
  RegistroRoutes,
} = require("../routes/index.routes");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    EncuestaService: asClass(EncuestaService).singleton(),
    PersonaService: asClass(PersonaService).singleton(),
    RegistroService: asClass(RegistroService).singleton(),
  })
  .register({
    EncuestaController: asClass(
      EncuestaController.bind(EncuestaController)
    ).singleton(),
    PersonaController: asClass(
      PersonaController.bind(PersonaController)
    ).singleton(),
    RegistroController: asClass(
      RegistroController.bind(RegistroController)
    ).singleton(),
  })
  .register({
    EncuestaRoutes: asFunction(EncuestaRoutes).singleton(),
    PersonaRoutes: asFunction(PersonaRoutes).singleton(),
    RegistroRoutes: asFunction(RegistroRoutes).singleton(),
  });

module.exports = container;
