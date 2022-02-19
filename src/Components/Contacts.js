import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
const Contacts = () => {
  const { handleSubmit } = useForm();
  const [status, setStatus] = useState("");
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_Mb10c5axppKu1ZGpPZPfU";
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);
  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
    setStatus("SUCCESS");
  };
  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        console.log("Successful send the message");
      })
      .catch((err) => console.error("Error"));
  };
  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>Please fill out the form to contact me</p>
        {status && renderAlert()}
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/**Name input */}
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
              <div className="line"></div>
              {/**Phone number input */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phone"
              />
              <div className="line"></div>
              {/**Email address input */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="phone"
              />
              <div className="line"></div>
              {/**Subject input */}
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Please describe shortly about yourself"
                name="description"
              ></textarea>
              <div className="line"></div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
const renderAlert = () => (
  <div>
    <p className="text-success">Your message submitted successfully</p>
  </div>
);

export default Contacts;
