import { MainState } from "../intefaces/interfaces"
import { ActionType } from "../intefaces/interfaces"

const enum Status {
  OK = 'idle',
  ERROR = 'error',
  LOADING = 'loading',
}

const initialState: MainState = {
  menu: [],
  stocks: [],
  novelty: [],
  menuLoadingStatus: 'idle',
  stocksLoadingStatus: 'idle',
  noveltyLoadingStatus: 'idle',
}

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "MENU_FETCHING":
      return {
        ...state,
        menuLoadingStatus: Status.LOADING
      }
    case "MENU_FETCHED":
      return {
        ...state,
        menu: action.payload ? [...state.menu, ...action.payload]: [...state.menu],
        menuLoadingStatus: Status.OK
      }
    case "MENU_FETCHING_ERROR":
      return {
        ...state,
        menuLoadingStatus: Status.ERROR
      }
    case "NOVELTY_FETCHING":
      return {
        ...state,
        noveltyLoadingStatus: Status.LOADING
      }
    case "NOVELTY_FETCHED":
      return {
        ...state,
        novelty: action.payload,
        noveltyLoadingStatus: Status.OK
      }
    case "NOVELTY_FETCHING_ERROR":
      return {
        ...state,
        noveltyLoadingStatus: Status.ERROR
      }
    case "STOCKS_FETCHING":
      return {
        ...state,
        stocksLoadingStatus: Status.LOADING
      }
    case "STOCKS_FETCHED":
      return {
        ...state,
        stocks: action.payload,
        stocksLoadingStatus: Status.OK
      }
    case "STOCKS_FETCHING_ERROR":
      return {
        ...state,
        stocksLoadingStatus: Status.ERROR
      }
    default: return state
  }
}

export default reducer;