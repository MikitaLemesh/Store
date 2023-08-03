export interface Item {
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
    card: Item
}