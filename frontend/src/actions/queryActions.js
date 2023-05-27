import {
  getQueriesBySearchParam,
  saveHistoryQueries,
  getHistoryQueries,
} from "../api/api";

export const setQueries = (queryList, searchParam) => {
  return {
    type: "SET_QUERIES",
    payload: {
      queryList,
      searchParam: searchParam !== undefined ? searchParam : null,
    },
  };
};

export const addQueries = (queryList, searchParam) => {
  return {
    type: "ADD_QUERIES",
    payload: { queryList, searchParam },
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const fetchQueries = (searchParam) => {
  return async (dispatch) => {
    try {
      const res = await getQueriesBySearchParam(searchParam);
      dispatch(setQueries(res, searchParam));
      if (res.length > 0) {
        dispatch(addQueries(res, searchParam));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const saveData = (queriesResults) => {
  return async (dispatch) => {
    try {
      const res = await saveHistoryQueries(queriesResults);
      dispatch(addQueries(res));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getQueriesFromDb = () => {
  return async (dispatch) => {
    try {
      const res = await getHistoryQueries();
      dispatch(addQueries(res));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
