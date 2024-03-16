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

export const addItem = (item: ActionPizza): IAddItem => {
  return {
    type: "ADD_ITEM",
    payload: item
  }
}

export const removeItem = (item: number): IRemoveItem => {
  return {
    type: "REMOVE_ITEM",
    payload: item
  }
}