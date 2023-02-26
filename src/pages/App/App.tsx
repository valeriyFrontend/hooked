import { useState, useEffect, useReducer } from "react";
import { getDefaultMovies } from "../../api/getDefaultMovies";
import { getMoviesByName } from "../../api/getMoviesByName";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import { searchReducer } from "../../reducers/searchReducer";
import {
  Movie,
  SearchActionKind,
  SearchState,
} from "../../types/interfaces/interfaces";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";
import { Grid } from "@mui/material";
import "./app.scss";

const initialState: SearchState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const App = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const [page, setPage] = useState(1);
  const { movies, errorMessage, loading } = state;

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await getDefaultMovies(page);
      dispatch({
        type: SearchActionKind.SEARCH_MOVIES_SUCCESS,
        payload: [...movies, ...moviesData.Search],
      });
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.round(window.scrollY) >=
          document.body.scrollHeight &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const search = async (searchValue: string) => {
    dispatch({ type: SearchActionKind.SEARCH_MOVIES_REQUEST });

    try {
      const movies = await getMoviesByName(searchValue);
      if (movies.Response === "True") {
        dispatch({
          type: SearchActionKind.SEARCH_MOVIES_SUCCESS,
          payload: movies.Search,
        });
      } else {
        dispatch({
          type: SearchActionKind.SEARCH_MOVIES_FAILURE,
          error: movies.Error,
        });
      }
    } catch (error: any) {
      dispatch({ type: SearchActionKind.SEARCH_MOVIES_FAILURE, error });
    }
  };

  return (
    <div className="app">
      <div className="home__header">
        <Header title="HOOKED" />
        <Search search={search} />
      </div>
      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <div className="app__content__error__message">{errorMessage}</div>
      ) : (
        <Grid container spacing={2} padding={4}>
          {movies?.map((movie: Movie, index: number) => (
            <MovieCard key={`${index}-${movie.Title}`} movie={movie} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default App;
