import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Movie } from "../types/movies";
import { getMovieList } from "../services/movies";
import { MovieItem, MovieItemSkeleton } from "../components/movie-item";

export default function Screen() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    setLoading(true);
    const moviesList = await getMovieList();
    setMovies(moviesList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Movies</Text>

      {loading && (
        <>
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
        </>
      )}

      {!loading && movies.length === 0 && <Text>No movies available</Text>}

      {!loading &&
        movies.length > 0 &&
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h1: {
    fontSize: 30,
    margin: 20,
    textAlign: "center",
  },
});
