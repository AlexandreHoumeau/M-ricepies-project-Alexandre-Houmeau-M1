import { SELECTED_RECEIPE } from "../actionTypes";

const defaultState = [];

export const recipeSelected = (state = defaultState, action) => {
  console.log(action.type)
  switch (action.type) {
    case SELECTED_RECEIPE:
    return {
      recipe: action.value
    }
    default:
      return state;
  }
};
