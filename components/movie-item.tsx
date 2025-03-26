import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/movies";

type Props = {
  movie: Movie;
};

export const MovieItem = ({ movie }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.launchDate}>{movie.releaseYear}</Text>
      <Text style={styles.h2}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  h2: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  launchDate: {
    textAlign: "right",
  },
  skeletonH2: {
    height: 20,
    backgroundColor: "#aaa",
    marginBottom: 5,
  },
  skeletonLaunchDate: {
    height: 20,
    backgroundColor: "#aaa",
  },
});

export const MovieItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.skeletonH2}></View>
      <View style={styles.skeletonLaunchDate}></View>
    </View>
  );
};
