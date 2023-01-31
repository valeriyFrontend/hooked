export const getMoviesByName = (searchValue: string) => {
  return fetch(
    `${process.env.REACT_APP_OMDB_API}?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};
