import { useEffect } from "react";
import { useApp } from "../AppContext";
import Filter from "./filter";
import PersonList from "./PersonList";

export default function Fetch() {
  const appContext = useApp();

  useEffect(() => {
    if (appContext.persons.length === 0 || appContext.fetchType !== "randomPersons") {
      appContext.fetchPersons("randomPersons").catch((error) => {
        console.error("Error fetching persons:", error);
      });
    }
  }, [appContext.persons.length, appContext.fetchPersons]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Random Persons</h2>
      </div>
      <Filter />
      {appContext.persons && <PersonList persons={appContext.persons} />}
    </>
  );
}
