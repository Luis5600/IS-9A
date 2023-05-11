require("dotenv").config();
const container = require("./src/startup/container");
const server = container.resolve("app");
const dbConnect = require("./src/database/mongoconnect");
const DB_URI = process.env.MONGO_URI;

module.exports = async (DB_URI) => {
  await dbConnect(DB_URI, server.start());
};
if (process.env.NODE_ENV !== "test") {
  dbConnect(DB_URI, server.start());
}
