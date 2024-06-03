import React from "react";
import "./Paginado.css";

const Paginado = ({ pokemonsPorPagina, pokemons, paginado }) => {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(pokemons / pokemonsPorPagina); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginado(number)} className="buttonFilter">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginado;
