export const menuFetching = () => {
  return {
    type: "MENU_FETCHING"
  }
}

export const menuFetched = (pizza) => {
  return {
    type: "MENU_FETCHED",
    payload: pizza
  }
}

export const menuFetchingError = () => {
  return {
    type: "MENU_FETCHING_ERROR"
  }
}

export const noveltyFetching = () => {
  return {
    type: "NOVELTY_FETCHING"
  }
}

export const noveltyFetched = (novelty) => {
  return {
    type: "NOVELTY_FETCHED",
    payload: novelty
  }
}

export const noveltyFetchingError = () => {
  return {
    type: "NOVELTY_FETCHING_ERROR"
  }
}

export const stocksFetching = () => {
  return {
    type: "STOCKS_FETCHING"
  }
}

export const stocksFetched = (stocks) => {
  return {
    type: "STOCKS_FETCHED",
    payload: stocks
  }
}

export const stocksFetchingError = () => {
  return {
    type: "STOCKS_FETCHING_ERROR"
  }
}
