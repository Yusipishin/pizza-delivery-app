export interface ActionType {
  type: string,
  payload?: ApiResponse[]
}

export interface MainState {
  menu: ApiResponse[],
  stocks: ApiResponse[],
  novelty: ApiResponse[],
  menuLoadingStatus: string,
  stocksLoadingStatus: string,
  noveltyLoadingStatus: string,
}

export interface ApiResponse {
  name: string,
  img: { 
    url: string
  },
  description?: string,
  sale?: number,
}