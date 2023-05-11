const mongo = require("mongoose");
const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { RegistroService } = require("../services");
const RegistroStub = require("./stubs/registro.stub");
const app = require("../../index");

describe("RegistroService", () => {
  let mongod;
  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const URI = mongod.getUri();
    await app(URI);
  });
  afterAll((done) => {
    done();
  });
  describe("crear registro", () => {
    it("Se creo el registro", async () => {
      const requestUri = request("http://localhost:4000");
      await requestUri
        .post("/v1/api/Registro/crearRegistro")
        .send(RegistroStub())
        .expect(200);
    });
  });
});
