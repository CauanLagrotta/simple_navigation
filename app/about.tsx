import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Query = {
  name?: string;
};

export default function Screen() {
  const { name } = useLocalSearchParams<Query>();

  return (
    <View style={styles.container}>
      <Text>About: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
