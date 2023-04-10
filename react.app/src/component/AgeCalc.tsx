import React, { FormEvent } from "react";
import { useState } from "react";

function AgeCalc() {
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");

  function ageCalc(event: FormEvent) {
    event.preventDefault();
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    setAge(age);
  }

  return (
    <>
      <form onSubmit={ageCalc}>
        <div className="form-group">
          <label htmlFor="dob">Date Of Birth : </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            placeholder="Enter Your DOB"
            name="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h4>You are {age} years old</h4>
    </>
  );
}

export default AgeCalc;
