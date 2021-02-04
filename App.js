import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import RecipesDetailsScreen from "./src/components/RecipesEpic/RecipeDetailsScreen";
import RecipesListScreen from "./src/components/RecipesEpic/RecipesListScreen";
import store from "./src/redux/store";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesListScreen} />
          <Stack.Screen name="RecipesDetails" component={RecipesDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}