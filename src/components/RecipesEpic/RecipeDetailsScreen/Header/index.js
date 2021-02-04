import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const Header = ({ recipe, headerHeight, fontSize }) => {
  console.log(recipe.id)
  return (
    <SharedElement style={{ zIndex: 1000 }} id={`item.${recipe.id}.image_url`}>
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
    </SharedElement>
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
    justifyContent: "flex-end"
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

Header.sharedElement = route => {
  const { recipe } = route.params;
  return [
    {
      id: `item.${recipe.id}.image_url`,
      animation: "move",
      resize: "clip"
    }
  ];
};

export default Header;
