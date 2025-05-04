import { Person } from "../types/person";
import { RandomPerson } from "../types/randomPerson";

export function getName(person: Person | RandomPerson): string {
  if ("name" in person && typeof person.name === "string") return person.name;
  if ("name" in person && typeof person.name === "object") {
    return `${person.name.title} ${person.name.first} ${person.name.last}`;
  }
  return "Unknown";
}

export function getThumbnail(person: Person | RandomPerson): string {
  if ("thumbnail_image" in person) return person.thumbnail_image;
  if ("picture" in person) return person.picture.thumbnail;
  return "";
}

export function getGender(person: Person | RandomPerson): string {
  return person.gender || "N/A";
}

export function getCountry(person: Person | RandomPerson): string {
  if ("country" in person) return person.country;
  if ("location" in person) return person.location.country;
  return "N/A";
}

export function getPhone(person: Person | RandomPerson): string {
  return person.phone || "N/A";
}

export function getEmail(person: Person | RandomPerson): string {
  return person.email || "N/A";
}
