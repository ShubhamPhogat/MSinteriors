import React, { useEffect, useRef } from "react";
// import Form from "./Form";
import "../styles/SubmitForm.css";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SubmitForm = () => {
  // useEffect(() => {
  //   const ele = document.getElementById("form");
  //   ele.classList.toggle("hide");
  // }, []);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const messageRef = useRef();
  const location = useLocation();
  let {
    sizeA,
    sizeB,
    sizeC,
    shape,
    modularKitchen,
    wardrobe,
    entertainmentUnit,
    looseFurniture,
    falseCeiling,
    painting,
    selectedPropertyType,
    selectedPurpose,
  } = location.state || {};
  console.log(sizeA, "this is size");
  let aSize = null,
    bSize = null,
    cSize = null;
  let KitchenShape = null,
    modular_kitchen = null,
    wardrobe_count = null,
    entertainmentUnit_count = null,
    looseFurniture_count = null,
    falseCeiling_count = null,
    painting_count = null,
    selectedPropertyType_count = null,
    selectedPurpose_count = null;
  if (sizeA) aSize = sizeA;
  if (sizeB) bSize = sizeB;
  if (sizeC) cSize = sizeC;
  if (shape) KitchenShape = shape;
  if (modularKitchen) modular_kitchen = modularKitchen;
  if (wardrobe) wardrobe_count = wardrobe;
  if (looseFurniture) looseFurniture_count = looseFurniture;
  if (falseCeiling) falseCeiling_count = falseCeiling;
  if (painting) painting_count = painting;
  if (selectedPropertyType) selectedPropertyType_count = selectedPropertyType;
  if (selectedPurpose) selectedPurpose_count = selectedPurpose;
  if (entertainmentUnit) entertainmentUnit_count = entertainmentUnit;
  if (KitchenShape) KitchenShape = shape;

  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // const templateParams = {
    //   from_name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
    //   email_id: emailRef.current.value,
    //   mobile_no: mobileRef.current.value,
    //   message: messageRef.current.value,
    //   to_name: "Sumit",
    //   ...(aSize !== null && {
    //     aSize: `${aSize.inches} inches or ${aSize.feet} feets`,
    //   }),
    //   ...(bSize !== null && {
    //     bSize: `${bSize.inches} inches or ${bSize.feet} feets`,
    //   }),
    //   ...(cSize !== null && {
    //     cSize: `${cSize.inches} inches or ${cSize.feet} feets`,
    //   }),
    //   ...(modular_kitchen !== null && { modular_kitchen: modular_kitchen }),
    //   ...(wardrobe_count !== null && { wardrobe_count: wardrobe_count }),
    //   ...(entertainmentUnit_count !== null && {
    //     entertainmentUnit_count: entertainmentUnit_count,
    //   }),
    //   ...(selectedPropertyType_count !== null && {
    //     selectedPropertyType_count: selectedPropertyType_count,
    //   }),
    //   ...(falseCeiling_count !== null && {
    //     falseCeiling_count: falseCeiling_count,
    //   }),
    //   ...(painting_count !== null && { painting_count: painting_count }),
    //   ...(selectedPurpose_count !== null && {
    //     selectedPurpose_count: selectedPurpose_count,
    //   }),
    //   ...(looseFurniture_count !== null && {
    //     looseFurniture_count: looseFurniture_count,
    //   }),
    //   ...(KitchenShape !== null && { KitchenShape: KitchenShape }),
    // };
    // console.log("submited", formData);
    console.log("current ", form.current);

    emailjs
      .sendForm("service_zqvkrzk", "template_g9t5osi", form.current, {
        publicKey: "uf_U4tAw5p65GZVhQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="formcontainer">
      <div className="container">
        <div className="text">Contact us Form</div>
        <form onSubmit={sendEmail} ref={form} action="#">
          <div className="form-row">
            <div className=" r-inp input-data">
              <input type="text" name="from_name" required ref={firstNameRef} />
              <div className="underline" />
              <label htmlFor>First Name</label>
            </div>
            <div className=" r-inp input-data">
              <input type="text" name="last_name" required ref={lastNameRef} />
              <div className="underline" />
              <label htmlFor>Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className=" r-inp input-data">
              <input type="text" name="email_id" required ref={emailRef} />
              <div className="underline" />
              <label htmlFor>Email Address</label>
            </div>
            <div className=" r-inp input-data">
              <input type="tel" name="mobile_no" required ref={mobileRef} />
              <div className="underline" />
              <label htmlFor>Mobile no.</label>
            </div>
          </div>
          <div className="form-row">
            <div className=" r-inp input-data textarea">
              <textarea
                name="message"
                ref={messageRef}
                rows={8}
                cols={80}
                required
                defaultValue={""}
              />
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
          <div className="vanish">
            <input
              className="vanishEle"
              type="text"
              value={painting_count}
              name="painting_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={wardrobe_count}
              name="wardrobe_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={looseFurniture_count}
              name="looseFurniture_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={entertainmentUnit_count}
              name="entertainmentUnit_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={modular_kitchen}
              name="modular_kitchen"
            />
            <input
              className="vanishEle"
              type="text"
              value={selectedPropertyType_count}
              name="selectedPropertyType_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={selectedPurpose_count}
              name="selectedPurpose_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={selectedPropertyType_count}
              name="selectedPropertyType_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={aSize && aSize.feet}
              name="selectedPropertyType_count"
            />
            <input
              className="vanishEle"
              type="text"
              value={aSize && aSize.inches}
              name="aSize.inches"
            />
            <input
              className="vanishEle"
              type="text"
              value={bSize && bSize.feet}
              name="bSize.feet"
            />
            <input
              className="vanishEle"
              type="text"
              value={bSize && bSize.inches}
              name="bSize.inches"
            />
            <input
              className="vanishEle"
              type="text"
              value={cSize && cSize.feet}
              name="cSize.feet"
            />
            <input
              className="vanishEle"
              type="text"
              value={cSize && cSize.inches}
              name="cSize.inches"
            />
            <input
              className="vanishEle"
              type="text"
              value="sumit"
              name="to_name"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
