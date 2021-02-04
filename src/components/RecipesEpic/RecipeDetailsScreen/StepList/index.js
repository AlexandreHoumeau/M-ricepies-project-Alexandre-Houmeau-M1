import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StepList = ({recipe}) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>Steps for the recipe !!</Text>
      {recipe.analyzedInstructions[0].steps.map(element => (
        <Text key={element.id} style={styles.subtitle}>{element.step}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
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


export default StepList;