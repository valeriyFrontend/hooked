export const getDefaultMovies = () => {
  return fetch(
    `${process.env.REACT_APP_OMDB_API}?s=man&apikey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};
