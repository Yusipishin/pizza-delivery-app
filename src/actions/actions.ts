import { PizzaInfo } from "../intefaces/interfaces"
import { StockInfo } from "../intefaces/interfaces"
import { NoveltyInfo } from "../intefaces/interfaces"

import { ActionType } from "../intefaces/interfaces"

export const menuFetching = (): ActionType => {
  return {
    type: "MENU_FETCHING"
  }
}

export const menuFetched = (pizza: PizzaInfo[]): ActionType => {
  return {
    type: "MENU_FETCHED",
    payload: pizza
  }
}

export const menuFetchingError = (): ActionType => {
  return {
    type: "MENU_FETCHING_ERROR"
  }
}

export const noveltyFetching = (): ActionType => {
  return {
    type: "NOVELTY_FETCHING"
  }
}

export const noveltyFetched = (novelty: NoveltyInfo[]): ActionType => {
  return {
    type: "NOVELTY_FETCHED",
    payload: novelty
  }
}

export const noveltyFetchingError = (): ActionType => {
  return {
    type: "NOVELTY_FETCHING_ERROR"
  }
}

export const stocksFetching = (): ActionType => {
  return {
    type: "STOCKS_FETCHING"
  }
}

export const stocksFetched = (stocks: StockInfo[]): ActionType => {
  return {
    type: "STOCKS_FETCHED",
    payload: stocks
  }
}

export const stocksFetchingError = (): ActionType => {
  return {
    type: "STOCKS_FETCHING_ERROR"
  }
}
