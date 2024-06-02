import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getPokemonByName,
  clearPokemon,
  ordernamiento,
} from "../../redux/actions";

import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";

import "./Pokemon.css";

const Pokemons = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemon);

  const [searchResult, setSearchResult] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchResult(event.target.value);
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
                Ascendente
              </option>
              <option className="buttonFilter" value="des">
                Descendente
              </option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Cards allPokemons={pokemons} />
      </div>
    </div>
  );
};

export default Pokemons;
