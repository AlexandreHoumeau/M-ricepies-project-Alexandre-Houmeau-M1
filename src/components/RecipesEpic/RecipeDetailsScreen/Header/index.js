import React from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

const Header = ({ recipe, headerHeight, fontSize }) => {
  return (
    <Animated.View
      style={[
        styles.headerContainer,
        { transform: [{ translateY: headerHeight }] }
      ]}
    >
      <Image
        resizeMode="cover"
        source={{ uri: recipe.image }}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      />
      <View style={styles.filter} />
      <View style={styles.cardDescriptionContainer}>
        <Animated.Text style={[styles.title, { fontSize }]}>
          {recipe.title}
        </Animated.Text>
        <Text style={styles.description}>
          Temps de préparation: {recipe.readyInMinutes}mn
        </Text>
        <Text style={styles.description}>
          Note Spoonacular: {recipe.spoonacularScore}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%"
  },
  headerContainer: {
    height: 200,
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    zIndex: 1000 
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  filter: {
    flex: 1,
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    opacity: 0.3
  },
  description: {
    color: "#fff",
    fontWeight: "300"
  },
  cardDescriptionContainer: {
    padding: 10
  }
});

export default Header;
