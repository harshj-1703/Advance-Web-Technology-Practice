import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { jobServices } from "../services/job.services";
import { Spinner } from "react-bootstrap";

function JobDetails() {
  const location = useLocation();
  const jobId = location.state;
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    const docSnapshot = await jobServices.getJobById(jobId);
    const jobData = docSnapshot.data();
    // console.log(jobData);
    setJob(jobData);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Spinner animation="border" role="status" />;
  } else {
    return (
      <>
        <div>{job.name}</div>
        <div>
          <img src={job.imageurl} height={100} width={100} />
        </div>
        <div>{job.salary}</div>
        <div>{job.experience}</div>
        <div>{job.dailyhours}</div>
        <div>{job.place}</div>
        <div>{job.contact}</div>
      </>
    );
  }
}

export default JobDetails;