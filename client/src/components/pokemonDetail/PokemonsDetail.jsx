import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPokemonDetail, clear } from "../../redux/actions";

import NavBar from "../navBar/NavBar";

const PokemonsDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonsDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(clear()); //
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

          <h3 className="h10">Hp-{pokemonDetail[0]?.hp}</h3>
          <h3 className="h10">Attack-{pokemonDetail[0]?.attack}</h3>
          <h3 className="h10">Defense-{pokemonDetail[0]?.defense}</h3>
          <h3 className="h10">Speed-{pokemonDetail[0]?.speed}</h3>
          <h3 className="h10">Height-{pokemonDetail[0]?.height}</h3>
          <h3 className="h10">Weight-{pokemonDetail[0]?.weight}</h3>
        </div>
      </div>

      {/* <div className="card">
        <img className="profile-pic" src={pokemonDetail[0]?.image} alt="" />
        <div className="bottom">
          <div className="content">
            <span className="name">{pokemonDetail[0]?.name}</span>
            <span className="about-me">
              <p>{pokemonDetail[0]?.hp}Hp</p>
              <p>{pokemonDetail[0]?.attack}Attack </p>
              <p>{pokemonDetail[0]?.defense}Defense </p>
              <p>{pokemonDetail[0]?.speed}Speed </p>
              <p>{pokemonDetail[0]?.height}Height </p>
              <p>{pokemonDetail[0]?.weight}Weight </p>
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PokemonsDetail;

{
  /* <div class="card">
        <button class="mail">
</svg>
        </button>
        <div class="profile-pic">
        </div>
        <div class="bottom">
            <div class="content">
                <span class="name">My Name</span>
                <span class="about-me">Lorem ipsum dolor sit amet consectetur adipisicinFcls </span>
            </div>
           <div class="bottom-bottom">
            <div class="social-links-container">
        </div>
    </div> */
}
