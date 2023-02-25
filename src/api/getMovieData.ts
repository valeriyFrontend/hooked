import axios from 'axios';

export const getMoviesData = async (movieID: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_OMDB_API}/?i=${movieID}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};
