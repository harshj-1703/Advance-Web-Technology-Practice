import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const Home = () => {
  const [blogs, setBlogs] = useState([{ _id: "", title: "", description: "" }]);
  // to call API Once
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/blog/");
    const jsonData = await response.json();
    console.log(jsonData);
    // console.log(jsonData.blogs)
    setBlogs(jsonData["blogs"]);
    console.log(blogs);
  };

  return (
    <div>
      {blogs && (
        <table className="table table-striped-columns">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td> {blog.description}</td>
                {/* <td> {blog._id}</td> */}
                <td>
                  <DeleteButton _id={blog._id} />
                </td>
                <td>
                  <UpdateButton _id={blog._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
