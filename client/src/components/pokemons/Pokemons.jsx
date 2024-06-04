import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getPokemonByName,
  clearPokemon,
  ordernamiento,
  attackFunction,
  orderByType,
  byBddOrApi,
  reloadFilter,
} from "../../redux/actions";

import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";
import Paginado from "./Paginado";

import "./Pokemon.css";

const Pokemons = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon);

  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getAllPokemons());
    } else {
      setSearchResult(event.target.value);
    }
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonByName(searchResult));
  };

  useEffect(() => {
    dispatch(getAllPokemons());
    return () => {
      dispatch(clearPokemon());
    };
  }, [dispatch]);

  const handleSearch = (results) => {
    setSearchResult(results);
  };

  const handleOrder = (event) => {
    dispatch(ordernamiento(event.target.value));
  };

  const handleAttak = (event) => {
    dispatch(attackFunction(event.target.value));
  };

  const handleType = (event) => {
    dispatch(orderByType(event.target.value));
  };

  const handleBbdApi = (event) => {
    event.preventDefault();
    dispatch(byBddOrApi(event.target.value));
  };

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };

  const [paginaActual, setPaginaActual] = useState(1);
  const [pokemonsPorPagina, setPokemonsPorPagina] = useState(12);
  const indexUltimoPokemon = paginaActual * pokemonsPorPagina;
  const indexPrimerPokemon = indexUltimoPokemon - pokemonsPorPagina;
  const pokemonsActuales = pokemons.slice(
    indexPrimerPokemon,
    indexUltimoPokemon
  );

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    console.log(numeroPagina + " console NUMERO PAGINA");
  };

  return (
    <div>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="filter">
        <div className="dropdown">
          <span className="span">Filter</span>
          <div className="dropdown-content">
            <select
              className="buttonFilter"
              onChange={() => handleOrder(event)}
            >
              <option className="buttonFilter" value="asc">
                A-Z
              </option>
              <option className="buttonFilter" value="des">
                Z-A
              </option>
            </select>

            <select
              className="buttonFilter"
              onChange={() => handleAttak(event)}
            >
              <option className="buttonFilter" value="AttakAsc">
                AttakAsc
              </option>
              <option className="buttonFilter" value="AttakDes">
                AttakDes
              </option>
            </select>

            <select className="buttonFilter" onChange={() => handleType(event)}>
              <option className="buttonFilter" value="all">
                Type
              </option>
              <option className="buttonFilter" value="fire">
                fire
              </option>
              <option className="buttonFilter" value="poison">
                poison
              </option>
              <option className="buttonFilter" value="steel">
                steel
              </option>
              <option className="buttonFilter" value="psychic">
                psychic
              </option>
              <option className="buttonFilter" value="fighting">
                fighting
              </option>
              <option className="buttonFilter" value="bug">
                bug
              </option>
              <option className="buttonFilter" value="grass">
                grass
              </option>
              <option className="buttonFilter" value="dragon">
                dragon
              </option>
              <option className="buttonFilter" value="flying">
                flying
              </option>
              <option className="buttonFilter" value="ground">
                ground
              </option>
              <option className="buttonFilter" value="rock">
                rock
              </option>
              <option className="buttonFilter" value="water">
                water
              </option>
              <option className="buttonFilter" value="ice">
                ice
              </option>
              <option className="buttonFilter" value="normal">
                normal
              </option>
              <option className="buttonFilter" value="ghost">
                ghost
              </option>
              <option className="buttonFilter" value="electric">
                electric
              </option>
            </select>
            <select
              className="buttonFilter"
              onChange={() => handleBbdApi(event)}
            >
              <option className="buttonFilter" value="bbd">
                BBD
              </option>
              <option className="buttonFilter" value="api">
                API
              </option>
            </select>
            <button className="buttonFilter" onClick={(e) => [handleReload(e)]}>
              Reload
            </button>
          </div>
        </div>
      </div>
      <Paginado
        pokemonsPorPagina={pokemonsPorPagina}
        pokemons={pokemons.length}
        paginado={paginado}
      />

      <div>
        <Cards allPokemons={pokemonsActuales} />
      </div>
    </div>
  );
};

export default Pokemons;
