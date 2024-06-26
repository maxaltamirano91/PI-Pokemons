import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ pokemon }) => {
  const { name, image, id, types } = pokemon;

  const typeList = types && types.length > 0 ? types.join(", ") : [];

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
            <p>Type: {typeList}</p>

            <div className="pokemon-name">
              <p>{name}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
