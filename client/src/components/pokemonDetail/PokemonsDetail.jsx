import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getPokemonDetail,
  clear,
  deletePokemon,
  getAllPokemons,
} from "../../redux/actions";

import "./pokemonDetail.css";
import NavBar from "../navBar/NavBar";

const PokemonsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonsDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));

    return () => {
      dispatch(clear());
    };
  }, [id, dispatch]);

  const handleDelete = () => {
    dispatch(deletePokemon(id));
    alert("Pokemon eliminado");
    navigate("/home");
  };

  return (
    <div>
      <NavBar />
      <div className="allDetail">
        <div className="CardDetail">
          <img className="img" src={pokemonDetail[0]?.image} alt="" />
        </div>
        <div className="detail">
          <span className="name">{pokemonDetail[0]?.name}</span>

          <h3 className="h10">Hp: {pokemonDetail[0]?.hp}</h3>
          <h3 className="h10">Attack: {pokemonDetail[0]?.attack}</h3>
          <h3 className="h10">Defense: {pokemonDetail[0]?.defense}</h3>
          <h3 className="h10">Speed: {pokemonDetail[0]?.speed}</h3>
          <h3 className="h10">Height: {pokemonDetail[0]?.height}</h3>
          <h3 className="h10">Weight: {pokemonDetail[0]?.weight}</h3>
          <h3 className="h10">
            Type:
            {pokemonDetail[0]?.types.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </h3>
        </div>
        {pokemonDetail.map((el) => {
          return (
            el.createdInDb && (
              <button
                key={el.id}
                onClick={handleDelete}
                className="deleteButton"
              >
                DELETE
              </button>
            )
          );
        })}
      </div>
    </div>
  );
};

export default PokemonsDetail;
