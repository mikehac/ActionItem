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

export function getPicture(person: Person | RandomPerson): string {
  if ("large_image" in person) return person.large_image as string;
  if ("picture" in person) return person.picture.large;
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

export function getAddress(person: Person | RandomPerson): string {
  if ("address" in person) return typeof person.address === "string" ? person.address : "N/A";
  if ("location" in person) {
    const { street, city, state } = person.location;
    return `${street.number} ${street.name}, ${city}, ${state}`;
  }
  return "N/A";
}

export function getStreet(person: Person | RandomPerson): string {
  if ("address" in person) return `${person.address?.number} ${person.address?.street}` || "N/A";
  if ("location" in person) {
    const { street } = person.location;
    return `${street.number} ${street.name}`;
  }
  return "N/A";
}

export function getCity(person: Person | RandomPerson): string {
  if ("address" in person) return person.address?.city || "N/A";
  if ("location" in person) return person.location.city || "N/A";
  return "N/A";
}

export function getState(person: Person | RandomPerson): string {
  if ("address" in person) return person.address?.state || "N/A";
  if ("location" in person) return person.location.state || "N/A";
  return "N/A";
}
export function getPhone(person: Person | RandomPerson): string {
  return person.phone || "N/A";
}

export function getEmail(person: Person | RandomPerson): string {
  return person.email || "N/A";
}
