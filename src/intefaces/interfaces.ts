export type ActionType = {
  type: string,
  payload?: PizzaInfo[] | NoveltyInfo[] | StockInfo[]
}

export type MainState = {
  menu: PizzaInfo[],
  stocks: StockInfo[],
  novelty: NoveltyInfo[],
  menuLoadingStatus: string,
  stocksLoadingStatus: string,
  noveltyLoadingStatus: string,
}

export type PizzaInfo = {
  name: string,
  description: string,
  sale: number,
  img: { 
    url: string
  },
};

export type StockInfo = {
  name: string,
  img: {
    url: string,
  }
}

export type NoveltyInfo = {
  name: string, 
  sale: number, 
  img: {
    url: string,
  }
}