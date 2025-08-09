export interface IProduct {
  _id: string;
  title: string;
  subTitle?: string;
  description: string;
  price: {
    retail: number,
    display: number, 
  };
  images: string[]; // Assuming array of image URLs
  coverImage: string;
  category?: string;
  subCategory?: string;
  brandName: string;
  variants: {
    dialColor: string;
    strapColor: string;
    stock: number;
  }[]
  strapType?: "CHAIN" | "BELT";
  gender?: "MALE" | "FEMALE" | "KIDS" | "UNISEX";
  sizes: Array<"XS" | "S" | "M" | "L" | "XL" | "XXL">;
  stock: number;
  sales: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  color?: string;
  variantIndex?: number; // Index of the selected variant
  size?: "XS" | "S" | "M" | "L" | "XL" | "XXL";
}  