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
  BBDAPI,
} from "./actions-types";

const initialState = {
  pokemon: [],
  pokemonsDetail: [],
  typos: [],
  allPokemon: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemon: action.payload,
        allPokemon: action.payload,
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

    case GET_ALL_TYPES:
      return {
        ...state,
        typos: action.payload,
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
        allPokemon: [action.payload],
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
    case BYATTACK:
      const byAtaque = [...state.pokemon];
      if (action.payload === "AttakAsc") {
        byAtaque.sort((a, b) => a.attack - b.attack);
      } else if (action.payload === "AttakDes") {
        byAtaque.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        pokemon: byAtaque,
      };

    case BYTYPE:
      const allPokemon = state.allPokemon;
      const filter =
        action.payload === "all"
          ? allPokemon
          : allPokemon.filter((el) =>
              el.types.some((type) => type.split(", ").includes(action.payload))
            );
      return {
        ...state,
        pokemon: filter,
      };

    case BBDAPI:
      if (action.payload === "bbd") {
        const bbd = state.allPokemon;
        const filtro = bbd.filter((el) => {
          return el.createdInDb;
        });
        return {
          ...state,
          pokemon: filtro,
        };
      } else {
        const api = state.allPokemon;
        const filtro = api.filter((el) => {
          return !el.createdInDb;
        });
        return {
          ...state,
          pokemon: filtro,
        };
      }

    default:
      return state;
  }
};

export default reducer;
