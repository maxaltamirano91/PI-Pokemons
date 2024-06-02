import axios from "axios";

import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAR_DETAIL,
  GET_POKEMON_BY_NAME,
  CLEAR_POKEMON,
  CREATE_POKEMON,
  ORDER,
  BYATTACK,
  BYTYPE,
  GET_ALL_TYPES,
} from "./actions-types";

export const getAllPokemons = () => async (dispatch) => {
  try {
    let url = "http://localhost:3001/pokemons";

    const response = await axios.get(url);
    const todos = response.data.todosLosPokemons || response.data;
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: todos,
    });
  } catch {
    throw new Error("no se encontraron pokemons");
  }
};

export const getAllTypes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/type");
    const types = response.data.alltypes;
    dispatch({
      type: GET_ALL_TYPES,
      payload: types,
    });
  } catch {
    throw new Error("no se encontraron tipos de pokemons");
  }
};

export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
      const pokemonDetail = data.pokemonId;
      await dispatch({
        type: GET_POKEMON_DETAIL,
        payload: pokemonDetail,
      });
    } catch (error) {
      throw new Error("No se encuentra un pokemon con ese id");
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      const pokemon = response.data.pokemonName;
      await dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon,
      });
    } catch (error) {
      throw new Error("No se encuentra un Pokemon con ese nombre ");
    }
  };
};

export const createPokemon = (form) => {
  return async (dispatch) => {
    try {
      const createNewPokemon = await axios.post(
        "http://localhost:3001/pokemons",
        form
      );

      await dispatch({
        type: CREATE_POKEMON,
        payload: createNewPokemon,
      });
    } catch (error) {
      throw new Error(" No se envio el pokemon");
    }
  };
};

export const clear = () => {
  return (dispatch) => {
    const data = {};
    return dispatch({
      type: CLEAR_DETAIL,
      payload: data,
    });
  };
};

export const clearPokemon = () => {
  return (dispatch) => {
    const data = {};
    return dispatch({
      type: CLEAR_POKEMON,
      payload: data,
    });
  };
};

export const ordernamiento = (sort) => {
  return {
    type: ORDER,
    payload: sort,
  };
};

export const attackFunction = (payload) => {
  return {
    type: BYATTACK,
    payload: payload,
  };
};

export const orderByType = (payload) => {
  return {
    type: BYTYPE,
    payload: payload,
  };
};
