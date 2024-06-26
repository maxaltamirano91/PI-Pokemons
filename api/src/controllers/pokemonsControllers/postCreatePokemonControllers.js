const { Type, Pokemon } = require("../../db");

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  type
) => {
  try {
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    console.log(type + " console de TYPE ");

    if (!Array.isArray(type)) {
      type = [type];
    }

    const newType = await Type.findAll({ where: { name: type } });

    await newPokemon.addTypes(newType);

    const finalPokemon = {
      id: newPokemon.id,
      name: newPokemon.name,
      image: newPokemon.image,
      hp: newPokemon.hp,
      attack: newPokemon.attack,
      defense: newPokemon.defense,
      speed: newPokemon.speed,
      height: newPokemon.height,
      weight: newPokemon.weight,
      // types: newType.map((type) => type.name),
      //! cambiar en todos lados typeS por type
      types: newType,
    };
    console.log("Este es el finalPokemon", finalPokemon);
    return finalPokemon;
  } catch (error) {
    console.log(error);
    throw new Error(" No se pudo crear el Pokemon");
  }
};

module.exports = createPokemon;
