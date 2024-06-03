import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonDetail, clear } from "../../redux/actions";

import NavBar from "../navBar/NavBar";

import "./pokemonDetail.css";

const PokemonsDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonsDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clear());
    };
  }, [id, dispatch]);

  return (
    <div>
      <NavBar />
      <div className="allDetail">
        <div className="Card">
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
      </div>
    </div>
  );
};

export default PokemonsDetail;
