export const getMoviesData = (movieID: string) => {
  return fetch(
    `${process.env.REACT_APP_OMDB_API}/?i=${movieID}&apikey=4a3b711b`
  ).then((response) => response.json());
};
