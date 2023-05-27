import axios from "axios";

const PORT = 4000;
const URL = `http://localhost:${PORT}`;

export const getQueriesBySearchParam = async (searchParam) => {
  try {
    const res = await axios.get(`${URL}/queries?q=${searchParam}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch items from API");
  }
};

export const saveHistoryQueries = async (queries) => {
  try {
    const res = await axios.post(`${URL}/queriesdb`, { queries });
    return res.data;
  } catch (error) {
    throw new Error("Failed to post items to DB");
  }
};

export const getHistoryQueries = async () => {
  try {
    const res = await axios.get(`${URL}/queriesdb`);
    return res.data.queries;
  } catch (error) {
    throw new Error("Failed to fetch items from db");
  }
};
