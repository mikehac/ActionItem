export interface Person {
  id: number;
  name: string;
  thumbnail_image: string;
  large_image: string;
  gender: "male" | "female";
  country: string;
  phone: string;
  email: string;
  age?: number;
  address?: {
    street?: string;
    number?: string;
    city?: string;
    state?: string;
  };
}
