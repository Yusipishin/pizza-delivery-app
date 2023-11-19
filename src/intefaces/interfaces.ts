export interface ActionType {
  type: string,
  payload?: PizzaInfo[] | NoveltyInfo[] | StockInfo[]
}

export interface MainState extends ApiResponse {
  menuLoadingStatus: string,
  stocksLoadingStatus: string,
  noveltyLoadingStatus: string,
}

export interface ApiResponse {
  novelty: NoveltyInfo[],
  menu: PizzaInfo[],
  stocks: StockInfo[],
}

interface BaseInfo {
  name: string,
  img: { 
    url: string
  },
}

export interface PizzaInfo extends BaseInfo {
  description: string,
  sale: number,
};

export interface StockInfo extends BaseInfo {}

export interface NoveltyInfo extends BaseInfo {sale: number}