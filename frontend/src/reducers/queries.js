const initialState = {
  queries: [],
  currentQueries: [],
};

const queries = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUERIES":
      return {
        ...state,
        currentQueries: action.payload,
      };
    case "ADD_QUERIES":
      const { queryList, searchParam } = action.payload;
      if (searchParam === undefined) {
        return {
          ...state,
          queries: [...queryList],
        };
      } else {
        return {
          ...state,
          queries: [...state.queries, action.payload],
        };
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default queries;
