import { Navigate, useLocation } from "react-router-dom";
import { Person } from "../types/person";
import { RandomPerson } from "../types/randomPerson";
import { getCity, getState, getEmail, getGender, getName, getPhone, getPicture, getStreet, getThumbnail, getAddress } from "../utils/personFieldHelpers";
import { Button } from "react-bootstrap";
import { useRef, useState } from "react";

export default function Profile() {
  const location = useLocation();
  const personFromState = location.state?.person;
  const nameInput = useRef<HTMLInputElement>(null);
  const [personName, setPersonName] = useState(personFromState ? getName(personFromState) : "");

  // If no person data was provided in state, redirect to home
  if (!personFromState) {
    return <Navigate to="/" />;
  }

  const person = personFromState as Person | RandomPerson;
  function savePerson() {
    // Implement save logic here
    console.log("Save person:", person);
    const personToSave = {
      name: getName(person),
      thumbnail_image: getThumbnail(person),
      large_image: getPicture(person),
      address: getAddress(person),
      gender: getGender(person),
      email: getEmail(person),
      phone: getPhone(person),
    };

    fetch(`${process.env.SERVER_URL}person`, {
      method: "POST",
      body: JSON.stringify(personToSave),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        window.history.back();
      }
    });
  }

  function deletePerson() {
    fetch(`${process.env.SERVER_URL}person/${person.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        window.history.back();
      }
    });
  }

  function updatePerson() {
    const personToUpdate = {
      name: nameInput.current?.value || personName,
      thumbnail_image: getThumbnail(person),
      address: getAddress(person),
    };

    fetch(`${process.env.SERVER_URL}person/${person.id}`, {
      method: "PUT",
      body: JSON.stringify(personToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        window.history.back();
      }
    });
  }
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
            <img src={getPicture(person)} alt={`${getName(person)}`} className="img-fluid rounded" style={{ maxWidth: "250px" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* <h2 className="card-title">{getName(person)}</h2> */}
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <strong>Gender:</strong> {getGender(person)}
                </li>
                <li className="list-group-item">
                  <strong>Name:</strong>
                  <input ref={nameInput} value={personName} onChange={(e) => setPersonName(e.target.value)} className="form-control mt-1" />
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong>
                  <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item">
                      <strong>Street:</strong>
                      {getStreet(person)}
                    </li>
                    <li className="list-group-item">
                      <strong>City:</strong>
                      {getCity(person)}
                    </li>
                    <li className="list-group-item">
                      <strong>State:</strong>
                      {getState(person)}
                    </li>
                  </ul>
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {getPhone(person)}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {getEmail(person)}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Button variant="secondary" className="mt-3" onClick={() => window.history.back()}>
            Back to List
          </Button>
          <Button variant="primary" className="mt-3 ms-2" onClick={savePerson}>
            Save
          </Button>
          <Button variant="error" className="mt-3 ms-2" onClick={deletePerson}>
            Delete
          </Button>
          <Button variant="primary" className="mt-3 ms-2" onClick={updatePerson}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
