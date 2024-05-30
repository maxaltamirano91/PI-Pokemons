import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

function NavBar({ handleChange, handleSubmit }) {
  return (
    <div className="navBar">
      <Link to="/">
        <button className="button">Inicio</button>
      </Link>
      <Link to="/home">
        <button className="button">Home</button>
      </Link>
      <Link to="/createNewPokemon">
        <button className="button">Crea Tu Pokemon</button>
      </Link>

      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default NavBar;
