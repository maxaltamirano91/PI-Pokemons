import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ pokemon }) => {
  const { name, image, id, types } = pokemon;

  let typesArray = [];
  if (typeof types === "string") {
    typesArray = types.split(", ");
  } else if (Array.isArray(types)) {
    typesArray = types.map((type) => type.name);
  }

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
            <div>
              Type:
              {typesArray.length > 0 ? (
                typesArray.map((type, index) => (
                  <p key={index} className="pokemon-types">
                    {type}
                  </p>
                ))
              ) : (
                <p>No hay tipos</p>
              )}
            </div>
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
