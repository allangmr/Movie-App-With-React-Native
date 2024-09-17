/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getMovieByIdUseCase } from "../../core/use-cases/movie/get-by-id.use-case";
import { movieDBFetcher } from "../../config/adapters/movieDb.adapter";
import { FullMovie } from "../../core/entities/movie.entity";
import { getMovieCastUseCase } from "../../core/use-cases/movie/get-cast.use-case";
import { Cast } from "../../core/entities/cast.entity";

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setmovieDetails] = useState<FullMovie>();
    const [castList, setCastList] = useState<Cast[]>();

    useEffect(() => {
      loadMovie();
    }, [movieId]);

    const loadMovie = async () => {
        setIsLoading(true);
        const moviePromise =  getMovieByIdUseCase(movieDBFetcher, movieId);
        const castPromise =  getMovieCastUseCase(movieDBFetcher, movieId);

        const [movie, cast] = await Promise.all([moviePromise, castPromise]);
        setmovieDetails(movie);
        setCastList(cast);
        setIsLoading(false);
    };

  return {
    isLoading,
    movieDetails,
    castList,
  };
};
