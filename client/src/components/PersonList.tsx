import { Person } from "../types/person";
import { RandomPerson } from "../types/randomPerson";
import { getName, getThumbnail, getGender, getCountry, getPhone, getEmail } from "../utils/personFieldHelpers";

type Props = {
  persons: Person[] | RandomPerson[];
};

export default function PersonList({ persons }: Props) {
  return (
    <div className="container">
      <div className="row fw-bold bg-light py-2">
        <div className="col-1 text-center">Picture</div>
        <div className="col-2 text-center">Name</div>
        <div className="col-1 text-center">Gender</div>
        <div className="col-2 text-center">Country</div>
        <div className="col-2 text-center">Phone Number</div>
        <div className="col-4 text-center">Email</div>
      </div>
      {persons.map((person, index) => (
        <div className="row py-2 border-bottom" key={"id" in person ? person.id : index} onClick={() => console.log(person)}>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <img
              src={getThumbnail(person)}
              alt={`${getName(person)}'s thumbnail`}
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">{getName(person)}</div>
          <div className="col-1 d-flex justify-content-center align-items-center">{getGender(person)}</div>
          <div className="col-2 d-flex justify-content-center align-items-center">{getCountry(person)}</div>
          <div className="col-2 d-flex justify-content-center align-items-center">{getPhone(person)}</div>
          <div className="col-4 d-flex justify-content-center align-items-center">{getEmail(person)}</div>
        </div>
      ))}
    </div>
  );
}
