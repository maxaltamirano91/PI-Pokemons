import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ pokemon }) => {
  const { name, image, id, hp, attack, defense, speed, height, weight } =
    pokemon;
  return (
    <div>
      <div key={id} className="pokemon-card">
        <Link to={`/detail/${id}`} className="link-no-underline">
          <div className="pokemon-img-container">
            {image ? (
              <img src={image} alt={name} className="pokemon-img" />
            ) : (
              <p> No hay imagen</p>
            )}
          </div>
          <div className="pokemon-details">
            <div className="pokemon-name">
              <p>{name}</p>
            </div>

            {/* <p>Healt {hp}</p>
          <p>Attack {attack}</p>
          <p>Defense {defense}</p>
          <p>Speed {speed}</p>
          <p>Height {height}</p>
          <p>Weight {weight}</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
