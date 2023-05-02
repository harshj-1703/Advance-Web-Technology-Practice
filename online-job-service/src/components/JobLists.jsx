import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { jobServices } from "../services/job.services";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function JobLists() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const data = await jobServices.getAllJobs();
    // console.log(data.docs);
    var newdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(newdata);
    setJobs(newdata);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner animation="border" role="status" />;
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Picture</th>
            <th>Job Name</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Daily Hours</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.id}>
              <td>{index + 1}</td>
              <td>
                <img src={job.imageurl} height={100} width={100} />
              </td>
              <td>{job.name}</td>
              <td>{job.salary}</td>
              <td>{job.experience}</td>
              <td>{job.dailyhours}</td>
              <td>{job.place}</td>
              <td>{job.contact}</td>
              <td>
                <ApplyJob id={job.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function ApplyJob({ id }) {
  const navigate = useNavigate();
  const handleApply = () => {
    navigate("/jobdetails", { state: id });
  };
  return (
    <button className="btn btn-primary" onClick={handleApply}>
      Apply
    </button>
  );
}

export default JobLists;
