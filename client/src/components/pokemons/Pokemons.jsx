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
  clearError,
} from "../../redux/actions";

import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";
import Paginado from "./Paginado";
import Alerta from "../alerta/Alerta";

import "./Pokemon.css";

const Pokemons = () => {
  const pokemons = useSelector((state) => state.pokemon);
  const alertaName = useSelector((state) => state.errorAlert);
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [searchResult, setSearchResult] = useState("");

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

  const mostrarLoader = () => {
    setLoader(true);
  };

  const ocultarLoader = () => {
    setLoader(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(clearError());
      dispatch(getAllPokemons());
    } else {
      setSearchResult(event.target.value);
    }
    console.log(event.target.value + " console name");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonByName(searchResult));
  };

  useEffect(() => {
    mostrarLoader();
    dispatch(getAllPokemons()).then(() => {
      ocultarLoader();
    });

    return () => {
      dispatch(clearPokemon());
    };
  }, [dispatch]);

  const handleSearch = (results) => {
    setSearchResult(results);
  };

  const handleOrder = (event) => {
    dispatch(ordernamiento(event.target.value));
    setPaginaActual(1);
  };

  const handleAttak = (event) => {
    dispatch(attackFunction(event.target.value));
    setPaginaActual(1);
  };

  const handleType = (event) => {
    dispatch(orderByType(event.target.value));
    setPaginaActual(1);
  };

  const handleBbdApi = (event) => {
    event.preventDefault();
    dispatch(byBddOrApi(event.target.value));
    setPaginaActual(1);
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
                All Types
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
              <option className="buttonFilter" value="all">
                All
              </option>
              <option className="buttonFilter" value="bbd">
                BBD
              </option>
              <option className="buttonFilter" value="api">
                API
              </option>
            </select>
          </div>
        </div>
      </div>
      <Paginado
        paginaActual={paginaActual}
        pokemonsPorPagina={pokemonsPorPagina}
        pokemons={pokemons.length}
        paginado={paginado}
      />

      <div>
        <Cards allPokemons={pokemonsActuales} />
      </div>

      {loader && (
        <div className="loader-container">
          <div className="pokeball"></div>
        </div>
      )}
      {alertaName && (
        <div>
          <Alerta mensaje={alertaName} />
        </div>
      )}
    </div>
  );
};

export default Pokemons;
