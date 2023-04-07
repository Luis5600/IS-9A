require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.MONGO_URI;
  mongoose.set("strictQuery", false);
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
    },
    (err, res) => {
      if (!err) {
        console.log("CONECTADO A LA BASE DE DATOS");
      } else {
        console.log("HUBO ERROR DE CONEXION A LA BD");
        console.log(err);
      }
    }
  );
};

module.exports = dbConnect;
