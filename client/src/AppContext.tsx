import { createContext, useContext, useState } from "react";
import { RandomPerson } from "./types/randomPerson";
import { Person } from "./types/person";

export type AppContextType = {
  persons: Person[] | RandomPerson[];
  fetchType: "persons" | "randomPersons" | undefined;
  setPersons: (persons: Person[] | RandomPerson[]) => void;
  fetchPersons: (endPoint: "persons" | "randomPersons") => Promise<void>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [persons, setPersons] = useState<Person[] | RandomPerson[]>([]);
  const [fetchType, setFetchType] = useState<"persons" | "randomPersons">();

  const fetchPersons = async (endPoint: string) => {
    const baseUrl = `${process.env.SERVER_URL ?? "http://localhost:3000/"}`;
    const response = await fetch(`${baseUrl}${endPoint}`);
    if (!response.ok) {
      console.error("Error fetching persons");
      return;
    }
    const data = await response.json();
    setPersons(data);
    setFetchType(endPoint as "persons" | "randomPersons");
  };
  return <AppContext.Provider value={{ persons, fetchType, setPersons, fetchPersons }}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppContextProvider");
  }
  return context;
};
