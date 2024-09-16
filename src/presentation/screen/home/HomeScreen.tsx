import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage, topRatedNextPage, upcomingNextPage} = useMovies();
  if(isLoading) {
    return (<Text>Loading...</Text>);
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal Carousel */}
        <PosterCarousel movies={nowPlaying} />
        {/* Popular Movies */}
        <HorizontalCarousel 
        movies={popular} 
        title="Trending"
        loadNextPage={popularNextPage}
        />
        {/* Top Rated Movies */}
        <HorizontalCarousel movies={topRated} title="Top Rated" loadNextPage={topRatedNextPage} />
        {/* Popular Movies */}
        <HorizontalCarousel movies={upcoming} title="Upcominng" loadNextPage={upcomingNextPage} />
      </View>
    </ScrollView>
  );
};
