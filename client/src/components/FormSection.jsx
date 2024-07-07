import React, { useState } from "react";
import "../styles/FormSection.css"; // Import CSS for styling

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    interest: "",
    whatsapp: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <h2>Meet the Designer</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <div className="mobile-input">
        <input type="text" value="+91" readOnly />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="" disabled>
          Choose City
        </option>
        <option value="City1">City1</option>
        <option value="City2">City2</option>
        {/* Add more cities */}
      </select>
      <select name="interest" value={formData.interest} onChange={handleChange}>
        <option value="" disabled>
          I'm Interested in Interiors For
        </option>
        <option value="Living Room">Living Room</option>
        <option value="Bedroom">Bedroom</option>
        {/* Add more interests */}
      </select>
      <label>
        <input
          type="checkbox"
          name="whatsapp"
          checked={formData.whatsapp}
          onChange={handleChange}
        />
        You can reach me on WhatsApp
      </label>
      <button type="submit">Talk To Our Designer</button>
      <p>
        By submitting this form, you agree to the{" "}
        <a href="/privacy">privacy policy</a> and{" "}
        <a href="/terms">terms of use</a>.
      </p>
    </form>
  );
};

export default FormSection;
