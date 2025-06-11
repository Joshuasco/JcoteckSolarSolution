export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  specifications?: string[];
  features?: string[];
};

export type HeroSlide = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  image: string;
};

export type HeaderProps = {
  cartItemCount: number;
  onCartClick: () => void;
};

export type HeroProps = {
  slides: HeroSlide[];
};

export type ProductProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
};

export type ProductDetailsProps = {
  product: Product;
  relatedProducts: Product[];
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
};