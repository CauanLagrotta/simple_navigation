import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

export default function Screen() {
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
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
