import React, { useEffect } from "react";
// import Form from "./Form";
import "../styles/SubmitForm.css";

const SubmitForm = () => {
  // useEffect(() => {
  //   const ele = document.getElementById("form");
  //   ele.classList.toggle("hide");
  // }, []);

  function handleSubmit() {}

  return (
    <div className="formcontainer">
      <div className="container">
        <div className="text">Contact us Form</div>
        <form onSubmit={handleSubmit} action="#">
          <div className="form-row">
            <div className=" r-inp input-data">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor>First Name</label>
            </div>
            <div className=" r-inp input-data">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor>Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className=" r-inp input-data">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor>Email Address</label>
            </div>
            <div className=" r-inp input-data">
              <input type="tel" required />
              <div className="underline" />
              <label htmlFor>Mobile no.</label>
            </div>
          </div>
          <div className="form-row">
            <div className=" r-inp input-data textarea">
              <textarea rows={8} cols={80} required defaultValue={""} />
              <br />
              <div className="underline" />
              <label htmlFor>Write your message</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner" />
                  <input type="submit" defaultValue="submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
