import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/

export const getGames = async (search, genre, sort, page, limit) => {
  let params = {
    search: search,
    page:page,
    limit:limit,
  };
  if (genre !== "all") {
    params.genre = genre;
  }
  if (sort !== "noSorting") {
    params.sort = sort;
  }

  const queries = new URLSearchParams(params);
  const response = await axios.get(API_URL + "/games?" + queries.toString());
  return response.data;
};

/* INSTRUCTION: Create a function to fetch genres from the API */
export const getGenres = async () => {
  const response = await axios.get(API_URL + "/genres");
  return response.data;
};
