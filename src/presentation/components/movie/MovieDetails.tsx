/* eslint-disable react-native/no-inline-styles */
import { Text, View } from "react-native";
import { FullMovie } from "../../../core/entities/movie.entity";
import { formatCurrency } from "../../../config/helpers/formatter";
import { Cast } from "../../../core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../cast/CastActor";

interface Props {
    movie: FullMovie;
    cast: Cast[];
}
export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
            <View style={{flexDirection: "row"}}>
                <Text>{movie.rating}</Text>
                <Text style={{marginLeft: 5}}>- {movie.genres.join(", ")}</Text>
            </View>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Description</Text>
            <Text style={{fontSize: 16, marginTop: 10, marginBottom: 20}}>{movie.description}</Text>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Budget</Text>
            <Text style={{fontSize: 16, marginTop: 10, marginBottom: 20}}>{formatCurrency(movie.budget)}</Text>
        </View>
        {/* Casting */}
        <View style={{marginTop: 10, marginBottom: 30}}>
            <Text style={{fontSize: 23, marginVertical: 10, marginHorizontal: 20, fontWeight: 'bold'}}>Casting</Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <CastActor actor={item} />
                )}
            />
        </View>
    </>
  );
};
