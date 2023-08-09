export interface IItem {
    id: ID,
    brand: string,
    description: string,
    imageFirst: string,
    imageSecond: string,
    imageThird: string,
    stock: number,
    type: string,
    rating: number,
    price: number,
    sex: string,
}
  
type ID = string | number;
  
export interface ICard {
    card: IItem
}

export interface IImages {
    brand: string,
    imageFirst?: string
    imageSecond?: string,
    imageThird?: string,
}

export interface IInfo {
    stock?: number,
    type?: string,
    description?: string,
    rating?: number,
    price?: number,
    value?: string
}