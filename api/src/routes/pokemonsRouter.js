const { Router } = require("express");

const getAllpokemons = require("../handlers/pokemonsHandler/getAllpokemons");
const getPokemonByID = require("../handlers/pokemonsHandler/getPokemonByID");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllpokemons);
pokemonsRouter.get("/:id", getPokemonByID);

module.exports = pokemonsRouter;
