import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const propiedad = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [propiedad]: value });
    validate({ ...form, [propiedad]: value });
  };

  const usuarioCorrecto = {
    email: "maximiliano.altamirano@gmail.com",
    password: "Max123456*",
  };

  const validate = (form) => {
    let newErrors = { ...error, email: "", password: "" };

    if (!form.email) newErrors.email = "Ingresar un email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "El tipo de email no es correcto";

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/.test(form.password))
      newErrors.password =
        "La contraseña debe tener al menos 7 caracteres, una letra mayúscula y un símbolo";
    if (!form.password) newErrors.password = "Ingresar una contraseña";

    setError(newErrors);
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(form) {
    if (
      form.password === usuarioCorrecto.password &&
      form.email === usuarioCorrecto.email
    ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert(" USUARIO INCORRECTO, INTENTE NUEVAMENTE");
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={submitHandler} className="login">
      <div className="login-screen">
        <div className="app-title">
          <h1>Welcome</h1>
        </div>

        <div className="login-form">
          <div className="control-group">
            <label className="user" htmlFor="email">
              User
            </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </div>

          <div className="control-group">
            <label className="user" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </div>
          <button className="btn btn-primary btn-large btn-block" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
