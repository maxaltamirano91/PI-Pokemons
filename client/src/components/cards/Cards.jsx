import Card from "../card/Card";

const Cards = ({ allPokemons }) => {
  console.log(" ESTE ES EL CONGOLE LOG DE CARDS", allPokemons);
  const pokemons = allPokemons;

  return (
    <div className="parent">
      {pokemons ? (
        pokemons.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)
      ) : (
        <h2>No hay pokemons disponibles</h2>
      )}
    </div>
  );
};

export default Cards;
