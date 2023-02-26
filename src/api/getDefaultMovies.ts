import axios from "axios";

export const getDefaultMovies = async (page: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_OMDB_API}?s=man&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
  return response.data;
};
