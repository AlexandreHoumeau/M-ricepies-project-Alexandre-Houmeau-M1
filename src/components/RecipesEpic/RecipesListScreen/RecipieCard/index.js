import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { setSelectedRecipe } from "../../../../redux/actions";
import { connect } from "react-redux";
import { SharedElement } from "react-navigation-shared-element";

const RecipeCard = ({ item, setSelectedRecipe, navigation }) => {
  async function selectCard(item) {
    await setSelectedRecipe(item);
    navigation.navigate("RecipesDetails");
  }
  console.log(item.id)
  return (
    <SharedElement id={`item.${item.id}.image_url`}>
      <TouchableOpacity
        onPress={() => selectCard(item)}
        style={styles.cardContainer}
      >
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
        />
        <View style={styles.filter} />

        <View style={styles.cardDescriptionContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
            Temps de préparation: {item.readyInMinutes}mn
          </Text>
          <Text style={styles.description}>
            Note Spoonacular: {item.spoonacularScore}
          </Text>
        </View>
      </TouchableOpacity>
    </SharedElement>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    margin: 10,
    height: 200,
    borderRadius: 20,
    justifyContent: "flex-end"
  },
  image: {
    position: "absolute",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    borderRadius: 10,
    height: "100%",
    width: "100%"
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
    opacity: 0.3,
    borderRadius: 10
  },
  description: {
    color: "#fff",
    fontWeight: "300"
  },
  cardDescriptionContainer: {
    padding: 10
  }
});

export default connect(null, { setSelectedRecipe })(RecipeCard);
