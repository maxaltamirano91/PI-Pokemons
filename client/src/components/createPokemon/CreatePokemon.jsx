import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../redux/actions";

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
    else {
      newError.hp = "";
    }

    if (!form.attack) newError.attack = "Attack vacio";
    else if (isNaN(form.attack)) newError.attack = " it must be a number ";
    else {
      newError.attack = "";
    }

    if (!form.defense) newError.defense = "Defense vacio";
    else if (isNaN(form.defense)) newError.defense = " it must be a number ";
    else {
      newError.defense = "";
    }

    if (isNaN(form.speed)) newError.speed = " it must be a number ";
    else {
      newError.speed = "";
    }
    if (isNaN(form.height)) newError.height = " it must be a number ";
    else {
      newError.height = "";
    }

    if (isNaN(form.weight)) newError.weight = " it must be a number ";
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
    // <div>
    //   <form onSubmit={handleSubmit} className="createPokemon">
    //     <div className="FlexContainer">
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         onChange={handleChange}
    //         value={form.name}
    //       />
    //       <p>{error.name}</p>

    //       <label htmlFor="imagen">Ingresar Url de la imagen:</label>
    //       <input
    //         type="text"
    //         id="imagen"
    //         name="image"
    //         placeholder="Ingrese la URL de la imagen"
    //         onChange={handleChange}
    //         value={form.image}
    //       ></input>
    //       <p>{error.image}</p>

    //       <label htmlFor="hp">Hp</label>
    //       <input
    //         type="text"
    //         name="hp"
    //         onChange={handleChange}
    //         value={form.hp}
    //       />
    //       <p>{error.hp}</p>

    //       <label htmlFor="attack">Attack</label>
    //       <input
    //         type="text"
    //         name="attack"
    //         onChange={handleChange}
    //         value={form.attack}
    //       />
    //       <p>{error.attack}</p>

    //       <label htmlFor="defense">Defense</label>
    //       <input
    //         type="text"
    //         name="defense"
    //         onChange={handleChange}
    //         value={form.defense}
    //       />
    //       <p>{error.defense}</p>

    //       <label htmlFor="speed">Speed</label>
    //       <input
    //         type="text"
    //         name="speed"
    //         onChange={handleChange}
    //         value={form.speed}
    //       />
    //       <p>{error.speed}</p>

    //       <label htmlFor="height">Height</label>
    //       <input
    //         type="text"
    //         name="height"
    //         onChange={handleChange}
    //         value={form.height}
    //       />
    //       <p>{error.height}</p>

    //       <label htmlFor="weight">Weight</label>
    //       <input
    //         type="text"
    //         name="weight"
    //         onChange={handleChange}
    //         value={form.weight}
    //       />
    //       <p>{error.weight}</p>

    //       <label htmlFor="type">Type</label>
    //       <input
    //         type="text"
    //         name="type"
    //         onChange={handleChange}
    //         value={form.type}
    //       />
    //       <p>{error.type}</p>
    //     </div>

    //     <button className="button2 " type="submit">
    //       Create
    //     </button>
    //   </form>
    // </div>

    <div className="form-container">
      <p class="title">Create</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="FlexContainer">
          <div>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
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
              ></input>
              <p>{error.image}</p>
            </div>

            <div className="input-group">
              <label htmlFor="hp">Hp</label>
              <input
                type="text"
                name="hp"
                onChange={handleChange}
                value={form.hp}
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
              />
              <p>{error.defense}</p>
            </div>
          </div>
          <div>
            <div className="input-group">
              <label htmlFor="speed">Speed</label>
              <input
                type="text"
                name="speed"
                onChange={handleChange}
                value={form.speed}
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
              />
              <p>{error.weight}</p>
            </div>

            <div className="input-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                name="type"
                onChange={handleChange}
                value={form.type}
              />
              <p>{error.type}</p>
            </div>
            <div className="input-group">
              <button className="sign" type="submit">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePokemon;
