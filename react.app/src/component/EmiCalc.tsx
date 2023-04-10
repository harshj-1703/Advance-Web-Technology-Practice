import React, { FormEvent } from "react";
import { useState } from "react";

function EmiCalc() {
  const [p, setP] = useState(0);
  const [r, setR] = useState(0);
  const [n, setN] = useState(0);
  const [i, setI] = useState(0);

  function calcI(event: FormEvent) {
    event.preventDefault();
    setI((p * r * n) / 100);
  }

  return (
    <>
      <form action="" onSubmit={calcI}>
        <div>
          <h1 className="form-group">EmiCalc</h1>
        </div>
        <div className="form-group">
          <label htmlFor="P : "></label>
          <input
            type="number"
            name="P"
            id=""
            onChange={(e) => {
              setP(parseInt(e.target.value));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="R : "></label>
          <input
            type="number"
            name="R"
            id=""
            onChange={(e) => {
              setR(parseInt(e.target.value));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="N : "></label>
          <input
            type="number"
            name="N"
            id=""
            onChange={(e) => {
              setN(parseInt(e.target.value));
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <div> I = {i}</div>
    </>
  );
}

export default EmiCalc;
