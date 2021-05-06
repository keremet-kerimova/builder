const initialState = {
  ingredients:{
  cashew:1,
  dates:1,
  kiwi:1,
  null:2,
  prunes:1,
  },
 price:100,
};
const prices = {
  cashew:1,
  dates:1,
  kiwi:1,
  null:2,
  prunes:1,
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