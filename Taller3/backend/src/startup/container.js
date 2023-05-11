const { createContainer, asClass, asFunction, asValue } = require("awilix");

const config = require("../config");
const app = require(".");

const { EncuestaService } = require("../services");

const { EncuestaController } = require("../controllers");

const { EncuestaRoutes } = require("../routes/index.routes");

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
  })
  .register({
    EncuestaController: asClass(
      EncuestaController.bind(EncuestaController)
    ).singleton(),
  })
  .register({
    EncuestaRoutes: asFunction(EncuestaRoutes).singleton(),
  });

module.exports = container;
