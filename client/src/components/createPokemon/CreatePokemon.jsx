import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getAllTypes } from "../../redux/actions";

import "./createPokemon.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();

  const typePokemon = useSelector((state) => state.typos);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: [],
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
    type: [],
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

  const handleTipo = (event) => {
    const tipo = [...form.type];

    let tipoRepetido = false;

    for (let i = 0; i < tipo.length; i++) {
      if (tipo[i] === event.target.value) {
        tipoRepetido = true;
      }
    }

    if (tipoRepetido) {
      alert(" no se pueden repetir los tipos");
    } else {
      if (tipo.length < 2) {
        tipo.push(event.target.value);
        setForm({ ...form, type: tipo });
      } else {
        alert(" Solo puedes seleccionar dos tipos ");
      }
    }
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
              name="weight"
              onChange={handleChange}
              value={form.weight}
              placeholder="peso"
            />
            <p>{error.weight}</p>
          </div>

          <div className="input-group">
            <label htmlFor="type">Types: You can choose 2</label>
            <select className="input-group" onChange={handleTipo}>
              {typePokemon
                ? typePokemon.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))
                : []}
            </select>
            <select className="input-group" onChange={handleTipo}>
              {typePokemon
                ? typePokemon.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))
                : []}
            </select>
          </div>
          <div className="input-group">
            <button className="sign" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePokemon;
