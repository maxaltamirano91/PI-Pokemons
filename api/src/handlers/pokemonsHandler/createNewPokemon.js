const createPokemon = require("../../controllers/pokemonsControllers/postCreatePokemonControllers");

const createNewPokemon = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, type } =
      req.body;
    console.log(type + " CONSOLE DE TYPE HANLDER");
    if ((name, image)) {
      const newPokemon = await createPokemon(
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        type
      );

      res.status(200).json({ newPokemon });
    } else {
      ("Falta ingresar nombre e imagen");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createNewPokemon;
