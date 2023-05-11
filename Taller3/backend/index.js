const container = require("./src/startup/container");
const server = container.resolve("app");
const dbConnect = require("./src/database/mongoconnect");

dbConnect(server.start());
