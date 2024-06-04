import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../redux/actions";

import "./createPokemon.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: "",
  });

  const validate = (form) => {
    let newError = { ...error };
    if (!form.name) newError.name = "name vacio";
    else if (!isNaN(form.name)) {
      console.log("form.name no es una cadena");
      newError.name = "can't be a number";
    } else {
      newError.name = "";
    }

    if (!form.image) newError.image = "imagen vacio";
    else if (!isNaN(form.image)) {
      console.log("form.image no es una imagen");
      newError.image = "can't be a number";
    } else {
      newError.image = "";
    }

    if (!form.hp) newError.hp = "Hp vacio";
    else if (isNaN(form.hp)) newError.hp = " it must be a number ";
    else if (form.hp > 100) newError.hp = " cannot exceed 100";
    else {
      newError.hp = "";
    }

    if (!form.attack) newError.attack = "Attack vacio";
    else if (isNaN(form.attack)) newError.attack = " it must be a number ";
    else if (form.attack > 100) newError.attack = " cannot exceed 100";
    else {
      newError.attack = "";
    }

    if (!form.defense) newError.defense = "Defense vacio";
    else if (isNaN(form.defense)) newError.defense = " it must be a number ";
    else if (form.defense > 100) newError.defense = " cannot exceed 100";
    else {
      newError.defense = "";
    }

    if (isNaN(form.speed)) newError.speed = " it must be a number ";
    else if (form.speed > 100) newError.speed = " cannot exceed 100";
    else {
      newError.speed = "";
    }
    if (isNaN(form.height)) newError.height = " it must be a number ";
    else if (form.height > 100) newError.height = " cannot exceed 100";
    else {
      newError.height = "";
    }

    if (isNaN(form.weight)) newError.weight = " it must be a number ";
    else if (form.weight > 100) newError.weight = " cannot exceed 100";
    else {
      newError.weight = "";
    }

    if (!form.type) newError.type = "Type vacio";
    else newError.type = "";
    setError(newError);
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, setError());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(" form enviado");

    dispatch(createPokemon(form));
  };

  return (
    <div className="form-container">
      <p className="title">Create</p>
      <form onSubmit={handleSubmit} className="maxi">
        {/* <div className="FlexContainer"> */}
        <div className="column">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Ingrese nombre"
            />
            <p>{error.name}</p>
          </div>

          <div className="input-group">
            <label htmlFor="imagen">Ingresar Url de la imagen:</label>
            <input
              type="text"
              id="imagen"
              name="image"
              placeholder="Ingrese la URL de la imagen"
              onChange={handleChange}
              value={form.image}
            />
            <p>{error.image}</p>
          </div>

          <div className="input-group">
            <label htmlFor="hp">Hp</label>
            <input
              type="text"
              name="hp"
              onChange={handleChange}
              value={form.hp}
              placeholder="poder de vida"
            />
            <p>{error.hp}</p>
          </div>

          <div className="input-group">
            <label htmlFor="attack">Attack</label>
            <input
              type="text"
              name="attack"
              onChange={handleChange}
              value={form.attack}
              placeholder="poder de ataque"
            />
            <p>{error.attack}</p>
          </div>

          <div className="input-group">
            <label htmlFor="defense">Defense</label>
            <input
              type="text"
              name="defense"
              onChange={handleChange}
              value={form.defense}
              placeholder="poder de defensa"
            />
            <p>{error.defense}</p>
          </div>
        </div>
        <div className="column">
          <div className="input-group">
            <label htmlFor="speed">Speed</label>
            <input
              type="text"
              name="speed"
              onChange={handleChange}
              value={form.speed}
              placeholder="velocidad"
            />
            <p>{error.speed}</p>
          </div>

          <div className="input-group">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              onChange={handleChange}
              value={form.height}
              placeholder="altura"
            />
            <p>{error.height}</p>
          </div>

          <div className="input-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              onChange={handleChange}
              value={form.weight}
              placeholder="peso"
            />
            <p>{error.weight}</p>
          </div>

          <div className="input-group">
            <label htmlFor="type">Type</label>
            {/* <input
              type="text"
              name="type"
              onChange={handleChange}
              value={form.type}
            /> */}
            <select
              className="input-group"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option value="rock">rock</option>
              <option value="water">water</option>
              <option value="psychic">psychic</option>
              <option value="unknown">unknown</option>
              <option value="normal">normal</option>
              <option value="flying">flying</option>
              <option value="steel">steel</option>
              <option value="dark">dark</option>
              <option value="fighting">fighting</option>
              <option value="ghost">ghost</option>
              <option value="electric">electric</option>
              <option value="ground">ground</option>
              <option value="bug">bug</option>
              <option value="grass">grass</option>
              <option value="ice">ice</option>
              <option value="stellar">stellar</option>
              <option value="poison">poison</option>
              <option value="fire">fire</option>
              <option value="dragon">dragon</option>
            </select>
            <p>{error.type}</p>
          </div>
          <div className="input-group">
            <button className="sign" type="submit">
              Create
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default CreatePokemon;
