import React, { useState } from "react";
import { jobServices } from "../services/job.services";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";
import { v4 } from "uuid";

function AddJob() {
  const [job, setJob] = useState({
    imageurl: "",
    name: "",
    salary: "",
    experience: "",
    dailyhours: "",
    place: "",
    contact: "",
    timestamp: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //image upload
  const [imageUpload, setImageUpload] = useState(null);

  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(job);
    addJob(job);
  };

  const addJob = async (job) => {
    const timestampOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
      timeZone: "Asia/Kolkata",
    };

    const imageUrl = await uploadFile();

    job.timestamp = new Date().toLocaleString("en-US", timestampOptions);
    job.imageurl = imageUrl;

    await jobServices.addJob(job);

    setJob({
      imageurl: "",
      name: "",
      salary: "",
      experience: "",
      dailyhours: "",
      place: "",
      contact: "",
      timestamp: "",
    });

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      window.location.reload();
    }, 3000);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  return (
    <div>
      {showSuccessMessage && <div>Job added successfully!</div>}
      <form onSubmit={handleSubmit}>
        {/* <label>
          Image URL:
          <input
            type="text"
            name="imageurl"
            value={job.imageurl}
            onChange={handleInputChange}
          />
        </label> */}
        <input
          type="file"
          onClick={(event) => {
            event.target.value = null;
            setImageUpload(null);
          }}
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={job.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={job.experience}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Daily Hours:
          <input
            type="text"
            name="dailyhours"
            value={job.dailyhours}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Place:
          <input
            type="text"
            name="place"
            value={job.place}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={job.contact}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddJob;
