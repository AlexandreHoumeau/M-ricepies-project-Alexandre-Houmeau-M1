import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

const IngredientList = ({recipe}) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>Ingredients needed !!</Text>
      <View style={{ marginLeft: 10 }}>
        {recipe.extendedIngredients.map(element => (
          <View
            key={element.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 50, height: 50, marginRight: 10 }}
              source={{
                uri: `https://spoonacular.com/cdn/ingredients_100x100/${element.image}`
              }}
            />
            <Text style={styles.subtitle}>
              {element.aisle} {Math.round(element.amount)} {element.cup}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    marginTop: 200,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 15,
    color: "#5D576B",
    marginBottom: 5,
    lineHeight: 24
  }
});

export default IngredientList;