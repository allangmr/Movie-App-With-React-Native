import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<GeneralMoviesResponse>('/upcoming');
        return upcoming.results.map((result) => MovieMapper.fromMovieDBResulltToEntity(result));

    } catch(error) {
        console.log(error);
        throw new Error("Error fetching movies - Upcoming.");
    }
};
