export interface ActionPizza {
    id: number,
    img: string,
    name: string,
    width: number,
    weight: number,
    sale: number,
    dough: string,
    composition: string,
}

export interface Promo {
  id: number;
  name: string;
  description: string;
  img: {
      url: string;
  };
}

export interface Pizza {
  id: number;
  name: string;
  sale: Sale;
  img: {
      url: string;
  };
  composition: Composition;
  weight: Weight;
}

export interface Sale {
    small: number;
    average: number;
    big: number;
}

export interface Composition {
    basic: string[];
    optional: string[];
}

export const enum Dough {
  TRADITIONAL = "traditional",
  THIN = 'thin'
}

export const enum Size {
  SMALL = 'small',
  AVERAGE = 'average',
  BIG = 'big'
}

export interface Weight {
  traditional: WeightTraditional,
  thin: WeightThin;
}

export interface WeightThin {
    average: number;
    big: number;
}

export interface WeightTraditional {
    average: number;
    big: number;
    small: number;
}

export const enum LoadingStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    ERROR = 'error',
}