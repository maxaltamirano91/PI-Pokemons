import { Routes, Route } from "react-router-dom";

import HomePage from "./views/homePage/HomePage";
import Landing from "./views/landing/Landing";
import Detail from "./views/detail/Detail";
import FormPage from "./views/formPage/FormPage";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createNewPokemon" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
