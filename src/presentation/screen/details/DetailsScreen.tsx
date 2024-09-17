// import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loader/FullScreenLoader";

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const {movieId} = route.params;
  const { isLoading, movieDetails, castList = [] } = useMovie(movieId);

  if(isLoading) {
    return <FullScreenLoader />;
  }

  if (!movieDetails) {
    return <Text>No details available</Text>;
  }

  // const { originalTitle, genres, duration, budget, productionCompanies, description, poster, backdrop, rating, releaseDate } = movieDetails;
  return (
    // <View>
    //     <Text>{originalTitle}</Text>
    //     {/* <Text>{genres}</Text> */}
    //     <Text>{description}</Text>
    //     <Text>{duration}</Text>
    //     <Text>{budget}</Text>
    //     {/* <Text>{productionCompanies}</Text> */}
    //     <Text>{rating}</Text>
    //     {/* <Text>{releaseDate}</Text> */}
    //     <Text>{poster}</Text>
    //     <Text>{backdrop}</Text>
    // </View>
    <ScrollView>
      {/* Header */}
      <MovieHeader title={movieDetails.title} originalTitle={movieDetails.originalTitle} poster={movieDetails.poster} />
      {/* Details */}
      <MovieDetails movie={movieDetails} cast={castList} />
    </ScrollView>
  );
};

