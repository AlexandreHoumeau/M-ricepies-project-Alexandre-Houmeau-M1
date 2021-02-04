import { SELECTED_RECEIPE } from "./actionTypes"

export const setSelectedRecipe = value => dispatch => {
  return dispatch({
    type: SELECTED_RECEIPE,
    value,
  })
}
