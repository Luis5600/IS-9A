const mongoose = require("mongoose");

const dbConnect = async (DB_URI) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI, (err) => {
    if (!err) {
      if (process.env.NODE_ENV !== "test") {
        console.log("CONECTADO A LA BASE DE DATOS");
      }
    } else {
      console.log("HUBO ERROR DE CONEXION A LA BD");
      console.log(err);
    }
  });
};

module.exports = dbConnect;
