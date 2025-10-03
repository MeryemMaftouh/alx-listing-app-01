// interfaces/index.ts
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Host {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;  
  comment: string;
  date?: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; 
  description?: string;
  images?: string[];
  host?: Host;
  reviews?: Review[];
}

export type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};
