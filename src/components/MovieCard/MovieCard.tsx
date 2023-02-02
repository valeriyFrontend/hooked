import { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { getMoviesData } from "../../api/getMovieData";
import { Movie } from "../../types/interfaces/interfaces";
import "./movieCard.scss";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [movieData, setMovieData] = useState<{
    Title: string;
    Plot: string;
    imdbRating: string;
  } | null>(null);
  const defaultPlaceholder = "../../assets/images/default-placeholder.png";

  console.log({ movieData });

  useEffect(() => {
    getMoviesData(movie?.imdbID).then((movie) => {
      setMovieData(movie);
    });
  }, [movie?.imdbID]);

  const poster = movie?.Poster === "N/A" ? defaultPlaceholder : movie?.Poster;

  return (
    <Grid item md={3}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            height="140"
            image={poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieData?.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movieData?.Plot}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MovieCard;
