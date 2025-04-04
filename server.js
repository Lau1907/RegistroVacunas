var express = require('express');
var server = express();
var routes = require('./server/src/routes/routes');
var mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect("mongodb://localhost:27017/Veterinaria")
  .then(() => {
    console.log("DB Connected");

    server.use(express.json());
    server.use(routes);
    server.use(cors());

    server.listen(8000, function check(error) {
      if (error) {
        console.log("error");
      } else {
        console.log("started");
      }
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
