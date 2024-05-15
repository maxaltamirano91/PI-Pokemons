const getById = require("../../controllers/pokemonsControllers/getPokemonByIdControllers");

const getPokemonByID = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonId = await getById(id);

    res.status(200).json({ pokemonId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonByID;
