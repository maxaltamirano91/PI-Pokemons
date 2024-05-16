const axios = require("axios");
const { Pokemon } = require("../../db");

const getById = async (id) => {
  if (isNaN(id)) {
    try {
      const findPokemon = await Pokemon.findByPk(id);
      return findPokemon;
    } catch (error) {
      throw Error(" No se encontro el pokemon en la Base de Datos ");
    }
  } else {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      const result = response.data;

      const pokemonIdApi = {
        id: result.id,
        name: result.name,
        image: result.sprites.other.dream_world.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        speed: result.stats[5].base_stat,
        height: result.height,
        weight: result.weight,
      };

      return pokemonIdApi;
    } catch (error) {
      throw Error(" No se encontro el pokemon en la Api ");
    }
  }
};

module.exports = getById;
