const allpokemons = require("../../controllers/pokemonsControllers/getAllpokemonsControllers");
const allPokemonsNames = require("../../controllers/pokemonsControllers/allPokemonsNamesontrollers");

const getAllpokemons = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const nameMinuscula = name.toLowerCase();
      const pokemonName = await allPokemonsNames(nameMinuscula);
      res.status(200).json({ pokemonName });
    } else {
      const todosLosPokemons = await allpokemons();

      res.status(200).json({ todosLosPokemons });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllpokemons;
