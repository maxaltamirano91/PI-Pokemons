const deletePokemonControler = require("../../controllers/pokemonsControllers/deletePokemonController");

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.query;

    console.log(id);
    const pokemonDeleted = await deletePokemonControler(id);

    res.status(200).json({ pokemonDeleted });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deletePokemon;
