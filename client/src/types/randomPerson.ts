export interface RandomPerson {
  id: id;
  name: Name;
  picture: picture;
  gender: "male" | "female";
  location: location;
  phone: string;
  email: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface location {
  country: string;
  street: street;
  city: string;
  state: string;
}

interface street {
  name: string;
  number: string;
}
interface id {
  name: string;
  value: string;
}
