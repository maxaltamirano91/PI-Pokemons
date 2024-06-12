const { Pokemon } = require("../../db");

const deletePokemonControler = async (id) => {
  console.log(id + " console deletePokemonControler");

  try {
    const borrarPokemon = await Pokemon.findByPk(id);

    if (borrarPokemon) {
      await Pokemon.destroy({
        where: {
          id: id,
        },
      });

      return borrarPokemon;
    } else {
      throw Error(" Pokemon no encontrado");
    }
  } catch (error) {
    throw Error(" No se puede eliminar el pokemon");
  }
};

module.exports = deletePokemonControler;
