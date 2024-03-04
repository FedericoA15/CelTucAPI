import IBase from "../base/model/model";

interface User extends IBase {
  email: string;
  phone: string;
  avatar: string;
  password: string;
  dateOfBirth: Date | string;
  verified: boolean;
  name: { firstName: string; lastName: string };
}

interface Ticket extends IBase {
  user: User;
  slug: string;
  type: string;
  date: string;
  title: string;
  status: string;
  category: string;
  conversation: null | Message[];
}

interface Shop extends IBase {
  slug: string;
  user: any;
  email: string;
  name: string;
  phone: string;
  address: string;
  rating?: number;
  verified: boolean;
  products?: any | Product[];
  coverPicture: string;
  profilePicture: string;
  socialLinks: {
    facebook?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface Service extends IBase {
  icon: string;
  title: string;
  description?: string;
}

interface Review extends IBase {
  rating: number;
  customer: User;
  comment: string;
  product: Product;
  published?: boolean;
}

interface Product extends IBase {
  unit?: any;
  slug: string;
  price: number;
  title: string;
  rating: number;
  discount: number;
  thumbnail: string;
  shop?: Shop;
  brand?: string;
  size?: string[];
  status?: string;
  colors?: string[];
  images?: string[];
  categories: any[];
  reviews?: Review[];
  published?: boolean;
}

interface Order extends IBase {
  user: User;
  tax: number;
  items: Item[];
  createdAt: Date;
  discount: number;
  deliveredAt: Date;
  totalPrice: number;
  isDelivered: boolean;
  shippingAddress: string;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}

interface MainCarouselItem extends IBase {
  title?: string;
  imgUrl?: string;
  category?: string;
  discount?: number;
  buttonLink?: string;
  buttonText?: string;
  description?: string;
}

interface CategoryBasedProducts extends IBase {
  products: Product[];
  category: { title: string; children: string[] };
}

interface Category extends IBase {
  name: string;
  slug: string;
  icon?: string;
  image?: string;
  parent: string[];
  featured?: boolean;
  description?: string;
}

interface FurnitureCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  description: string;
}

interface GiftCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
}

interface OfferCard extends IBase {
  title: string;
  imgUrl: string;
  buttonText: string;
  discountOffer: string;
}

interface Banner extends IBase {
  title: string;
  thumbnail: string;
  buttonText?: string;
  description?: string;
}

interface CategoryNavList extends IBase {
  category: string;
  categoryItem: CategoryItem[];
}

interface Category extends IBase {
  name: string;
  slug: string;
  icon?: string;
  image?: string;
  parent: string[];
  featured?: boolean;
  description?: string;
}

interface FurnitureCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  description: string;
}

interface GiftCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
}

interface HealthCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  buttonText: string;
  buttonLink: string;
}

interface GroceryTwoCarouselItem extends IBase {
  title: string;
  imgUrl: string;
  description: string;
  appStoreLink: string;
  playStoreLink: string;
}

interface Brand extends IBase {
  name: string;
  slug: string;
  type: string;
  image: string;
  featured?: boolean;
}

interface Blog extends IBase {
  slug: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  comments?: number;
  description?: string;
}

interface Address extends IBase {
  user: User;
  city: string;
  title: string;
  phone: string;
  street: string;
  country: string;
}
