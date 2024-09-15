import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  if(isLoading) {
    return (<Text>Loading...</Text>);
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal Carousel */}
        <PosterCarousel movies={nowPlaying} />
        {/* Popular Movies */}
        <HorizontalCarousel movies={popular} title="Trending" />
        {/* Top Rated Movies */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />
        {/* Popular Movies */}
        <HorizontalCarousel movies={upcoming} title="Upcominng" />
      </View>
    </ScrollView>
  );
};
