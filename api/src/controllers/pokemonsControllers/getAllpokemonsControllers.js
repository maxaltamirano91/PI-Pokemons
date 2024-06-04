const axios = require("axios");
const { Pokemon, Type } = require("../../db");
const { TableHints } = require("sequelize");

const infoApi = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=50"
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
        // types: [e.data.types.map((typeInfo) => typeInfo.type.name).join(", ")],
        types: e.data.types.map((typeInfo) => typeInfo.type.name),
      };
    });

    return pokemon;
  } catch (error) {
    console.log(error);
    throw Error(" Error al obtener información de los Pokemons ");
  }
};

//! Función para pushear todos los pokemons de la API a la BBD*
// const pushBdd = async () => {
//   try {
//     const api = await infoApi();
//     const result = await api.map((el) => {
//       return {
//         id: el.id,
//         name: el.name,
//         image: el.image,
//         hp: el.hp,
//         attack: el.attack,
//         defense: el.defense,
//         speed: el.speed,
//         height: el.height,
//         weight: el.weight,
//       };
//     });

//     Pokemon.bulkCreate(result);
//   } catch (error) {
//     console.log(error);
//     throw new Error(" error al subir a la base de datos");
//   }
// };

// pushBdd();
//! -------------------------------------------------------------------
const infoBDD = async () => {
  const pokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const newP = await pokemons.map((el) => {
    return {
      id: el.id,
      name: el.name,
      image: el.image,
      hp: el.name,
      attack: el.attack,
      defense: el.defense,
      speed: el.speed,
      height: el.height,
      weight: el.weight,
      types: el.types ? el.types.map((type) => type.name) : [],
      createdInDb: el.createdInDb,
    };
  });
  return newP;
  // return pokemons;
};

const allpokemons = async () => {
  const api = await infoApi();
  const bbd = await infoBDD();
  const result = api.concat(bbd);
  return result;
};

module.exports = allpokemons;
