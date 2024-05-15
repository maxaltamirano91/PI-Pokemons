const axios = require("axios");
const { Type } = require("../../db");

const findAllTypes = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const allTypes = response.data.results;
    const typeNames = allTypes.map((type) => type.name);

    typeNames.forEach((type) => {
      Type.findOrCreate({ where: { name: type } });
    });
    const findTypes = await Type.findAll();
    if (findTypes.length !== 0) {
      return findTypes;
    } else {
      throw Error(" Ups no hay ningun tipo de Pokemón para mostrar");
    }
  } catch (error) {
    throw Error(" Error al obtener todos los tipos");
  }
};

module.exports = findAllTypes;
