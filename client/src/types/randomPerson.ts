export interface RandomPerson {
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
}
