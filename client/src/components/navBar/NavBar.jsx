import SearchBar from "../searchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

import "./navBar.css";

function NavBar({ handleChange, handleSubmit }) {
  const location = useLocation();
  const hideButtons = location.pathname === "/createNewPokemon";
  const ocultarBotones = location.pathname.includes("/detail");
  return (
    <div className="navBar">
      <Link to="/">
        <button className="button">Inicio</button>
      </Link>
      <Link to="/home">
        <button className="button">Home</button>
      </Link>
      {!hideButtons && !ocultarBotones && (
        <>
          <Link to="/createNewPokemon">
            <button className="button">Crea Tu Pokemon</button>
          </Link>
          <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
        </>
      )}
    </div>
  );
}

export default NavBar;
