import axios from 'axios';

export const getDefaultMovies = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_OMDB_API}?s=man&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};
