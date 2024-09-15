import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { GeneralMoviesResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesPopularUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<GeneralMoviesResponse>('/popular');
        return popular.results.map((result) => MovieMapper.fromMovieDBResulltToEntity(result));

    } catch(error) {
        console.log(error);
        throw new Error("Error fetching movies - Popular.");
    }
};
