const axios = require("axios");
const { Pokemon, Type } = require("../../db");

const getById = async (id) => {
  if (isNaN(id)) {
    try {
      const findPokemon = await Pokemon.findByPk(id);

      const nameId = findPokemon.name;

      const nameBBD = await Pokemon.findOne({
        where: { name: nameId },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      const final = {
        id: nameBBD.id,
        name: nameBBD.name,
        image: nameBBD.image,
        hp: nameBBD.hp,
        attack: nameBBD.attack,
        defense: nameBBD.defense,
        speed: nameBBD.speed,
        height: nameBBD.height,
        weight: nameBBD.weight,
        types: [nameBBD.types.map((type) => type.name).join(", ")],
      };
      return final;
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
        types: [result.types.map((typeInfo) => typeInfo.type.name).join(", ")],
      };

      return pokemonIdApi;
    } catch (error) {
      throw Error(" No se encontro el pokemon en la Api ");
    }
  }
};

module.exports = getById;
