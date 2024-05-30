import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAR_DETAIL,
  GET_POKEMON_BY_NAME,
  CLEAR_POKEMON,
  CREATE_POKEMON,
} from "./actions-types";

const initialState = {
  pokemon: [],
  pokemonsDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonsDetail: [...state.pokemonsDetail, action.payload],
      };

    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemon: [action.payload],
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        pokemonsDetail: [],
      };
    case CLEAR_POKEMON:
      return {
        ...state,
        pokemon: [],
      };

    case CREATE_POKEMON:
      return {
        ...state,
        pokemon: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
