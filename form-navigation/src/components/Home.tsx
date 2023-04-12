import React, { MouseEvent } from "react";
import Button from "./Button";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked from home ");
  };
  const handleClickWarning = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Warning Button clicked from home ", e.target);
  };
  return (
    <>
      {/* Welcome to my website
      <Button handleClick={handleClick} color="primary">
        This is test button
      </Button>
      <Button handleClick={handleClickWarning} color="warning">
        This is warning button
      </Button> */}
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Description</label>
          <textarea className="form-control" placeholder="Enter Description" />
        </div>
        <div className="form-group form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <br />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleClick}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
