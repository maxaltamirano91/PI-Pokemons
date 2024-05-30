import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllPokemons,
  getPokemonByName,
  clearPokemon,
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

  const handleSortByNameAsc = () => {
    dispatch(getAllPokemons("name", "asc"));
  };

  const handleSortByNameDesc = () => {
    dispatch(getAllPokemons("name", "desc"));
  };

  const handleSortByAttackAsc = () => {
    dispatch(getAllPokemons("attack", "asc"));
  };

  const handleSortByAttackDesc = () => {
    dispatch(getAllPokemons("attack", "desc"));
  };

  const handleSearch = (results) => {
    setSearchResult(results);
  };
  console.log(" console de Pokemons", pokemons);

  return (
    <div>
      <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="filter">
        <div className="dropdown">
          <span className="span">Filter</span>
          <div className="dropdown-content">
            <button className="buttonFilter" onClick={handleSortByNameAsc}>
              By Name Asc
            </button>
            <button className="buttonFilter" onClick={handleSortByNameDesc}>
              By Name Desc
            </button>
            <button className="buttonFilter" onClick={handleSortByAttackAsc}>
              By Attack Asc
            </button>
            <button className="buttonFilter" onClick={handleSortByAttackDesc}>
              By Attack Desc
            </button>
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
