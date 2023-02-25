import axios from 'axios';

export const getMoviesByName = async (searchValue: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_OMDB_API}?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};
