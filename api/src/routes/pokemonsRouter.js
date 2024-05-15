const { Router } = require("express");

const getAllpokemons = require("../handlers/pokemonsHandler/getAllpokemons");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllpokemons);

module.exports = pokemonsRouter;
