const initialState = {
  ingredients:{
    dates:4,
    kiwi:2,
    kuraga:3,
    raisins:8,
    apple:4,
  },
 price:100,
};
const prices = {
  dates:2,
    kiwi:2,
    kuraga:1,
    raisins:1,
    apple:2,
 };

const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_INGREDIENT":
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case "REMOVE_INGREDIENT":
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
  
    default:
      break;
  }

  return newState;
}

export default builderReducer;