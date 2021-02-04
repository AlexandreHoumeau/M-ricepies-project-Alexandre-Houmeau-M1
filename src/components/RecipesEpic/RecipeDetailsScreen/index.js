import React, { useRef } from "react";
import { ScrollView, StyleSheet, View, Animated } from "react-native";
import { connect } from "react-redux";
import Header from "./Header";
import IngredientList from "./IngredientList";
import StepList from "./StepList";
import { SharedElement } from "react-navigation-shared-element";

const RecipesDetailsScreen = props => {
  const { recipe } = props.recipeSelected;
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  const headerHeight = animatedScrollYValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp"
  });

  const fontSize = animatedScrollYValue.interpolate({
    inputRange: [0, 100],
    outputRange: [20, 22],
    extrapolate: "clamp"
  });

  return (
    <View style={styles.container}>
      <SharedElement
        id={`item.${recipe.id}.image_url`}
      >
        <Header
          fontSize={fontSize}
          headerHeight={headerHeight}
          recipe={recipe}
        />
      </SharedElement>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: animatedScrollYValue } } }
        ])}
      >
        <IngredientList recipe={recipe} />
        <StepList recipe={recipe} />
      </Animated.ScrollView>
    </View>
  );
};

RecipesDetailsScreen.sharedElements = route => {
  const { recipe } = route.params;
  console.log(recipe)
  return [
    {
      id: `item.${recipe.id}.image_url`,
      animation: 'move',
      resize: 'clip'
    }
  ];
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => ({
  recipeSelected: state.recipeSelected
});

export default connect(mapStateToProps)(RecipesDetailsScreen);
