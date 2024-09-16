/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getMovieByIdUseCase } from "../../core/use-cases/movies/get-by-id.use-case";
import { movieDBFetcher } from "../../config/adapters/movieDb.adapter";
import { FullMovie } from "../../core/entities/movie.entity";

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setmovieDetails] = useState<FullMovie>();

    useEffect(() => {
      loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);
        const movie = await getMovieByIdUseCase(movieDBFetcher, movieId);
        setmovieDetails(movie);
        setIsLoading(false);
    };

  return {
    isLoading,
    movieDetails,
  };
};
