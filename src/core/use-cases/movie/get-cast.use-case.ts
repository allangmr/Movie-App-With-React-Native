import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infraestructure/mapers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getMovieCastUseCase = async(fetcher: HttpAdapter, movieId: number):Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
        const actors = cast.map(CastMapper.fromMovieDBCastToEntity);
        return actors;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching movie cast.");
    }
};

