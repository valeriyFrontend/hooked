import { useEffect, useReducer } from "react";
import { getDefaultMovies } from "../../api/getDefaultMovies";
import { getMoviesByName } from "../../api/getMoviesByName";
import { db } from "../../firebase";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";
import { searchReducer } from "../../reducers/searchReducer";
// TODO: Fix typescript error
// @ts-ignore
import { ReactComponent as LoaderIcon } from "../../assets/icons/loader.svg";
import "./App.scss";
import {
  Movie,
  SearchActionKind,
  SearchState,
} from "../../types/interfaces/interfaces";
import Search from "../../components/Search/Search";

const initialState: SearchState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const App = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const { movies, errorMessage, loading } = state;

  const fetchClasses = async () => {
    const itemsRef = await db.collection("favorites").get();
    return itemsRef.docs.map((doc) => doc.data());
  };

  useEffect(() => {
    fetchClasses().then();
  }, []);

  useEffect(() => {
    getDefaultMovies().then((movies) => {
      dispatch({
        type: SearchActionKind.SEARCH_MOVIES_SUCCESS,
        payload: movies.Search,
      });
    });
  }, []);

  const search = (searchValue: string) => {
    dispatch({
      type: SearchActionKind.SEARCH_MOVIES_REQUEST,
    });
    getMoviesByName(searchValue).then((movies) => {
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
    });
  };

  return (
    <div className="app">
      <div className="home__header">
        <Header title="HOOKED" />
        <Search search={search} />
      </div>
      <div className="app__movies grid">
        {loading && !errorMessage ? (
          <LoaderIcon />
        ) : errorMessage ? (
          <div className="app__content__error__message">{errorMessage}</div>
        ) : (
          movies?.map((movie: Movie, index: number) => (
            <MovieCard key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
