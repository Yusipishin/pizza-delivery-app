// export interface ActionType {
//   type: string,
//   payload?: ApiResponse[]
// }

// export interface MainState {
//   menu: ApiResponse[],
//   menuLoadingStatus: string,
// }

export interface Stock {
  id: string;
  name: string;
  img: {
    url: string;
  };
}

export interface Novelty extends Stock {
  sale: number;
}

export interface Action extends Stock {
  description: string;
}

export interface Pizza extends Stock {
  sale: {
    small: number;
    average: number;
    big: number;
  };
  composition: {
    basic: string[];
    optional: string[];
  };
  weight: {
    traditional: {
      small: number;
      average: number;
      big: number;
    };
    thin: {
      average: number;
      big: number;
    };
  };
}
