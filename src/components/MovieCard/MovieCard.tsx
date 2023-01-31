import { useEffect, useState } from "react";
import {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
  );
};

export default MovieCard;
