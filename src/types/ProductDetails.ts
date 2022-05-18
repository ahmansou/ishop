export interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: ProductRating;
}