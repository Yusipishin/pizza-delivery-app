import { ApiResponse, ActionType } from "../intefaces/interfaces"

export const menuFetching = (): ActionType => {
  return {
    type: "MENU_FETCHING"
  }
}

export const menuFetched = (pizza: ApiResponse[]): ActionType => {
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
