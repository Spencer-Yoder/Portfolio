import React, { useState } from "react";
import SmoothScroll from "smooth-scroll";

import SectionTitle from "../Titles/sectionTitle";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage
} from "../../utils/sweetAlert";

import ContactForm from "./contactForm";
import "./styles.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async ev => {
    ev.preventDefault();

    // simple validation
    for (let value of Object.values(data)) {
      if (value === "") {
        showWarningMessage({ text: "Please enter all data" });
        return;
      }
    }
    setLoading(true);

    // send data to formspree
    try {
      const response = await fetch("https://formspree.io/f/xpzobooa", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      setLoading(false);
      // all ok reset state, not 'ok' show error alert
      if (json.ok) {
        showSuccessMessage({ title: "Message sent! I will respond soon." });
        setData({
          name: "",
          email: "",
          message: ""
        });
      } else
        showErrorMessage({
          title: "",
          text:
            "An error has occurred, please enter the data info and try again"
        });
    } catch (error) {
      setLoading(false);
      console.log("error sending email", error);
      showErrorMessage({
        title: "",
        text: "An error has occurred, please enter the info and try again"
      });
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value
    });
  };

  const handleScroll = () => {
    const scroll = new SmoothScroll(),
      elmt = document.getElementById("hero-container");
    scroll.animateScroll(elmt);
  };

  return (
    <div id="contact">
      <SectionTitle title="Let's Chat" color="#ebeeee" />
      <div className="contact-form-container">
        <ContactForm
          {...{
            handleSubmit,
            handleChange,
            data,
            loading
          }}
        />
      </div>

      <button
        onClick={handleScroll}
        style={{ position: "absolute", bottom: 55, zIndex: 100 }}
        className="up-button"
      >
        ▲
      </button>
    </div>
  );
};

export default Contact;
