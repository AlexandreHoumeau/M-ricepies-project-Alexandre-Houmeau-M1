import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StepList = ({ recipe }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.title}>Steps for the recipe !!</Text>
    {recipe.analyzedInstructions[0].steps.map((element) => (
      <View key={element.number} style={styles.innerStepContainer}>
        <View style={styles.stepBall}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>{element.number}</Text>
        </View>
        <Text style={styles.subtitle}>
          {element.step}
        </Text>
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  stepContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#5D576B",
    marginBottom: 5,
    lineHeight: 24,
    marginHorizontal: 30
  },
  innerStepContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  stepBall: {
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3777FF',
    marginRight: 10
  }
});

export default StepList;
