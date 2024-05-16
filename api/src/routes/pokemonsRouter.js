const { Router } = require("express");

const getAllpokemons = require("../handlers/pokemonsHandler/getAllpokemons");
const getPokemonByID = require("../handlers/pokemonsHandler/getPokemonByID");
const createNewPokemon = require("../handlers/pokemonsHandler/createNewPokemon");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllpokemons);
pokemonsRouter.get("/:id", getPokemonByID);
pokemonsRouter.post("/", createNewPokemon);

module.exports = pokemonsRouter;
