import React, { FormEvent, useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { name: "HJ", email: "hj@hj.com", phone: "8128203856" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isEditing) {
      const newData = [...data];
      newData[editIndex] = { name, email, phone };
      setData(newData);
      setEditIndex(-1);
      setEditing(false);
    } else {
      setData([...data, { name, email, phone }]);
    }

    setName("");
    setEmail("");
    setPhone("");
  }
  function handleEdit(index: number) {
    console.log("from edit ", index);
    setName(data[index].name);
    setEmail(data[index].email);
    setPhone(data[index].phone);
    setEditIndex(index);
    setEditing(true);
  }
  function handleDelete(index: number) {
    console.log("from delete", index);
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  return (
    <div>
      <div>
        <form className="m-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name :</label>
            <input
              type="text"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label className="form-label mb-2">Email :</label>
            <input
              type="email"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label className="form-label mb-2">Phone :</label>
            <input
              type="number"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="XXXXXXXXXX"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.email}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mb-3"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-danger mb-3"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
