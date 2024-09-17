import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import type { MovieDBMovie } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapers/movie.mapper";
import type { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number):Promise<FullMovie> => {
    try {
        // const movie = await fetcher.get<MovieDBMovie>(movieId.toString());
        const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);
        const movieMapped = MovieMapper.fromMovieDBToEntity(movie);
        return movieMapped;
    }
    catch(error) {
        console.log(error);
        throw new Error("Error fetching movie by id.");
    }
};
