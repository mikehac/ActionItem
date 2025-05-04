import { Person } from "../types/person";
import { RandomPerson } from "../types/randomPerson";

export function normalizePerson(input: Person | RandomPerson): Person {
  if ("id" in input) return input;

  return {
    id: Math.random(), // Replace with reliable ID if needed
    name: `${input.name.title} ${input.name.first} ${input.name.last}`,
    thumbnail_image: input.picture.thumbnail,
    large_image: input.picture.large,
    gender: input.gender,
    country: input.location.country,
    phone: input.phone,
    email: input.email,
  };
}
