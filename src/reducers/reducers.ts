import {createReducer} from "@reduxjs/toolkit";
import {ActionPizza} from "../interfaces/interfaces.ts";

import {
  addItem,
  removeItem
} from "../actions/actions.ts";

interface stateProp {
  cart: ActionPizza[]
}

const initialState: stateProp = {
  cart: []
}

const reducer = createReducer(initialState, builder => {
  builder
      .addCase(addItem, ((state, action) => {
        state.cart.push(action.payload)
      }))
      .addCase(removeItem, ((state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }))
      .addDefaultCase(() => {})
})

export default reducer;