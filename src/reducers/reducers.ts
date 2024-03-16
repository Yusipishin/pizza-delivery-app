import {ActionPizza} from "../interfaces/interfaces.ts";
import {ActionType} from "../actions/actions.ts";

interface stateProp {
  cart: ActionPizza[]
}

const initialState: stateProp = {
  cart: []
}

const reducer = (state: stateProp = initialState, action: ActionType ) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (typeof action.payload !== 'number') {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
      break;
    case "REMOVE_ITEM":
      if (typeof action.payload === 'number') {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload)
        }
      }
      break;
    default: return state
  }
}

export default reducer;