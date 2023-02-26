import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMoviesData } from "../../api/getMovieData";
import { Movie } from "../../types/interfaces/interfaces";
import { Paper, Typography, Grid } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css"; // import the default styles
import "./movieDetail.scss";

const MovieDetail = () => {
  const [movieData, setMovieData] = useState<Movie>();
  const [zoomed, setZoomed] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getMoviesData(id).then((movie) => {
      setMovieData(movie);
    });
  }, [id]);

  function toggleZoom() {
    setZoomed(!zoomed);
  }

  return (
    <>
      <Link to="/" className="movie-detail__link">
        Main page
      </Link>
      <Grid container spacing={2} m={4}>
        <Grid item md={3}>
          <Paper
            elevation={3}
            sx={{
              width: "max-content",
            }}
          >
            <div
              className={`image-container ${zoomed ? "zoomed" : ""}`}
              onClick={toggleZoom}
            >
              <Zoom>
                <img alt="Poster" src={movieData?.Poster || ""} />
              </Zoom>
            </div>
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Typography gutterBottom variant="h5" component="div">
            {movieData?.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {movieData?.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Genre: {movieData?.Genre}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Runtime: {movieData?.Runtime}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Rating: {movieData?.imdbRating}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Votes: {movieData?.imdbVotes}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Description: {movieData?.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Actors: {movieData?.Actors}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Country: {movieData?.Country}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Released: {movieData?.Released}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            Director: {movieData?.Director}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetail;
