import React, { ChangeEvent, FormEvent, useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const validateForm = () => {
    var isValid = true;
    const newError = { ...errorData };

    //name validation
    if (!formData.name) {
      newError.name = "Please enter your name";
      isValid = false;
    } else {
      newError.name = "";
    }

    //email
    if (!formData.email) {
      newError.email = "Please enter your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please eneter valid email";
      isValid = false;
    } else {
      newError.email = "";
    }
    //phone
    if (!formData.phone) {
      newError.phone = "Please enter your phone number";
      isValid = false;
    } else if (formData.phone.length < 10) {
      newError.phone = "Please eneter valid phone number";
      isValid = false;
    } else {
      newError.phone = "";
    }

    setErrorData(newError);
    return isValid;
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    if (validateForm()) {
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={formData.name}
            id="name"
            type="text"
            onChange={handleInput}
          />
          {errorData.name && <div className="error">{errorData.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={formData.email}
            id="email"
            type="text"
            onChange={handleInput}
          />
          {errorData.email && <div className="error">{errorData.email}</div>}
        </div>{" "}
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            id="phone"
            type="number"
            onChange={handleInput}
          />
          {errorData.phone && <div className="error">{errorData.phone}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
