const axios = require("axios");
const { Pokemon } = require("../../db");

const allPokemonsNamesontrollers = async (name) => {
  try {
    const pokemonNameBd = await Pokemon.findOne({
      where: {
        name: name.toLowerCase(),
      },
    });

    return pokemonNameBd;

    //! en el caso que necesite buscar el nombre en la API utilizo la función de abajo.
    // if (pokemonNameBd) {
    //   return pokemonNameBd;
    // }

    // const response = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${name}`
    // );

    // const pokemonFromAPI = {
    //   id: response.data.id,
    //   name: response.data.name,
    //   image: response.data.sprites.other.dream_world.front_default,
    //   hp: response.data.stats[0].base_stat,
    //   attack: response.data.stats[1].base_stat,
    //   defense: response.data.stats[2].base_stat,
    //   speed: response.data.stats[5].base_stat,
    //   height: response.data.height,
    //   weight: response.data.weight,
    // };

    // return pokemonFromAPI;
  } catch (error) {
    throw Error(" No se encontraron Pokemons con ese nombre ");
  }
};

module.exports = allPokemonsNamesontrollers;
