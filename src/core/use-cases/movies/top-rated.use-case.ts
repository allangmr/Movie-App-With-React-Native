import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<GeneralMoviesResponse>('/top_rated');
        return topRated.results.map((result) => MovieMapper.fromMovieDBResulltToEntity(result));

    } catch(error) {
        console.log(error);
        throw new Error("Error fetching movies - TopRated.");
    }
};
