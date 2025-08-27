import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted", form);
    navigate("/account");
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <input name="name" placeholder="Full Name *" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number *" onChange={handleChange} />
      <input name="email" placeholder="Email Address *" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password *"
        onChange={handleChange}
      />
      <input name="company" placeholder="Company Name" onChange={handleChange} />

      <label>Are you an Agency?</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button className="btn-primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
