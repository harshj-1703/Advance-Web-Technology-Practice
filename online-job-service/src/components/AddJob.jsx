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
    event.target.reset();
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
    }, 4000);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImageUpload(null);
      return;
    }

    // Check if file type is jpeg, jpg or png
    const fileType = file.type;
    if (
      fileType !== "image/jpeg" &&
      fileType !== "image/jpg" &&
      fileType !== "image/png"
    ) {
      alert("Please upload a jpeg, jpg, or png file.");
      setImageUpload(null);
      event.target.value = null;
      return;
    }

    setImageUpload(file);
  };

  return (
    <div>
      {showSuccessMessage && <div>Job added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onClick={(event) => {
            event.target.value = null;
            setImageUpload(null);
          }}
          onChange={handleFileChange}
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
