import {createAction} from "@reduxjs/toolkit";
import {ActionPizza} from "../interfaces/interfaces.ts";

interface IAddItem {
  type: string,
  payload: ActionPizza
}

interface IRemoveItem {
  type: string,
  payload: number
}

export type ActionType = IAddItem | IRemoveItem

export const addItem = createAction<ActionPizza>("ADD_ITEM")

export const removeItem = createAction<number>("REMOVE_ITEM")
