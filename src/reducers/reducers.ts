const initialState = {
  menu: [],
  stocks: [],
  novelty: [],
  menuLoadingStatus: 'idle',
  stocksLoadingStatus: 'idle',
  noveltyLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_FETCHING":
      return {
        ...state,
        menuLoadingStatus: 'loading'
      }
    case "MENU_FETCHED":
      return {
        ...state,
        menu: [...state.menu, ...action.payload],
        menuLoadingStatus: 'idle'
      }
    case "MENU_FETCHING_ERROR":
      return {
        ...state,
        menuLoadingStatus: 'error'
      }
    case "NOVELTY_FETCHING":
      return {
        ...state,
        noveltyLoadingStatus: 'loading'
      }
    case "NOVELTY_FETCHED":
      return {
        ...state,
        novelty: action.payload,
        noveltyLoadingStatus: 'idle'
      }
    case "NOVELTY_FETCHING_ERROR":
      return {
        ...state,
        noveltyLoadingStatus: 'error'
      }
    case "STOCKS_FETCHING":
      return {
        ...state,
        stocksLoadingStatus: 'loading'
      }
    case "STOCKS_FETCHED":
      return {
        ...state,
        stocks: action.payload,
        stocksLoadingStatus: 'idle'
      }
    case "STOCKS_FETCHING_ERROR":
      return {
        ...state,
        stocksLoadingStatus: 'error'
      }
    default: return state
  }
}

export default reducer;