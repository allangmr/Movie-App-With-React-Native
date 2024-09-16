import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter, options?: Options):Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<GeneralMoviesResponse>('/upcoming',  {
            params: {
                page: options?.page || 1,
            },
        });
        return upcoming.results.map((result) => MovieMapper.fromMovieDBResulltToEntity(result));

    } catch(error) {
        console.log(error);
        throw new Error("Error fetching movies - Upcoming.");
    }
};
