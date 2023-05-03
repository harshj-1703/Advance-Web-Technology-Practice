import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { jobServices } from "../services/job.services";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../joblist.css";

function JobLists() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 1;

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

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const displayJobs = filteredJobs
    .slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
    .map((job, index) => (
      <tr key={job.id}>
        <td>{currentPage * ITEMS_PER_PAGE + index + 1}</td>
        <td>
          <img src={job.imageurl} height={100} width={100} />
        </td>
        <td>{job.name}</td>
        <td>{job.salary}</td>
        <td>{job.experience}</td>
        <td>{job.dailyhours}</td>
        <td>{job.place}</td>
        <td>{job.contact}</td>
        <td>{job.mobile}</td>
        <td>
          <ApplyJob id={job.id} />
        </td>
      </tr>
    ));

  if (isLoading) {
    return <Spinner animation="border" role="status" />;
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
            <th>Email Contact</th>
            <th>Mobile Contact</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          {displayJobs.length > 0 ? (
            displayJobs
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                Not Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        activeClassName="active"
        disabledClassName="disabled"
      />
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
