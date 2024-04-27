export interface NavLinks {
  title: string;
  active: string;
  link: string;
}

export interface ProductTypes {
  dispay_image: string;
  images: string[] | string;
  name: string;
  price: {
    discounted_price: number;
    price: number;
  };
  description: string;
  stock: number;
  category: string;
  id: number;
  isSale?: boolean;
}
