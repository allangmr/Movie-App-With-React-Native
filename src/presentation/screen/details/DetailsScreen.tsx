// import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/movieHeader";

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const {movieId} = route.params;
  const { isLoading, movieDetails } = useMovie(movieId);
  if (isLoading) {
    return <Text>Loading...</Text>;
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
    <View>
      {/* Header */}
      <MovieHeader title={movieDetails.title} originalTitle={movieDetails.originalTitle} poster={movieDetails.poster} />
      {/* Details */}
    </View>
  );
};

