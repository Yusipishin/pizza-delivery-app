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

export interface PizzaWeightTraditional extends PizzaWeightThin {
  small: number;
}
export interface PizzaWeightThin {
  average: number;
  big: number;
}

export type PizzaSize = PizzaWeightThin | PizzaWeightTraditional

export interface PizzaDough {
  traditional: {
    small: number;
    average: number;
    big: number;
  };
  thin: {
    average: number;
    big: number;
  };
}

export interface HocBaseProps {
  checkLoading: () => JSX.Element | JSX.Element[] | undefined;
  list: (Action | Stock | Novelty)[];
  loadingStatus?: string;
}