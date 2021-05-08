import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients :{
  },
  price: 0,
};
const prices = {
    apple:2,
    apricot:2,
    dates:2,
    kiwi:2,
    kuraga:1,
    raisins:1,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      newState.ingredients = action.data.ingredients;
      newState.price = action.data.price;
      break;
  
    default:
      break;
  }

  return newState;
}

export default builder;