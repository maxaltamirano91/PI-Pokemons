const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const bbdName = async () => {
  const bdd = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  console.log(bdd);
  return bdd;
};

const allPokemonsNamesontrollers = async (name) => {
  const nameFinal = name.trim().toLowerCase();
  console.log(nameFinal);
  try {
    const pokemonNameBd = await bbdName();

    const nombre = await pokemonNameBd.filter((el) => {
      return el.name.trim().toLowerCase() === name.trim().toLowerCase();
    });

    if (nombre.length > 0) {
      return nombre;
    } else {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      const pokemonFromAPI = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
      };

      return pokemonFromAPI;
    }
  } catch (error) {
    console.log(error);
    throw Error(" No se encontraron Pokemons con ese nombre ");
  }
};

module.exports = allPokemonsNamesontrollers;
