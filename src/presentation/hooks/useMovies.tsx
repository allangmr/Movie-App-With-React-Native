import { useEffect, useState } from "react";
import type { Movie } from "../../core/entities/movie.entity";
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDb.adapter";

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async() => {
        // const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        // const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher);
        // const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
        // const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher);
        // instead of 4 awaits, we can use Promise.all
        const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] = await Promise.all([
            UseCases.moviesNowPlayingUseCase(movieDBFetcher),
            UseCases.moviesUpcomingUseCase(movieDBFetcher),
            UseCases.moviesTopRatedUseCase(movieDBFetcher),
            UseCases.moviesPopularUseCase(movieDBFetcher),
        ]);
        setNowPlaying(nowPlayingMovies);
        setUpcoming(upcomingMovies);
        setTopRated(topRatedMovies);
        setPopular(popularMovies);
        setIsLoading(false);
    };

    return {
        isLoading,
        nowPlaying,
        upcoming,
        topRated,
        popular,
    };
};
