const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const { TableHints } = require("sequelize");

const infoApi = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=30"
    );

    const allTypes = response.data.results;

    const infoPokemon = allTypes.map((info) => info.url);
    const resultPromises = infoPokemon.map((url) => axios.get(url));
    const results = await Promise.all(resultPromises);
    const pokemon = results.map((e) => {
      return {
        id: e.data.id,
        name: e.data.name,
        image: e.data.sprites.other.dream_world.front_default,
        hp: e.data.stats[0].base_stat,
        attack: e.data.stats[1].base_stat,
        defense: e.data.stats[2].base_stat,
        speed: e.data.stats[5].base_stat,
        height: e.data.height,
        weight: e.data.weight,
      };
    });

    return pokemon;
  } catch (error) {
    throw Error(" Error al obtener información de los Pokemons ");
  }
};

const pushBdd = async () => {
  try {
    const api = await infoApi();
    const result = await api.map((el) => {
      return {
        id: el.id,
        name: el.name,
        image: el.image,
        hp: el.hp,
        attack: el.attack,
        defense: el.defense,
        speed: el.speed,
        height: el.height,
        weight: el.weight,
      };
    });

    Pokemon.bulkCreate(result);
  } catch (error) {
    console.log(error);
    throw new Error(" error al subir a la base de datos");
  }
};

// pushBdd();

const allpokemons = async () => {
  const pokemons = await Pokemon.findAll({
    attributes: [
      "name",
      "hp",
      "image",
      "attack",
      "defense",
      "speed",
      "height",
      "weight",
    ],
    through: {
      attributes: [],
    },

    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return pokemons;
};

module.exports = allpokemons;
