import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { jobServices } from "../services/job.services";

function JobLists() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const data = await jobServices.getAllJobs();
    console.log(data.docs);
    var newdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(newdata);
    setJobs(newdata);
  };

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
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.id}>
              <td>{index + 1}</td>
              <th>
                <img src={job.imageurl} height={100} width={100} />
              </th>
              <td>{job.name}</td>
              <td>{job.salary}</td>
              <td>{job.experience}</td>
              <td>{job.dailyhours}</td>
              <td>{job.place}</td>
              <td>{job.contact}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default JobLists;
