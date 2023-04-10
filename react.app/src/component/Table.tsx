import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([
    { name: "Harsh", email: "harsh@gmail.com", phone: "1111111111" },
  ]);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.email}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
