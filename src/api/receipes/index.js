import axios from "axios";
import { API_KEY } from "@env";
export const getRecipes  = () =>  {
  return axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: {
        apiKey: "42ab55dd81c9474dbf2c468afe4bcc71",
        number: 10
      }
    })
    .then(res => {
      return res.data.recipes
    })
    .catch(err => {
      console.log(err);
    });
};
