import "./searchBar.css";

const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="buscador"
          onChange={handleChange}
          placeholder="Buscar"
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
