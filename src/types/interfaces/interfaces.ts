export enum SearchActionKind {
  SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST",
  SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS",
  SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE",
}

export interface SearchAction {
  type: SearchActionKind;
  payload?: Movie[] | string;
  error?: string;
}

export interface SearchState {
  loading: boolean;
  movies: Array<Movie>;
  errorMessage: string | null;
}

export interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  imdbRating: number;
  Plot: string;
  Actors: string;
  Country: string;
  Released: string;
  Director: string;
  Genre: string;
  Runtime: string;
  imdbVotes: string;
}
