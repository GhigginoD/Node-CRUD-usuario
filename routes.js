const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeControllers");

route.get("/", homeController.paginaInicial);

module.exports = route;