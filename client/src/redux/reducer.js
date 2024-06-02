import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAR_DETAIL,
  GET_POKEMON_BY_NAME,
  CLEAR_POKEMON,
  CREATE_POKEMON,
  ORDER,
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

    case ORDER:
      const byOrder = [...state.pokemon];
      if (action.payload === "asc") {
        byOrder.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "des") {
        byOrder.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        pokemon: byOrder,
      };
    default:
      return state;
  }
};

export default reducer;
